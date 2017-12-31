import React, { Component } from 'react';
import Status from "./components/Status.jsx";
import Table from "./components/Datatable.jsx";
import {PieChart} from 'react-easy-chart';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        
        <Status />
        <Table />
      </div>
    );
  }
}

export default App;
