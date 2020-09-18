import { useState } from 'react'

const useForm = (initialValues: any, callback: CallableFunction) => {
    const [values, setValues] = useState(initialValues)

    const handleSubmit = (e: any) => {
        e && e.preventDefault()
        callback(e)
    }

    const handleChange = (e: any)  => {
        e.persist()
        setValues((val: any) => ({ ...val, [e.target.name]: e.target.value }))
    }

    return {
        handleSubmit,
        handleChange,
        values,
        setValues
    }
}

export default useForm
