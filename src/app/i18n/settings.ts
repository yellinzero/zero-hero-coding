export const fallbackLng = 'en'
export const languages = [fallbackLng, 'zh-CN']
export const defaultNS = 'translation'
export const cookieName = 'i18next'

export function getOptions (language = fallbackLng, ns: string | string[] = defaultNS) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng: language,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  }
}