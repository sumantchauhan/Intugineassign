import React,{useState,useEffect} from 'react';
import Headres from './components/layouts/Headers';
import Counter from './components/Counter';
import {Provider} from 'react-redux';
import store from './store';
import './App.css';


const  App = () => {
 
  return (
    <Provider store={store}>
    <div className="App">
      <Headres/>
      <Counter />
    </div>
    </Provider>
  );
}

export default App;
