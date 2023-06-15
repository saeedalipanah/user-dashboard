import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import type { taskT, tasksT } from '@/types'
import { useNotifyStore } from './notify'

const store = useNotifyStore()

export const useTaskStore = defineStore('tasks', () => {
  const tasks = ref<tasksT>([])

  //set new tasks to storage
  const setTasks = (newTasks: tasksT) => {
    localStorage.setItem('tasks', JSON.stringify(newTasks))
    getTasks()
  }


  //get tasks from storage
  const getTasks = () => {
    const newTasks = localStorage.getItem('tasks') || ''
    tasks.value = newTasks === '' ? [] : JSON.parse(newTasks);
  }

  //create task and sat to storage
  const createTask = (newTask: taskT) => {
    tasks.value.unshift(newTask)
    setTasks(tasks.value)
    store.openNotification('success', 'Successfuly', 'Your task created successfuly.')
  }

  //update task and set to storage
  const updateTask = (task: taskT) => {
    const indexOfUpdatedTask = tasks.value.findIndex((ele) => ele.id === task.id) //find index of updated task
    tasks.value[indexOfUpdatedTask] = task //overwritten the finded item with updated task
    setTasks(tasks.value)
    store.openNotification('success', 'Successfuly', 'Your task updated successfuly.')
  }

  //delete task and set to storage
  const deleteTask = (task: taskT) => {
    const newTasks = tasks.value.filter((ele) => ele.id !== task.id) //remove item from array and give us new array
    tasks.value = newTasks
    store.openNotification('error', 'Removed', 'Your task deleted successfuly.')
    setTasks(tasks.value)
  }

  return { tasks, updateTask, getTasks, deleteTask, createTask }
})
