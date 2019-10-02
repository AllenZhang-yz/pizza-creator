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
  constructor(props) {
    super(props);

    this.state = {
      toppings: [
        { name: 'anchovy', amount: 0 },
        { name: 'bacon', amount: 0 },
        { name: 'chili', amount: 0 },
        { name: 'basil', amount: 0 },
        { name: 'mozzarella', amount: 0 },
        { name: 'mushroom', amount: 0 },
        { name: 'olive', amount: 0 },
        { name: 'onion', amount: 0 },
        { name: 'pepper', amount: 0 },
        { name: 'pepperoni', amount: 0 },
        { name: 'tomato', amount: 0 },
        { name: 'sweetcorn', amount: 0 }
      ]
    };
  }

  render() {
    return (
      <Section title="Choose your toppings">
        <ToppingWrapper>
          {this.state.toppings.map((topping) => (
            <Topping 
              key={topping.name} 
              name={topping.name} 
              amount={topping.amount} 
              onAmountChange={(delta) => this.setState(prevState => {
                const { toppings } = prevState;

                const newToppings = toppings.map((thisTopping) => {
                  if (thisTopping === topping) {
                    const amount = thisTopping.amount + delta;
                    const newAmount = amount < 0 ? 0 : amount;

                    return {
                      ...thisTopping,
                      amount: newAmount,
                    };
                  }

                  return thisTopping;
                });

                return {
                  toppings: newToppings,
                };
              })}
            />
          ))}
        </ToppingWrapper>
      </Section>
    );
  }
}

export default ChooseYourToppings;
