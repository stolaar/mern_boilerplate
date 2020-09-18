import BaseError, {HttpStatusCode} from "./BaseError";

class HTTPError extends BaseError {
    constructor(name: string, httpCode = HttpStatusCode.INTERNAL_SERVER,description = 'internal server error', isOperational = true) {
        super(name, httpCode, description, isOperational);
    }
}

export default HTTPError;
