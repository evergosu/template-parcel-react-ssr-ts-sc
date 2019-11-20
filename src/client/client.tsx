import 'react-hot-loader';
import { rehydrateMarks } from 'react-imported-component';
import { Provider as ReduxProvider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import React from 'react';

import store from './redux/store';
import './imported-modules';

import Application from './application/application';

async function main() {
  const root = document.getElementById('root');

  const app = (
    <ReduxProvider store={store}>
      <HelmetProvider>
        <BrowserRouter>
          <Application />
        </BrowserRouter>
      </HelmetProvider>
    </ReduxProvider>
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
if (process.env.NODE_ENV !== 'production' && (module as any).hot) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (module as any).hot.accept('./application/application', main);
}
