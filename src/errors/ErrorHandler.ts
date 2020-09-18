import BaseError from "./BaseError";
import {logger} from "../logger/Logger";
import {Response, Request, NextFunction} from "express";
import IErrorHandlerInterface from "../interfaces/IErrorHandler.interface.";

class ErrorHandler implements IErrorHandlerInterface {
    public handleError(err: BaseError | Error | any, req: Request, res: Response, next: NextFunction): any{
        logger.error('Error message from the centralized error-handling component', err);
        const statusCode: number = err?.httpCode || 500
        return res.status(statusCode).json(err)
    }

    public isTrustedError(error: Error) {
        if (error instanceof BaseError) {
            return error.isOperational;
        }
        return false;
    }
}
export const errorHandler = new ErrorHandler();
