import React from 'react';
import styled from 'styled-components';
import Section from '../Section';
import SummaryItem from './SummaryItem';

const SummaryItemWrapper = styled.div`
  display: grid;
  gap: 0.5rem;
`;

const Summary = ({
  toppings,
  size,
}) => (
  <Section title="Summary">
    <SummaryItemWrapper>
      {size && (<SummaryItem item={`Pizza(${size.scale})`} price={size.price} />)}
      {toppings.map(({ name, amount, price }) => amount > 0 && (
        <SummaryItem item={`${name} * ${amount}`} price={price * amount} />
      ))}
      <div>
        <hr />
        <SummaryItem 
          item={'total'} 
          price={(() => toppings.reduce((result, { amount, price }) => {
            return result + amount * price; 
          }, size ? size.price : 0))()} 
        />
      </div>
    </SummaryItemWrapper>
  </Section>
);

export default Summary;
