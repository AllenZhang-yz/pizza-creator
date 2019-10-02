import React from 'react';
import ReactSVG from 'react-svg';
import styled from 'styled-components';

const ToppingWrapper = styled.div`
  display: flex;
  height: 45px;
  align-items: center;
  background-color: #fcfafa;
`;

const SVGWrapper = styled.div`
  height: 100%;
  background-color: #e8e7e1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SVG = styled(ReactSVG)`
  width: 35px;
  padding: 0.5rem;
  height: auto;
`;

const Name = styled.div`
  font-size: 15px;
  text-transform: capitalize;
  color: #000000;
  padding-left: 20px;
  flex: 1;
`;

const Amount = styled.div`
  height: 100%;  
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AmountAdjust = styled.div`
  height: 100%;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #e8e7e1;
`;

const Topping = ({ 
  name, 
  amount, 
  onAmountChange,
}) => {
  return (
    <ToppingWrapper>
      <SVGWrapper>
        <SVG src={require(`../../../assets/toppings/${name}.svg`)} />
      </SVGWrapper>
      <Name>{name}</Name>
      <AmountAdjust onClick={() => onAmountChange(-1)}>-</AmountAdjust>
      <Amount>{amount}</Amount>
      <AmountAdjust onClick={() => onAmountChange(+1)}>+</AmountAdjust>
    </ToppingWrapper>
  );
};

export default Topping;
