import {GET_TRANSPORT_DATA,GET_COUNTER,ERROR,SELECTED_ITEM} from './types';
const url=" https://93870v1pgk.execute-api.ap-south-1.amazonaws.com/latest/shipments/";
const token="tTU3gFVUdP";
const emails = {
    email:"mayankmittal@intugine.com"
}
const name = "mayank";


export const  getTransData =  async (name)   => {
    const res = await fetch(url+name,{
        method:'POST',
        body:JSON.stringify(emails),
        headers:{
            'Content-Type':'application/json',
            'Accept':'application/json',
            'Authorization': 'Bearer ' + token
        }
        })
        const data = await res.json();
        if(data.data){
            return data.data;  
        }
        
}

export  const getCounter = () => async dispatch => {
    const transData = await getTransData();
    console.log("transData",transData);
    const counterData={
        ood:0,
        del:0,
        int:0,
        dex:0,
        nfi:0
    };
    transData.forEach(item => {
        if(item.current_status_code === 'OOD'){
            counterData.ood++;
        }else if(item.current_status_code === 'DEL'){
            counterData.del++;
        }else if(item.current_status_code === 'INT'){
            counterData.int++;
        }else if(item.current_status_code === 'DEX'){
            counterData.dex++;
        }else if(item.current_status_code === 'NFI'){
            counterData.nfi++;
        }
    })
    dispatch({
        type:GET_COUNTER,
        payload:counterData
    }) 
}

export const getSelectedItem = (itemName) => async dispatch => {
    const res = await getTransData();
    const selectedItemData = res.filter(item => item.current_status_code === itemName);
    console.log(selectedItemData);
    dispatch({
        type:SELECTED_ITEM,
        payload:selectedItemData
    });
}




