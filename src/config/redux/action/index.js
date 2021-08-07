import firebase from "../../firebase";

//FIXME REDUX: Action
export const registerUserApi = (data) => (dispatch) => {
    dispatch({
        type: 'CHANGE_LOADING',
        value: true
    })
    return (
        firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
            .then(res => {
                console.log(res);
                dispatch({
                    type: 'CHANGE_LOADING',
                    value: false
                })
            })
            .catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
                dispatch({
                    type: 'CHANGE_LOADING',
                    value: false
                })
            })
    )
}