import React from 'react';
import './App.css';
import { Header } from './components';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from "./sagas";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import ArticleContainer from "./containers/ArticleContainer";

const sagaMiddleware = createSagaMiddleware();


const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
  )
);


sagaMiddleware.run(rootSaga);
function App() {
  return (
     <Provider store={store}>
    <Router>
      <Header />
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/article/:views" component={ArticleContainer} />
        </Switch>
      </div>
    
    </Router>
  </Provider>
  );
}

export default App;
