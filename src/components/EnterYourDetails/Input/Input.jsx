import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.div`
  width: 80%;
  margin-bottom: 15px;
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

const Err = styled.div`
  color: red;
  font-size: 10px;
`;

const Input = ({ label, error, children, showErr, touched, className }) => (
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  <a className={className}>
    <StyledInput>
      <LabelAndError>
        <Label>{label}</Label>
        {<Err>{error}</Err>}
      </LabelAndError>
      {children}
    </StyledInput>
  </a>
);

export default Input;
