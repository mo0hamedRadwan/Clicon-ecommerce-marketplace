import { useEffect, useState } from "react";
import { formatTime } from "../utils/formatTime";

export function useCountDown(date: Date) {
  const [remainderTime, setRemainderTime] = useState(date.getTime());

  useEffect(() => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return formatTime(Math.round(remainderTime / 1000));
}
