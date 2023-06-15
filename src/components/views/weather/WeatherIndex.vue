<script setup lang="ts">
// types
import type { optionT, optionsT, weatherT } from '@/types'

// components
import DateFormatter from '@/components/common/DateFormatter.vue'
import { i18n } from '@/composables/I18nCompose'
import { computed, ref } from 'vue'
import { useWeatherStore } from '@/stores/weather'
const { t } = i18n()
const store = useWeatherStore()
const enteredCity = ref<string>('')
const isLoading = ref<boolean>(false)
const fetchedData = ref<weatherT>()
const hasResponse = ref<boolean>(false)
const options = computed<optionsT>(() => store.cityNameOptions) //autocomplete options

const filterOption = (input: string, option: optionT) => {
  // antdv auto complete options render
  return option.value.toUpperCase().indexOf(input.toUpperCase()) >= 0
}

const windStatusHandler = computed<string>(() => {
  return fetchedData.value
    ? fetchedData.value.windspeed > 10
      ? t('weather.windyStatus')
      : t('weather.clearStatus')
    : ''
})

const onSelect = async () => {
  isLoading.value = true
  try {
    //get date from database(api) based on city name
    const result: weatherT = await store.fetchWeatherData(enteredCity.value)
    fetchedData.value = result
    hasResponse.value = true
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div>
    <!-- search an city -->
    <a-row type="flex" justify="center" style="margin-top: 50px">
      <a-col :span="24" :md="16" style="display: flex; justify-content: center">
        <a-auto-complete
          v-model:value="enteredCity"
          :options="options"
          style="width: 100%; max-width: 280px"
          :filter-option="filterOption"
          @select="onSelect"
        >
          <a-input-search
            :placeholder="t('weather.placeholder')"
            size="large"
            :loading="isLoading"
            enterButton
          >
          </a-input-search>
        </a-auto-complete>
      </a-col>
    </a-row>
    <!-- search an city -->

    <!-- fetched informations -->
    <a-row type="flex" justify="center">
      <a-col :span="24" :md="16">
        <!-- if has an response at leaset -->
        <div class="weather-card" v-if="hasResponse">
          <section class="informations">
            <h1 class="w-city-name">{{ enteredCity }}</h1>
            <date-formatter></date-formatter>
            <h1 class="w-temp">
              {{ fetchedData ? fetchedData.temperature : '' }} {{ t('weather.temp') }}
            </h1>
            <h3 class="w-status">
              {{ windStatusHandler }}
            </h3>
          </section>
        </div>
        <!-- if has an response at leaset -->

        <!-- nothing until now -->
        <div class="weather-card" style="background: none" v-else>
          <p>{{ t('weather.empty') }}</p>
        </div>
        <!-- nothing until now -->
      </a-col>
    </a-row>
    <!-- fetched informations -->
  </div>
</template>
