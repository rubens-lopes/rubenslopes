<script lang="ts">
import Sun from '$svgs/sun.svelte'
import Moon from '$svgs/moon.svelte'
import { 
  lightsOut,
  letThereBeLight,
  type ThemeOptions,
} from '$scripts/theme'

export let theme: ThemeOptions

const isDarkTheme = theme === `dark`
const component = isDarkTheme ? Moon : Sun
</script>

<button on:click={isDarkTheme ? lightsOut : letThereBeLight} class={`py-2 px-3 rounded-md ${isDarkTheme ? `dark:bg-onyx` : `bg-metallic-red dark:bg-transparent`}`}>
  <svelte:component this={component} class={`${isDarkTheme ? `stroke-metallic-red` : `stroke-white`} dark:stroke-white rounded-full size-6`} />
</button>