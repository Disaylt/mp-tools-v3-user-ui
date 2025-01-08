<template>
    <div class="flex flex-column align-content-center justify-content-center flex-wrap h-screen gap-2">
        <Button @click="appThemeStore.toggle()" :icon="appThemeStore.isDark ? 'pi pi-moon' : 'pi pi-sun'"
            aria-label="Filter" variant="text" severity="contrast" />
        <div style="width: 300px; height: 500px;" class="shadow-3 border-round-lg bg-card flex flex-column">
            <Tabs :value="selectIrem" class="mb-2" scrollable>
                <TabList class="border-round-lg">
                    <Tab @click="router.push(tab.route)" class="w-6" v-for="tab in items" :key="tab.route" :value="tab.value">{{ tab.label }}</Tab>
                </TabList>
            </Tabs>
            <RouterView />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useAppThemeStore } from "../store/app-theme.store";
import { useRouter } from "vue-router";

export default defineComponent({
    setup() {
        const appThemeStore = useAppThemeStore();
        const router = useRouter();
        const items = [
                { route: '/auth/login', value: "login", label: 'Авторизация' },
                { route: '/auth/register', value: "register", label: 'Регистрация' }
            ];
        const selectIrem = items.find(x=> x.route === router.currentRoute.value.fullPath)?.value ?? "login";

        return {
            appThemeStore,
            router,
            items,
            selectIrem
        }
    },
    components: {
    },
    methods:{

    }
});
</script>

<style lang="scss"></style>