<template>
    <div class="header flex flex-row px-2 border-bottom-1 border-color">
        <div class="flex align-items-center gap-1" style="width: 230px;">
            <div class="flex-none">
                <Button icon="pi pi-bars" aria-label="Filter" variant="outlined" severity="contrast" />
            </div>
            <div class="flex-grow-1">
                <Select :fluid="true" v-model="selectCategory" :options="categories" optionLabel="name" placeholder="Сервисы"
                style="max-width: 200px;" 
                :overlay-style="{ 'max-width' : '100vw'}" />
            </div>
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
                        aria-label="Filter" variant="outlined" severity="contrast" />
                    <Button icon="pi pi-bell" aria-label="Filter" variant="outlined" severity="contrast" />
                    <Button icon="pi pi-user" aria-label="Filter" variant="outlined" severity="contrast" />
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
                        <Button type="button" label="Уведомления" icon="pi pi-bell" badge="99+"  />
                        <Button type="button" label="Профиль" icon="pi pi-user" />
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

export default defineComponent({
    components: {
    },
    setup() {
        const appThemeStore = useAppThemeStore();
        const smallMenu = ref<PopoverMethods | null>(null);

        return {
            appThemeStore,
            smallMenu
        }
    },
    data() {
        return {
            categories: MainCategoryService.getCategories() as MainCategoryView[],
            selectCategory: null as MainCategoryView | null,
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