import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../images/logo.svg';
import '../styles/App.css';

import Main from './Main';
import User from './User';

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className = "container">
        <Main/>
        <hr/>
        <User/>
      </div>
    );
  }
}
//This work is moved to their individual components
//
// var mapStateToProps = (state) => {
//   return {
//     user: state.user
//   };
// };

// var mapDisptachToProps = (dispatch)=>{
//   return { 
//     setName: (name) => {
//       dispatch({
//         type: 'SET_NAME',
//         payload: name
//       });
//     }
//   };
// };

export default App;
