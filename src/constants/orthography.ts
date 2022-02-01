import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'a',
  'ch',
  'g',
  'ġ',
  'h',
  'i',
  'k',
  'l',
  'ł',
  'ḷ',
  'ł̣',
  'm',
  'n',
  'ñ',
  'ŋ',
  'p',
  'q',
  'r',
  's',
  'l',
  'sr',
  't',
  'u',
  'v',
  'y',
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
