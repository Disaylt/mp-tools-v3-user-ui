<template>
    <div class="bg-card">
        <Header></Header>
    </div>
    <div class="main flex flex-row flex-wrap">
        <div class="side-bar hidden md:block fadeinleft animation-duration-100 main overflow-auto p-2">
            <div class="bg-card border-round-xl">
                <SideBar></SideBar>
            </div>
        </div>
        <div class="flex-grow-1 main overflow-auto">
            <div class="body p-2">
                <RouterView />
            </div>
            <div class="footer mx-2 bg-card border-noround-bottom border-round-xl">
                <router-link to="/login">Home</router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBar from './SideBar.vue';
import Header from './Header.vue'

export default defineComponent({
    components: {
        Header,
        SideBar
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