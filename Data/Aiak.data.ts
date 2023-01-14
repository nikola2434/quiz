import { ITypeQuiz } from "./../config/Types";
export const aiakData: ITypeQuiz[] = [
  {
    title:
      "Контролируемыми показателями выполнения норм противодействия акустической речевой разведке являются",
    options: [
      "словесная разборчивость речи, определяемая в контрольных точках для нормированного энергетического спектра речевого сигнала",
      "распределение отношения «сигнал/шум», дБ, в октавных полосах частот в контрольных точках для нормированного энергетического спектра речевого сигнала.",
      "верны оба",
    ],
    correctIndex: [2],
    hint: "смотри пункт 3.1 Общие положения",
  },
  {
    title:
      "В качестве тестового (контрольного) сигнала необходимо использовать ",
    options: [
      "свипирующий сигнал с усредненным распределением плотности вероятности мгновенных значений в пределах каждой октавной полосы частот",
      "акустический шумовой сигнал с нормальным распределением плотности вероятности мгновенных значений в пределах каждой октавной полосы частот.",
    ],
    correctIndex: [1],
    hint: "смотри пункт 3.1 Общие положения",
  },
  {
    title:
      "Допускается также использование гармонических (тональных) сигналов со среднегеометрическими частотами октавных полос. ",
    correctIndex: [1],
    options: [
      "да",
      "да, в этом случае в контрольной точке необходимо провести не менее трех измерений",
      "нет",
    ],
    hint: "смотри пункт 3.1 Общие положения",
  },
  {
    title: "Контрольными точками являются:",
    options: [
      "места непреднамеренного прослушивания",
      "места возможной установки акустических датчиков аппаратуры акустической речевой разведки",
      "места возможной установки вибрационных датчиков аппаратуры акустической речевой разведки",
      "места возможной установки акустических и вибрационных датчиков аппаратуры акустической речевой разведки, а также места непреднамеренного прослушивания",
    ],
    correctIndex: [3],
    hint: "смотри пункт 3.3 Выбор контрольных точек и размещение элементов измерительных комплексов",
  },
  {
    title:
      "При контроле выполнения норм противодействия акустической речевой разведке с применением микрофонов (в том числе направленных) контрольные точки должны выбираться на расстоянии … от внешних поверхностей обследуемой ограждающей конструкции",
    options: ["0,5 метров", "1,5 метров", "3 метров"],
    correctIndex: [0],
    hint: "смотри пункт 3.3 Выбор контрольных точек и размещение элементов измерительных комплексов",
  },
  {
    title:
      "Если ограждающая конструкция состоит из неоднородных участков, то акустические измерения необходимо выполнять ",
    options: ["отдельно для каждого участка", "для всего участка"],
    correctIndex: [0],
    hint: "смотри пункт 3.3 Выбор контрольных точек и размещение элементов измерительных комплексов",
  },
  {
    title:
      "При контроле выполнения норм противодействия перехваты речевой информации по каналу непреднамеренного прослушивания контрольные точки выбираются на расстоянии … метра от ограждающих конструкций и на высоте … метра от поле с внешней стороны по отношению к контролируемому рабочего помещению",
    correctIndex: [1],
    options: ["1, 1,5", "0,5, 1,5", "1,5, 3"],
    hint: "смотри пункт 3.3 Выбор контрольных точек и размещение элементов измерительных комплексов",
  },
  {
    title:
      "Место установки генератора тестового акустического сигнала со встроенной акустической колонкой в контролируемом помещении выбирается ",
    options: [
      "Исходя из технических характеристик приборов",
      "исходя из особенностей речевой деятельности в этом помещении.",
      "Исходя из эксплуатационных особенностей",
    ],
    correctIndex: [1],
    hint: "смотри пункт 3.5 Размещение генератора тестового акустического сигнала со встроенной акустической колонкой",
  },
  {
    title:
      "Если все полученные значения отношений «сигнал/шум» превышают их нормированные значения, то ",
    correctIndex: [0],
    options: [
      "устанавливается факт недостаточности принятых мер по противодействию акустической речевой разведке относительно выбранной контрольной точки",
      "устанавливается факт достаточности принятых мер по противодействию акустической речевой разведке относительно выбранной контрольной точки",
    ],
    hint: "смотри пункт 3.8 Определение соответствия результатов инструментального контроля требованиям норм противодействия",
  },
  {
    title:
      "Если условию не соответствует одно или несколько полученных отношений «сигнал/шум», то ",
    options: [
      "необходимо выполнить вычисления показателя противодействия акустической речевой разведке и сопоставить его с ранее полученным значением  ",
      "необходимо выполнить вычисление показателя противодействия акустической речевой разведке и сопоставить его с нормированным значением",
    ],
    correctIndex: [1],
    hint: "смотри пункт 3.8 Определение соответствия результатов инструментального контроля требованиям норм противодействия",
  },
];
