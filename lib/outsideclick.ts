import { useEffect } from "react";

/**
 * Custom hook to detect clicks outside of a specified element and handle visibility changes.
 * @param ref - The ref to the element that should be monitored for outside clicks.
 * @param handler - The function to call when an outside click is detected.
 * @param scrollHandler - The function to call when the element is not visible in the viewport.
 */

function useOutsideClick(
  ref: React.RefObject<HTMLElement>,
  handler: (event: MouseEvent) => void
  // scrollHandler: () => void
) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler(event);
      }
    };

    // const handleScroll = () => {
    //   if (ref.current) {
    //     const rect = ref.current.getBoundingClientRect();
    //     console.log(rect);
    //     // Check if the element is not visible in the viewport
    //     if (rect.bottom < 0) {
    //       scrollHandler(); // Call scrollHandler when the element is not visible
    //     }
    //   }
    // };

    document.addEventListener("mousedown", handleClickOutside);
    // window.addEventListener("scroll", handleScroll); // Listen for scroll events

    // Cleanup function
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      // window.removeEventListener("scroll", handleScroll);
    };
  }, [ref, handler]);
}

export default useOutsideClick;
