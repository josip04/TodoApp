import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import rootReducer from '../src/reducers/reducer';
import {addTodo,removeTodo} from '../src/actions/action';
import { ADD_TODO , TOGGLE_TODO , REMOVE_TODO} from './actions/types';

const store = createStore(rootReducer);
/*
console.log(store.getState());
console.log(addTodo({item:"My first todo in Redux"}));
store.dispatch(addTodo("My first todo in Redux"));

const action2 = addTodo({item:"Redux"});
const action3 = addTodo({item:"React and Typescript!"});
store.dispatch(action3);


let action = {paylod:{item:{item:"Redux",completed:false}}};
let payload = addTodo({item:"Redux",completed:false});

store.dispatch({type:ADD_TODO,payload:{item:"Redux",completed:false}});
store.dispatch({type:ADD_TODO,payload:{item:"Redux and TS",completed:false}});
store.dispatch({type:TOGGLE_TODO, payload:{index:0}});

store.dispatch({type:REMOVE_TODO, payload:{item:"Redux and TS",completed:false}});



//store.dispatch(addTodo({item:{item:"React and Typescript!",completed:false}}));
//store.dispatch(addTodo("React and Typescript!"));
//store.dispatch(removeTodo("Redux"));
//console.log(store.getState());
*/
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);