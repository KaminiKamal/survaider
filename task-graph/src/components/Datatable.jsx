import React, { Component } from 'react';
import {FETCH_ADULT_DATASET} from "../constant/constant.jsx";
import List from "./Input.jsx";
import "../App.css";

class Table extends Component {
constructor(props){
  super(props);
  this.state = {
    adult_dataset: [],
    items: []
  }
}

  filterRelationship = (event) => {
    var updatedList = this.state.items;
    updatedList = updatedList.filter(function(item){
      return item.relationship.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({items: updatedList});
  }
  filterSex = (event) => {
    var updatedList = this.state.adult_dataset;
    updatedList = updatedList.filter(function(item){
      return item.sex.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({items: updatedList});
  }
  filterRace = (event) => {
    var updatedList = this.state.items;
    updatedList = updatedList.filter(function(item){
      return item.race.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({items: updatedList});
  }
  componentDidMount(){
    fetch(FETCH_ADULT_DATASET)
    .then(res => res.json())
    .then((response) =>
    {
      console.log(response.response.adult_dataset);
      this.setState({adult_dataset: response.response.adult_dataset});
      this.setState({items: this.state.adult_dataset});console.log("filter", this.state);
    });
  }



  render(){

    return (
      <div>
        <div className="row">
       <div className="col s4">

         <div className="input-field inline">
           <input id="sex" type="text" onChange={this.filterSex}/>
           <label htmlFor="sex" >SEX</label>
         </div>
       </div>
       <div className="col s4">
         <div className="input-field inline">
           <input id="race" type="text" onChange={this.filterRace}/>
           <label htmlFor="race" >RACE</label>
         </div>
       </div>
       <div className="col s4">
         <div className="input-field inline">
           <input id="relationship" type="text" onChange={this.filterRelationship}/>
           <label htmlFor="relationship">RELATIONSHIP</label>
         </div>
       </div>
     </div>
        <List items = {this.state.items} />
      </div>
    );
  }

}



export default Table;
