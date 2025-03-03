import { useTitle } from "@vueuse/core";
import { defineStore } from "pinia";

export const useHeaderStore = defineStore("header", {
  state: () => ({
    header: 'ZVMS 4',
    base: 'ZVMS 4'
  }),
  actions: {
    setHeader(header: string) {
      // this.header = this.base + '｜' + header
      useTitle('ZVMS' + ' - ' + header.replaceAll('｜', ' - '))
    }
  }
})
