import axios from 'axios'
import {Action, ActionCreator, Dispatch} from "redux";
import {ILoginResponse} from "../../../../interfaces/ILoginResponse.interface";
import {SET_USER} from "../../../../store/actionTypes";
import {IUser} from "../../../../interfaces/IUser.interface";
import jwtDecode from 'jwt-decode'
import {ThunkAction} from "redux-thunk";
import {login_endpoint} from "../../../../config/api_endpoints";
import {ILoginCredentials} from "../../../../interfaces/ILoginCredentials.interface";
import {setErrors} from "../../../../store/actions/errorsActions";

export interface ILoginAction extends Action<typeof SET_USER> {
    payload: IUser
}

export const loginWithCredentials: ActionCreator<ThunkAction<Promise<ILoginAction>, IUser, null, ILoginAction>> | ActionCreator<void>
    = (credentials: ILoginCredentials) => async (dispatch: Dispatch<ILoginAction | any>) => {
    try {
        const result: ILoginResponse = await axios.post(login_endpoint.path, credentials)
        const token = result.accessToken.split(" ")[1]
        const decoded: IUser = jwtDecode(token)

        return dispatch(setUser(decoded))
    } catch (err) {
        dispatch(setErrors(err))
    }
}

export const setUser: ActionCreator<ILoginAction> = (payload: IUser) => ({type: SET_USER, payload})
