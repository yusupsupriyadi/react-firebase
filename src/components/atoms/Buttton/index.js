import React from 'react';


//FIXME ATOM: Button
const Button = ({ onClick, title, loading, success }) => {
    if (loading) {
        return <button type="button" className="btn btn-primary" disabled>Loading...</button>
    }
    return (
        <button type="button" className="btn btn-primary" onClick={onClick}>{ title }</button>
    )
}

export default Button;