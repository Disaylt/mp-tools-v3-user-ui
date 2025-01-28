<script lang="ts">
import { defineComponent } from "vue";
import MainCategoriesTable from "./components/MainCategoriesTable.vue";

export default defineComponent({
  mounted() {
    this.$primevue.config.ripple = true;
  },
  data() {
    return {
      isShowModal: true
    }
  },
  components: {
    MainCategoriesTable
  }
})

</script>

<template>
  <RouterView />
  <Dialog v-model:visible="isShowModal" :draggable="false" :closeOnEscape="false" :closable="false"
    modal class="mx-2" :style="{ width: '50rem' }" style="background:transparent; border:none" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }" >
     <div class="p-2">
      <MainCategoriesTable></MainCategoriesTable>
     </div>
  </Dialog>
</template>

<style scoped></style>
