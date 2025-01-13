import { defineStore, acceptHMRUpdate } from 'pinia'

export const useSideBarStore = defineStore("sideBar", {
    state: () => ({
        isShow : true
    }),
    actions: {
        toggle(){
            this.isShow = !this.isShow;
        }
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useSideBarStore, import.meta.hot))
  }