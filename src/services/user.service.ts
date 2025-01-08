import type { AxiosResponse } from "axios";
import apiService from "../core/api.service";

interface IUserServcie{
    getInfo() : Promise<AxiosResponse<IdentityDetails>>;
    login() : Promise<AxiosResponse<AuthDetails>>;
    register() : Promise<AxiosResponse<AuthDetails>>;
}


interface IdentityDetails{
    email: string;
    name: string;
}

interface AuthDetails{
    sessionToken : string;
    authToken : string;
}

class UserServcie implements IUserServcie{
    login(): Promise<AxiosResponse<AuthDetails>> {
        return apiService.get<AuthDetails>("/identity/v1/user/login");
    }
    register(): Promise<AxiosResponse<AuthDetails>> {
        return apiService.post<AuthDetails>("/identity/v1/user/register");
    }
    getInfo(): Promise<AxiosResponse<IdentityDetails>>{
        return apiService.post<IdentityDetails>("/identity/v1/user/details");
    }

}

export default new UserServcie() as IUserServcie;