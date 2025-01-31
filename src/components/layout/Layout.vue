<template>
    <div class="bg-card">
        <Header></Header>
    </div>
    <div class="main flex flex-row">
        <div v-if="sideBarStore.isShowStatic && mainCategoryStore.selectedValue !== null" class="side-bar hidden md:block fadeinleft animation-duration-100 overflow-auto main p-2">
            <div class="bg-card border-round-xl">
                <SideBar></SideBar>
            </div>
        </div>
        <div class="flex-grow-1 w-full main overflow-auto">
            <div class="body p-2">
                <RouterView />
            </div>
            <div class="footer mx-2 bg-card border-noround-bottom border-round-xl">
                <router-link to="/login">Home</router-link>
            </div>
        </div>
    </div>
    <Drawer v-model:visible="sideBarStore.isShowDraw" header="Drawer">
        <SideBar></SideBar>
    </Drawer>
    <Dialog v-model:visible="isShowMainCategoryTable" :draggable="false" :closeOnEscape="false" :closable="false"
    modal class="mx-2" :style="{ width: '50rem' }" style="background:transparent; border:none" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }" >
     <div class="p-2">
      <MainCategoriesTable></MainCategoriesTable>
     </div>
  </Dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBar from './SideBar.vue';
import Header from './Header.vue'
import { useSideBarStore } from '../../store/side-bar.store';
import { useMainCategoryStore } from '../../store/main-category.store';
import MainCategoriesTable from '../MainCategoriesTable.vue';

export default defineComponent({
    components: {
        Header,
        SideBar,
        MainCategoriesTable
    },
    setup() {

        const sideBarStore = useSideBarStore();
        const mainCategoryStore = useMainCategoryStore();
        
        return{
            sideBarStore,
            mainCategoryStore
        }
    },
    data: () => {
        return {
            visibleDrawSideMenu : false as boolean
        }
    },
    computed: {
        isShowMainCategoryTable(){
            return this.mainCategoryStore.selectedValue === null;
        }
    }
});
</script>

<style lang="scss">

.body{
    min-height: calc(100vh - 110px);
}

.header {
    height: 60px;
}

.footer {
    height: 50px;
}

.main{
    height: calc(100vh - 60px);
}

.side-bar{
    width: 250px;
}
</style>