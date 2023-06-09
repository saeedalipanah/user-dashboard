<script setup lang="ts">
// components
import TaskItem from './TaskItem.vue'
import TaskFrom from './TaskFrom.vue'

// types
import type { tasksT, taskT } from '@/types'

// icons
import { SearchOutlined } from '@ant-design/icons-vue'

import { ref, computed, onMounted } from 'vue'
import { useTaskStore } from '@/stores/tasks'
import { useI18n } from 'vue-i18n'

const store = useTaskStore()
const { t } = useI18n()
const tasks = computed<tasksT>(() => store.tasks)
const enteredSearch = ref<string>('')
let filteredTasks = ref<tasksT>([])
const taskFormModalVisibility = ref<boolean>(false)

const showAddModal = () => {
  taskFormModalVisibility.value = true
}

const onChangeSearch = () => {
  //filter on tasks function
  filteredTasks.value = tasks.value.filter(
    //get input if input include one of tasks title put in filtered tasks
    (task: taskT) => task.title.toUpperCase().includes(enteredSearch.value.toUpperCase()) 
  )
}

const onCancelForm = () => {
  taskFormModalVisibility.value = false
}
const onSubmitFrom = () => {
  taskFormModalVisibility.value = false
}

onMounted(() => {
  store.getTasks()
})
</script>

<template>
  <div class="tasks-container">
    <!-- search bar -->
    <div class="search-bar">
      <!-- search input -->
      <a-input
        v-model:value.trim="enteredSearch"
        @change="onChangeSearch"
        :placeholder="t('todos.searchInput')"
        class="input"
      >
        <template #prefix><SearchOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
      </a-input>
      <!-- search input -->
      <!-- add task button -->
      <a-tooltip :title="t('todos.createNewBtn')" color="green">
        <a-button shape="circle" @click="showAddModal">+</a-button>
      </a-tooltip>
      <!-- add task button -->
    </div>
    <!-- search bar -->
    <!-- tasks -->
    <ul class="fit-height" v-if="tasks && tasks.length">
      <task-item v-for="(task, i) in enteredSearch ? filteredTasks : tasks" :key="i" :task="task" />
    </ul>
    <div class="fit-height d-flex justify-center align-center" v-else>
      <h1>{{ t('todos.empty') }}</h1>
    </div>
    <!-- tasks -->

    <!-- add task form modal -->
    <task-from
      :visible="taskFormModalVisibility"
      @submitted="onSubmitFrom"
      @canceled="onCancelForm"
    ></task-from>
    <!-- add task form modal -->
  </div>
</template>
