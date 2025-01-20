<template>
    <div class="flex flex-column align-content-center justify-content-center flex-wrap h-screen gap-2">
        <Button @click="appThemeStore.toggle()" :icon="appThemeStore.isDark ? 'pi pi-moon' : 'pi pi-sun'"
            aria-label="Filter" variant="text" severity="contrast" />
        <div style="width: 300px; height: 500px;" class="shadow-3 border-round-lg bg-card flex flex-column my-1">
            <Tabs v-model:value="authTabStore.path" class="mb-2" scrollable>
                <TabList class="border-round-lg">
                    <Tab @click="router.push(tab.route)" class="w-6" v-for="tab in items" :key="tab.key" :value="tab.route">{{ tab.title }}</Tab>
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
import authTabService from "../services/auth-tab.service";
import { useAuthTabStore } from "../store/auth-tab.store";

export default defineComponent({
    setup() {
        const appThemeStore = useAppThemeStore();
        const router = useRouter();
        const authTabStore = useAuthTabStore();

        const items = authTabService.getCategories();

        authTabStore.set(router.currentRoute.value.fullPath)

        return {
            appThemeStore,
            router,
            items,
            authTabStore
        }
    },
    components: {
    },
    methods:{

    }
});
</script>

<style lang="scss"></style>