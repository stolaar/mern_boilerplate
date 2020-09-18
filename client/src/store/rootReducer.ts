import { combineReducers } from 'redux'
import errors from './reducers/errorsReducer'
import auth from "../pages/auth/LoginPage/services/authReducer"

export default combineReducers({
    errors,
    auth
})
