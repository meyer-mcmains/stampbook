import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { stampsType } from '../../types';
import Inputs from './Inputs';

const InputWrapper = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  margin-left: 50px;
  width: 300px;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const StyledLabel = styled.label`
  font-family: monospace;
  font-size: 16px;
  letter-spacing: 1.1px;
  margin-bottom: 6px;
`;

const View = styled.div`
  align-content: flex-start;
  height: 210px;
  background-color: #2c2c2c;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border-top: 1px solid #eee;
  padding: 50px 0px;
`;

class SettingsPane extends Component {
  getCurrentStamp = () =>
    this.props.stamps.find(stamp => stamp.key === this.props.location);

  render() {
    const currentStamp = this.getCurrentStamp();
    if (currentStamp) {
      const { key, props } = currentStamp;
      return (
        <View>
          {props &&
            Object.keys(props).map(prop => (
              <InputWrapper key={`${key}${prop}`}>
                <StyledLabel htmlFor={prop}>{prop}</StyledLabel>
                <Inputs
                  id={key}
                  prop={prop}
                  props={props}
                  handleChange={this.props.handleChange}
                  state={this.props.state}
                />
              </InputWrapper>
            ))}
        </View>
      );
    } else {
      return <></>;
    }
  }
}

SettingsPane.propTypes = {
  handleChange: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired,
  stamps: stampsType,
  state: PropTypes.object
};

export default SettingsPane;
