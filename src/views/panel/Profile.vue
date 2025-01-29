<template>
    <Button class="" @click="logOut()" label="Выйти" variant="outlined"  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../../store/user.store';
import userService from '../../services/user.service';


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
        async logOut() {
            await userService.logout()
                .then(() => {
                    this.userStorage.clear();
                    this.router.push("/auth/login")
                })
        }
    },
    components: {
    }
});
</script>

<style lang="scss"></style>