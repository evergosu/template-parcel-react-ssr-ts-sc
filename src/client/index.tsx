import { injectLoadableTracker } from 'react-imported-component/boot';

import './imported-modules';

injectLoadableTracker('tracker');

function startAppWithOptIdleTime(): void {
  // eslint-disable-next-line promise/catch-or-return
  Promise.resolve().then(() =>
    // eslint-disable-next-line promise/no-nesting
    Promise.resolve().then(() => {
      // eslint-disable-next-line global-require
      require('./client');
    }),
  );
}

startAppWithOptIdleTime();
