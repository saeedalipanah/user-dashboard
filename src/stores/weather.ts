import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { optionsT , weatherT } from '@/types'
import axios from 'axios'
import weatherDB from '@/database/iranWeatherForcast.json'
import { useNotifyStore } from './notify'

const store = useNotifyStore()
export const useWeatherStore = defineStore('weather', () => {

  const cityNameOptions = computed<optionsT>(() =>
  //auto complete optoins propared here
  weatherDB.map((object) => {
    return { value: object.city }
  })
)

  //fetch weather data from api
  const  fetchWeatherData = (cName: string): Promise<weatherT> => {
    return new Promise((resolve, reject) => {
      const cityName = weatherDB.find((ele) => convertToRegularEnglish(ele.city) === cName)
      axios
        .get(`https://api.open-meteo.com/v1/forecast?latitude=${cityName?.lat}&longitude=${cityName?.lng}&current_weather=true`)
        .then((result) => {
          const fetchedDate : weatherT = result.data.current_weather
          resolve(fetchedDate);
        })
        .catch((err) => {
          //error handling
          store.openNotification('error', err.name, err.message)
          reject();
        });
    });
  }
  
function convertToRegularEnglish(str: string) {
  // Normalize the string to NFKD form
  const normalizedString = str.normalize('NFKD')
  // Remove symbols using regular expression
  const regularEnglishString = normalizedString.replace(/[\u0300-\u036f]/g, '')
  return regularEnglishString
}


  return { cityNameOptions , fetchWeatherData }
})
