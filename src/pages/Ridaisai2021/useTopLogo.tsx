import { useRef, useState, useEffect, RefObject } from 'react'

/**
 * ウィンドウ幅までスクロールしたら閉じるロゴを扱う
 */
export default function useTopLogo(scrollerRef: RefObject<HTMLElement>) {
  const scrollYCache = useRef<number | null>(null)
  const [openLogo, setOpenLogo] = useState(true)

  useEffect(() => {
    const closeLogo = () => {
      if (scrollerRef.current === null) {
        return
      }

      const scrollY = scrollerRef.current.scrollTop
      if (scrollerRef.current.scrollTop > window.innerHeight) {
        return setOpenLogo(false)
      }

      if (scrollYCache.current === null) {
        scrollYCache.current = scrollY
        return
      }

      const threshold = 24
      const diff = scrollY - scrollYCache.current
      if (diff > threshold) {
        scrollYCache.current = scrollY
        return setOpenLogo(false)
      }
      if (diff < -threshold) {
        scrollYCache.current = scrollY
        return setOpenLogo(true)
      }
    }

    scrollerRef.current?.addEventListener('scroll', closeLogo)
    return () => scrollerRef.current?.removeEventListener('scroll', closeLogo)
  }, [])

  useEffect(() => {
    if (scrollerRef.current && scrollerRef.current.scrollTop > window.innerHeight && openLogo) {
      setOpenLogo(false)
    }
  }, [])

  return [openLogo] as const
}
