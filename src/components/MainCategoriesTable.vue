<script lang="ts">
import { defineComponent } from "vue";
import type { MainCategoryView } from "../models/category.model";
import MainCategoryService from '../services/main-category.service'
import { useMainCategoryStore } from '../store/main-category.store'

export default defineComponent({
  setup() {
    const mainCategoryStore = useMainCategoryStore();

    return {
      mainCategoryStore
    }
  },
  data() {
    return {
      categories: MainCategoryService.getCategories() as MainCategoryView[],
    }
  },
  components: {
  },
  methods:{
    selectCategory(category : MainCategoryView) {
      this.mainCategoryStore.selectedValue = category;
    }
  }
})

</script>

<template>
<div class="grid">
        <div v-for="item in categories" class="col-12 md:col-6">
            <div @click="selectCategory(item)" class="flex mp-text-color-default 
            select-card flex-column justify-content-between 
            flex-wrap border-round-xl h-full p-1 bg-card shadow-4 cursor-pointer
            border-1 surface-border hover:border-primary" >
                <div>
                  <h3 class="m-0">{{ item.name }}</h3>
                </div>
                <div>
                  <div class="my-2">
                    <span>{{ item.description }}</span>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.select-card{
  transition: transform 0.2s ease;
}

.select-card:hover{
  color: var(--text-color-active);
  transform: scale(1.05);
}
</style>