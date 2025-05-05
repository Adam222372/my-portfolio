import { useState, useEffect } from "react"
import {MenuBar} from "@/components/MenuBar"


export function useMediaQuery() {
  const query = '(min-width: 768px)'
  const [isBiggerScreen, setIsBiggerScreen] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    const handleChange = () => setIsBiggerScreen(media.matches)

    handleChange() // Set initial value
    media.addEventListener('change', handleChange)

    return () => media.removeEventListener('change', handleChange)
  }, [query])

  return isBiggerScreen
}
