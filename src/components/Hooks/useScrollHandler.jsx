import { useState, useEffect } from "react"

export const useScrollHandler = () => {
  const [scroll, setScroll] = useState({
    ref: 'home'
  })

  // running on mount
  useEffect(() => {
    const onScroll = () => {
      let sTop = window.pageYOffset;
      for (const section of document.getElementsByTagName('section')) {
        let id = section.getAttribute('id');
          let offset = section.offsetTop - 500;
          let height = section.scrollHeight;

          if(sTop >= offset && sTop < offset + height) {
            setScroll({
              ref: id
            })
          }
      }
    }

    // setting the event handler from web API
    document.addEventListener("scroll", onScroll)

    // cleaning up from the web API
    return () => {
      document.removeEventListener("scroll", onScroll)
    }
  }, [scroll, setScroll])

  return scroll
};
