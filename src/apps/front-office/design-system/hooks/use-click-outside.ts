import { useEffect, useRef } from "react";

export const useClickOutside = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = event => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handler);
    document.addEventListener("mouseenter", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("mouseenter", handler);
    };
  }, [ref, callback]);

  return ref;
};
