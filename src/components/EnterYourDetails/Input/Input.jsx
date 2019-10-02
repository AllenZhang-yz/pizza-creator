import React from 'react';
import styled, { css } from 'styled-components';

const StyledInput = styled.div`
`;

const HTMLInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  outline: none;
  font-size: 1rem;
  padding: 0.75rem 0.5rem;
  border: 1px solid rgb(238, 238, 238);

  ${(props) => props.error && css`
    border-color: red;
    color: red;  
  `}
`;

const LabelAndError = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 0.25rem;
`;

const Label = styled.label`
  text-transform: uppercase;
`;

const Error = styled.div`
  color: red;
`;

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

export const validator = {};
validator.isEmpty = (value) => !value;
validator.isNotEmpty = (value) => !validator.isEmpty(value);
validator.isEmail = (value) => EMAIL_REGEX.test(value);
validator.isIdentical = (value, { target }) => value === target();

class Input extends React.Component {
  constructor(props) {
    super(props);

    const errorMessage = null;
    // const errorMessage = this.getErrorMessage();

    this.state = {
      dirty: false,
      errorMessage,
    };
  }

  getErrorMessage() {
    const { validations, value } = this.props;

    const errorMessages = validations
      .map(({ validator, message, options = {} }) => {
        // const validatorFunction = mapValidator(validator);

        const valid = validator(value, options);

        if (valid) {
          return null;
        }

        return message;
      })
      .filter((message) => !!message);

    return errorMessages[0];
  }

  validation() {
    this.setState({
      errorMessage: this.getErrorMessage(),
    });
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.value !== this.props.value) {
  //     this.validation();
  //   }
  // }

  render() {
    const { label, className, value, onChange } = this.props;
    const { dirty, errorMessage } = this.state;

    // const errorMessage = this.getErrorMessage();

    // const error = dirty && errorMessage;
    const error = Boolean(dirty && errorMessage);

    return (
      <StyledInput className={className}>
        <LabelAndError>
          <Label>{label}</Label>
          {error && (
            <Error>{errorMessage}</Error>
          )}
        </LabelAndError>
        <HTMLInput
          error={error}
          value={value}
          onChange={(event) => {
            this.setState({ dirty: true });
            onChange(event, () => this.validation());
          }}
        />
      </StyledInput>
    )
  }
};

export default Input;
