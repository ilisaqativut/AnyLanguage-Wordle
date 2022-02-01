import { CONFIG } from './config'

export const WORDS = [
  "sikut",
"akłaq",
"uvaŋa",
"atchu",
"asiaq",
"pikka",
"manna",
"ilviñ",
"iñuit",
"uqsruq",
"naumi",
"ivalu",
"atchak",
"kiita",
"uvluq",
"qanuq",
"samma",
"qavlu",
"qupak",
"tavlu",
"aaġlu",
"aġnaq",
"kamik",
"aġviq",
"airuq",
"taliq",
"aasii",
"uniat",
"qamun",
"ukpik",
"umiaq",
"qayaq",
"uqpik",
"aakan",
"kumak",
"anuġi",
"miluk",
"iġñiq",
"kisaq",
"aglak",
"manik",
"niliq",
"patiq",
"argak",
"qaniq",
"sumun",
"puyuq",
"qiruk",
]

if (CONFIG.normalization) {
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

if (CONFIG.shuffle) {
  shuffle(WORDS)
}
