import { useEffect } from "react";

/**
 * Custom hook to detect clicks outside of a specified element.
 * @param ref - The ref to the element that should be monitored for outside clicks.
 * @param handler - The function to call when an outside click is detected.
 * @param scrollHandler
 */

function useOutsideClick(
  ref: React.RefObject<HTMLElement>,
  handler: (event: MouseEvent) => void,
  scrollHandler: (event: Event) => void
) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler(event);
      }
    };

    const handleScroll = (event: Event) => {
      scrollHandler(event);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("scroll", handleScroll); // document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.addEventListener("scroll", handleScroll);
      //   document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [ref, handler, scrollHandler]);
}

export default useOutsideClick;
