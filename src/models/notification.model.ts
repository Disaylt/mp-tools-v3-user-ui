export interface UserNotification{
    message : string,
    categoryId : number | null,
    categoryView : string | null,
    created : Date,
    title : string
}