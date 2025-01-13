import AggregateSideBar from "../components/layout/side-contents/AggregateSideBar.vue";
import OzonSideBar from "../components/layout/side-contents/OzonSideBar.vue";
import TelegramSideBar from "../components/layout/side-contents/TelegramSideBar.vue";
import WbSideBar from "../components/layout/side-contents/WbSideBar.vue";
import { MainCategory, type MainCategoryView } from "../models/category.model";


interface IMainCategoryService{
    getCategories() : MainCategoryView[]
}

class MainCategoryService implements IMainCategoryService{

    getCategories(): MainCategoryView[] {
        return [
            {
                name: "Агрегатор",
                value: MainCategory.Aggregate,
                component : AggregateSideBar
            },
            {
                name: "OZON",
                value: MainCategory.Ozon,
                component : OzonSideBar
            },
            {
                name: "WB",
                value: MainCategory.WB,
                component : WbSideBar
            },
            {
                name: "Telegram",
                value: MainCategory.Telegram,
                component : TelegramSideBar
            }
        ];
    }
    
}

export default new MainCategoryService() as IMainCategoryService;