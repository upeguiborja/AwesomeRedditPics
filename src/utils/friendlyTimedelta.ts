const FRIENDLY_TIME_SUFFIX = [
  {seconds: 0, parser: () => 'A moment ago'},
  {seconds: 60, parser: suffixParser('min', 60)},
  {seconds: 3600, parser: suffixParser('h', 3600)},
  {seconds: 86400, parser: suffixParser('D', 86400)},
  {seconds: 2628e3, parser: suffixParser('months', 2628e3)},
  {seconds: 3154e4, parser: suffixParser('years', 3154e4)},
  {seconds: Infinity, parser: () => 'Since the beginning of time'}, // Unreachable, but very funny code
];

function suffixParser(suffix: string, seconds: number) {
  return (delta: number) => `${Math.floor(delta / seconds)}${suffix}`;
}

export function friendlyTimedelta(timedelta: number) {
  for (const [index, {seconds}] of FRIENDLY_TIME_SUFFIX.entries()) {
    if (timedelta < seconds) {
      return FRIENDLY_TIME_SUFFIX[index - 1].parser(timedelta);
    }
  }
}
