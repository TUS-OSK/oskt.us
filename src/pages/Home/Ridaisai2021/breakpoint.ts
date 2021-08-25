import { useEffect, useLayoutEffect, useRef, useState } from 'react'

export const BREAKPONT = 960

export const MEDIA_QUERY = `@media (max-width: ${BREAKPONT}px)`

type Mode = 'mobile' | 'desktop'

function checkCurrentMode(): Mode {
  return window.innerWidth < BREAKPONT ? 'mobile' : 'desktop'
}

export function useBreakpoint() {
  const firstCurrentMode = useRef<Mode | null>(null)
  const [currentMode, setCurrentMode] = useState<Mode | null>(null)

  useLayoutEffect(() => {
    firstCurrentMode.current = checkCurrentMode()
    console.log(firstCurrentMode.current)
  }, [])

  useEffect(() => {
    const recheckCurrentMode = () => {
      setCurrentMode(checkCurrentMode())
    }
    window.addEventListener('resize', recheckCurrentMode)
    return () => window.removeEventListener('resize', recheckCurrentMode)
  }, [])

  return [currentMode ?? firstCurrentMode.current] as const
}
