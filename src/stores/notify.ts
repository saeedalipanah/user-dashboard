import { defineStore } from 'pinia'
import { notification } from 'ant-design-vue'

export const useNotifyStore = defineStore('notify', () => {
  const openNotification = (type: string, message: string, description: string) => {
    // show notification to the user based on arguments
    notification[type]({
      message,
      description
    })
  }

  return { openNotification }
})
