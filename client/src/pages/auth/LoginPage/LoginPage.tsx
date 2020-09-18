import React from "react";
import {useDispatch} from "react-redux";
import {loginWithCredentials} from "./services/authActions";
import useForm from "../../../hooks/useForm";

function LoginPage() {
    const dispatch = useDispatch()

    const onLoginClick = (e: any) => {
        e.preventDefault()
        dispatch(loginWithCredentials(values))
    }

    const { values, handleSubmit, handleChange } = useForm({ email: '', password: '' }, onLoginClick)

    return <div>
        <form onSubmit={handleSubmit}>
        <input name='email' value={values.email} onChange={handleChange} />
        <input name='password' type='password' value={values.email} onChange={handleChange} />
        <button type='submit' >Login</button>
        </form>
    </div>
}

export default LoginPage
