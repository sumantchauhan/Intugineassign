import {GET_TRANSPORT_DATA,GET_COUNTER,ERROR,SELECTED_ITEM} from '../actions/types'
const initialState = {
    transData:null,
    selectedItem:null,
    error:false
}

export default (state = initialState,action) => {
    switch(action.type){
        case GET_TRANSPORT_DATA:
            return{
                ...state,
                transData:action.payload
            };
            case GET_COUNTER:
                return{
                    ...state,
                    transData:action.payload,
                };
            case SELECTED_ITEM:
                return{
                    ...state,
                    selectedItem:action.payload
                }
            case ERROR:
                return{
                    ...state,
                    error:true
                };
        default:
            return state;
    }
}