import { defineMiddleware } from 'astro:middleware'
import { requestHasLocale } from 'astro:i18n'

export const onRequest = defineMiddleware(async (context, next) => {
  if (requestHasLocale(context)) {
    context.cookies.set(`lang`, context.currentLocale, { path: `/` })
    return next()
  }

  let locale = context.cookies.get(`lang`)?.value

  if (Boolean(locale) === false) locale = context.preferredLocale ?? `en`

  context.cookies.set(`lang`, locale)

  return context.redirect(`/${locale}`, 302)
})