import { defineStore, acceptHMRUpdate } from 'pinia'


export const useAppThemeStore = defineStore({
    id: 'appTheme',
    state: () => ({
        isDark : true as boolean,
    }),
    actions: {
        toggle(){
            this.isDark = !this.isDark;
            document.documentElement.classList.toggle("prime-dark")
        }
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAppThemeStore, import.meta.hot))
  }