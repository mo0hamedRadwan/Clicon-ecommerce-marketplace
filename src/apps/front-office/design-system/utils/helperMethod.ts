export function getValue(object: any, key: string) {
  const keys = key.split("."); // split keys

  if (!object) return undefined;

  if (keys.length > 1) {
    return getValue(object[keys[0]], keys.slice(1).join("."));
  } else {
    return object[key];
  }
}
