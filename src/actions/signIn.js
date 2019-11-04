import {Types} from "./types";


export const isSignInCardOpn = (isOpen) =>({
    type: Types.TOGGLE_SIGN_IN,
    payload: isOpen
});
export const addSignOpenedPath = (path) =>({
    type: Types.ADD_SIGN_IN_OPENED_PATH,
    payload: path
});
