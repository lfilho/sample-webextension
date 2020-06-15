// Most robust validation lib in the world, I know!
export function isEmpty(string) {
  return !string || string.length === 0;
}

export function hasMinimalLength(string, minimalLength) {
  return !isEmpty(string) && string.length > minimalLength;
}
