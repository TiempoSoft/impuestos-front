import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Tiempo'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
