import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { printDrainHydrateMarks } from 'react-imported-component';
import { Request, Response, NextFunction } from 'express';
import { Provider as ReduxProvider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { createStore } from 'redux';
import React from 'react';

import generateHtml from '../generateHtml';
import reducer from '../../client/redux/reducer';
import Application from '../../client/application/application';

export default function render(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const store = createStore(reducer);

  const routerContext = { url: '' };

  const helmetContext = {};

  const sheet = new ServerStyleSheet();

  try {
    const markup =
      renderToString(
        <ReduxProvider store={store}>
          <HelmetProvider context={helmetContext}>
            <StaticRouter location={req.originalUrl} context={routerContext}>
              <StyleSheetManager sheet={sheet.instance}>
                <Application />
              </StyleSheetManager>
            </StaticRouter>
          </HelmetProvider>
        </ReduxProvider>,
      ) + printDrainHydrateMarks();

    /**
     * If react-router is redirecting, doing it on the server side.
     */
    if (routerContext.url) {
      return res.redirect(301, routerContext.url);
    }

    const preloadedState = store.getState();

    const styleTags = sheet.getStyleTags();

    const html = generateHtml(
      markup,
      styleTags,
      JSON.stringify(preloadedState),
    );

    res.send(html);
  } catch (error) {
    process.stderr.write(error);
  } finally {
    sheet.seal();
  }

  return next();
}
