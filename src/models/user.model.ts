import type { HttpMessageErrors } from "./http-request.model";

export interface IdentityDetails{
    email: string;
    name: string;
}

export interface AuthDetails{
    sessionToken : string;
    authToken : string;
}

export interface NewUser{
    email : string;
    login: string;
    password: string;
}

export interface RegisterErrorMessages extends HttpMessageErrors{
    Email : string[];
    Login: string[];
    Password: string[]
}