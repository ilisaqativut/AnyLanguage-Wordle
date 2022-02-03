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
"umiaq",
"qayaq",
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
"itpiñ",
  "aakan", 
  "kukik",
  "tutik",
  "tanik",
  "suviñ",
  "aasii",
  "aapan",
  "tavsi",
  "ukiuq",
  "patiq",
  "miluk",
  "savik", 
  "uiñiq", 
  "uuruq",
  "taima", 
  "suvat",
  "tupiq",
  "suvak",
  "qiŋaq",
  "nayak",
  "kaniq",
  "qargi",
  "ikuun",
  "kaavi",
  "aġnat",
  "atuun",
  "tavlu", 
  "sumun", 
  "ukuak",
  "manik",
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
