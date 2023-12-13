const modalsContent = [
  {
    id: 'modal1',
    sources: [
      { media: '(max-width: 425px)', srcset: 'img/bg-1-p-150.png' },
      { media: '(max-width: 798px)', srcset: 'img/bg-1-p-250.png' },
      { media: '(min-width: 799px)', srcset: 'img/bg-1-p-600.png' },
    ],
    imgSrc: 'img/bg-1-p-600.png',
    imgAlt: 'BIOSTAT® A',
    title: 'BIOSTAT® A',
    text: `Новый лабораторный ферментер BIOSTAT® A - мини-модель из семейства ферментеров BIOSTAT®. Он предназначен для
            контроля роста клеток и ферментации и может быть использован в учебных целях. Управляющий блок BIOSTAT® A объединяет
            в себе различные функции, такие как Easy Load для насосов, аэрационный модуль и удобные коннекторы для датчиков и
            связи. Этот настольный биореактор компактен и экономит место в лаборатории.`,
    listItems1: [
      'Простая система аэрации',
      `Интуитивное управление как для новичков, так и для опытных
              пользователей`,
      'Встроенный охладитель, экономящий воду',
      'Удобные насосы с головкой Easy Load',
      'Система сохранения данных для анализа',
      'Гибкость управления и возможность выбора сосудов',
      'Опция параллельного культивирования',
      `Различные комплектации для разных целей, включая дистанционное управление для
              расширенных комплектаций`,
    ],
    listItems2: [
      'Микробиология: культивация бактерий, грибов и дрожжей',
      'Культуры клеток: выращивание клеток животных и растений',
      'Маломасштабное производство белков и моноклональных антител',
      'Исследовательские и учебные процессы',
    ],
  },
  {
    id: 'modal2',
    sources: [
      { media: '(max-width: 425px)', srcset: 'img/bg-2-p-150.png' },
      { media: '(max-width: 798px)', srcset: 'img/bg-2-p-250.png' },
      { media: '(min-width: 799px)', srcset: 'img/bg-2-p-600.png' },
    ],
    imgSrc: 'img/bg-2-p-600.png',
    imgAlt: 'BIOSTAT® B',
    title: 'BIOSTAT® B',
    text: `Ферментер BIOSTAT® B, предназначенный для биотехнологических и биофармацевтических исследований, 
    обеспечивает широкий спектр потребностей. Эта система, успешно используемая по всему миру,
     предлагает множество конфигураций для различных культур, включая микроорганизмы и клетки животных, 
     растений, насекомых. Она доступна в виде модифицированной версии третьего поколения с 1 июля 2012 года.`,
    listItems1: [
      'Легкая очистка с корпусом из нержавеющей стали',
      'Пространственно эффективная концепция подключения к модулю управления',
      'Гибкая конфигурация для ферментации и культивирования клеток',
      'Модульная система с 12” цветным сенсорным монитором, адаптируемая под специфические потребности',
      'Дисплей для отображения до 8 параметров процесса',
      'Программное обеспечение для сбора данных (BioPAT® MFCS)',
      'Одноразовый поликарбонатный культуральный сосуд на 2 л',
      'Масштабируемые боросиликатные стеклянные сосуды UniVessel® (1, 2, 5, 10 л)',
      'Варианты аэрации, включая поверхностную и глубинную',
      'Контроль различных процессных параметров, включая скорость мешалки, pH, pO2, температуру и другие',
    ],
    listItems2: [
      'Производство вакцин, рекомбинантных белков, моноклональных антител',
      'Разработка периодического, подпиточного, непрерывного культивирования и перфузии',
      'Масштабирование для промышленного производства',
      'Маломасштабное производство на стадиях доклинических/клинических исследований',
      'Культивирование высокоплотных, прикрепленных клеток и механически чувствительных организмов',
      'Исследования микроорганизмов и клеточных культур',
    ],
  },
  {
    id: 'modal3',
    sources: [
      { media: '(max-width: 425px)', srcset: 'img/bg-3-p-150.png' },
      { media: '(max-width: 798px)', srcset: 'img/bg-3-p-250.png' },
      { media: '(min-width: 799px)', srcset: 'img/bg-3-p-600.png' },
    ],
    imgSrc: 'img/bg-3-p-250.png',
    imgAlt: 'BIOSTAT® B-DCU II',
    title: 'BIOSTAT® B-DCU II',
    text: `Универсальная система BIOSTAT® B DCU II — это биореактор, созданный для исследований и оптимизации производственных процессов.
     Он позволяет эффективно осуществлять как увеличение, 
    так и уменьшение масштабов разнообразных ферментационных процедур, повышая уровень производительности и многофункциональности.
    BIOSTAT® B DCU II включает в себя основной блок управления BioPAT DCU, 
    поддерживающий подключение до шести локальных блоков управления и реакторов, 
    что делает его обходится без использования внешних интерфейсов и не требует дорогостоящего обновления программного обеспечения.`,
    listItems1: [
      'Промышленная система управления DCU 4 с 15-дюймовым сенсорным экраном',
      'Независимый контроль до 6 культуральных сосудов параллельно',
      'Сосуды UniVessel® с рубашкой или одностенные сосуды объемами от 0,5 до 10 л',
      'Измерение и регулирование pH, pO2, температуры, пенообразования, добавления субстрата, газов и перемешивания',
      'Непрерывный мониторинг газового объема, давления, Red/Ox и мутности',
      'До 6 встроенных перистальтических насосов с регулируемой скоростью',
      'Выбор между полярографическими и оптическими датчиками',
      'Эффективное смешивание газов с ротаметрами и контроллерами расхода',
      'Возможность модернизации функционала блока и сосуда на месте',
      'Улучшенное подключение аксессуаров и пробоотборников',
      'Легкая адаптация системы для различных типов культивирования клеток',
      'Интегрированный программный пакет для управления и сбора данных',
      'Конфигурация системы под заказ из множества вариантов',
    ],
    listItems2: [
      'Изучение выработки и роста микробных, животных, растительных клеток',
      'Увеличение масштабов из меньших емкостей, таких как колбы',
      'Оптимизация производства через обратное масштабирование',
      'Ограниченное серийное производствоZA',
      'Культуры клеток высокой плотности',
    ],
  },
  {
    id: 'modal4',
    sources: [
      { media: '(max-width: 425px)', srcset: 'img/bg-4-p-150.png' },
      { media: '(max-width: 798px)', srcset: 'img/bg-4-p-250.png' },
      { media: '(min-width: 799px)', srcset: 'img/bg-4-p-600.png' },
    ],
    imgSrc: 'img/bg-4-p-600.png',
    imgAlt: 'Стеклянный сосуд UniVessel®',
    title: 'Стеклянный сосуд UniVessel®',
    text: `Универсальные стеклянные культуральные сосуды UniVessel® Glass с объемом от 0,5 до 10 литров,
     созданные для удовлетворения нужд биофармацевтической отрасли, предназначены для широкого спектра применений, 
    таких как производство моноклональных антител, рекомбинантных белков и вакцин. 
    Их классический дизайн с роторной мешалкой обеспечивает возможность увеличения масштабов до реакторов в 2000 литров.`,
    listItems1: [
      'Надежность и прочность проверенной стерилизуемой конструкции гарантируют успешность процесса',
      'Зарекомендовавшая себя классическая конструкция облегчает масштабирование',
      'Возможность использования в малогабаритных автоклавах снижает расходы на приобретение нового оборудования',
      'Выбор рабочих объемов от 0,5 до 10 литров обеспечивает гибкость и экономию благодаря взаимозаменяемости без дополнительных инвестиций в контроллеры',
      'Совместимость с настольными системами Biostat® позволяет использовать существующие контроллеры и снижает необходимость в дополнительных затратах',
    ],
    listItems2: [
      'Культивирование бактерий, дрожжей и грибов',
      'Разведение клеток животных, включая клетки млекопитающих и насекомых',
      'Культивирование клеток, прикрепленных к микроносителям',
      'Разработку и совершенствование технологических процессов',
      'Масштабирование и эксперименты с изменением масштабов',
    ],
  },
  // ... объекты для modal3 и modal4
];

export default modalsContent;
// export const indexCards = [
//   {
//     link: '#1',
//     imageCard: {
//       sourceMax767: '../img/bg-card-1-240.jpg',
//       sourceMin768: '../img/bg-card-1.jpg',
//     },
//     title: 'Автоклавируемые',
//     subtitle: 'лабораторные ферментеры',
//     offers: '4 предложения',
//     products: [
//       {
//         title: 'BIOSTAT® A',
//         subtitle: 'Новый лабораторный ферментер',
//       },
//       {
//         title: 'BIOSTAT® B',
//         subtitle: 'Лабораторный ферментер',
//       },
//       {
//         title: 'BIOSTAT® B-DCU II',
//         subtitle: 'Многоцелевая система',
//       },
//       {
//         title: 'Сосуд UniVessel®',
//         subtitle: 'Стеклянные сосуды',
//       },
//     ],
//   },
//   {
//     link: '#2',
//     imageCard: {
//       sourceMax767: 'img/bg-card-2-240.jpg',
//       sourceMin768: 'img/bg-card-2.jpg',
//     },
//     title: 'Стерилизуемые',
//     subtitle: 'на месте ферментеры',
//     offers: '2 предложения',
//     products: [
//       {
//         title: 'BIOSTAT® Cplus',
//         subtitle: 'Полупромышленный ферментёр / биореактор',
//       },
//       {
//         title: 'BIOSTAT® D-DCU',
//         subtitle: 'Полупромышленные ферментеры / биореакторы',
//       },
//     ],
//   },
//   {
//     link: '#3',
//     imageCard: {
//       sourceMax767: 'img/bg-card-3-240.jpg',
//       sourceMin768: 'img/bg-card-3.jpg',
//     },
//     title: 'Малогабаритные',
//     subtitle: 'биореакторы',
//     offers: '4 предложения',
//     products: [
//       {
//         title: 'ambr® 15',
//         subtitle: 'Автоматизированный биореактор',
//       },
//       {
//         title: 'ambr® 250',
//         subtitle: 'Системы для разработки тех процессов',
//       },
//     ],
//   },
//   {
//     link: '#4',
//     imageCard: {
//       sourceMax767: 'img/bg-card-4-240.jpg',
//       sourceMin768: 'img/bg-card-4.jpg',
//     },
//     title: 'Одноразовые',
//     subtitle: 'ферментеры',
//     offers: '3 предложения',
//     products: [
//       {
//         title: 'BIOSTAT® STR Gen.3',
//         subtitle: 'Биореакторы одноразового применения',
//       },
//       {
//         title: 'BIOSTAT® CultiBag RM',
//         subtitle: 'Одноразовый биореактор',
//       },
//       {
//         title: 'UniVessel® SU',
//         subtitle: 'Биореактор с механическим перемешиванием',
//       },
//     ],
//   },
//   {
//     link: '#5',
//     imageCard: {
//       sourceMax767: 'img/bg-card-5-240.jpg',
//       sourceMin768: 'img/bg-card-5.jpg',
//     },
//     title: 'Управление',
//     subtitle: 'биореактором',
//     offers: '2 предложения',
//     products: [
//       {
//         title: 'BioPAT® DCU',
//         subtitle: 'Платформа для управления биореакторами',
//       },
//       {
//         title: 'Biostat® T',
//         subtitle: 'Иструмент виртуального обучения операторов',
//       },
//     ],
//   },
// ];

// export const productCards = [
//   {
//     avtoclav: [
//       {
//         title: 'BIOSTAT® A',
//         subtitle: 'Новый лабораторный ферментер',
//       },
//       {
//         title: 'BIOSTAT® B',
//         subtitle: 'Лабораторный ферментер',
//       },
//       {
//         title: 'BIOSTAT® B-DCU II',
//         subtitle: 'Многоцелевая система',
//       },
//       {
//         title: 'Сосуд UniVessel®',
//         subtitle: 'Стеклянные сосуды',
//       },
//     ],
//   },
//   {
//     steril: [
//       {
//         title: 'BIOSTAT® Cplus',
//         subtitle: 'Полупромышленный ферментёр / биореактор',
//       },
//       {
//         title: 'BIOSTAT® D-DCU',
//         subtitle: 'Полупромышленные ферментеры / биореакторы',
//       },
//     ],
//   },
//   {
//     fermenter: [
//        {
//         title: 'BIOSTAT® STR Gen.3',
//         subtitle: 'Биореакторы одноразового применения',
//       },
//       {
//         title: 'BIOSTAT® CultiBag RM',
//         subtitle: 'Одноразовый биореактор',
//       },
//        {
//         title: 'UniVessel® SU',
//         subtitle: 'Биореактор с механическим перемешиванием',
//       },
//     ],

//   },
//   {
//     miniBioreactor: [
//       {
//         title: 'ambr® 15',
//         subtitle: 'Автоматизированный биореактор',
//       },
//       {
//         title: 'ambr® 250',
//         subtitle: 'Системы для разработки тех процессов',
//       },
//     ],
//   },
//   {
//     epravlenie: [
//       {
//         title: 'BioPAT® DCU',
//         subtitle: 'Платформа для управления биореакторами',
//       },
//        {
//         title: 'Biostat® T',
//         subtitle: 'Иструмент виртуального обучения операторов',
//       },
//     ],

//   },
// ];
