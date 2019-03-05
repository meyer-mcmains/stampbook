import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

const Title = Styled.h1`
  color: ${p => p.theme.color.white};
`;

const Text = ({ title }) => <Title>{title}</Title>;

Text.stamp = {
  title: 'This is a Title'
};

Text.propTypes = {
  title: PropTypes.string.isRequired
};

export default Text;
