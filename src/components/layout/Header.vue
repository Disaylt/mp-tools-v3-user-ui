<template>
    <div class="header flex flex-row px-2 border-bottom-1 border-color">
        <div class="flex align-items-center gap-1" style="width: 230px;">
            <div class="flex-none">
                <Button :disabled="mainCategoryStore.selectedValue === null" 
                @click="sideBarStore.toggle()"
                :icon="sideBarStore.isShowStatic ? 'pi pi-bars' : 'pi pi-ellipsis-v'"
                aria-label="Filter" 
                variant="outlined" />
            </div>
            
            <FloatLabel class="w-full md:w-56" variant="on">
                <Select :fluid="true" v-model="mainCategoryStore.selectedValue" :options="categories" optionLabel="name" placeholder="Сервисы"
                style="max-width: 200px;" 
                :overlay-style="{ 'max-width' : '100vw'}" />
                <label for="on_label">Категория</label>
            </FloatLabel>
            <!-- <div class="flex-grow-1">
                <Select :fluid="true" v-model="mainCategoryStore.selectedValue" :options="categories" optionLabel="name" placeholder="Сервисы"
                style="max-width: 200px;" 
                :overlay-style="{ 'max-width' : '100vw'}" />
            </div> -->
        </div>
        <div class="flex flex-grow-1 flex flex-row-reverse align-items-center gap-1">
            <div class="hidden md:block">
                <div class="flex flex-row gap-1">
                    <Chip class="overflow-hidden">
                        <i class="pi pi-wallet" style="font-size: 1rem"></i>
                        <label class="overflow-hidden text-overflow-clip">{{ getMoneyAsCurrencyString }}</label>
                        <label>р.</label>
                    </Chip>
                    <Button @click="appThemeStore.toggle()" :icon="appThemeStore.isDark ? 'pi pi-moon' : 'pi pi-sun'"
                        aria-label="Filter" variant="outlined" />
                    <Button @click="pushToAlerts()" icon="pi pi-bell" aria-label="Filter" variant="outlined"  />
                    <Button @click="pushToProfile()" icon="pi pi-user" aria-label="Filter" variant="outlined"  />
                </div>
            </div>
            <div class="flex flex-row gap-1 block md:hidden">
                <Button @click="appThemeStore.toggle()" :icon="appThemeStore.isDark ? 'pi pi-moon' : 'pi pi-sun'"
                    aria-label="Filter" variant="outlined" severity="contrast" />
                <Button @click="opentMenu($event)" icon="pi pi-ellipsis-v" aria-label="Filter" variant="outlined"
                    severity="contrast" />
                <Popover ref="smallMenu">
                    <div class="flex flex-column gap-2">
                        <Chip class="flex justify-content-center  overflow-hidden w-full">
                            <i class="pi pi-wallet" style="font-size: 1rem"></i>
                            <label class="overflow-hidden text-overflow-clip">{{ getMoneyAsCurrencyString }}</label>
                            <label>р.</label>
                        </Chip>
                        <Button @click="pushToAlerts()" type="button" label="Уведомления" icon="pi pi-bell" badge="99+"  />
                        <Button @click="pushToProfile()" type="button" label="Профиль" icon="pi pi-user" />
                    </div>
                </Popover>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import MainCategoryService from '../../services/main-category.service';
import type { MainCategoryView } from '../../models/category.model';
import { useAppThemeStore } from '../../store/app-theme.store';
import type { PopoverMethods } from 'primevue/popover';
import { useSideBarStore } from '../../store/side-bar.store';
import { useRouter } from 'vue-router';
import { useMainCategoryStore } from '../../store/main-category.store';

export default defineComponent({
    components: {
    },
    setup() {
        const appThemeStore = useAppThemeStore();
        const sideBarStore = useSideBarStore();
        const smallMenu = ref<PopoverMethods | null>(null);
        const router = useRouter();
        const mainCategoryStore = useMainCategoryStore();

        return {
            mainCategoryStore,
            sideBarStore,
            appThemeStore,
            smallMenu,
            router
        }
    },
    data() {
        return {
            categories: MainCategoryService.getCategories() as MainCategoryView[],
            money: 0 as number
        };
    },
    computed: {
        getMoneyAsCurrencyString() {
            return this.money.toLocaleString('ru');
        }
    },
    methods: {
        opentMenu(event: Event) {
            this.smallMenu?.toggle(event)
        },
        pushToProfile(){
            this.router.push("/panel/profile")
        },
        pushToAlerts(){
            this.router.push("/panel/alerts")
        }
    }
});

</script>

<style>
.brand-column {
    width: 250px;
}

.border-color{
    border-color: #5f96a196 !important;
}
</style>