import { writable } from 'svelte/store'

export type ThemeOptions = `dark` | `light`

function get() {
  return typeof localStorage !== `undefined` && `theme` in localStorage
    ? localStorage.getItem(`theme`) as ThemeOptions
    : getPrefersColorScheme()
}

function getPrefersColorScheme() {
  if (typeof window === `undefined`) return `` as ThemeOptions

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? `dark`
    : `` as ThemeOptions
}

function createCurrentTheme() {
  const theme = get()
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

  return {
    subscribe,
    lightsOut,
    letThereBeLight,
    set: () => { theme === `light` ? letThereBeLight() : lightsOut() },
  }
}

export const theme = createCurrentTheme()
