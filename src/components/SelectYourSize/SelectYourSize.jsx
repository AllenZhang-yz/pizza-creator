import React, { Component } from 'react';
import styled from 'styled-components';
import Section from '../Section';
import Size from './Size';

const SizeWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: start;
`;

class SelectYourSize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSize: null,
      sizes: [
        { price: 9.99, scale: 'small' },
        { price: 10.99, scale: 'medium' },
        { price: 11.99, scale: 'large' }
      ],
    };
  }

  render() {
    return (
      <Section title="Select your size">
        <SizeWrapper>
          {this.state.sizes.map((size) => (
            <Size 
              key={size.scale}
              price={size.price} 
              scale={size.scale} 
              selected={size === this.state.selectedSize}
              onClick={() => this.setState({
                selectedSize: size
              })}
            />
          ))}
        </SizeWrapper>
      </Section>
    );
  }
}

export default SelectYourSize;
