export function chunkArray<T>(array: T[], size: number) {
  const chunkArray: T[][] = [];

  for (let i = 0; i < array.length; i += size) {
    chunkArray.push(array.slice(i, i + size));
  }

  return chunkArray;
}
