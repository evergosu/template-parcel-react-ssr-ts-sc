import { hot } from 'react-hot-loader';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, Redirect } from 'react-router-dom';
import importedComponent from 'react-imported-component';
import { ThemeProvider } from 'styled-components';
import React from 'react';

import GlobalStyles from './global-styles';
import theme from './theme';

const HelloWorldPage = importedComponent(() =>
  import('./hello-world-page/hello-world-page'),
);

const Application: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Helmet titleTemplate="The App | %s" defaultTitle="The App" />
        <Switch>
          <Route exact path="/" component={HelloWorldPage} />
          <Redirect to="/" />
        </Switch>
      </>
    </ThemeProvider>
  );
};

export default hot(module)(Application);
