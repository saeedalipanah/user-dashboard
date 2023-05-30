import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useNotifyStore } from './notify'
const store = useNotifyStore()
export const useProfileStore = defineStore('profile', () => {
  const username = ref<string>('')
  const setUsername = (payload: string) => {
    // save username in storage then show the success notify
    username.value = payload
    localStorage.setItem('username', username.value)
    getUserName()
    store.openNotification('success', 'Welcome', 'Your name saved successfuly.')
  }
  const getUserName = () => {
    username.value = localStorage.getItem('username') || ''
  }

  return { getUserName, setUsername, username }
})
