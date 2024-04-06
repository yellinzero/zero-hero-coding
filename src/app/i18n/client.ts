'use client'

import { useEffect, useState } from 'react'
import i18next, { FlatNamespace, KeyPrefix } from 'i18next'
import { initReactI18next, useTranslation as useTranslationOrg, UseTranslationOptions, UseTranslationResponse, FallbackNs } from 'react-i18next'
import { useCookies } from 'react-cookie'
import resourcesToBackend from 'i18next-resources-to-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { getOptions, languages, cookieName } from './settings'

const runsOnServerSide = typeof window === 'undefined'

// on client side the normal singleton is ok
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(resourcesToBackend((language: string, namespace: string) => import(`./locales/${language}/${namespace}.json`)))
  .init({
    ...getOptions(),
    lng: undefined, // let detect the language on client side
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator'],
    },
    preload: runsOnServerSide ? languages : []
  })

export function useTranslation<
  Ns extends FlatNamespace,
  KPrefix extends KeyPrefix<FallbackNs<Ns>> = undefined
>(
  language: string,
  ns?: Ns,
  options?: UseTranslationOptions<KPrefix>,
): UseTranslationResponse<FallbackNs<Ns>, KPrefix> {
  const [cookies, setCookie] = useCookies([cookieName])
  const ret = useTranslationOrg(ns, options)
  const { i18n } = ret

  const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage)
  
  useEffect(() => {
    if (activeLng === i18n.resolvedLanguage) return
    setActiveLng(i18n.resolvedLanguage)
  }, [activeLng, i18n.resolvedLanguage])
  useEffect(() => {
    if (!language || i18n.resolvedLanguage === language) return
    i18n.changeLanguage(language)
  }, [language, i18n])
  useEffect(() => {
    if (cookies.i18next === language) return
    setCookie(cookieName, language, { path: '/' })
  }, [language, cookies.i18next, setCookie])

  if (runsOnServerSide && language && i18n.resolvedLanguage !== language) {
    i18n.changeLanguage(language)
  }
  
  return ret
}