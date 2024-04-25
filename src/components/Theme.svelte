<script lang="ts">
import Sun from '$svgs/sun.svelte'
import Moon from '$svgs/moon.svelte'
import { currentTheme } from '$stores/theme'
import { onDestroy } from 'svelte'

export let theme: `dark` | `light`

const isDarkTheme = theme === `dark`
const component = isDarkTheme ? Moon : Sun

let currentThemeValue: `dark` | `light` = `light`
const unsubscribe = currentTheme.subscribe((value) => currentThemeValue = value)
$: active = currentThemeValue === theme
$: background = active ? `bg-metallic-red dark:bg-onyx` : ``
$: stroke = active ? `stroke-white` : `stroke-metallic-red dark:stroke-white`

onDestroy(unsubscribe)
</script>

<button on:click={isDarkTheme ? currentTheme.lightsOut : currentTheme.letThereBeLight} class={`py-2 px-3 rounded-md ${background}`}>
  <svelte:component this={component} class={`${stroke} rounded-full size-6 stroke-metallic-red`} />
</button>