import express, {NextFunction, Request, Response} from 'express'
import IControllerBase from '../../interfaces/IControllerBase.interface'
import AuthService from "../../services/auth/AuthService";
import IEndpoint from "../../interfaces/IEndpoint.interface";

class AuthController implements IControllerBase {
    public basePath = '/api/auth'
    public router = express.Router()

    public endpoints: Array<IEndpoint> = [
        {name: "Test", path: "/", requestHandler: this.test.bind(this), method: "get"},
        {name: "LoginPage", path: "/login", requestHandler: this.login.bind(this), method: 'post'}
    ]

    constructor(private authService: AuthService) {
        this.initRoutes()
    }

    public initRoutes() {
        this.endpoints.forEach((endpoint: IEndpoint) => {
            this.router[endpoint.method](this.basePath + endpoint.path, endpoint.requestHandler)
        })
    }

    test(req: Request, res: Response, next: NextFunction) {
        try {
            return res.status(200).send({message: "OK"})
        } catch (err) {
            next(err)
        }
    }

    login(req: Request, res: Response, next: NextFunction) {
        try {
            const {email, password} = req.body
            const result = this.authService.login({email, password})
            return res.status(200).send(result)
        } catch (err) {
            next(err)
        }
    }
}

export default AuthController
