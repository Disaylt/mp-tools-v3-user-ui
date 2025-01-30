import type { AxiosResponse } from "axios";
import type { SelectModel } from "../models/seed/select.model";
import type { UserNotification } from "../models/notification.model";

interface IUserNotificationService{
    getCategoriesUnfo() : Promise<AxiosResponse<SelectModel<number>[]>>;
    getNotifications(take : number, skip : number, category : number | null) : Promise<AxiosResponse<UserNotification[]>>;
    markAsReadAll() : Promise<AxiosResponse>;
}

class UserNotificationService implements IUserNotificationService{

    getCategoriesUnfo(): Promise<AxiosResponse<SelectModel<number>[]>> {
        throw new Error("Method not implemented.");
    }
    getNotifications(take: number, skip: number, category: number | null): Promise<AxiosResponse<UserNotification[]>> {
        throw new Error("Method not implemented.");
    }
    markAsReadAll(): Promise<AxiosResponse> {
        throw new Error("Method not implemented.");
    }
}

export default new UserNotificationService() as IUserNotificationService;