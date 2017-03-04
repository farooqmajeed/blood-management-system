import React, { Component } from 'react'
import { Link } from 'react-router';
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';
import { FirebaseService } from '../helpers/firebaseService'
import { signUp } from '../store/action/auth'
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import * as firebase from 'firebase';

class RegisterDonor extends Component {
    constructor() {
        super();
        this.state = {
            fullname: '',
            mobile: '',
            address: '',
            age:'',
            bloodgroup:''
        }
        this.submit = this.submit.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
    }
    inputHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submit(e) {
        e.preventDefault();
        let multipath = {};
        var bloodUser = {
            fullname: this.state.fullname,
            mobile: this.state.mobile,
            address: this.state.address,
            age: this.state.age,
            bloodgroup: this.state.bloodgroup
        }
        console.log(bloodUser)
        firebase.database().ref('/donors/').push({bloodUser});

    }
    render() {
        return (
            <div ><center>
                <SignupComponent signUpState={this.state} _inputHandler={this.inputHandler} _submit={this.submit} />
            </center>
            </div>
        );
    }
}

// RegisterDonor.contextTypes = {
//     router: React.PropTypes.object.isRequired
// }


class SignupComponent extends React.Component {

//  state = {
//     value: 1,
//   };

//   handleChange = (event, index, value) => this.setState({value});

    render() {
        
        return (
            <div >
              
                <h1>Register as Donor</h1>
                <form onSubmit={this.props._submit} >
                    <TextField
                        hintText="Full Name"
                        name="fullname"
                        value={this.props.signUpState.fullname}
                     floatingLabelText="Full Name"
                        onChange={this.props._inputHandler}
                        /><br />

                    <TextField
                        type="text"
                        hintText="Mobile"
                        name="mobile"
                        value={this.props.signUpState.mobile}
                       floatingLabelText="Mobile"
                        onChange={this.props._inputHandler}
                        /><br />

                    <TextField
                        type="text"
                        hintText="address"
                        name="address"
                        value={this.props.signUpState.address}
                        floatingLabelText="Address"
                        onChange={this.props._inputHandler}
                        /><br />
                        <TextField
                        type="text"
                        hintText="Age"
                        name="age"
                        value={this.props.signUpState.age}
                        floatingLabelText="Age"
                        onChange={this.props._inputHandler}
                        /><br />
                        <br />

                         <TextField
                        type="text"
                        hintText="Blood Group"
                        name="bloodgroup"
                        value={this.props.signUpState.bloodgroup}
                        floatingLabelText="Blood Group"
                        onChange={this.props._inputHandler}
                        /><br />
                        <br />

                 <RaisedButton type="submit" label="Register as Donor" backgroundColor="#4CAF50" /> <br /><br />
                </form>
                
            </div>
        )
    }
}
// SignupComponent.PropTypes = {
//     _inputHandler: React.PropTypes.func.isRequired,
//     _submit: React.PropTypes.func.isRequired

// }

export default RegisterDonor;
