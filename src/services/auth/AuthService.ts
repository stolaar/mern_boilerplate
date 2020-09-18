import ValidationService from "../validation/ValidationService";

interface ILoginCredentials {
    email: string;
    password: string;
}

interface ILoginResponse {
    accessToken: string;
    refreshToken: string;
}

class AuthService {

    constructor(private validationService: ValidationService) {}

    login(credentials: ILoginCredentials): ILoginResponse | Error | any {
        const {errors, isValid} = this.validationService.login(credentials)
        if(!isValid) throw new Error(JSON.stringify(errors))

        return {accessToken: "Bearer accessToken", refreshToken: "Bearer refreshToken"}
    }
}

export default AuthService
