import { ITypeQuiz } from "./../config/Types";
export const koikaData: ITypeQuiz[] = [
  {
    title: "Какие виды ламп запрещается использовать в лабораториях",
    options: ["неоновых ламп", "энергосберегающих ламп", "ламп накаливания"],
    correctIndex: [0, 1],
    hint: "смотри пункт 3.1 Требования к проведению измерений",
  },
  {
    title: "Что относится к предварительным процедурам?",
    options: [
      "протоколирование и фотосъемка исследуемой печатной платы, проведение измерений размеров исследуемой печатной платы и ее компонентов",
      "рентгенография исследуемой печатной платы с помощью комплекса рентгеновского контроля для применения в стационарных условиях ",
      "картография исследуемой печатной платы с помощью цифрового микроскопа",
    ],
    correctIndex: [0, 1],
    hint: "смотри пункт 3.2 Криминалистический анализ исследуемой печатной платы",
  },
  {
    title: "Глитчинг – это…",
    correctIndex: [0],
    options: [
      "анализ на основе управляемых помех в линиях питания",
      "анализ побочного излучения микрочипов с помощью пробников ближнего поля",
      "исследование сигнальных дорожек, а также сигналов без нарушения их корректной работы",
    ],
    hint: "смотри пункт 3.2 Криминалистический анализ исследуемой печатной платы",
  },
  {
    title:
      "Комплект оборудования для проведения инженерно-криптографического анализа способен выполнять монтажных/демонтажных схемотехнических работ с компонентами устройств, плат, микросборок, созданными по следующим технологиям:",
    options: [
      "SMD (Surface Mounted Device – технология монтирования компонента на поверхность)",
      "BGA (Ball Grid Array – технология массива шариков)",
      "TNT (Through-hole Technology)",
      "верно все",
    ],
    correctIndex: [3],
    hint: "смотри пункт 3 Методике выполнения измерений с помощью КОИКА",
  },
];