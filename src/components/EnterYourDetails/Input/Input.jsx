import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.div`
  width: 80%;
  margin-bottom: 15px;
`;

const HTMLInput = styled.input`
  width: 100%;
  height: 25px;
  outline: none;
  font-size: 16px;
`;

const LabelAndError = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Label = styled.label`
  text-transform: uppercase;
  font-size: 15px;
`;

const Error = styled.div`
  color: red;
  font-size: 10px;
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
    const { label, className, value, onChange, formDirty } = this.props;
    const { dirty, errorMessage } = this.state;

    // const errorMessage = this.getErrorMessage();

    return (
      <StyledInput className={className}>
        <LabelAndError>
          <Label>{label}</Label>
          {(dirty && errorMessage) && (formDirty && errorMessage)(
            <Error>{errorMessage}</Error>
          )}
        </LabelAndError>
        <HTMLInput
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
