import { useEffect } from "react";

/**
 * Custom hook to detect clicks outside of a specified element and handle visibility changes.
 * @param ref - The ref to the element that should be monitored for outside clicks.
 * @param handler - The function to call when an outside click is detected.
 */

function useOutsideClick(
  ref: React.RefObject<HTMLElement>,
  handler: (event: MouseEvent) => void
) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler(event);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, handler]);
}

export default useOutsideClick;
