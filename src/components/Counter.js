import React,{Component,PureComponent} from 'react';
import {getCounter,getSelectedItem} from '../actions/transAction';
import {connect} from 'react-redux';
import ItemList from './ItemList';

class Counter extends Component {
    constructor(props){
        console.log("contructor called",props)
        super(props);
        this.state={
            data:[],
            del:0,
            ood:0,
            int:0,
            dex:0,
            nfi:0,
            selected:''
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps){
            this.setState({data:nextProps.transData.transData})
        }
    }

    shouldComponentUpdate(prev,next){
       return true;
    }
    
    componentDidMount(){
        this.props.getCounter();
        console.log("props in didmount",this.props);
    }

    onClick = (itemName) => {
        console.log("itemName",itemName)
        this.setState({selected:itemName})
        this.props.getSelectedItem(itemName);
    }

    
    render(){
    console.log("data incomming",this.state.data)
    const {data,selected} = this.state;
    if(data){
        return (
            <div>
                <div className="counter">
                <div onClick={() => this.onClick('DEL')} className={selected==="DEL" ? "selectedCounter" : "counterItem"} >
                    <h5>DEL</h5>
                    <div className="counterNumber">{data.del}</div>
                </div>
                <div onClick={() => this.onClick('INT')} className={selected==="INT" ? "selectedCounter" : "counterItem"}>
                    <h5>INT</h5>
                    <div className="counterNumber">{data.int} </div>
                </div>
                <div onClick={() => this.onClick('OOD')}  className={selected==="OOD" ? "selectedCounter" : "counterItem"}>
                    <h5>OOD</h5>
                    <div className="counterNumber">{data.ood} </div>
                </div>
                <div onClick={() => this.onClick('DEX')}  className={selected==="DEX" ? "selectedCounter" : "counterItem"}>
                    <h5>DEX</h5>
                    <div className="counterNumber">{data.dex} </div>
                </div>
                <div onClick={() => this.onClick('NFI')}  className={selected==="NFI" ? "selectedCounter" : "counterItem"}>
                    <h5>NFI</h5>
                    <div className="counterNumber">{data.nfi} </div>
                </div>
            </div>
            {
                selected !==""  ? (
                <div className="maincontainer">
                  <ItemList name={selected}/>
                </div>
                )
                :
                (
                <div></div>
                )
            }
            </div>
            
        )
    }else{
        return(
            <div style={{textAlign:'center'}}>Loading...</div>
        )
    }
    
    }
}

const mapStateToProps = state => ({
    transData:state.trsData
});

export default connect(mapStateToProps,{getCounter,getSelectedItem})(Counter)
