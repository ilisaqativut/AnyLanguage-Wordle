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
  "qauŋa",
  "uvani",
  "itpiñ",
  "itpak",
  "itpat",
  "itpik",
  "aarut",
  "aaruk",
  "aaguŋ",
  "aakaa",
  "aanaa",
  "aaniñ",
  "aanun",
  "aaŋŋa",
  "aapaa",
  "aaġiñ",
  "aaġuŋ",
  "aaqan",
  "aaquk",
  "suruq",
  "surut",
  "suruk",
  "aaniñ",
  "aanun",
  "akkua",
  "aggiñ",
  "aglun",
  "agluk",
  "aglut",
  "agniq",
  "aŋniq",
  "aġnan",
  "aġraq",
  "aġvak",
  "aiḷuk",
  "aiġun",
  "aiñaq",
  "aiñan",
  "aiñak",
  "aiñat",
  "aiġuŋ",
  "aiviq",
  "akkiñ",
  "akimna",
  "akkuk",
  "akłak",
  "akłak",
  "akpak",
  "akpat",
  "akpan",
  "atpak",
  "atpat",
  "atpan",
  "akuni",
  "akuġa",
  "akuaq",
  "alaaq",
  "algak",
  "algan",
  "algiq",
  "alġai",
  "alġun",
  "allaq",
  "alluk",
  "allut",
  "aluga",
  "aluaq",
  "alġun",
  "alvik",
  "aḷḷai",
  "amani",
  "apkua",
  "amuŋa",
  "amaaq",
  "ammit",
  "amuiñ",
  "amuma",
  "anaaq",
  "anaġa",
  "anniñ",
  "aniun",
  "aniuk",
  "aniut",
  "anmun",
  "annii",
  "anŋik",
  "anŋun",
  "anuga",
  "anuuk",
  "aññaq",
  "aŋaiñ",
  "aŋait",
  "aŋaak",
  "aŋmaq",
  "aŋŋiñ",
  "aŋŋuu",
  "aŋŋun",
  "apyuq",
  "aqaya",
  "aqiya",
  "aqiiñ",
  "aqłak",
  "aqłat",
  "aqpik",
  "aquŋa",
  "anaŋa",
  "algak",
  "argiq",
  "arguq",
  "arraa",
  "asiñi",
  "asian",
  "asiak",
  "asiat",
  "atain",
  "alliq",
  "anmun",
  "atmun",
  "atqit",
  "atqun",
  "attat",
  "attuq",
  "attuk",
  "attut",
  "atuun",
  "auruq",
  "auruk",
  "aurut",
  "auguŋ",
  "auniq",
  "auraq",
  "auruq",
  "auniq",
  "avani",
  "avuŋa",
  "avalu",
  "avati",
  "avraq",
  "avrat",
  "avrak",
  "avuga",
  "avvaq",
  "avyuq",
  "ayaiñ",
  "ayaak",
  "ayait",
  "ayaga",
  "ayyak",
  "ayuaq",
  "ayuam",
  "avram",
  "asiam",
  "aluam",
  "atpam",
  "akpam",
  "iñuŋa",
  "sipam",
  "ayyai",
  "igaga",
  "igaŋa",
  "igari",
  "aġnam",
  "igaaq",
  "iktaq",
  "iglum",
  "igḷak",
  "igḷam",
  "igḷit",
  "igḷum",
  "igḷut",
  "igniñ",
  "iŋniñ",
  "ignik",
  "ignit",
  "ignim",
  "ikkua",
  "igñik",
  "igruk",
  "iguun",
  "igvik",
  "iġaaq",
  "iġriñ",
  "iiruq",
  "iiruk",
  "iirut",
  "iigut",
  "iigum",
  "iiguk",
  "iigun",
  "uigum",
  "uigut",
  "uiguk",
  "uigun",
  "ikani",
  "ikuŋa",
  "ikkii",
  "ikaun",
  "ikkun",
  "iksraq",
  "iksram",
  "iksrak",
  "iksrat",
  "iksran",
  "ikiiñ",
  "ikiga",
  "ikiŋa",
  "ikiaq",
  "ikiŋa",
  "ikkiq",
  "ikkik",
  "ikpak",
  "iktaq",
  "ikuun",
  "ikuti",
  "ilaan",
  "ilimi",
  "ilvit",
  "iḷaga",
  "iḷaŋa",
  "iḷaaq",
  "iḷaak",
  "iḷaat",
  "iḷari",
  "iḷuga",
  "iḷuŋa",
  "imani",
  "ipkua",
  "qanuq",
  "imuŋa",
  "imaŋa",
  "imiġa",
  "imiŋa",
  "imġun",
  "imnaq",
  "imnat",
  "imnam",
  "imnak",
  "iniga",
  "iniŋa",
  "innuq",
  "iñani",
  "iñiaq",
  "iññaq",
  "iñŋik",
  "iñuŋa",
  "iñuum",
  "iŋiga",
  "iŋiŋa",
  "iŋŋik",
  "ipait",
  "ipaak",
  "ipiġa",
  "ipiŋa",
  "ipiak",
  "ipiaq",
  "ipiat",
  "ipiun",
  "ipiŋa",
  "ipnaq",
  "ippiq",
  "ipsaq",
  "ipsam",
  "ipuga",
  "ipuŋa",
  "qaluk",
  "iqiga",
  "iqiġa",
  "iqiŋa",
  "iqłut",
  "iqłuk",
  "iqłum",
  "iqł̣ak",
  "iqquk",
  "iqsraq",
  "iqsut",
  "iqsun",
  "iqsuq",
  "iqsuk",
  "iquġa",
  "iquŋa",
  "iriga",
  "iriŋa",
  "irrak",
  "irgak",
  "iriġi",
  "irvik",
  "isaŋa",
  "isiga",
  "isiŋa",
  "itkit",
  "isuŋa",
  "isvaq",
  "irvik",
  "itchaq",
  "itchat",
  "itcham",
  "itchak",
  "itiġa",
  "itkiq",
  "ikkiq",
  "itqiq",
  "itqik",
  "itqit",
  "itquk",
  "ituum",
  "ivaaq",
  "iviŋa",
  "ivgit",
  "ivsaq",
  "ivsam",
  "ivsak",
  "ivsat",
  "kaapi",
  "kaasi",
  "kaavi",
  "kalat",
  "kalak",
  "kalam",
  "kalan",
  "kanna",
  "kanak",
  "kaniq",
  "kaŋiq",
  "kaŋuq",
  "kargu",
  "kasiq",
  "katchi",
  "katak",
  "kauga",
  "kauŋa",
  "kavlu",
  "kayuq",
  "kimun",
  "kisuk",
  "kisum",
  "kisut",
  "kiata",
  "kihaa",
  "kiati",
  "kiani",
  "kigga",
  "kigña",
  "kiuna",
  "kiuŋa",
  "kiglu",
  "kigun",
  "kiiki",
  "killi",
  "kiluk",
  "kilut",
  "kimik",
  "kiñiq",
  "kiŋuk",
  "kiŋut",
  "kipak",
  "kivraq",
  "kitik",
  "kimña",
  "kivva",
  "kukik",
  "kukia",
  "kukiñ",
  "kukuu",
  "kupki",
  "kusaq",
  "kusak",
  "kusat",
  "kuvlu",
  "kuyak",
  "maani",
  "tavra",
  "maġia",
  "makua",
  "malak",
  "malik",
  "mamiq",
  "manaq",
  "maniq",
  "manut",
  "manuk",
  "manum",
  "marra",
  "mauna",
  "mauŋa",
  "masak",
  "masik",
  "mavsa",
  "milik",
  "miluk",
  "miḷik",
  "miḷiq",
  "mimiq",
  "mumiq",
  "miñik",
  "miñut",
  "miñuk",
  "misak",
  "misuq",
  "misuk",
  "misut",
  "mitik",
  "mitiq",
  "mitut",
  "mituk",
  "muluk",
  "mulut",
  "nakiñ",
  "namun",
  "naami",
  "nanii",
  "naniq",
  "naŋiq",
  "napuk",
  "naput",
  "nasaq",
  "nasak",
  "nasat",
  "natiq",
  "natqa",
  "nayak",
  "nigiq",
  "nigaq",
  "niḷak",
  "nipim",
  "nipri",
  "niqit",
  "niqik",
  "niqim",
  "niqin",
  "niuga",
  "niuŋa",
  "nivit",
  "nivik",
  "nivim",
  "masut",
  "masuk",
  "nuġlu",
  "nukik",
  "nuluq",
  "nunam",
  "nusaq",
  "nuyat",
  "nutim",
  "nuvak",
  "nuvut",
  "paaŋa",
  "paapa",
  "pagna",
  "paani",
  "pagga",
  "pauna",
  "pauŋa",
  "pakak",
  "pamna",
  "pamma",
  "panat",
  "panak",
  "papik",
  "paplu",
  "param",
  "patuk",
  "pavlu",
  "piruq",
  "pirut",
  "piruk",
  "pigaa",
  "pigai",
  "pitka",
  "pitin",
  "piġut",
  "piġuk",
  "pigña",
  "pikka",
  "pikuk",
  "piŋut",
  "piŋuk",
  "pirit",
  "pirik",
  "pituk",
  "pivik",
  "pivsi",
  "puguq",
  "pukak",
  "pukik",
  "pupik",
  "puuġa",
  "puuŋa",
  "puuġu",
  "puvak",
  "puvla",
  "puyat",
  "puyak",
  "puyuq",
  "qaaġa",
  "qaaŋa",
  "qalli",
  "qaliq",
  "qaati",
  "qaani",
  "qagga",
  "qagna",
  "qaŋna",
  "qauna",
  "qauŋa",
  "qaglu",
  "qaiŋa",
  "qalat",
  "qalak",
  "qargi",
  "qalgi",
  "qalli",
  "qalut",
  "qaluk",
  "qamna",
  "qanak",
  "qaniq",
  "qanuq",
  "qapuk",
  "qaqłu",
  "qatik",
  "qavva",
  "qavia",
  "qavlu",
  "qayuq",
  "qiaġa",
  "qikiñ",
  "qikum",
  "qikun",
  "qikuk",
  "qikut",
  "qiḷam",
  "siḷam",
  "qiḷak",
  "qimiq",
  "qiñŋu",
  "qiñum",
  "qiŋaq",
  "qiŋam",
  "qiŋak",
  "qiŋat",
  "qirgi",
  "qiruk",
  "qisik",
  "qitiq",
  "qiviu",
  "quaŋa",
  "qulaa",
  "quluq",
  "qulvi",
  "qunuq",
  "qupak",
  "saiyu",
  "saŋma",
  "sagma",
  "sakiq",
  "samma",
  "samna",
  "sanik",
  "sumik",
  "sunik",
  "kimik",
  "sarri",
  "savik",
  "sayak",
  "siiga",
  "siiŋa",
  "siili",
  "sikum",
  "siḷut",
  "siḷuk",
  "siḷum",
  "siḷvi",
  "simik",
  "siñaa",
  "siñik",
  "sipik",
  "sisit",
  "sisik",
  "sisim",
  "siuti",
  "suviñ",
  "suvak",
  "suvat",
  "suġlu",
  "sukaq",
  "sukak",
  "sukat",
  "suŋaq",
  "suŋak",
  "suŋat",
  "suvlu",
  "suplu",
  "supin",
  "supim",
  "supit",
  "supik",
  "suqun",
  "surit",
  "surik",
  "surim",
  "purim",
  "susaq",
  "suuga",
  "suuŋa",
  "suuva",
  "taaŋa",
  "taalu",
  "taata",
  "taglu",
  "taima",
  "talak",
  "taliq",
  "talut",
  "taluk",
  "talva",
  "tanik",
  "taŋiq",
  "tapiq",
  "tapsi",
  "taqak",
  "taqtu",
  "tarva",
  "tasiq",
  "tavsi",
  "tayaq",
  "tiġri",
  "tiiga",
  "tiiŋa",
  "tikiq",
  "timim",
  "tiŋak",
  "tipit",
  "tipik",
  "titiq",
  "tivli",
  "tugli",
  "tuniq",
  "tunum",
  "tupiq",
  "tuqua",
  "tusaq",
  "tutik",
  "tuuġa",
  "tuuŋa",
  "tuvaq",
  "tuvam",
  "tugaq",
  "tugam",
  "uaġuŋ",
  "uglum",
  "ugruk",
  "uġġaq",
  "uqhaq",
  "uġruq",
  "uiruq",
  "uiruk",
  "uirut",
  "uiñiq",
  "ukuaq",
  "uliga",
  "uliŋa",
  "uliik",
  "ullun",
  "uluga",
  "uluŋa",
  "uluak",
  "umiam",
  "umiga",
  "umiŋa",
  "unani",
  "unuŋa",
  "unaaq",
  "uniak",
  "uniġa",
  "uniŋa",
  "unnuk",
  "utŋuq",
  "utŋum",
  "utŋuk",
  "utŋut",
  "uqaŋa",
  "uqsiq",
  "uqsim",
  "urraq",
  "urrak",
  "urrat",
  "usiiñ",
  "usiġa",
  "usiŋa",
  "usiaq",
"utchik",
  "utchuk",
  "utqiq",
  "uuruq",
  "uugaq",
  "uumaa",
  "uvvii",
  "uvaak",
  "uugak",
  "uugat",
  "uyalu",
  "uyuġu",
  "vasrak",
  "yaput",
  "yapuk",
  "yapum",
  "yuġaq",
  "ilimi",
  "inmik",
  "inmiŋ",
  "unami",
  "siimi",
  "inaat",
  "igari",
  "anisa",
  "ittut",
  "ittuq",
  "ittuk",
  "itman",
  "itpan",
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
