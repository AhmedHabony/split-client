import {Types} from "../actions/types";

const INITIAL_STATE  ={
    isOpen: false,
    openedPath: '/home'
};

const signInReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.TOGGLE_SIGN_IN:
            return{
                ...state,
                isOpen: action.payload
            };
        case Types.ADD_SIGN_IN_OPENED_PATH:
            return {
                ...state,
                openedPath: action.payload
            };
        default:
            return state
    }
}
export default signInReducer;