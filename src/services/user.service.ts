import type { AxiosResponse } from "axios";
import apiService from "../core/api.service";
import type { AuthResult, IdentityDetails, Login, NewUser } from "../models/user.model";

interface IUserServcie{
    getInfo() : Promise<AxiosResponse<IdentityDetails>>;
    login(data : Login) : Promise<AxiosResponse<AuthResult>>;
    register(newUser : NewUser) : Promise<AxiosResponse<AuthResult>>;
    logout() : Promise<AxiosResponse>;
}

class UserServcie implements IUserServcie{
    logout(): Promise<AxiosResponse> {
        return apiService.put("/auth/v1/user/logout")
    }
    login(data : Login): Promise<AxiosResponse<AuthResult>> {
        return apiService.post<AuthResult>("/auth/v1/user/login", data);
    }
    register(newUser : NewUser): Promise<AxiosResponse<AuthResult>> {
        return apiService.post<AuthResult>("/auth/v1/user/register", newUser);
    }
    getInfo(): Promise<AxiosResponse<IdentityDetails>>{
        return apiService.get<IdentityDetails>("/identity/v1/user/details");
    }

}

export default new UserServcie() as IUserServcie;