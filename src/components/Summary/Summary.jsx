import React from 'react';
import Section from '../Section';
import SummaryItem from './SummaryItem';

const Summary = () => (
  <Section title="Summary">
    <SummaryItem item={'pizza(small)'} price={9.99} />
    <hr />
    <SummaryItem item={'total'} price={9.99} />
  </Section>
);

export default Summary;
