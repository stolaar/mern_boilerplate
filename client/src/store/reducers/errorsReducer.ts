import {IReduxAction} from "../../interfaces/IReduxAction.interface";
import {SET_ERRORS} from "../actionTypes";

export default (state = {}, action: IReduxAction) => {
    switch (action.type) {
        case SET_ERRORS:
            return action.payload;
        default:
            return {};
    }
};
