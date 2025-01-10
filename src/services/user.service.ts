import type { AxiosResponse } from "axios";
import apiService from "../core/api.service";
import type { AuthDetails, IdentityDetails, NewUser } from "../models/user.model";

interface IUserServcie{
    getInfo() : Promise<AxiosResponse<IdentityDetails>>;
    login() : Promise<AxiosResponse<AuthDetails>>;
    register(newUser : NewUser) : Promise<AxiosResponse<AuthDetails>>;
}

class UserServcie implements IUserServcie{
    login(): Promise<AxiosResponse<AuthDetails>> {
        return apiService.post<AuthDetails>("/identity/v1/user/login");
    }
    register(newUser : NewUser): Promise<AxiosResponse<AuthDetails>> {
        return apiService.post<AuthDetails>("/identity/v1/user/register", newUser);
    }
    getInfo(): Promise<AxiosResponse<IdentityDetails>>{
        return apiService.get<IdentityDetails>("/identity/v1/user/details");
    }

}

export default new UserServcie() as IUserServcie;