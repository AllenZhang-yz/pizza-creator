import React from 'react';
import styled from 'styled-components';
import EnterYourDetails from './components/EnterYourDetails';
import SelectYourSize from './components/SelectYourSize';
import ChooseYourToppings from './components/ChooseYourToppings';
import Summary from './components/Summary';
import Submit from './components/Submit';

const StyledApp = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 1rem 0;
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedSize: null,
      toppings: [
        { name: 'anchovy', amount: 0, price: 0.99 },
        { name: 'bacon', amount: 0, price: 0.99 },
        { name: 'chili', amount: 0, price: 0.99 },
        { name: 'basil', amount: 0, price: 0.99 },
        { name: 'mozzarella', amount: 0, price: 0.99 },
        { name: 'mushroom', amount: 0, price: 0.99 },
        { name: 'olive', amount: 0, price: 0.99 },
        { name: 'onion', amount: 0, price: 0.99 },
        { name: 'pepper', amount: 0, price: 0.99 },
        { name: 'pepperoni', amount: 0, price: 0.99 },
        { name: 'tomato', amount: 0, price: 0.99 },
        { name: 'sweetcorn', amount: 0, price: 0.99 }
      ],
    };
  }

  render() {
    const { selectedSize, toppings } = this.state;

    return (
      <StyledApp>
        <EnterYourDetails />
        <br />
        <SelectYourSize 
          selectedSize={selectedSize} 
          onSizeSelected={(size) => this.setState({
            selectedSize: size,
          })}
        />
        <br />
        <ChooseYourToppings
          toppings={toppings}
          onToppingAmountChange={(topping) => (delta) => this.setState(prevState => {
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
        <br />
        <Summary size={selectedSize} toppings={toppings} />
        <Submit />
      </StyledApp>
    );
  }
}

export default App;
