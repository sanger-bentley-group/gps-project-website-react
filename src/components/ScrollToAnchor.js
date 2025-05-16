import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToAnchor() {
  const location = useLocation()
  const lastHash = useRef('')

  // listen to location change using useEffect with location as dependency
  // https://jasonwatmore.com/react-router-v6-listen-to-location-route-change-without-history-listen
  useEffect(() => {
    const scrollToHash = () => {
      if (lastHash.current && document.getElementById(lastHash.current)) {
        document.getElementById(lastHash.current)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        lastHash.current = ''
      }
    }

    if (location.hash) {
      lastHash.current = location.hash.slice(1) // save hash for further use after navigation
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }) // else scroll to top
    }

    if (document.readyState === 'complete') {
      scrollToHash()
    } else {
      window.addEventListener('load', scrollToHash)
      return () => window.removeEventListener('load', scrollToHash)
    }
  }, [location])

  return null
}

export default ScrollToAnchor
