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
                component : markRaw(AggregateSideBar),
                description :"Позволяет объединить компании на маркетплейсах в 1 единую компанию. Упрощает управление и просмотр аналитики и статистики."
            },
            {
                name: "OZON",
                value: MainCategory.Ozon,
                component : markRaw(OzonSideBar),
                description :"Прдоставляет инструменты для работы с данными маркетплейсом."
            },
            {
                name: "WB",
                value: MainCategory.WB,
                component : markRaw(WbSideBar),
                description :"Прдоставляет инструменты для работы с данными маркетплейсом."
            },
            {
                name: "Telegram",
                value: MainCategory.Telegram,
                component : markRaw(TelegramSideBar),
                description :"Позволяет подписаться на события ваших компаний, а так же перенести управление сервисами в чат бота."
            },
            {
                name: "OZON",
                value: MainCategory.Ozon,
                component : markRaw(OzonSideBar),
                description :"Прдоставляет инструменты для работы с данными маркетплейсом."
            },
            {
                name: "WB",
                value: MainCategory.WB,
                component : markRaw(WbSideBar),
                description :"Прдоставляет инструменты для работы с данными маркетплейсом."
            },
            {
                name: "Telegram",
                value: MainCategory.Telegram,
                component : markRaw(TelegramSideBar),
                description :"Позволяет подписаться на события ваших компаний, а так же перенести управление сервисами в чат бота."
            }
        ];
    }
    
}

export default new MainCategoryService() as IMainCategoryService;