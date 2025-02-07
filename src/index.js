import React from 'react';
import { createRoot } from 'react-dom/client'; 
import App from './App';
import { Provider } from 'react-redux';
import { legacy_createStore } from 'redux';
import Reducer from './Config/reducer';
const store =legacy_createStore(Reducer)

const container = document.getElementById('root');


const root = createRoot(container);

root.render(
  <Provider store={store}>
     <App />
  </Provider>
   
); 