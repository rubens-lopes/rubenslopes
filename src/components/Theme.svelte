<script lang="ts">
import Sun from '$svgs/sun.svelte'
import Moon from '$svgs/moon.svelte'
import { theme as currentTheme, type ThemeOptions } from '$stores/theme'

export let theme: ThemeOptions

const isDarkTheme = theme === `dark`
const component = isDarkTheme ? Moon : Sun

$: background = $currentTheme === theme ? `bg-metallic-red dark:bg-onyx` : ``
$: stroke = $currentTheme === theme ? `stroke-white` : `stroke-metallic-red`
</script>

<button on:click={isDarkTheme ? currentTheme.lightsOut : currentTheme.letThereBeLight} class={`py-2 px-3 rounded-md ${background}`}>
  <svelte:component this={component} class={`${stroke} dark:stroke-white rounded-full size-6 stroke-metallic-red`} />
</button>