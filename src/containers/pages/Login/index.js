import React, { Component } from 'react'
import { connect } from 'react-redux';

class Login extends Component {
    render() {
        return (
            <div className="container mt-4">
                <h1>Login { this.props.popupProps}</h1>
                <button>Go register</button>
            </div>
        )
    }
}

const reduxState = (state) => ({
    popupProps: state.popup
})

export default connect(reduxState, null)(Login);
