import React, { Component } from 'react';
import styled from 'styled-components';
import Section from '../Section';
import Input, { validator } from './Input';

const InputWrapper = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

class EnterYourDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formFields: [
        {
          label: 'name',
          validations: [{
            validator: validator.isNotEmpty,
            message: 'Name is required',
          }],
          value: '',
        },
        {
          label: 'email',
          validations: [{
            validator: validator.isNotEmpty,
            message: 'Email is required',
          }, {
            validator: validator.isEmail,
            message: 'Please input a valid email address',
          }],
          value: '',
        },
        {
          label: 'confirm email',
          validations: [{
            validator: validator.isEmail,
            message: 'Please input a valid email address',
          }, {
            validator: validator.isIdentical,
            message: 'Confirm email address is not same as email address',
            options: {
              target: () => this.state.formFields.find(({ label }) => label === 'email').value,
            }
          }],
          value: '',
        },
        {
          label: 'address',
          validations: [{
            validator: validator.isNotEmpty,
            message: 'Address is required',
          }],
          value: '',
        },
        {
          label: 'postcode',
          validations: [{
            validator: validator.isNotEmpty,
            message: 'Postcode is required',
          }],
          value: '',
        },
        {
          label: 'contact number',
          validations: [{
            // validator: 'isRegex',
            validator: validator.isNotEmpty,
            message: 'Contact number is required',
          }],
          value: '',
        }
      ],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(label) {
    return ({ target: { value } }, callback) => {
      this.setState(prevState => {
        const formFields = prevState.formFields.map((formField) => {
          if (formField.label === label) {
            return {
              ...formField,
              value,
            };
          }

          return formField;
        });

        return {
          formFields,
        }
      }, callback);
    }
  }

  render() {
    return (
      <Section title="Enter your details">
        <InputWrapper>
          {this.state.formFields.map(({ label, validations, value }) => (
            <Input
              key={label}
              label={label}
              validations={validations}
              value={value}
              onChange={this.handleInputChange(label)}
            />
          ))}
        </InputWrapper>
      </Section>
    );
  }
}

export default EnterYourDetails;
