import {IReduxAction} from "../../../../interfaces/IReduxAction.interface";
import {SET_USER} from "../../../../store/actionTypes";
import isEmpty from 'lodash.isempty'

const initialState = {
    user: {},
    isAuthenticated: false
}

export default (state = initialState, action: IReduxAction) => {
    switch (action.type) {
        case SET_USER:
            return {...state, isAuthenticated: !isEmpty(action.payload), user: action.payload};
        default:
            return state;
    }
};
