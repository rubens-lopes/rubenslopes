import { about } from './about'
import { footer } from './footer'

export const ui = {
  en: {
    ...about.en,
    ...footer.en,
  },
  'pt-br': {
    ...about['pt-br'],
    ...footer['pt-br'],
  },
}