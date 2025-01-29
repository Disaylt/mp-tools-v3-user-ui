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
                description :"Объедените компании на маркетплейсах в 1 единую компанию. Упрощает управление и расширяет статистику и аналитику."
            },
            {
                name: "OZON",
                value: MainCategory.Ozon,
                component : markRaw(OzonSideBar),
                description :"Используйте автоматизацию, статистику и аналитику для улучшения продаж на Ozon."
            },
            {
                name: "WB",
                value: MainCategory.WB,
                component : markRaw(WbSideBar),
                description :"Используйте автоматизацию, статистику и аналитику для улучшения продаж на WB."
            },
            {
                name: "Telegram",
                value: MainCategory.Telegram,
                component : markRaw(TelegramSideBar),
                description :"Подписывайтесь на уведомления сервисов и селлерских компаний, а так же управлйяте инструментами и просматривайте отчеты в Telegram."
            }
        ];
    }
    
}

export default new MainCategoryService() as IMainCategoryService;