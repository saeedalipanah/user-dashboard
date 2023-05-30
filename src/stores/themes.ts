import { onMounted, ref } from 'vue'
import { defineStore } from 'pinia'

enum themeE {
  dark = 'dark',
  light = 'light'
}
export const useThemesStore = defineStore('themes', () => {
  const isDark = ref<boolean>(false)
  const setIsDark = (val: boolean) => {
    // set isDark theme variable based on val entry argument
    isDark.value = val
    val ? setTheme(themeE.dark) : setTheme(themeE.light)
  }
  const setTheme = (theme: string) => {
    // save entry theme argument and set class for document element based on entry argument
    localStorage.setItem('theme', theme)
    const doc = document.documentElement
    theme === themeE.dark ? doc.classList.add('dark-theme') : doc.classList.remove('dark-theme')
  }
  const toggleTheme = (isChecked: boolean) => {
    setIsDark(isChecked)
    // isChecked => dark , !isChecked => light
    isChecked ? setTheme(themeE.dark) : setTheme(themeE.light)
  }

  return { toggleTheme, isDark, setIsDark }
})
