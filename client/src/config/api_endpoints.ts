export type HTTPMethod = 'post' | 'get'

interface IEndpoint {
    path: string;
    method: HTTPMethod;
}

export const login_endpoint: IEndpoint = {path: "/api/auth/login", method: 'post'}
