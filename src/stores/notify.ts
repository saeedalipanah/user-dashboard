import { defineStore } from 'pinia'
import { notification } from 'ant-design-vue'

export const useNotifyStore = defineStore('notify', () => {
  const openNotification = (
    type: 'success' | 'info' | 'warning' | 'error',
    message: string,
    description: string
  ) => {
    // show notification to the user based on arguments
    notification[type]({
      message,
      description
    })
  }

  return { openNotification }
})
