import { useEffect, useRef } from "react";

export const useClickOutside = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => {
      if (ref.current) {
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
