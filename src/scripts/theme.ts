export type ThemeOptions = `dark` | `light`

export function lightsOut() {
  typeof document !== `undefined` && document.documentElement.classList.add(`dark`)
  if (typeof localStorage !== `undefined`) localStorage.theme = `dark`
}

export function letThereBeLight() {
  typeof document !== `undefined` && document.documentElement.classList.remove(`dark`)
  if (typeof localStorage !== `undefined`) localStorage.theme = `light`
}