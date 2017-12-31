import React, { Component } from 'react';

import ToolTip from "./ToolTip.jsx";
import {FETCH_ADULT_DATASET} from "../constant/constant.jsx";
import {storeGenderList} from "../actions/index.jsx";
import { connect } from 'react-redux';
class Gender extends Component {
  constructor(props){
    super(props);

  }
componentDidMount(){
  fetch(FETCH_ADULT_DATASET)
  .then(res => res.json())
  .then((response) =>
  {
    console.log(response.response.adult_dataset);
    this.props.storeGenderList(response.response.adult_dataset);
  });
}



  render() {
    var pie_chart = null;
    var bar_graph = null;
    if(this.props.responseObject!==undefined){
      console.log("jjj", this.props.responseObject);
      pie_chart = this.props.responseObject;
    }

    return (
      <div>
        {pie_chart}
      </div>
    );
  }
}
function mapStateToProps(state)
{

 const { responseObject } = state;console.log("inside mapstateto props", state, responseObject);
  return{
	responseObject
  }
}
export default connect(mapStateToProps, { storeGenderList })(Gender);;
