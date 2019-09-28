import React, { Component } from 'react';
import styled from 'styled-components';
import Section from '../Section';
import Input from './Input';

const StyledInput = styled.input`
  width: 100%;
  height: 25px;
  outline: none;
  font-size: 16px;
`;

const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

class EnterYourDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enterYourDetails: [
        {
          label: 'name',
          error: 'Please input name',
          value: '',
          showErr: false,
          touched: false
        },
        {
          label: 'email',
          error: 'Please input email',
          value: '',
          showErr: false,
          touched: false
        },
        {
          label: 'confirm email',
          error: 'Please confirm email',
          value: '',
          showErr: false,
          touched: false
        },
        {
          label: 'address',
          error: 'Please input address',
          value: '',
          showErr: false,
          touched: false
        },
        {
          label: 'postcode',
          error: 'Please input postcode',
          value: '',
          showErr: false,
          touched: false
        },
        {
          label: 'contact number',
          error: 'Please input contact number',
          value: '',
          showErr: false,
          touched: false
        }
      ]
    };
  }

  enterDetailsHandler = (e, el) => {
    this.setState({ value: e.target.value, touched: true });
    // if (el.value === '') {
    //   this.setState({ showErr: true });
    // }
  };

  render() {
    return (
      <Section title="Enter your details">
        <InputWrapper>
          {this.state.enterYourDetails.map(el => (
            <Input
              key={el.label}
              label={el.label}
              error={el.error}
              showErr={el.showErr}
              touched={el.touched}
            >
              <StyledInput />
            </Input>
          ))}
        </InputWrapper>
      </Section>
    );
  }
}

export default EnterYourDetails;
