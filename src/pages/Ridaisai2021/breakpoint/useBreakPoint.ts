import { useContext } from 'react'
import { BreakPointContext } from './Provider'

export default function useBreakpoint() {
  return useContext(BreakPointContext)
}
