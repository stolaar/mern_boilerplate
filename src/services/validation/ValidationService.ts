import isEmpty from 'lodash.isempty'

interface ILoginCredentials {
    email: string;
    password: string;
}

interface ILoginErrors {
    email?: string;
    password?: string;
}

interface ILoginValidationResponse {
    errors: ILoginErrors;
    isValid: boolean;
}

class ValidationService {
    login(credentials: ILoginCredentials): ILoginValidationResponse {
        const errors: ILoginErrors = {}
        const {email, password} = credentials

        if(isEmpty(email)) {
            errors.email = 'Email cannot be empty'
        }

        if(isEmpty(password)) {
            errors.email = 'Password cannot be empty'
        }

        return {errors, isValid: isEmpty(errors)}

    }
}

export default ValidationService
