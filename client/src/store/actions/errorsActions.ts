import {Action, ActionCreator, Dispatch} from "redux";
import {SET_ERRORS} from "../actionTypes";
import {ThunkAction} from "redux-thunk";

export interface ISetErrorAction extends Action<typeof SET_ERRORS>{
    payload: any
}

export const setErrors: ActionCreator<ThunkAction<any, any, any, ISetErrorAction>> = (err: any) => (dispatch: Dispatch) => (
    dispatch({type: SET_ERRORS, payload: err})
)
