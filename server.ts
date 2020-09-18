import App from './app'

import * as bodyParser from 'body-parser'
import loggerMiddleware from './src/middlewares/logger'

import authController from './src/controllers/auth/index'
import connectDb from "./src/models/db";
import mongoURI from "./src/models/config";
import {errorHandler} from "./src/errors/ErrorHandler";

const app = new App({
    port: process.env.PORT || 5000,
    dbConnectionHandler: connectDb,
    dbURI: mongoURI,
    controllers: [
        authController
    ],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({extended: true}),
        loggerMiddleware
    ],
    errorHandler
})

app.listen()
