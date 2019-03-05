import React, { Component } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';

import * as components from '../components';

import Sidebar from './components/Sidebar';
import SettingsPane from './components/SettingsPane';
import { locationType } from './types';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
`;

const View = styled.div`
  background-color: #1c1c1c;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

const ViewPane = styled.div`
  padding: 50px;
`;

class App extends Component {
  state = {};

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      Object.keys(this.state).map(key => {
        delete this.state[key];
      });
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({});
    }
  }

  injectProps = Stamp => props => {
    const modified = Object.keys(this.state)
      .map(newProps => {
        return {
          [newProps.replace(Stamp.name, '')]: this.state[newProps]
        };
      })
      .reduce((acc, curr) => {
        return { ...acc, ...curr };
      }, {});

    const allProps = { ...props, ...modified };
    return <Stamp {...allProps} />;
  };

  handleChange = (event, key) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [`${target.name}${key}`]: value });
  };

  shapeStamps = () => {
    return Object.keys(components.default).map(component => {
      return {
        key: component,
        path: `/${component}`,
        props: components.default[component].stamp,
        stamp: components.default[component]
      };
    });
  };

  stamps = this.shapeStamps();

  render() {
    return (
      <Container>
        <Sidebar stamps={this.stamps} />
        <View>
          <ViewPane>
            {this.stamps.map(c => (
              <Route
                component={() => this.injectProps(c.stamp)(c.props)}
                key={c.key}
                path={c.path}
              />
            ))}
          </ViewPane>
          <SettingsPane
            location={this.props.location.pathname.split('/').pop()}
            handleChange={this.handleChange}
            stamps={this.stamps}
            state={this.state}
          />
        </View>
      </Container>
    );
  }
}

App.propTypes = {
  location: locationType
};

export default withRouter(App);
