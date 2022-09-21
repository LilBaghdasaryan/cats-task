import './App.css';
import { Provider } from 'react-redux';
import {store} from "./helper/store"
import AppContainer from "./container/AppConainer"
import { Fragment } from 'react';

function App() {
  return (
    <Provider store={store} >
      <Fragment>
      <AppContainer />
      </Fragment>
    </Provider>
  );
}

export default App;
