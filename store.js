import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import reducers from './reducers'
import MoviesSaga from './sagas/moviesSaga';

function* rootSaga() {
  yield all([
    MoviesSaga,
  ]);
}

function initializeStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );

  // Running saga
  sagaMiddleware.run(rootSaga);

  return store;
}

export default {
  initializeStore,
};
