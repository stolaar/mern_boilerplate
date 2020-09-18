import {FunctionComponent} from "react";
import LoginPage from "../pages/auth/LoginPage/LoginPage";
import LandingPage from "../pages/LandingPage/LandingPage";

interface Route {
    readonly path: string;
    readonly name: string;
    component: FunctionComponent
}

export const login_route: Route = { path: "/login", name: "Login", component: LoginPage }
export const landing_page_route: Route = { path: "/", name: "Landing", component: LandingPage }


export const public_routes: Array<Route> = [login_route, landing_page_route]
