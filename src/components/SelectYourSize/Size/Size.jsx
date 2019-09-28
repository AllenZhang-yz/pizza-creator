import React from 'react';
import styled from 'styled-components';
import pizzaImg from '../../../assets/size.png';
import Price from '../../Price';

const StyledSize = styled.div`
  display: flex;
  align-items: center;
  margin-right: 70px;
`;

const Img = styled.img`
  width: ${props =>
    props.scale === 'small'
      ? '80px'
      : props.scale === 'medium'
      ? '100px'
      : '120px'};
  margin-right: 40px;
`;

const Scale = styled.div`
  color: #000000;
  text-transform: capitalize;
`;

const Size = ({ price, scale }) => (
  <StyledSize>
    <Img src={pizzaImg} alt="pizzaIMG" scale={scale} />
    <div>
      <Scale>{scale}</Scale>
      <Price price={price} />
    </div>
  </StyledSize>
);

export default Size;
