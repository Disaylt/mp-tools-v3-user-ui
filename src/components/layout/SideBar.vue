<template>
    <div class="flex flex-column gap-2 p-2">
        <component :is="mainCategoryStore.selectedValue?.component"></component>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import WbSideBar from './side-contents/WbSideBar.vue';
import OzonSideBar from './side-contents/OzonSideBar.vue';
import TelegramSideBar from './side-contents/TelegramSideBar.vue';
import AggregateSideBar from './side-contents/AggregateSideBar.vue';
import { useMainCategoryStore } from '../../store/main-category.store';
import MainCategoryService from '../../services/main-category.service';
import type { MainCategoryView } from '../../models/category.model';

export default defineComponent({
    data() {
        return {
            categories: MainCategoryService.getCategories() as MainCategoryView[],
        };
    },
    setup() {
        const mainCategoryStore = useMainCategoryStore();

        return {
            mainCategoryStore
        }
    },
    components:{
        WbSideBar,
        OzonSideBar,
        TelegramSideBar,
        AggregateSideBar
    },
    computed:{
    },
    methods:{
    }
});
</script>

<style>
</style>