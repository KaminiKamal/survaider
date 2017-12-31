import React, { Component } from 'react';
import {FETCH_ADULT_DATASET} from "../constant/constant.jsx";
import {storeRelationList} from "../actions/index.jsx";
import { connect } from 'react-redux';

class Status extends Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    fetch(FETCH_ADULT_DATASET)
    .then(res => res.json())
    .then((response) =>
    {
      console.log(response.response.adult_dataset);
      this.props.storeRelationList(response.response.adult_dataset);
    });
  }



  render() {
    var pie_chart = null;
    var bar_graph = null;
    if(this.props.responseData!==undefined){
      bar_graph = this.props.responseData;
    }
    if(this.props.responseInfo!==undefined){
      pie_chart = this.props.responseInfo
    }
    return (
      <div>
        {pie_chart}
        {bar_graph}
      </div>
    );
  }
}
function mapStateToProps(state)
{

 const { responseData, responseInfo} = state;console.log("inside mapstateto props", state, responseData);
  return{
	responseData,
  responseInfo
  }
}
export default connect(mapStateToProps, { storeRelationList })(Status);;
