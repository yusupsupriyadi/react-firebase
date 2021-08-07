import React, { Component } from "react";
import firebase from "../../../config/firebase";

//TODO: Register
class Register extends Component {
    state = {
        email: '',
        password: '',
    }

    handleChangeText = (e) => {
        this.setState({
            [e.target.id]: e.target.value 
        })
    }
    handleRegisterSubmit = () => {
        const { email, password } = this.state;
        console.log('email =', email, 'password =', password);

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(res => {
                console.log('success', res);
            })
            .catch(function(error){
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }

    render() {
        return (
            <div>
                <div className="container mt-4">
                    <h1>Register Page</h1>
                    <div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label" >Email</label>
                            <input type="email" className="form-control" id="email" placeholder="name@example.com" onChange={this.handleChangeText}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label" >Password</label>
                            <input type="password" className="form-control" id="password" placeholder="password" onChange={this.handleChangeText}/>
                        </div>
                        <button type="button" className="btn btn-primary" onClick={this.handleRegisterSubmit}>Register</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;