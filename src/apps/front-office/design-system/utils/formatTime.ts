export function formatTime(time: number) {
  const days = Math.floor(time / 3600 / 24);
  const hours = Math.floor(time / 3600) % 24;
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  // const Days = days < 9 ? "0" + days : "" + days;
  // const Hours = hours < 9 ? "0" + hours : "" + hours;
  // const Minutes = minutes < 9 ? "0" + minutes : "" + minutes;
  // const Seconds = seconds < 9 ? "0" + seconds : "" + seconds;

  return {
    days: `${days < 9 ? "0" : ""}${days}`,
    hours: `${hours < 9 ? "0" : ""}${hours}`,
    minutes: `${minutes < 9 ? "0" : ""}${minutes}`,
    seconds: `${seconds < 9 ? "0" : ""}${seconds}`,
  };
}
