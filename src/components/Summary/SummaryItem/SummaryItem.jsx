import React from 'react';
import Price from '../../Price';
import styled from 'styled-components';

const StyledSummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Item = styled.div`
  text-transform: capitalize;
`;

const SummaryItem = ({ item, price }) => (
  <StyledSummaryItem>
    <Item>{item}</Item>
    <Price price={price} />
  </StyledSummaryItem>
);

export default SummaryItem;
