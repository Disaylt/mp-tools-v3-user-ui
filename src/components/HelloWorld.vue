<script lang="ts">
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import { defineComponent } from 'vue';

export default defineComponent({
  components:{
    Button,
    InputText
  },
  data() {
    return {
      text : "" as string
    }
  },
  methods: {
    toggleThemeMode(){
      document.documentElement.classList.toggle("prime-dark");
    }
  }
})

</script>

<template>
  <Button label="Toggle theme" @click="toggleThemeMode()" />
  <div class="grid">
    <div class="col">
        <div class="text-center p-3 border-round-sm bg-primary font-bold">
          <Button label="Submit" />
        </div>
    </div>
    <div class="col">
        <div class="text-center p-3 border-round-sm bg-primary font-bold ">
          <Button label="Submit" />
        </div>
    </div>
    <div class="col">
        <div class="text-center p-3 border-round-sm bg-primary font-bold ">
          <Button label="Submit" />
        </div>
    </div>
</div>
<div>
  <InputText  type="text" v-model="text" />
</div>
</template>

<style scoped>

</style>
