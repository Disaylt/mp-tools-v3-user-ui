<script lang="ts">
import { defineComponent } from "vue";
import type { MainCategoryView } from "../models/category.model";
import MainCategoryService from '../services/main-category.service'
import { useMainCategoryStore } from '../store/main-category.store'

export default defineComponent({
  mounted() {
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
  }
})

</script>

<template>
<div class="grid p-1">
        <div v-for="item in categories" class="col-6 p-1">
            <div class="flex flex-column justify-content-between flex-wrap border-round-md h-full p-1 bg-card shadow-4" >
                <div>
                  <h3 class="m-0 text-color">{{ item.name }}</h3>
                </div>
                <div>
                  <div class="my-2">
                    <span>{{ item.description }}</span>
                  </div>
                    <Button class="w-full" label="Выбрать" />
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>