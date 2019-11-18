import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { printDrainHydrateMarks } from 'react-imported-component';
import { Request, Response, NextFunction } from 'express';
import { HelmetProvider } from 'react-helmet-async';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import React from 'react';

import generateHtml from '../generateHtml';
import Application from '../../client/application/application';

export default function render(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const routerContext = { url: '' };

  const helmetContext = {};

  const sheet = new ServerStyleSheet();

  try {
    const markup =
      renderToString(
        <HelmetProvider context={helmetContext}>
          <StaticRouter location={req.originalUrl} context={routerContext}>
            <StyleSheetManager sheet={sheet.instance}>
              <Application />
            </StyleSheetManager>
          </StaticRouter>
        </HelmetProvider>,
      ) + printDrainHydrateMarks();

    /**
     * If react-router is redirecting, doing it on the server side.
     */
    if (routerContext.url) {
      return res.redirect(301, routerContext.url);
    }

    const styleTags = sheet.getStyleTags();

    const html = generateHtml(markup, styleTags);

    res.send(html);
  } catch (error) {
    process.stderr.write(error);
  } finally {
    sheet.seal();
  }

  return next();
}
