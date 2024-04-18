import { ui } from './ui'

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[keyof typeof ui]) {
    return ui[lang][key];
  }
}