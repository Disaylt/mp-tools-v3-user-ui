import type { HttpMessageErrors } from "./http-request.model";

export interface IdentityDetails{
    email: string;
    name: string;
    id: string;
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

export interface AuthResult{
    authDetails: AuthDetails;
    identityDetails: IdentityDetails;
}

export interface Login{
    email: string;
    password: string;
}

export interface LoginErrorMessages extends HttpMessageErrors{
    Email : string[];
    Password: string[]
}

export interface RegisterErrorMessages extends HttpMessageErrors{
    Email : string[];
    Login: string[];
    Password: string[]
}