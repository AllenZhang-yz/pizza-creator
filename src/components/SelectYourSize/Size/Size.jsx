import React from 'react';
import styled, { css } from 'styled-components';
import pizzaImg from '../../../assets/size.png';
import Price from '../../Price';

const StyledSize = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Img = styled.img`
  width: ${props => ({
    small: '80px',
    medium: '100px',
    large: '120px',
  }[props.scale])};
  
  margin-right: 2rem;
  border-radius: 100%;
  border: 4px solid transparent;
  
  ${(props) => props.selected && css`
    border-color: rgba(0, 0, 0, 0.3);
  `}
`;

const Scale = styled.div`
  text-transform: capitalize;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const Size = ({ price, scale, selected, onClick }) => (
  <StyledSize onClick={onClick}>
    <Img selected={selected} src={pizzaImg} alt="pizzaIMG" scale={scale} />
    <div>
      <Scale>{scale}</Scale>
      <Price price={price} />
    </div>
  </StyledSize>
);

export default Size;
