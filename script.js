
"use strict";

const $ = id => document.getElementById(id);
const M = String.raw;

const lesson = {
  title: "Логарифмдік теңсіздіктер және олардың жүйелері",
  goal: "Логарифмдік теңсіздіктерді негіздің мәніне қарай шешу, анықталу облысын тексеру, бірнеше шарттың ортақ шешімін табу және жауапты аралық түрінде жазу."
};

// 5 ТЕОРИЯЛЫҚ ТҮСІНДІРМЕ

const theory = [
  {
    title: "Логарифмдік теңсіздік дегеніміз не?",
    definition: "Айнымалысы логарифмнің аргументінде немесе негізінде кездесетін теңсіздік логарифмдік теңсіздік деп аталады. Оны шешкенде алдымен логарифмнің анықталу облысын табамыз.",
    explain: "Мысалы, екі негізіндегі x санының логарифмі үштен үлкен болсын. Екі негізіндегі логарифмдік функция өспелі болғандықтан, x саны екінің үшінші дәрежесінен үлкен болады. Демек, x сегізден үлкен. Бұл мәндер логарифм аргументінің оң болу шартын да қанағаттандырады. Теңсіздіктің жауабы сан аралығы түрінде жазылады.",
    rule: "Әуелі аргументтің оң болуын тексеріңдер. Одан кейін логарифм негізінің бірден үлкен немесе кіші екеніне қарай таңбаның бағытын таңдаңдар.",
    formula: M`\log_2 x>3`,
    steps: [
      M`x>0`,
      M`\log_2 x>3`,
      M`x>2^3`,
      M`x>8`,
      M`x\in(8;+\infty)`
    ],
    warning: "Логарифм аргументі нөлге немесе теріс санға тең бола алмайды."
  },
  {
    title: "Негізі бірден үлкен логарифмдік теңсіздік",
    definition: "Негізі бірден үлкен логарифмдік функция өспелі болады. Сондықтан логарифмдер салыстырылғанда теңсіздіктің бағыты сақталады.",
    explain: "Мысалы, үш негізіндегі x плюс бір өрнегінің логарифмі екіден үлкен болсын. Үш саны бірден үлкен, сондықтан x плюс бір саны тоғыздан үлкен болуы керек. Осыдан x сегізден үлкен. Анықталу шартында x минус бірден үлкен екені шығады, ал x сегізден үлкен болғанда бұл шарт автоматты түрде орындалады.",
    rule: "Негіз бірден үлкен болса, логарифмдерді алып тастағанда теңсіздік таңбасы өзгермейді.",
    formula: M`a>1:\quad\log_a u>\log_a v\iff u>v`,
    steps: [
      M`\log_3(x+1)>2`,
      M`x+1>0`,
      M`x+1>9`,
      M`x>8`,
      M`x\in(8;+\infty)`
    ],
    warning: "Бірдей негіздегі логарифмдерді салыстыруда аргументтердің екеуі де оң болуы керек."
  },
  {
    title: "Негізі нөл мен бір арасындағы теңсіздік",
    definition: "Негізі нөл мен бір арасында болатын логарифмдік функция кемімелі болады. Сондықтан логарифмдік теңсіздікті түрлендіргенде теңсіздік таңбасы кері бағытқа өзгереді.",
    explain: "Мысалы, негізі 0,5 болатын x санының логарифмі минус екіден үлкен болсын. 0,5 негізіндегі функция кемімелі. Сондықтан x саны 0,5 санының минус екінші дәрежесінен кіші болуы керек. Бұл дәреже төртке тең. Бірақ x міндетті түрде оң болуы тиіс. Жауап нөл мен төрт арасындағы ашық аралық болады.",
    rule: "Негіз нөл мен бір арасында болғанда теңсіздік таңбасының бағытын міндетті түрде өзгертеміз.",
    formula: M`0<a<1:\quad\log_a u>\log_a v\iff u<v`,
    steps: [
      M`\log_{0.5}x>-2`,
      M`x>0`,
      M`x<(0.5)^{-2}`,
      M`x<4`,
      M`x\in(0;4)`
    ],
    warning: "Кемімелі функцияда таңба өзгереді. Жауаптағы нөл шекарасы кірмейді."
  },
  {
    title: "Логарифм қасиеттерін қолданып шешу",
    definition: "Логарифмдік теңсіздікті шешкенде көбейтінді мен бөлінді қасиеттерін пайдаланып бірнеше логарифмді біріктіруге болады. Бірақ бастапқы анықталу шарттары сақталуы тиіс.",
    explain: "Мысалы, екі негізіндегі x логарифмі мен екі санының логарифмінің қосындысы үштен үлкен делік. Қосындыны көбейтіндінің логарифміне айналдырамыз. Сонда екі x көбейтіндісінің логарифмі үштен үлкен болады. Негіз екі болғандықтан таңба сақталады. Екі x сегізден үлкен, демек x төрттен үлкен.",
    rule: "Логарифмдерді біріктірген соң шыққан шешімді бастапқы барлық аргументтердің оң болу шарттарымен қиылыстырамыз.",
    formula: M`\log_a u+\log_a v=\log_a(uv)`,
    steps: [
      M`\log_2 x+\log_2 2>3`,
      M`x>0`,
      M`\log_2(2x)>3`,
      M`2x>8`,
      M`x>4`
    ],
    warning: "Көбейтіндінің оң болуы әр көбейткіштің оң болуын әрдайым білдірмейді. Бастапқы шартты ұмытпаңдар."
  },
  {
    title: "Логарифмдік теңсіздіктер жүйесі",
    definition: "Бірнеше логарифмдік теңсіздіктің барлығын бір мезгілде қанағаттандыратын мәндер жиыны теңсіздіктер жүйесінің шешімі деп аталады. Ол жеке шешімдердің қиылысуынан табылады.",
    explain: "Мысалы, екі негізіндегі x логарифмі бірден үлкен және үштен кіші болсын. Бірінші теңсіздіктен x екіден үлкен, екіншісінен x сегізден кіші болады. Екі шарт бір уақытта орындалуы керек. Сондықтан шешімі екі мен сегіз арасындағы ашық аралық. Екі және сегіз мәндері қатаң теңсіздікке кірмейді.",
    rule: "Жүйенің барлық теңсіздігін жеке шешіп, олардың ортақ аралығын табамыз.",
    formula: M`\begin{cases}\log_2 x>1\\\log_2 x<3\end{cases}`,
    steps: [
      M`x>0`,
      M`\log_2 x>1\Rightarrow x>2`,
      M`\log_2 x<3\Rightarrow x<8`,
      M`2<x<8`,
      M`x\in(2;8)`
    ],
    warning: "Жүйенің жауабы біріктіру емес, барлық шарттың ортақ қиылысуы болады."
  }
];

// 10 КОНСПЕКТ — 20 ӨЗІНДІК ЕСЕП
// Әр есепте шешу жолын ашуға болады.

const notes = [
  {
    title:"Логарифмнің анықталу облысы",
    text:"Логарифмнің аргументі нөлден үлкен болуы тиіс. Айнымалы өрнек берілсе, сол өрнектің оң болу шартын жазамыз. Бұл шартты әр теңсіздікке жеке қолданамыз.",
    formula:M`f(x)>0`,
    example:[M`\log_2(x-3)`,M`x-3>0`,M`x>3`],
    self:[
      {q:M`\log_3(x+5)`,steps:[M`x+5>0`],answer:M`x>-5`},
      {q:M`\log_2(2x-8)`,steps:[M`2x-8>0`],answer:M`x>4`}
    ]
  },
  {
    title:"Өспелі логарифмдік функция",
    text:"Негіз бірден үлкен болғанда логарифмдік функция өседі. Аргументтерді салыстырғанда теңсіздік бағыты сақталады.",
    formula:M`a>1:\quad\log_a u>\log_a v\iff u>v`,
    example:[M`\log_2 x>3`,M`x>8`],
    self:[
      {q:M`\log_2 x>4`,steps:[M`x>2^4`],answer:M`x>16`},
      {q:M`\log_3 x<2`,steps:[M`x>0`,M`x<9`],answer:M`0<x<9`}
    ]
  },
  {
    title:"Кемімелі логарифмдік функция",
    text:"Негіз нөл мен бір аралығында болса, функция кемиді. Сондықтан логарифмдік теңсіздік түрлендірілгенде салыстыру бағыты өзгереді.",
    formula:M`0<a<1:\quad\log_a u>\log_a v\iff u<v`,
    example:[M`\log_{0.5}x>0`,M`0<x<1`],
    self:[
      {q:M`\log_{0.5}x>-1`,steps:[M`0<x<2`],answer:M`0<x<2`},
      {q:M`\log_{0.5}x<0`,steps:[M`x>1`],answer:M`x>1`}
    ]
  },
  {
    title:"Қатаң теңсіздіктер",
    text:"Қатаң теңсіздіктерде шекарадағы мәндер жауапқа кірмейді. Жауаптың аралық жазылуында дөңгелек жақшалар қолданылады.",
    formula:M`x>c\Rightarrow x\in(c;+\infty)`,
    example:[M`\log_2x>1`,M`x>2`,M`x\in(2;+\infty)`],
    self:[
      {q:M`\log_2x<1`,steps:[M`x>0`,M`x<2`],answer:M`x\in(0;2)`},
      {q:M`\log_3x>1`,steps:[M`x>3`],answer:M`x\in(3;+\infty)`}
    ]
  },
  {
    title:"Қатаң емес теңсіздіктер",
    text:"Қатаң емес теңсіздік теңдік жағдайына да рұқсат береді. Егер шекара логарифмнің анықталу облысына кірсе, оны квадрат жақшамен көрсетеміз.",
    formula:M`x\ge c\Rightarrow x\in[c;+\infty)`,
    example:[M`\log_2x\ge2`,M`x\ge4`],
    self:[
      {q:M`\log_2x\ge3`,steps:[M`x\ge8`],answer:M`x\in[8;+\infty)`},
      {q:M`\log_3x\le1`,steps:[M`x>0`,M`x\le3`],answer:M`x\in(0;3]`}
    ]
  },
  {
    title:"Логарифм аргументіндегі өрнек",
    text:"Егер логарифм аргументінде x плюс немесе x минус сан тұрса, теңсіздікті осы өрнекке қатысты шешеміз. Соңында x мәндері үшін анықталу шартын тексереміз.",
    formula:M`\log_a(x+b)>c`,
    example:[M`\log_2(x+1)>2`,M`x+1>4`,M`x>3`],
    self:[
      {q:M`\log_2(x-1)>2`,steps:[M`x>1`,M`x-1>4`],answer:M`x>5`},
      {q:M`\log_3(x+2)<2`,steps:[M`x>-2`,M`x+2<9`],answer:M`-2<x<7`}
    ]
  },
  {
    title:"Екі логарифмді салыстыру",
    text:"Бірдей негіздегі екі логарифмді салыстыру үшін олардың аргументтерін салыстырамыз. Алдымен екі аргументтің де оң екенін тексереміз.",
    formula:M`\log_a u<\log_a v`,
    example:[M`\log_2(x+1)>\log_2 4`,M`x+1>4`,M`x>3`],
    self:[
      {q:M`\log_3(x+2)>\log_3 5`,steps:[M`x+2>5`],answer:M`x>3`},
      {q:M`\log_{0.5}(x+1)>\log_{0.5}4`,steps:[M`x>-1`,M`x+1<4`],answer:M`-1<x<3`}
    ]
  },
  {
    title:"Логарифмдердің қосындысы",
    text:"Қосындыны көбейтіндінің логарифміне біріктіруге болады. Бастапқы логарифмдердің әрбір аргументі оң болуы қажет.",
    formula:M`\log_a u+\log_a v=\log_a(uv)`,
    example:[M`\log_2x+\log_2 2>3`,M`2x>8`,M`x>4`],
    self:[
      {q:M`\log_2x+\log_2 4>4`,steps:[M`4x>16`],answer:M`x>4`},
      {q:M`\log_3x+\log_3 3<3`,steps:[M`x>0`,M`3x<27`],answer:M`0<x<9`}
    ]
  },
  {
    title:"Екі теңсіздіктің қиылысуы",
    text:"Жүйенің шешімін табу үшін екі теңсіздікті жеке шешеміз. Содан соң екі шартқа да сәйкес келетін мәндердің ортақ аралығын аламыз.",
    formula:M`\begin{cases}x>p\\x<q\end{cases}`,
    example:[M`x>2`,M`x<8`,M`x\in(2;8)`],
    self:[
      {q:M`\begin{cases}\log_2x>2\\\log_2x<4\end{cases}`,steps:[M`x>4`,M`x<16`],answer:M`4<x<16`},
      {q:M`\begin{cases}\log_3x\ge1\\\log_3x<3\end{cases}`,steps:[M`x\ge3`,M`x<27`],answer:M`3\le x<27`}
    ]
  },
  {
    title:"Аралық түрінде жауап жазу",
    text:"Жауапты аралық арқылы жазғанда қатаң теңсіздік шекарасы дөңгелек жақшамен, ал кіретін шекара квадрат жақшамен беріледі. Шексіздік әрқашан дөңгелек жақшамен жазылады.",
    formula:M`p<x\le q\Rightarrow x\in(p;q]`,
    example:[M`2<x\le8`,M`x\in(2;8]`],
    self:[
      {q:M`\begin{cases}\log_2x\ge1\\\log_2x\le3\end{cases}`,steps:[M`x\ge2`,M`x\le8`],answer:M`x\in[2;8]`},
      {q:M`\begin{cases}\log_{0.5}x>-3\\\log_{0.5}x\le-1\end{cases}`,steps:[M`x<8`,M`x\ge2`],answer:M`x\in[2;8)`}
    ]
  }
];

// 4 ДЕҢГЕЙ — ӘР ДЕҢГЕЙДЕ 5 ЕСЕП

// Q: формула, A: жауап нұсқалары,
// C: дұрыс жауап индексі, S: шешу жолы
function task(q, a, c, s) {
  return {q, options:a, correct:c, steps:s};
}

const levels = [
  {
    name:"I деңгей — Жеңіл",
    points:5,
    tasks:[
      task(M`\log_2 x>3`,
        ["x > 8","0 < x < 8","x ≥ 8","x > 3"],0,
        [M`x>2^3`,M`x>8`]),
      task(M`\log_3 x<2`,
        ["x < 9","0 < x < 9","x > 9","x ≤ 9"],1,
        [M`x>0`,M`x<3^2`,M`0<x<9`]),
      task(M`\log_2 x\ge2`,
        ["x > 4","x ≤ 4","x ≥ 4","0 < x < 4"],2,
        [M`x\ge2^2`,M`x\ge4`]),
      task(M`\log_5 x>1`,
        ["x > 1","0 < x < 5","x ≥ 5","x > 5"],3,
        [M`x>5^1`,M`x>5`]),
      task(M`\log_2 x\le3`,
        ["0 < x ≤ 8","x ≥ 8","x < 8","x > 0"],0,
        [M`x>0`,M`x\le8`,M`0<x\le8`])
    ]
  },
  {
    name:"II деңгей — Орташа",
    points:10,
    tasks:[
      task(M`\log_{0.5}x>0`,
        ["x > 1","0 < x < 1","x ≥ 1","x < 0"],1,
        [M`x>0`,M`x<1`,M`0<x<1`]),
      task(M`\log_{0.5}x<-2`,
        ["0 < x < 4","x ≥ 4","x > 4","x < 4"],2,
        [M`x>(0.5)^{-2}`,M`x>4`]),
      task(M`\log_2(x-3)>2`,
        ["x > 4","x > 3","3 < x < 7","x > 7"],3,
        [M`x>3`,M`x-3>4`,M`x>7`]),
      task(M`\log_3(x+1)\ge2`,
        ["x ≥ 8","x > 8","x ≥ 9","x < 8"],0,
        [M`x+1\ge9`,M`x\ge8`]),
      task(M`\log_{0.5}(x+2)\ge-1`,
        ["x > 0","-2 < x ≤ 0","x ≤ 0","x ≥ 0"],1,
        [M`x+2>0`,M`x+2\le2`,M`-2<x\le0`])
    ]
  },
  {
    name:"III деңгей — Қиын",
    points:15,
    tasks:[
      task(M`\log_2(x+1)>\log_2 5`,
        ["x > 5","x ≥ 4","x > 4","-1 < x < 4"],2,
        [M`x+1>5`,M`x>4`]),
      task(M`\log_{0.5}(x-1)>\log_{0.5}4`,
        ["x > 5","1 ≤ x < 5","x < 5","1 < x < 5"],3,
        [M`x-1>0`,M`x-1<4`,M`1<x<5`]),
      task(M`\log_2x+\log_2 4>5`,
        ["x > 8","x > 32","0 < x < 8","x ≥ 8"],0,
        [M`x>0`,M`4x>32`,M`x>8`]),
      task(M`\log_3x-\log_3 3\le2`,
        ["x < 27","0 < x ≤ 27","x > 27","x ≥ 27"],1,
        [M`x>0`,M`x/3\le9`,M`0<x\le27`]),
      task(M`\log_2(x-2)<\log_2 6`,
        ["x < 8","x > 2","2 < x < 8","x > 8"],2,
        [M`x>2`,M`x-2<6`,M`2<x<8`])
    ]
  },
  {
    name:"IV деңгей — Өте қиын",
    points:20,
    tasks:[
      task(M`\begin{cases}\log_2x>1\\\log_2x<4\end{cases}`,
        ["2 ≤ x < 16","2 < x ≤ 16","x > 16","2 < x < 16"],3,
        [M`x>2`,M`x<16`,M`2<x<16`]),
      task(M`\begin{cases}\log_3x\ge1\\\log_3x<2\end{cases}`,
        ["3 ≤ x < 9","3 < x ≤ 9","3 < x < 9","x ≥ 9"],0,
        [M`x\ge3`,M`x<9`,M`3\le x<9`]),
      task(M`\begin{cases}\log_{0.5}x>-3\\\log_{0.5}x\le-1\end{cases}`,
        ["2 < x ≤ 8","2 ≤ x < 8","x > 8","0 < x < 2"],1,
        [M`x<8`,M`x\ge2`,M`2\le x<8`]),
      task(M`\log_2(x-1)+\log_2(x+1)>3`,
        ["x > 1","x > 2","x > 3","1 < x < 3"],2,
        [M`x>1`,M`x^2-1>8`,M`x^2>9`,M`x>3`]),
      task(M`\begin{cases}\log_2(x-1)\ge1\\\log_2(x-1)<3\end{cases}`,
        ["1 < x < 9","3 < x ≤ 9","x ≥ 9","3 ≤ x < 9"],3,
        [M`x-1\ge2`,M`x-1<8`,M`3\le x<9`])
    ]
  }
];

// 15 КОМАНДАЛЫҚ СҰРАҚ
const quiz = [
  {q:"Логарифмдік теңсіздікті шешкенде алдымен не тексеріледі?",
   a:["Негіздің түсі","Анықталу облысы","Квадрат түбір","Жауап саны"],c:1},
  {q:"Негіз бірден үлкен болса, теңсіздік таңбасы қалай өзгереді?",
   a:["Сақталады","Кері айналады","Жойылады","Теңдікке айналады"],c:0},
  {q:"Негіз 0 мен 1 арасында болса, теңсіздік таңбасы қалай өзгереді?",
   a:["Сақталады","Жойылады","Кері айналады","Нөлге тең болады"],c:2},
  {q:"log₂x > 2 теңсіздігінің жауабы?",
   a:["x > 2","x ≥ 4","0 < x < 4","x > 4"],c:3},
  {q:"log₃x < 1 теңсіздігінің жауабы?",
   a:["x > 3","0 < x < 3","x ≤ 3","x < 0"],c:1},
  {q:"log₀․₅x > 0 теңсіздігінің жауабы?",
   a:["0 < x < 1","x > 1","x < 0","x ≥ 1"],c:0},
  {q:"log₂(x−3) анықталуы үшін қандай шарт керек?",
   a:["x < 3","x = 3","x > 3","x ≥ 0"],c:2},
  {q:"Қатаң теңсіздіктің шекарасы аралыққа кіре ме?",
   a:["Иә","Тек нөл болса","Әрдайым","Жоқ"],c:3},
  {q:"log₂x ≥ 3 теңсіздігінің жауабы?",
   a:["x > 8","x ≥ 8","x ≤ 8","x ≥ 3"],c:1},
  {q:"Екі теңсіздіктен тұратын жүйеде не табылады?",
   a:["Ортақ шешім","Барлық шешімдердің бірігуі","Орташа мән","Тек бірінші шешім"],c:0},
  {q:"log₀․₅x < −1 теңсіздігінің жауабы?",
   a:["0 < x < 2","x ≥ 2","x > 2","x < 2"],c:2},
  {q:"log₂(x+1) > 2 теңсіздігінің жауабы?",
   a:["x > 4","x ≥ 3","x < 3","x > 3"],c:3},
  {q:"log₂x + log₂2 > 4 теңсіздігінің жауабы?",
   a:["x ≥ 8","x > 8","x < 8","x > 4"],c:1},
  {q:"2 < x ≤ 8 аралығы қалай жазылады?",
   a:["(2;8]","[2;8]","(2;8)","[2;8)"],c:0},
  {q:"log₂x > 1 және log₂x < 3 жүйесінің жауабы?",
   a:["x > 2","x < 8","2 < x < 8","2 ≤ x ≤ 8"],c:2}
];

// ҮЙ ЖҰМЫСЫ
const homework = [
  {
    title:"1. Логарифмдік теңсіздіктер",
    text:"Теңсіздіктердің анықталу облысын көрсетіп, шешімін сан аралығы түрінде жазыңдар. Негіз нөл мен бір аралығында болғанда таңбаның неге өзгеретінін түсіндіріңдер.",
    formulas:[
      M`\log_2(x-4)>3`,
      M`\log_3(2x+1)\le2`,
      M`\log_{0.5}(x+2)>-2`
    ]
  },
  {
    title:"2. Логарифмдік теңсіздіктер жүйесі",
    text:"Әр теңсіздікті жеке шешіңдер. Содан кейін барлық шарттың қиылысуын анықтап, жауапты сан осінде бейнелеңдер.",
    formulas:[
      M`\begin{cases}\log_2x>2\\\log_2x\le5\end{cases}`,
      M`\begin{cases}\log_{0.5}x\ge-3\\\log_{0.5}x<0\end{cases}`
    ]
  },
  {
    title:"3. Теориялық жұмыс",
    text:"«Логарифмдік теңсіздіктерді шешу алгоритмі» тақырыбында 8–10 сөйлем жазыңдар. Өспелі және кемімелі функцияларды салыстырып, бір теңсіздікті тақтада ауызша түсіндіріңдер.",
    formulas:[
      M`a>1:\quad\log_a u>\log_a v\iff u>v`,
      M`0<a<1:\quad\log_a u>\log_a v\iff u<v`
    ]
  }
];

// 37 СЛАЙДТЫ ҚҰРУ

const slides = [{type:"intro",title:"Кіріспе"}];

theory.forEach((_,i) =>
  slides.push({type:"theory",index:i,title:`Түсіндірме ${i+1}`})
);
notes.forEach((_,i) =>
  slides.push({type:"note",index:i,title:`Конспект ${i+1}`})
);
levels.forEach((_,i) =>
  slides.push({type:"level",index:i,title:`${i+1}-деңгей`})
);
quiz.forEach((_,i) =>
  slides.push({type:"game",index:i,title:`${i%3+1}-топ • ${i+1}-сұрақ`})
);
slides.push(
  {type:"homework",title:"Үй жұмысы"},
  {type:"finish",title:"Қорытынды"}
);

// КҮЙ АЙНЫМАЛЫЛАРЫ
let page = 0;
let individualScore = 0;
let teamScores = [0,0,0];

const completed = new Set();
const gameAnswers = new Map();

const TOTAL_SECONDS = 80*60;
let remainingSeconds = TOTAL_SECONDS;
let timerID = null;
let deadline = 0;

// ҚАУІПСІЗ HTML
function safe(value) {
  return String(value).replace(/[&<>"']/g,c=>({
    "&":"&amp;","<":"&lt;",">":"&gt;",
    '"':"&quot;","'":"&#39;"
  })[c]);
}

// ФОРМУЛАНЫ ҚОРҒАП САҚТАУ
function math(tex) {
  const value = String(tex);
  return `<div class="math" data-tex="${encodeURIComponent(value)}"></div>`;
}

// FORMULA RENDER
let renderVersion = 0;
let mathQueue = Promise.resolve();

function drawFormulas() {
  const version = ++renderVersion;
  const elements = [
    ...$("content").querySelectorAll(".math[data-tex]")
  ];

  elements.forEach(el=>{
    el.textContent = decodeURIComponent(el.dataset.tex);
    el.classList.add("fallback");
  });

  mathQueue = mathQueue.then(async()=>{
    if(!window.MathJax) return;
    await MathJax.startup.promise;

    if(typeof MathJax.tex2svgPromise!=="function") return;

    for(const el of elements) {
      if(version!==renderVersion || !el.isConnected) return;

      const tex = decodeURIComponent(el.dataset.tex);

      try {
        const node = await MathJax.tex2svgPromise(
          tex,{display:true}
        );

        if(version!==renderVersion || !el.isConnected) return;

        el.replaceChildren(node);
        el.classList.remove("fallback");
        el.removeAttribute("data-tex");
      } catch(error) {
        el.textContent=tex;
        el.classList.add("fallback");
        console.error("Формула қатесі:",tex,error);
      }
    }
  }).catch(error=>{
    console.warn("MathJax жүктелмеді:",error);
  });
}

// КАРТОЧКАЛАР ЖӘНЕ ШЕШУ ҚАДАМДАРЫ
function card(color,title,body) {
  return `<section class="card ${color}">
    <h3>${safe(title)}</h3>${body}
  </section>`;
}

function stepsHTML(steps) {
  return steps.map((step,i)=>`
    <div class="step">
      <strong>${i+1}-қадам</strong>
      ${math(step)}
    </div>
  `).join("");
}

function selfHTML(tasks,noteIndex) {
  return tasks.map((task,i)=>{
    const id=`self_${noteIndex}_${i}`;

    return `<section class="self-task">
      <h3>✏️ ${i+1}-өзіндік есеп</h3>
      ${math(task.q)}
      <p>Есепті дәптерге шығарып, шешімін тексеріңдер.</p>
      <button class="action" data-toggle="${id}">
        Шешу жолын көрсету
      </button>
      <div class="solution" id="${id}" hidden>
        ${stepsHTML(task.steps)}
        <h3>Дұрыс жауап</h3>
        ${math(task.answer)}
      </div>
    </section>`;
  }).join("");
}

// КІРІСПЕ
function introHTML() {
  return `<div class="slide">
    <div class="eyebrow">МАТЕМАТИКА • 1 КУРС • 80 МИНУТ</div>
    <h1 class="gradient">§18. ${safe(lesson.title)}</h1>

    ${card("blue","Сабақтың мақсаты",`<p>${safe(lesson.goal)}</p>`)}

    ${card("gold","Өспелі функция",math(
      M`a>1:\quad\log_a u>\log_a v\iff u>v`
    ))}

    ${card("purple","Кемімелі функция",math(
      M`0<a<1:\quad\log_a u>\log_a v\iff u<v`
    ))}

    ${card("green","Сабақтың құрылымы",`
      <p>5 толық түсіндірме</p>
      <p>10 конспект және 20 өзіндік есеп</p>
      <p>4 деңгейдегі 20 есеп</p>
      <p>3 топқа 15 ойын сұрағы</p>
      <p>Үй жұмысы және қорытынды</p>
    `)}

    ${card("blue","80 минуттық жоспар",`
      <p>Кіріспе — 5 минут</p>
      <p>Теория — 20 минут</p>
      <p>Конспект — 15 минут</p>
      <p>Деңгейлік есептер — 20 минут</p>
      <p>Топтық ойын — 15 минут</p>
      <p>Үй жұмысы және қорытынды — 5 минут</p>
    `)}
  </div>`;
}

// 5 ТҮСІНДІРМЕ
function theoryHTML(i) {
  const t = theory[i];

  return `<div class="slide">
    <div class="eyebrow">ТҮСІНДІРМЕ ${i+1} / 5</div>
    <h2>${safe(t.title)}</h2>
    ${card("blue","Анықтама",`<p>${safe(t.definition)}</p>`)}
    ${card("purple","Толық түсіндірме",`<p>${safe(t.explain)}</p>`)}
    ${card("green","Ереже",`<p>${safe(t.rule)}</p>`)}
    ${card("gold","Формула",math(t.formula))}
    ${card("green","Шығарылған мысал",stepsHTML(t.steps))}
    ${card("red","Маңызды ескерту",`<p>${safe(t.warning)}</p>`)}
  </div>`;
}

// 10 КОНСПЕКТ
function noteHTML(i) {
  const n=notes[i];

  return `<div class="slide">
    <div class="eyebrow">КОНСПЕКТ ${i+1} / 10</div>
    <h2>${safe(n.title)}</h2>
    <div class="notebook">
      <h3>✍ Дәптерге жазып алыңдар</h3>
      <p>${safe(n.text)}</p>
    </div>
    ${card("gold","Формула",math(n.formula))}
    ${card("green","Шығарылған мысал",stepsHTML(n.example))}
    <div class="eyebrow">ӨЗІНДІК ЖҰМЫС</div>
    <h2>Екі есеп</h2>
    ${selfHTML(n.self,i)}
  </div>`;
}

// 4 ДЕҢГЕЙ — ДҰРЫС АРАЛЫҚТЫ ТАҢДАУ
function levelHTML(i) {
  const level=levels[i];

  return `<div class="slide">
    <div class="eyebrow">ДЕҢГЕЙ ${i+1} / 4</div>
    <h2>📐 ${safe(level.name)}</h2>

    <div class="level-header">
      <span>5 есеп</span>
      <span>Әр дұрыс жауап: +${level.points} ұпай</span>
    </div>

    <p>
      Теңсіздікті дәптерге шешіңдер.
      Содан кейін жауаптардың ішінен дұрыс аралықты таңдаңдар.
    </p>

    <div class="level-grid">
      ${level.tasks.map((t,j)=>{
        const key=`${i}_${j}`;
        const selected=completed.has(key);

        return `<section class="level-task">
          <h3>${j+1}-есеп</h3>
          ${math(t.q)}

          <div class="answers">
            ${t.options.map((option,k)=>`
              <button
                data-task="${key}"
                data-option="${k}"
                ${selected?"disabled":""}
                class="${selected&&k===t.correct?"correct":""}">
                ${"ABCD"[k]}. ${safe(option)}
              </button>
            `).join("")}
          </div>

          <p id="feedback_${key}" class="feedback ${selected?"correct":""}">
            ${selected?`✓ +${level.points} ұпай`:"Дұрыс шешімді таңдаңдар."}
          </p>

          <button class="action" data-toggle="solution_${key}">
            Шешу жолын көрсету
          </button>
          <div class="solution" id="solution_${key}" hidden>
            ${stepsHTML(t.steps)}
            <h3>Дұрыс жауап</h3>
            <p>${safe(t.options[t.correct])}</p>
          </div>
        </section>`;
      }).join("")}
    </div>
  </div>`;
}

// 3 ТОПТЫҚ ОЙЫН
function gameHTML(i) {
  const question=quiz[i];
  const team=i%3;
  const chosen=gameAnswers.get(i);

  return `<div class="slide">
    <div class="eyebrow">ТОПТЫҚ ОЙЫН ${i+1} / 15</div>
    <h2>🏆 ${team+1}-топ жауап береді</h2>

    <div class="scores">
      ${teamScores.map((score,j)=>`
        <div class="team ${j===team?"current":""}">
          ${j+1}-топ <strong>${score}</strong>
        </div>
      `).join("")}
    </div>

    ${card("gold",`${i+1}-сұрақ`,`
      <p>${safe(question.q)}</p>
      <div class="answers">
        ${question.a.map((option,k)=>{
          let cls="";
          if(chosen!==undefined) {
            if(k===question.c) cls="correct";
            else if(k===chosen) cls="wrong";
          }
          return `<button data-choice="${k}" class="${cls}"
            ${chosen!==undefined?"disabled":""}>
            ${"ABCD"[k]}. ${safe(option)}
          </button>`;
        }).join("")}
      </div>
      <p>${chosen===undefined
        ?"Төрт жауаптың біреуін таңдаңдар."
        :chosen===question.c
          ?"✓ Дұрыс! +10 ұпай."
          :"Дұрыс жауап: "+safe(question.a[question.c])}
      </p>
    `)}

    ${card("blue","Ойын ережесі",`
      <p>1-топ → 2-топ → 3-топ ретімен ауысады.</p>
      <p>Әр дұрыс жауап үшін 10 ұпай беріледі.</p>
      <p>Жауап бергеннен кейін «Келесі» басыңдар.</p>
    `)}
  </div>`;
}

// ҮЙ ЖҰМЫСЫ
function homeworkHTML() {
  return `<div class="slide">
    <div class="eyebrow">ҮЙ ТАПСЫРМАСЫ</div>
    <h2>📚 Үй жұмысы</h2>

    ${homework.map((item,i)=>card(
      ["blue","gold","green"][i],
      item.title,
      `<p>${safe(item.text)}</p>`+
      item.formulas.map(math).join("")
    )).join("")}
  </div>`;
}

// ҚОРЫТЫНДЫ
function finishHTML() {
  const max=Math.max(...teamScores);
  const finished=gameAnswers.size===15;
  const winners=teamScores
    .map((v,i)=>v===max?`${i+1}-топ`:null)
    .filter(Boolean);

  return `<div class="slide">
    <div class="eyebrow">САБАҚ ҚОРЫТЫНДЫСЫ</div>
    <h1 class="gradient">Сабақ аяқталды!</h1>

    <div class="scores">
      ${teamScores.map((v,i)=>`
        <div class="team">${i+1}-топ<strong>${v}</strong></div>
      `).join("")}
    </div>

    ${card("green","Командалық ойын",`
      <p>Жауап берілген сұрақтар: ${gameAnswers.size}/15</p>
      <p>${finished
        ?winners.join(", ")+(winners.length===1?" — жеңімпаз!":" — тең ұпай!")
        :"Ойын әлі толық аяқталмаған."}
      </p>
    `)}

    ${card("blue","Деңгейлік есептер",`
      <p>Орындалған есептер: ${completed.size}/20</p>
      <p>Жеке ұпай: ${individualScore}</p>
    `)}

    ${card("gold","Бүгін не үйрендік?",`
      <p>Логарифмдік теңсіздіктерді шештік.</p>
      <p>Өспелі және кемімелі функцияларды ажыраттық.</p>
      <p>Анықталу облысын тексердік.</p>
      <p>Теңсіздіктер жүйесінің ортақ шешімін таптық.</p>
    `)}

    <h2>Сау болыңыздар!</h2>
  </div>`;
}

// БЕТ АУЫСТЫРУ
function updateScore() {
  $("totalScore").textContent =
    individualScore+teamScores.reduce((s,v)=>s+v,0);
}

function render() {
  const s=slides[page];
  renderVersion++;

  const views={
    intro:()=>introHTML(),
    theory:()=>theoryHTML(s.index),
    note:()=>noteHTML(s.index),
    level:()=>levelHTML(s.index),
    game:()=>gameHTML(s.index),
    homework:()=>homeworkHTML(),
    finish:()=>finishHTML()
  };

  const content=$("content");
  content.innerHTML=views[s.type]();
  content.scrollTop=0;

  $("pageCounter").textContent=`${page+1} / ${slides.length}`;
  $("pageTitle").textContent=s.title;
  $("pageProgress").style.width=`${(page+1)/slides.length*100}%`;
  $("prevPage").disabled=page===0;
  $("nextPage").disabled=page===slides.length-1;

  document.querySelectorAll("[data-section]").forEach(btn=>{
    btn.classList.toggle("active",btn.dataset.section===s.type);
  });

  updateScore();
  drawFormulas();
}

$("nextPage").addEventListener("click",()=>{
  if(page<slides.length-1){page++;render();}
});
$("prevPage").addEventListener("click",()=>{
  if(page>0){page--;render();}
});

document.querySelectorAll("[data-section]").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const index=slides.findIndex(s=>s.type===btn.dataset.section);
    if(index>=0){page=index;render();}
  });
});

// БАТЫРМАЛАРДЫ ӨҢДЕУ
$("content").addEventListener("click",event=>{
  const toggle=event.target.closest("[data-toggle]");
  if(toggle) {
    const el=$(toggle.dataset.toggle);
    if(el)el.hidden=!el.hidden;
    return;
  }

  const taskButton=event.target.closest("[data-task]");
  if(taskButton) {
    const key=taskButton.dataset.task;
    const answer=Number(taskButton.dataset.option);
    const [i,j]=key.split("_").map(Number);
    const task=levels[i].tasks[j];

    if(completed.has(key))return;

    if(answer===task.correct) {
      completed.add(key);
      individualScore+=levels[i].points;
      render();
    } else {
      const feedback=$("feedback_"+key);
      feedback.textContent="Бұл аралық дұрыс емес. Қайта есептеп көріңдер.";
    }
    return;
  }

  const choice=event.target.closest("[data-choice]");
  if(choice) {
    const s=slides[page];
    if(s.type!=="game"||gameAnswers.has(s.index))return;

    const answer=Number(choice.dataset.choice);
    gameAnswers.set(s.index,answer);

    if(answer===quiz[s.index].c) {
      teamScores[s.index%3]+=10;
    }

    render();
  }
});

// ОЙЫНДЫ ЖАҢАРТУ
$("resetGame").addEventListener("click",()=>{
  gameAnswers.clear();
  teamScores=[0,0,0];
  render();
});

// ТОЛЫҚ ЭКРАН
$("fullscreenBtn").addEventListener("click",async()=>{
  try {
    if(document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await document.documentElement.requestFullscreen();
    }
  } catch(error) {
    console.warn("Толық экран:",error);
  }
});

// 80 МИНУТТЫҚ ТАЙМЕР
function formatTime(seconds) {
  return String(Math.floor(seconds/60)).padStart(2,"0")+
    ":"+String(seconds%60).padStart(2,"0");
}

function updateTimer() {
  $("remaining").textContent=formatTime(remainingSeconds);
  $("elapsed").textContent=formatTime(TOTAL_SECONDS-remainingSeconds);
  $("timeProgress").style.width=
    `${(TOTAL_SECONDS-remainingSeconds)/TOTAL_SECONDS*100}%`;
}

function pauseTimer() {
  if(timerID!==null){clearInterval(timerID);timerID=null;}
}

function startTimer() {
  if(timerID!==null||remainingSeconds<=0)return;
  deadline=Date.now()+remainingSeconds*1000;

  timerID=setInterval(()=>{
    remainingSeconds=Math.max(
      0,Math.ceil((deadline-Date.now())/1000)
    );
    updateTimer();
    if(remainingSeconds===0)pauseTimer();
  },250);
}

function resetTimer() {
  pauseTimer();
  remainingSeconds=TOTAL_SECONDS;
  updateTimer();
}

$("timerStart").addEventListener("click",startTimer);
$("timerPause").addEventListener("click",pauseTimer);
$("timerReset").addEventListener("click",resetTimer);

// АЛМАТЫ УАҚЫТЫ
function updateClock() {
  $("clock").textContent=new Intl.DateTimeFormat("kk-KZ",{
    timeZone:"Asia/Almaty",
    hour:"2-digit",minute:"2-digit",second:"2-digit",
    hour12:false
  }).format(new Date());
}
updateClock();
setInterval(updateClock,1000);

// КАЛЬКУЛЯТОРЛАР

const calcValues={basic:"",science:""};

const calcKeys={
  basic:[
    "C","⌫","(",")",
    "7","8","9","÷",
    "4","5","6","×",
    "1","2","3","−",
    "%","0",".","+",
    "="
  ],
  science:[
    "C","⌫","(",")",
    "sin","cos","tan","ctg",
    "√","∛","x²","xʸ",
    "log","ln","π","e",
    "7","8","9","÷",
    "4","5","6","×",
    "1","2","3","−",
    "%","0",".","+",
    "="
  ]
};

const calcMap={
  "×":"*","÷":"/","−":"-",
  "sin":"sin(","cos":"cos(","tan":"tan(","ctg":"ctg(",
  "√":"sqrt(","∛":"cbrt(",
  "log":"log(","ln":"ln(","π":"pi",
  "x²":"^2","xʸ":"^"
};

function createCalculator(type) {
  const grid=$("keys-"+type);
  grid.replaceChildren();

  calcKeys[type].forEach(key=>{
    const btn=document.createElement("button");
    btn.type="button";
    btn.textContent=key;

    if(key==="C")btn.classList.add("clear");
    if(key==="=")btn.classList.add("equal");
    if(["sin","cos","tan","ctg","log","ln"].includes(key)) {
      btn.classList.add("trig");
    }
    if(["×","÷","−","+","√","∛","x²","xʸ"].includes(key)) {
      btn.classList.add("op");
    }

    btn.addEventListener("click",()=>pressCalculator(type,key));
    grid.appendChild(btn);
  });
}

function pressCalculator(type,key) {
  let value=calcValues[type];

  if(key==="C") {
    value="";
  } else if(key==="⌫") {
    value=value==="Қате"?"":value.slice(0,-1);
  } else if(key==="=") {
    try {
      value=String(Number(calculate(value).toPrecision(12)));
    } catch(error) {
      value="Қате";
    }
  } else {
    if(value==="Қате")value="";
    value+=calcMap[key]??key;
  }

  calcValues[type]=value;
  const display=$("display-"+type);
  display.textContent=value||"0";
  display.scrollLeft=display.scrollWidth;
}

// МАТЕМАТИКАЛЫҚ ЕСЕПТЕУ — eval ҚОЛДАНЫЛМАЙДЫ

function calculate(input) {
  const source=String(input)
    .replace(/\s+/g,"")
    .replace(/,/g,".")
    .replace(/−/g,"-")
    .replace(/×/g,"*")
    .replace(/÷/g,"/");

  let pos=0;
  const rad=x=>x*Math.PI/180;

  const funcs={
    sin:x=>Math.sin(rad(x)),
    cos:x=>Math.cos(rad(x)),
    tan:x=>{
      if(Math.abs(Math.cos(rad(x)))<1e-12)throw Error("tan");
      return Math.tan(rad(x));
    },
    ctg:x=>{
      if(Math.abs(Math.sin(rad(x)))<1e-12)throw Error("ctg");
      return Math.cos(rad(x))/Math.sin(rad(x));
    },
    sqrt:x=>Math.sqrt(x),
    cbrt:x=>Math.cbrt(x),
    log:x=>Math.log10(x),
    ln:x=>Math.log(x)
  };

  function take(c) {
    if(source[pos]===c){pos++;return true;}
    return false;
  }

  function atom() {
    if(take("(")) {
      const result=expression();
      if(!take(")"))throw Error("Жақша жабылмаған");
      return result;
    }

    const rest=source.slice(pos);
    const match=rest.match(/^(?:\d+\.?\d*|\.\d+)/);

    if(match) {
      pos+=match[0].length;
      return Number(match[0]);
    }

    for(const name of Object.keys(funcs)) {
      if(rest.startsWith(name+"(")) {
        pos+=name.length+1;
        const argument=expression();
        if(!take(")"))throw Error("Жақша жабылмаған");

        const result=funcs[name](argument);
        if(!Number.isFinite(result))throw Error("Анықталмаған");
        return result;
      }
    }

    if(rest.startsWith("pi")){pos+=2;return Math.PI;}
    if(rest.startsWith("e")){pos++;return Math.E;}

    throw Error("Қате өрнек");
  }

  function postfix() {
    let v=atom();
    while(take("%"))v/=100;
    return v;
  }

  function power() {
    let v=postfix();
    if(take("^"))v=Math.pow(v,unary());
    return v;
  }

  function unary() {
    if(take("+"))return unary();
    if(take("-"))return -unary();
    return power();
  }

  function term() {
    let v=unary();

    while(true) {
      if(take("*"))v*=unary();
      else if(take("/")) {
        const d=unary();
        if(d===0)throw Error("Нөлге бөлу");
        v/=d;
      } else break;
    }
    return v;
  }

  function expression() {
    let v=term();
    while(true) {
      if(take("+"))v+=term();
      else if(take("-"))v-=term();
      else break;
    }
    return v;
  }

  if(!source)throw Error("Бос өрнек");

  const answer=expression();

  if(pos!==source.length||!Number.isFinite(answer)) {
    throw Error("Есептеу қатесі");
  }

  return Math.abs(answer)<1e-12?0:answer;
}

// АШУ / ЖАБУ

function toggleCalculator(type) {
  const element=$("calc-"+type);
  const opening=!element.classList.contains("visible");

  element.classList.toggle("visible",opening);

  if(opening) {
    const rect=element.getBoundingClientRect();
    const maxX=Math.max(0,innerWidth-element.offsetWidth);
    const maxY=Math.max(0,innerHeight-element.offsetHeight);

    element.style.left=Math.max(0,Math.min(maxX,rect.left))+"px";
    element.style.top=Math.max(0,Math.min(maxY,rect.top))+"px";
  }
}

$("basicOpen").addEventListener("click",()=>toggleCalculator("basic"));
$("scienceOpen").addEventListener("click",()=>toggleCalculator("science"));

document.querySelectorAll("[data-close]").forEach(btn=>{
  btn.addEventListener("click",()=>{
    $("calc-"+btn.dataset.close).classList.remove("visible");
  });
});

// ЖЫЛЖЫМАЛЫ КАЛЬКУЛЯТОР

function makeDraggable(element) {
  const handle=element.querySelector(".calc-head");
  let drag=null;

  handle.addEventListener("pointerdown",event=>{
    if(event.target.closest("button"))return;
    if(event.pointerType==="mouse"&&event.button!==0)return;

    const rect=element.getBoundingClientRect();
    drag={
      id:event.pointerId,
      x:event.clientX,y:event.clientY,
      left:rect.left,top:rect.top
    };
    handle.setPointerCapture(event.pointerId);
  });

  handle.addEventListener("pointermove",event=>{
    if(!drag||drag.id!==event.pointerId)return;

    const maxX=Math.max(0,innerWidth-element.offsetWidth);
    const maxY=Math.max(0,innerHeight-element.offsetHeight);

    element.style.left=Math.max(0,Math.min(
      maxX,drag.left+event.clientX-drag.x
    ))+"px";

    element.style.top=Math.max(0,Math.min(
      maxY,drag.top+event.clientY-drag.y
    ))+"px";
  });

  handle.addEventListener("pointerup",()=>drag=null);
  handle.addEventListener("pointercancel",()=>drag=null);
}

// ҚҰРЫЛЫМДЫ ТЕКСЕРУ

function runChecks() {
  function test(value,message) {
    if(!value)throw new Error(message);
  }

  test(theory.length===5,"Теория саны қате");
  test(notes.length===10,"Конспект саны қате");
  test(notes.every(n=>n.self.length===2),"20 өзіндік есеп қажет");
  test(levels.length===4,"4 деңгей қажет");
  test(levels.every(l=>l.tasks.length===5),"Әр деңгейде 5 есеп қажет");
  test(quiz.length===15,"15 ойын сұрағы қажет");
  test(slides.length===37,"37 слайд қажет");

  levels.forEach((level,i)=>{
    level.tasks.forEach((t,j)=>{
      test(t.options.length===4,
        `Деңгей ${i+1}, есеп ${j+1}: төрт нұсқа қажет`);
      test(Number.isInteger(t.correct)&&t.correct>=0&&t.correct<4,
        `Деңгей ${i+1}, есеп ${j+1}: индекс қате`);
    });
  });

  quiz.forEach((q,i)=>{
    test(q.a.length===4&&q.c>=0&&q.c<4,
      `Ойын сұрағы ${i+1}: қате`);
  });

  test(calculate("2^5")===32,"Дәреже қатесі");
  test(calculate("log(100)")===2,"Ондық логарифм қатесі");
  test(calculate("ln(e)")===1,"Натурал логарифм қатесі");
  test(calculate("8/4")===2,"Бөлу қатесі");
  test(calculate("2^3+4")===12,"Амал реті қатесі");

  const formulas=[
    ...theory.flatMap(t=>[t.formula,...t.steps]),
    ...notes.flatMap(n=>[
      n.formula,...n.example,
      ...n.self.flatMap(s=>[s.q,...s.steps,s.answer])
    ]),
    ...levels.flatMap(l=>l.tasks.flatMap(t=>[t.q,...t.steps])),
    ...homework.flatMap(h=>h.formulas)
  ];

  test(formulas.every(f=>!f.includes("\\boxed")),
    "Формулада boxed командасы табылды");

  console.log("§18: бастапқы тексерулер сәтті.");
}

// САЙТТЫ БАСТАУ

runChecks();
createCalculator("basic");
createCalculator("science");
makeDraggable($("calc-basic"));
makeDraggable($("calc-science"));
updateTimer();
render();
