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
            break;
            case GET_COUNTER:
                return{
                    ...state,
                    transData:action.payload,
                };
            break
            case SELECTED_ITEM:
                return{
                    ...state,
                    selectedItem:action.payload
                }
            break;
            case ERROR:
                return{
                    ...state,
                    error:true
            };
             break
        default:
            return state;
    }
}