import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getSelectedItem} from '../actions/transAction'
class ItemList extends Component {
  constructor(props){
      super(props);
      this.state = {
          selectedData:null
      }
  }
  
  componentWillReceiveProps(nextProps){
    if(nextProps){
        this.setState({selectedData:nextProps.selectedData.selectedItem})
    }
  };

  componentDidMount(){
    this.props.getSelectedItem()
  };

  render() {
    if(this.state.selectedData){
        return (  
            <div className="itemlistcontainer">
                  <table className="table">
                  <thead>
                  <tr>
                      <th>AWB NUMBER</th>
                      <th>TRANSPORTER</th>
                      <th>SOURCE</th>
                      <th>DESTINATION</th>
                      <th>BRAND</th>
                      <th>START DATE</th>
                      <th>ETD</th>
                      <th>STATUS</th>
                  </tr>
                  </thead>
                  <tbody>
                      {
                          this.state.selectedData.map(item => (
                        <tr key={item._id}>
                        <td>{item.awbno} </td>
                        <td>{item.carrier} </td>
                        <td>{item.from} </td>
                        <td>{item.to} </td>
                        <td> </td>
                        <td>{item.pickup_date ? item.pickup_date.split(" ")[0] : ""} </td>
                        <td>{item.time ? item.time.split(" ")[0]: ""} </td>
                        <td>{item.current_status} </td>
                        </tr>
                          ))
                      }
                  </tbody>
              </table>
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
