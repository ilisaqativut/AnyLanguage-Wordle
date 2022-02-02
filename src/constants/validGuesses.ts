import { CONFIG } from './config'

export const VALIDGUESSES = [
"aaruq",
"aaġlu",
"aakan",
"aakat",
"aakak",
"aanan",
"aanak",
"aanat",
"aapan",
"aapak",
"aapat",
"aasii",
"agiaq",
"agiun",
"agian",
"aglak",
"aglan",
"aglat",
"aġnaq",
"aġran",
"aġrat",
"aġrak",
"aġviq",
"airuq",
"aigaa",
"aigai",
"airut",
"airuk",
"aiñiq",
"akisi",
"akłaq",
"allat",
"allak",
"allan",
"allaq",
"alliq",
"amaaq",
"amaan",
"amaak",
"amaat",
"amaun",
"amauk",
"amaut",
"anuġi",
"aŋaiñ",
"aŋaak",
"aŋait",
"aŋuti",
"aŋuun",
"apqun",
"aputi",
"aquun",
"argak",
"asiaq",
"atchak",
"atchu",
"atqiñ",
"atiġa",
"atigi",
"atuun",
"avalu",
"avani",
"avati",
"avgun",
"avvaq",
"iglun",
"igluk",
"iglut",
"igḷun",
"igḷuk",
"igḷut",
"igniq",
"iġġiñ",
"iġġit",
"iġġik",
"iġñiq",
"iigun",
"iiguk",
"iigut",
"ikpik",
"iktaq",
"ikuti",
"ilviñ",
"imaiku",
"imani",
"immuk",
"iñuit",
"iññuk",
"iñuiñ",
"iqquk",
"iqsraq",
"irrak",
"isuma",
"itchuq",
"itchut",
"itchuk",
"ivalu",
"ivsaq",
"kamik",
"katchi",
"kiita",
"kigun",
"kiika",
"killi",
"kisaq",
"kukik",
"kumak",
"kuvlu",
"malġi",
"manaq",
"manik",
"manna",
"ukuak",
"manun",
"manuk",
"manut",
"masik",
"matun",
"matuk",
"matut",
"milik",
"miluk",
"misak",
"naumi",
"naniq",
"nasaq",
"nasan",
"nasak",
"nasat",
"natiq",
"navlu",
"nigaq",
"niliq",
"nilik",
"nilit",
"niŋau",
"niŋiq",
"nipin",
"nipik",
"nipit",
"niqin",
"niqik",
"niqit",
"niuga",
"nuġlu",
"nukaq",
"nukan",
"nukat",
"nukak",
"nunan",
"nunak",
"nunat",
"nusaq",
"nusan",
"nusak",
"nusat",
"nuvuk",
"paaga",
"pagga",
"pagna",
"pamma",
"pamna",
"panan",
"panak",
"panat",
"panik",
"papan",
"papak",
"papat",
"paran",
"parak",
"parat",
"patiq",
"paula",
"pigña",
"pikka",
"piñiq",
"pivsi",
"putuk",
"putun",
"putut",
"puvak",
"puyan",
"puyat",
"puyak",
"puyuq",
"qaaga",
"qaalu",
"qaaġa",
"qagga",
"qagna",
"qaksri",
"qalun",
"qamma",
"qamna",
"qamun",
"qaniq",
"qanuq",
"qaŋma",
"qauġa",
"qavia",
"qavlu",
"qavva",
"qayaq",
"qikun",
"qikuk",
"qikut",
"qilun",
"qiluk",
"qilut",
"qiŋaq",
"qiruk",
"qiviu",
"quaġa",
"qulit",
"qulvi",
"qupak",
"qutuk",
"saaga",
"samma",
"samna",
"sayan",
"siġri",
"siiga",
"sikun",
"sikuk",
"sikut",
"siñiñ",
"siñik",
"siñit",
"siŋiq",
"sipaq",
"sisin",
"sisik",
"sisit",
"siuti",
"sukun",
"sumun",
"sumiñ",
"suvak",
"suvat",
"taliq",
"talun",
"taluk",
"talut",
"tanik",
"taqak",
"taqtu",
"tavlu",
"tavra",
"tavsi",
"timin",
"timik",
"timit",
"tiŋuk",
"tipin",
"tipik",
"tipit",
"titiq",
"titik",
"titit",
"tivli",
"tugli",
"tunun",
"tunuk",
"tunut",
"tupiq",
"tuttu",
"tuuġa",
"tuvaq",
"uglun",
"ugluk",
"uglut",
"ugruk",
"uitka",
"uiḷaq",
"uiñiq",
"ukiaq",
"ukiuq",
"ukpan",
"ukpik",
"uliga",
"umiaq",
"umiak",
"umiat",
"umŋit",
"umiga",
"uniat",
"uniġa",
"unŋuq",
"unŋuk",
"unŋut",
"uqaġa",
"uqaun",
"uqpik",
"uqsruq",
"uquga",
"uquuk",
"uquit",
"usiaq",
"uugaq",
"uumaa",
"uvaŋa",
"uvluq",
"uvluk",
"uvlut",
"uyuġu",
"aaruk",
"aarut",
"sipak",
"sipat",
  "usuiñ",
  "usuit",
  "utchuk",
  "qauŋa"
  "uvani"
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
