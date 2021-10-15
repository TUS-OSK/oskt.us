import { createContext, ReactNode, useEffect, useRef, useState } from 'react'
import { checkCurrentMode, Mode } from './helper'

export const BreakPointContext = createContext<Mode | null>(null)

interface Props {
  children: ReactNode
}

export default function BreakPointProvider({ children }: Props) {
  const firstCurrentMode = useRef<Mode | null>(null)
  const [currentMode, setCurrentMode] = useState<Mode | null>(null)

  // NOTE: 本当はuseLayoutEffectしてrefに入れたいができないので応急処置
  useEffect(() => {
    setCurrentMode(checkCurrentMode())
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
