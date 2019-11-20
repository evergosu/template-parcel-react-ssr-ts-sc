import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import epic from './epic';
import reducer from './reducer';

function configureStore() {
  const epicMiddleware = createEpicMiddleware();

  const composeEnhancers =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, no-underscore-dangle
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  // The initial state collected at server side.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, no-underscore-dangle
  const preloadedState = (window as any).__PRELOADED_STATE__;

  // Allow the passed state to be garbage-collected.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, no-underscore-dangle
  delete (window as any).__PRELOADED_STATE__;

  const store = createStore(
    reducer,
    preloadedState,
    composeEnhancers(applyMiddleware(epicMiddleware)),
  );

  epicMiddleware.run(epic);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (process.env.NODE_ENV !== 'production' && (module as any).hot) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (module as any).hot.accept('./reducer', () =>
      store.replaceReducer(reducer),
    );
  }

  return store;
}

export default configureStore();

export type Store = ReturnType<typeof reducer>;
