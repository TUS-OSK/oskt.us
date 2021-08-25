export const BREAKPONT = 960

export const MEDIA_QUERY = `@media (max-width: ${BREAKPONT}px)`

export type Mode = 'mobile' | 'desktop'

export function checkCurrentMode(): Mode {
  return window.innerWidth < BREAKPONT ? 'mobile' : 'desktop'
}
