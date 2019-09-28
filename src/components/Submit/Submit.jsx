import React from 'react';
import styled from 'styled-components';

const StyledSubmit = styled.div`
  width: 100%;
  text-align: center;
  background-color: #25bd1a;
  color: white;
  font-weight: bold;
  margin: 15px 0;
  padding: 10px 0;
  border-radius: 4px;
  cursor: pointer;
`;

const Submit = () => <StyledSubmit>Submit</StyledSubmit>;

export default Submit;
