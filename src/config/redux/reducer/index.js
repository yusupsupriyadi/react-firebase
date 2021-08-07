//FIXME REDUX: Reducer
const initialState = {
    popup: false,
    isLogin: false,
    isLoading: false,
    isSuccess: false,

}

const reducer = (state = initialState, action) => {
    if (action.type === 'CHANGE_POPUP') {
        return {
            ...state,
            popup: action.value
        }
    }
    if (action.type === 'CHANGE_USER') {
        return {
            ...state,
            user: action.value
        }
    }
    if (action.type === 'CHANGE_LOADING') {
        return {
            ...state,
            isLoading: action.value
        }
    }
    return state;
}

export default reducer;