import { about } from './about'
import { footer } from './footer'
import { controls } from './controls'
import { privacyPolicy } from './privacy-policy'

export const ui = {
  en: {
    ...about.en,
    ...footer.en,
    ...controls.en,
    ...privacyPolicy.en,
  },
  'pt-br': {
    ...about['pt-br'],
    ...footer['pt-br'],
    ...controls['pt-br'],
    ...privacyPolicy['pt-br'],
  },
}
