import React, { Component } from 'react';
import  { connect } from 'react-redux';
export class User extends Component {
    render(){
        return (
            <div>
                <h1> This is the User Component </h1>
                <h4>Username is : <b>{this.props.uname}</b> and age is : <b>{this.props.uage}</b></h4>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        uname: state.user.name,
        uage: state.user.age
    };
};

export default connect(mapStateToProps)(User);