import { hot } from 'react-hot-loader';
import React from 'react';

import HelloButton from './hello-button/hello-button';

const HelloPage: React.FC = () => {
  return (
    <>
      <h1>This is example page</h1>
      <HelloButton />
    </>
  );
};

export default hot(module)(HelloPage);
