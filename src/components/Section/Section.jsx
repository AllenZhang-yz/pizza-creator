import React, { Fragment } from 'react';
import styled from 'styled-components';

const Title = styled.div`
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  font-weight: 200;
`;

const Section = ({ title, children }) => (
  <Fragment>
    <Title>{title}</Title>
    <div>{children}</div>
  </Fragment>
);

export default Section;
