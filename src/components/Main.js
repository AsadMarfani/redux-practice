import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setNameAndAge } from '../actions/userActions';
export class Main extends Component {
    
    render(){
        return (
            <div>
            <h1>
                This is the Main Component
            </h1>
            <button className = "btn btn-primary" onClick = {()=>this.props.setNameAge({name: 'AsadMarfani007',age: 22})}>Change The Username And Age</button>
            </div>
        );
    }
}

var mapDisptachToProps = (dispatch) => {
    return {
        setNameAge: (obj) => {
            dispatch(setNameAndAge(obj));
        }
    }
}

export default connect(null,mapDisptachToProps)(Main);