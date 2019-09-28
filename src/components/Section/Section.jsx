import React, { Fragment } from 'react';
import styled from 'styled-components';

const Title = styled.div`
  font-size: 20px;
  margin: 35px 0;
`;

const Section = ({ title, children }) => (
  <Fragment>
    <Title>{title}</Title>
    <div>{children}</div>
  </Fragment>
);

export default Section;
