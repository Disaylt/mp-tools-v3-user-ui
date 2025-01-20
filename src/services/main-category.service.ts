import { markRaw } from "vue";
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
                component : markRaw(AggregateSideBar)
            },
            {
                name: "OZON",
                value: MainCategory.Ozon,
                component : markRaw(OzonSideBar)
            },
            {
                name: "WB",
                value: MainCategory.WB,
                component : markRaw(WbSideBar)
            },
            {
                name: "Telegram",
                value: MainCategory.Telegram,
                component : markRaw(TelegramSideBar)
            }
        ];
    }
    
}

export default new MainCategoryService() as IMainCategoryService;