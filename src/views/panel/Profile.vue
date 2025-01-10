<template>
    <div class="flex flex-column align-content-center justify-content-center flex-wrap h-screen gap-2">
        <Button @click="signOut()" label="Выйти" severity="help" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../../store/user.store';


export default defineComponent({
    setup() {
        const router = useRouter();
        const userStorage = useUserStore();

        return {
            router,
            userStorage
        }
    },
    methods: {
        signOut(){
            this.userStorage.clear();
            this.router.push("/auth/login")
        }
    },
    components: {
    }
});
</script>

<style lang="scss"></style>