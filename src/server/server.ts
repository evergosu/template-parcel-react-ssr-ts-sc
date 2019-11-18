import compression from 'compression';
import express from 'express';

import render from './middlewares/render';

function main() {
  const app = express();

  /**
   * Adds gzip compression to all responses.
   * TODO: Watch out for flushing while SSE.
   */
  app.use(compression());

  /**
   * Expose the public directory as /dist and point to the browser version.
   */
  app.use('/dist', express.static(`${__dirname}/../client`));

  /**
   * Anything unresolved is react-router field of work.
   */
  app.get('/*', render);

  const port = process.env.PORT || 1234;

  app.listen(port, () => {
    process.stdout.write(`Listening on port ${port}...`);
  });
}

main();
