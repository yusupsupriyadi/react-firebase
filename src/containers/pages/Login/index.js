import React, { Component } from 'react'
import { connect } from 'react-redux';

//TODO PAGE: Login
class Login extends Component {
    
    //props
    changeUserName = () => {
        this.props.changeUserName()
    }

    //render html
    render() {
        return (
            <div className="container mt-4">
                <h1>Login {this.props.username}</h1>
                <button>Go register</button>
            </div>
        )
    }
}

//redux state
const reduxState = (state) => ({
    popupProps: state.popup,
})

const reduxDispatch = (dispatch) => ({

})

export default connect(reduxState, reduxDispatch)(Login);
