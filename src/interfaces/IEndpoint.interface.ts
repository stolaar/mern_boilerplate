import {RequestHandler} from "express";

type Method = 'get' | 'post' | 'put' | 'patch' | 'delete'

interface IEndpoint {
    name?: string;
    path: string;
    requestHandler: RequestHandler;
    method: Method
}

export default IEndpoint
