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
  <div class="flex flex-column flex-wrap gap-1">
    <div v-for="item in categories" class="flex-1" style="height: 200px; background:red">
        <div>{{ item.name }}</div>
        <div><h2>{{ item.description }}</h2></div>
      </div>
  </div>
</template>

<style></style>