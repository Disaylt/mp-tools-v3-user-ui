<script lang="ts">
import { defineComponent } from "vue";
import MainCategoriesTable from "./components/MainCategoriesTable.vue";
import { useMainCategoryStore } from "./store/main-category.store";

export default defineComponent({
  mounted() {
    this.$primevue.config.ripple = true;
  },
  setup() {
    const mainCategoryStore = useMainCategoryStore();

    return {
      mainCategoryStore
    }
  },
  data() {
    return {
    }
  },
  components: {
    MainCategoriesTable
  },
  computed :{
    
  }
})

</script>

<template>
  <RouterView />
</template>

<style scoped></style>
