<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  mounted() {
    this.$primevue.config.ripple = true;
  },
  components: {
  }
})

</script>

<template>
  <RouterView />
</template>

<style scoped>

</style>
