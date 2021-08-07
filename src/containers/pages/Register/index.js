import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "../../../components/atoms/Buttton";
import { registerUserApi } from "../../../config/redux/action";

//TODO PAGE: Register
class Register extends Component {
    // state
    state = {
        email: '',
        password: '',
    }

    // handle
    handleChangeText = (e) => {
        this.setState({
            [e.target.id]: e.target.value 
        })
    }

    handleRegisterSubmit = () => {
        const { email, password } = this.state;
        this.props.registerAPI({ email, password })
        this.setState({
            email: '',
            password: ''
        })
    }
    // html
    render() {
        return (
            <div>
                <div className="container mt-4">
                    <h1>Register Page</h1>
                    <div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label" >Email</label>
                            <input type="email" className="form-control" id="email" placeholder="name@example.com" onChange={this.handleChangeText} value={ this.state.email }/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label" >Password</label>
                            <input type="password" className="form-control" id="password" placeholder="6sV#H=6" onChange={this.handleChangeText} value={this.state.password}/>
                        </div>
                        <Button onClick={this.handleRegisterSubmit} title="Register" loading={this.props.isLoading} success={ this.props.isSuccess}/>
                    </div>
                </div>
            </div>
        );
    }
}

// Redux
const reduxState = (state) => ({
    isLoading: state.isLoading,
    isSuccess: state.isSuccess
})

const reduxDispatch = (dispatch) => ({
    registerAPI: (data) => dispatch(registerUserApi(data))
})

export default connect(reduxState, reduxDispatch) (Register);