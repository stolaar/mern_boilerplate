import IEndpoint from "./IEndpoint.interface";

interface IControllerBase {
    initRoutes(): any,
    endpoints: Array<IEndpoint>
}

export default IControllerBase
