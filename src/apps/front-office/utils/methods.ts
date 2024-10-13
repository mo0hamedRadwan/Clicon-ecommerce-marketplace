export function removeUndefinedKeys(obj: object) {
  Object.keys(obj).forEach(key =>
    obj[key] === undefined || obj[key] === null ? delete obj[key] : {},
  );
  return obj;
}
