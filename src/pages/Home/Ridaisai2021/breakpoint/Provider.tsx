import { Mode } from 'fs'
import { createContext, ReactNode, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { checkCurrentMode } from './helper'

export const BreakPointContext = createContext<Mode | null>(null)

interface Props {
  children: ReactNode
}

export default function BreakPointProvider({ children }: Props) {
  const firstCurrentMode = useRef<Mode | null>(null)
  const [currentMode, setCurrentMode] = useState<Mode | null>(null)

  useLayoutEffect(() => {
    firstCurrentMode.current = checkCurrentMode()
  }, [])

  useEffect(() => {
    const recheckCurrentMode = () => {
      setCurrentMode(checkCurrentMode())
    }
    window.addEventListener('resize', recheckCurrentMode)
    return () => window.removeEventListener('resize', recheckCurrentMode)
  }, [])

  return (
    <BreakPointContext.Provider value={currentMode ?? firstCurrentMode.current}>{children}</BreakPointContext.Provider>
  )
}
