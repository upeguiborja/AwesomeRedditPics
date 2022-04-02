const FRIENDLY_NUMBER_SUFFIX = [
  {qty: 0, parser: (n: number) => `${n}`},
  {qty: 1000, parser: suffixParser('k', 1000)},
  {qty: 1000000, parser: suffixParser('M', 1000000)},
  {qty: Infinity, parser: () => 'Since the beginning of time'}, // Unreachable, but very funny code
];

function suffixParser(suffix: string, seconds: number) {
  return (delta: number) => `${(delta / seconds).toFixed(1)}${suffix}`;
}

export function friendlyNumber(n: number) {
  for (const [index, {qty}] of FRIENDLY_NUMBER_SUFFIX.entries()) {
    if (n < qty) {
      return FRIENDLY_NUMBER_SUFFIX[index - 1].parser(n);
    }
  }
}
