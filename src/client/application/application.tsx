import { hot } from 'react-hot-loader';
import { Switch, Route, Redirect } from 'react-router-dom';
import importedComponent from 'react-imported-component';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet-async';
import React from 'react';

import GlobalStyles from './global-styles';
import theme from './theme';

const HelloPage = importedComponent(() => import('./hello-page/hello-page'));

const Application: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Helmet titleTemplate="The App | %s" defaultTitle="The App" />
        <Switch>
          <Route exact path="/" component={HelloPage} />
          <Redirect to="/" />
        </Switch>
      </>
    </ThemeProvider>
  );
};

export default hot(module)(Application);
