import React from 'react'
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import { Provider } from 'react-redux';
import ContactForm from './ContactForm';

const reducers = {
  // ... your other reducers here ...
  form: formReducer     // <---- Mounted at 'form'. See note below.
}
const reducer = combineReducers(reducers);
const store = createStore(reducer);

const onSubmit = data => alert(JSON.stringify(data, 0, 2))

ReactDOM.render(
  <Provider store={store}>
    <ContactForm onSubmit={onSubmit}/>
  </Provider>,
  document.getElementById('root')
)
