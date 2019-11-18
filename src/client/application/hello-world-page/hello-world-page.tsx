import { hot } from 'react-hot-loader';
import styled from 'styled-components';
import React from 'react';

const Button = styled.button`
  color: #fff;
  width: 10em;
  height: 5em;
  font-size: 2em;
  border-radius: 0.25em;
  background-color: ${p => p.theme.colors.primary};
`;

const HelloWorldPage: React.FC = () => {
  return <Button>Hello, World</Button>;
};

export default hot(module)(HelloWorldPage);
