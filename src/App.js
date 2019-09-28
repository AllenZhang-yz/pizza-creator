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
`;

const App = () => {
  return (
    <StyledApp>
      <EnterYourDetails />
      <SelectYourSize />
      <ChooseYourToppings />
      <Summary />
      <Submit />
    </StyledApp>
  );
};

export default App;
