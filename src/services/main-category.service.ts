import { MainCategory, type MainCategoryView } from "../models/category.model";

interface IMainCategoryService{
    getCategories() : MainCategoryView[]
}

class MainCategoryService implements IMainCategoryService{

    getCategories(): MainCategoryView[] {
        return [
            {
                name: "Агрегатор",
                value: MainCategory.Aggregate
            },
            {
                name: "OZON",
                value: MainCategory.Ozon
            },
            {
                name: "WB",
                value: MainCategory.WB
            },
            {
                name: "Telegram",
                value: MainCategory.Telegram
            }
        ];
    }
    
}

export default new MainCategoryService() as IMainCategoryService;