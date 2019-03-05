import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InnerCircle = styled.div`
  background-color: ${p => p.theme.color.white};
  border-radius: 50%;
  display: ${p => (p.selected ? 'block' : 'none')};
  height: 50px;
  margin: 5px;
  width: 50px;
`;

const OuterCircle = styled.div`
  border: 5px solid ${p => p.theme.color.white};
  border-radius: 50%;
  height: 60px;
  width: 60px;
`;

const TrueFalse = ({ selected }) => (
  <OuterCircle>
    <InnerCircle selected={selected} />
  </OuterCircle>
);

TrueFalse.stamp = {
  selected: false
};

TrueFalse.propTypes = {
  selected: PropTypes.bool.isRequired
};

export default TrueFalse;
