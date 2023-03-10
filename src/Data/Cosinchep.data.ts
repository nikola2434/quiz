import { ITypeQuiz } from "../config/Types";
export const cosinchaepData: ITypeQuiz[] = [
  {
    title:
      "Исследуемое ТСЗ размещается на лабораторном столе. Если исследуемое ТСЗ состоит из нескольких устройств, их следует размещать …",
    options: [
      "на минимально возможном расстоянии друг от друга",
      "на максимально возможном расстоянии друг от друга",
    ],
    correctIndex: [0],
    hint: "смотри пункт 3.1 Подготовительные работы",
  },
  {
    title:
      "Акустический излучатель размещается на расстоянии … метра от ближайшего края ТСЗ",
    options: ["1 метра", "1,5 метра", "0,5 метра"],
    correctIndex: [0],
    hint: "смотри пункт 3.1 Подготовительные работы",
  },
  {
    title:
      "Для ТСЗ с известными условиями эксплуатации специальные исследования проводятся только …",
    correctIndex: [0],
    options: [
      "для задействованных портов (разъемов)",
      "для незадействованных портов (разъемов)",
    ],
    hint: "смотри пункт 3.1 Подготовительные работы",
  },
  {
    title:
      "Уровень звукового давления тестового сигнала на заданной частоте должен соответствовать уровню",
    options: [
      "выбирается произвольно",
      "при котором проводилась калибровка акустического излучателя",
    ],
    correctIndex: [1],
    hint: "смотри пункт 3.2 Порядок проведения измерений в слаботочных линиях",
  },
  {
    title:
      "Критерия обнаружения сигнала акустоэлектрических преобразований в исследуемом ТСЗ:",
    options: [
      "U(с+ш) - Uш ≥ 3 дБ",
      "U(с+ш) - Uш ≤ 3 дБ",
      "U(с+ш) - Uш= 3 дБ",
    ],
    correctIndex: [0],
    hint: "смотри пункт 3.2 Порядок проведения измерений в слаботочных линиях",
  },
  {
    title: "Если критерий не выполняется, то … ",
    options: [
      "принимается решение о защищенности акустической речевой информации от утечки за счет акустоэлектрических преобразований при данной схеме подключения пробника напряжения к линиям порта (разъема) ТСЗ",
      "принимается решение о незащищенности акустической речевой информации от утечки за счет акустоэлектрических преобразований при данной схеме подключения пробника напряжения к линиям порта (разъема) ТСЗ",
    ],
    correctIndex: [0],
    hint: "смотри пункт 3.2 Порядок проведения измерений в слаботочных линиях",
  },
];
