import { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.scrollY > 300 ? setShowButton(true) : setShowButton(false)
    }

    window.addEventListener('scroll', handleScrollButtonVisibility)

    return () => window.removeEventListener('scroll', handleScrollButtonVisibility)
  }, [])

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth'})
  }

  return (
    showButton && (
      <button className="btn btn-circle btn-lg btn-outline opacity-80 fixed bottom-16 right-16 z-50" onClick={handleScrollToTop}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12.71,6.29a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-4,4a1,1,0,1,0,1.42,1.42L11,9.41V21a1,1,0,0,0,2,0V9.41l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42ZM19,2H5A1,1,0,0,0,5,4H19a1,1,0,0,0,0-2Z" /></svg>
      </button>
    )
  )
}

export default ScrollToTopButton;
