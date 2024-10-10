import { useOnce } from "@mongez/react-hooks";
import { useState } from "react";
import { formatTime } from "../utils/formatTime";

export function useCountDown(date: Date) {
  const [remainderTime, setRemainderTime] = useState(date.getTime());
  useOnce(() => {
    const timer = setInterval(() => {
      const currentTime = new Date();
      const timeDifference = remainderTime - currentTime.getTime();
      if (timeDifference <= 0) {
        setRemainderTime(0);
        clearInterval(timer);
        return formatTime(0);
      }
      setRemainderTime(timeDifference);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  return formatTime(Math.round(remainderTime / 1000));
}
