import 'react-hot-loader';
import { rehydrateMarks } from 'react-imported-component';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import React from 'react';

import './imported-modules';

import Application from './application/application';

async function main() {
  const root = document.getElementById('root');

  const app = (
    <HelmetProvider>
      <BrowserRouter>
        <Application />
      </BrowserRouter>
    </HelmetProvider>
  );

  try {
    await rehydrateMarks();

    if (process.env.NODE_ENV === 'production') {
      ReactDOM.hydrate(app, root);
    } else {
      ReactDOM.render(app, root);
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
}

main();

// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept();
}
