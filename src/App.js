import React,{useState,useEffect} from 'react';
import Headres from './components/layouts/Headers';
import Counter from './components/Counter';
import {Provider} from 'react-redux';
import store from './store';
import './App.css';

const url=" https://93870v1pgk.execute-api.ap-south-1.amazonaws.com/latest/shipments/";
const token="tTU3gFVUdP";
const emails = {
    email:"mayankmittal@intugine.com"
}

const  App = () => {
  const [data,setData] = useState([]);


  useEffect(() => {
    getData("mayank",emails);
  },[]); 

  const getData = async (name,email) => {
    const res = await fetch(url+name,
    {
        method:'POST',
        body:JSON.stringify(email),
        headers:{
            'Content-Type':'application/json',
            'Accept':'application/json',
            'Authorization': 'Bearer ' + token
        }
    });
    const data = await res.json();
    if(data.data){
      setData(data.data);
    }
}

  return (
    <Provider store={store}>
    <div className="App">
      <Headres/>
      <Counter data={data}/>
    </div>
    </Provider>
  );
}

export default App;
