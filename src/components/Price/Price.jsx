import React from 'react';
import styled from 'styled-components';

const StyledPrice = styled.div`
  color: #000000;
  font-size: 14px;
`;

const Price = ({ price }) => <StyledPrice>${price.toFixed(2)}</StyledPrice>;

export default Price;
