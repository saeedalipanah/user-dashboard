import en from '@/locales/en.json'
import fa from '@/locales/fa.json'
import { createI18n } from 'vue-i18n'


const i18n = createI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale: localStorage.getItem('locale') || 'en', // set locale (we store the previouse locale to storage )
  fallbackLocale: 'en', // set fallback locale (if wa have no previouse loacle set to en)
  messages: { en, fa } 
})

//notice : i18n instance create before create the pinia store so we have no access to pinia and get locale state from thir so we get it from localeStore

export default i18n
