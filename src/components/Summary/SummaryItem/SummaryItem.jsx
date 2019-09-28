import React from 'react';
import Price from '../../Price';
import styled from 'styled-components';

const StyeldSummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 60px;
`;

const Item = styled.div`
  text-transform: capitalize;
  font-weight: bold;
`;

const SummaryItem = ({ item, price }) => (
  <StyeldSummaryItem>
    <Item>{item}</Item>
    <Price price={price} />
  </StyeldSummaryItem>
);

export default SummaryItem;
