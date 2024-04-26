import { about } from './about'
import { footer } from './footer'
import { controls } from './controls'

export const ui = {
  en: {
    ...about.en,
    ...footer.en,
    ...controls.en,
  },
  'pt-br': {
    ...about['pt-br'],
    ...footer['pt-br'],
    ...controls['pt-br'],
  },
}