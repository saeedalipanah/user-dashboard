import { defineStore } from 'pinia'

export const useLocaleStore = defineStore('locale', () => {
  const setLocale = (payload :string) => {
    // save locale to storage
    localStorage.setItem('locale', payload)
    setTimeout(()=>{
      //assign class to document (class="en or fa")
      const doc = document.documentElement
      payload === 'fa' ? doc.classList.add(payload) : doc.classList.remove('fa');
    }, 10)
  }
 
  return {  setLocale }
})
