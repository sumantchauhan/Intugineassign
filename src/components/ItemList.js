import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getSelectedItem} from '../actions/transAction';
import Destination from '../FrontendAssets/destination.svg';
import Warehouse from '../FrontendAssets/warehouse.svg';
class ItemList extends Component {
  constructor(props){
      super(props);
      this.state = {
          selectedData:null
      }
  }
  
  componentWillReceiveProps(nextProps){
    if(nextProps){
        console.log("nextProps",nextProps);
        this.setState({selectedData:nextProps.selectedData.selectedItem})
    }
  };

  componentDidMount(){
    this.props.getSelectedItem();
  };

  render() {
    if(this.state.selectedData){
        return (  
            <div className="itemlistcontainer">
              {
              this.state.selectedData && this.state.selectedData[0] && this.state.selectedData[0].scan
              ?
              (
              <div className="leftTable">
              <div className="horizontaldashedline">
              <img className="desImage" src={Destination} alt="destination"/>
              <img className="wareImage" src={Warehouse} alt="destination"/>
              </div>
               <div className="leftsideLine">
                 {
                   this.state.selectedData[0].scan.map((scanItem,index) => (
                    <div key={index} className="leftsidedotedline">
                    <span className="dot"></span>
                    </div>
                   ))
                 }
               </div>
               <div className="timeline">
                 {
                  this.state.selectedData[0].scan.map((scanItem,index) => (
                  <div key={index} className="timelineItem">
                  <div className="fontSize" style={{flex:4}}>{scanItem.status_detail} </div>
                  <div className="fontSize" style={{flex:2}}>{scanItem.time ? scanItem.time.split(" ")[0]: ""}</div>
                  <div className="fontSize" style={{flex:1}}>{scanItem.time ? scanItem.time.split(" ")[1].split(":")[0]+":" +scanItem.time.split(" ")[1].split(":")[1]: ""}</div>
                 </div>
                   ))
                 }
               </div>
              </div>
              )
              :
              (
                <div className="leftTable">No Status</div>
              )
              }
              
              
                <div className="rightItemList" style={{flex:4}}>
                  <table className="table">
                  <thead>
                  <tr className="tableHeader">
                      <th className="tableHeader">AWB NUMBER</th>
                      <th className="tableHeader">TRANSPORTER</th>
                      <th className="tableHeader">SOURCE</th>
                      <th className="tableHeader">DESTINATION</th>
                      <th className="tableHeader">BRAND</th>
                      <th className="tableHeader">START DATE</th>
                      <th className="tableHeader">ETD</th>
                      <th className="tableHeader">STATUS</th>
                  </tr>
                  </thead>
                  <tbody>
                      {
                          this.state.selectedData.map(item => (
                        <tr className="fontSize tableitemborder" key={item._id}>
                        <td className="fontSize">#{item.awbno} </td>
                        <td className="fontSize">{item.carrier} </td>
                        <td className="fontSize">{item.from} </td>
                        <td className="fontSize">{item.to} </td>
                        <td> </td>
                        <td className="fontSize">{item.pickup_date ? item.pickup_date.split(" ")[0] : ""} </td>
                        <td className="fontSize">{item.time ? item.time.split(" ")[0]: ""} </td>
                        <td className={item.current_status ==="Delivered" ? "delevered" :"fontSize"}>{item.current_status} </td>
                        </tr>
                          ))
                      }
                  </tbody>
              </table>
            </div>
            </div>
            
          );
    }else{
        return(
            <div style={{textAlign:'center'}}>Loading...</div>
        )
    }
  }
}

const mapStateToProps = state => ({
    selectedData:state.trsData
})

export default connect(mapStateToProps,{getSelectedItem})(ItemList);
