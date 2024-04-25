import { writable } from 'svelte/store'

function createCurrentTheme() {
  let theme = typeof localStorage !== `undefined` && `theme` in localStorage
    ? localStorage.getItem(`theme`) as `dark` | `light`
    : getPrefersColorScheme()

  const { subscribe, set } = writable(theme)

  const lightsOut = () => {
    typeof document !== `undefined` && document.documentElement.classList.add(`dark`)
    if (typeof localStorage !== `undefined`) localStorage.theme = `dark`
    set(`dark`)
  }

  const letThereBeLight = () => {
    typeof document !== `undefined` && document.documentElement.classList.remove(`dark`)
    if (typeof localStorage !== `undefined`) localStorage.theme = `light`
    set(`light`)
  }

  theme === `dark` ? lightsOut() : letThereBeLight()
  
  return {
    subscribe,
    lightsOut,
    letThereBeLight,
  }
}

function getPrefersColorScheme() {
  if (typeof window === `undefined`) return `light`

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? `dark`
    : `light`
}

export const currentTheme = createCurrentTheme()