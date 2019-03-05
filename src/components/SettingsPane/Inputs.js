import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextInput = styled.input`
  border: none;
  margin-left: 20px;
  text-indent: 10px;
  font-family: monospace;
  height: 23px;
  outline: none;
`;

const Inputs = ({ handleChange, id, props, prop, state }) => {
  switch (typeof props[prop]) {
    case 'boolean':
      return (
        <TextInput
          checked={
            state[`${prop}${id}`] !== undefined
              ? state[`${prop}${id}`]
              : props[prop]
          }
          name={prop}
          onChange={event => handleChange(event, id)}
          type="checkbox"
        />
      );
    case 'string':
      return (
        <TextInput
          name={prop}
          onChange={event => handleChange(event, id)}
          type="text"
          value={
            state[`${prop}${id}`] !== undefined
              ? state[`${prop}${id}`]
              : props[prop]
          }
        />
      );
    default:
      return <></>;
  }
};

Inputs.propTypes = {
  handleChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  prop: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string
  ]),
  props: PropTypes.object.isRequired
};

export default Inputs;
