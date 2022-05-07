import { useEffect, useState } from 'react'

function getMatches (query: string): boolean {
  // Prevents SSR issues
  if (typeof window !== 'undefined') {
    return window.matchMedia(query).matches
  }
  return false
}

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState<boolean>(getMatches(query))

  function handleChange () {
    setMatches(getMatches(query))
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(query)

    handleChange()

    matchMedia.addEventListener('change', handleChange)

    return () => {
      matchMedia.removeEventListener('change', handleChange)
    }
  }, [query])

  return matches
}
