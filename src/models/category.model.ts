export enum MainCategory{
    WB,
    Ozon,
    Aggregate,
    Telegram
}

export interface MainCategoryView{
    name : string;
    value : MainCategory
}