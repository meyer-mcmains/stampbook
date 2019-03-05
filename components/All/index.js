import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

import Text from '../Text';

const Wrapper = Styled.div`
border-bottom: 5px solid ${p =>
    p.underline ? p.theme.color.white : 'transparent'};
    width: 200px;
`;

const All = ({ title, underline }) => (
  <Wrapper underline={underline}>
    <Text title={title} />
  </Wrapper>
);

All.stamp = {
  title: 'A Great Title',
  underline: true
};

All.propTypes = {
  title: PropTypes.string.isRequired,
  underline: PropTypes.bool.isRequired
};

export default All;
