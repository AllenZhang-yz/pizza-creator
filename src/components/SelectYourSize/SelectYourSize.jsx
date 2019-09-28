import React, { Component } from 'react';
import styled from 'styled-components';
import Section from '../Section';
import Size from './Size';

const SizeWrapper = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
`;

class SelectYourSize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectYourSize: [
        { price: 9.99, scale: 'small' },
        { price: 10.99, scale: 'medium' },
        { price: 11.99, scale: 'large' }
      ]
    };
  }
  render() {
    return (
      <Section title="Enter your size">
        <SizeWrapper>
          {this.state.selectYourSize.map(el => (
            <Size key={el.scale} price={el.price} scale={el.scale} />
          ))}
        </SizeWrapper>
      </Section>
    );
  }
}

export default SelectYourSize;
