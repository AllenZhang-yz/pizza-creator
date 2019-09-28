import React from 'react';
import ReactSVG from 'react-svg';
import styled from 'styled-components';

const ToppingWrapper = styled.div`
  display: flex;
  height: 45px;
  width: 320px;
  align-items: center;
  background-color: #fcfafa;
  margin-bottom: 15px;
`;

const SVGWapper = styled.div`
  height: 100%;
  width: 50px;
  background-color: #e8e7e1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SVG = styled.div`
  width: 35px;
  height: auto;
`;

const Name = styled.div`
  font-size: 15px;
  text-transform: capitalize;
  color: #000000;
  padding-left: 20px;
  width: 140px;
`;

const AmountAjust = styled.div`
  display: flex;
  height: 100%;
  /* justify-content: space-between; */
  align-items: center;
  width: 110px;
  background-color: #e8e7e1;
`;

const Amount = styled.div`
  height: 100%;
  width: 50px;
  background-color: #fcfafa;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Minus = styled.div`
  height: 100%;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Plus = styled.div`
  height: 100%;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Topping = ({ name, amount }) => {
  return (
    <ToppingWrapper>
      <SVGWapper>
        <SVG>
          <ReactSVG src={require(`../../../assets/toppings/${name}.svg`)} />
        </SVG>
      </SVGWapper>
      <Name>{name}</Name>
      <AmountAjust>
        <Minus>-</Minus>
        <Amount>{amount}</Amount>
        <Plus>+</Plus>
      </AmountAjust>
    </ToppingWrapper>
  );
};

export default Topping;
