import React, { Component } from 'react';
import styled from 'styled-components';
import Section from '../Section';
import Topping from './Topping';

const ToppingWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 1rem;
`;

class ChooseYourToppings extends Component {
  render() {
    const { toppings, onToppingAmountChange } = this.props;

    return (
      <Section title="Choose your toppings">
        <ToppingWrapper>
          {toppings.map((topping) => (
            <Topping 
              key={topping.name} 
              name={topping.name} 
              amount={topping.amount} 
              onAmountChange={onToppingAmountChange(topping)}
            />
          ))}
        </ToppingWrapper>
      </Section>
    );
  }
}

export default ChooseYourToppings;
