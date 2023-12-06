
export const modalsContent = [
    {
        id: "modal1",
    sources: [
            { media: "(max-width: 425px)", srcset: "img/bg-1-p-150.png" },
            { media: "(max-width: 798px)", srcset: "img/bg-1-p-250.png" },
            { media: "(min-width: 799px)", srcset: "img/bg-1-p-600.png" },
        ],
        imgSrc: "img/bg-1-p-600.png",
        imgAlt: "BIOSTAT® A",
        title: "BIOSTAT® A",
        text: `Новый лабораторный ферментер BIOSTAT® A - мини-модель из семейства ферментеров BIOSTAT®. Он предназначен для
            контроля роста клеток и ферментации и может быть использован в учебных целях. Управляющий блок BIOSTAT® A объединяет
            в себе различные функции, такие как Easy Load для насосов, аэрационный модуль и удобные коннекторы для датчиков и
            связи. Этот настольный биореактор компактен и экономит место в лаборатории.`,
        listItems1: [
         `Простая система аэрации`,
         `Интуитивное управление как для новичков, так и для опытных
              пользователей`,
          `Встроенный охладитель, экономящий воду`,
          `Удобные насосы с головкой Easy Load`,
          `Система сохранения данных для анализа`,
          `Гибкость управления и возможность выбора сосудов`,
          `Опция параллельного культивирования`,
          `Различные комплектации для разных целей, включая дистанционное управление для
              расширенных комплектаций`,
          ],
        listItems2: [
          `Микробиология: культивация бактерий, грибов и дрожжей`,
          `Культуры клеток: выращивание клеток животных и растений`,
          `Маломасштабное производство белков и моноклональных антител`,
          `Исследовательские и учебные процессы`,
          ],
    },
     {
        id: "modal2",
       sources: [
            { media: "(max-width: 425px)", srcset: "img/bg-1-p-150.png" },
            { media: "(max-width: 798px)", srcset: "img/bg-1-p-250.png" },
            { media: "(min-width: 799px)", srcset: "img/bg-1-p-600.png" },
        ],
        imgSrc: "img/bg-1-p-600.png",
        imgAlt: "BIOSTAT® B",
        title: "BIOSTAT® B",
        text: `Новый лабораторный ферментер BIOSTAT® A - мини-модель из семейства ферментеров BIOSTAT®. Он предназначен для
            контроля роста клеток и ферментации и может быть использован в учебных целях. Управляющий блок BIOSTAT® A объединяет
            в себе различные функции, такие как Easy Load для насосов, аэрационный модуль и удобные коннекторы для датчиков и
            связи. Этот настольный биореактор компактен и экономит место в лаборатории.`,
        listItems1: [
          "Пункт списка 1.1",
           "Пункт списка 1.2", "Пункт списка 1.3", "Пункт списка 1.4",
          ],
        listItems2: [
            "Пункт списка 1.1",  "Пункт списка 1.2", "Пункт списка 1.3", "Пункт списка 1.4",
          ],
        // ... другие поля для modal1
    },
    // ... объекты для modal3 и modal4
];





export const indexCards = [
  {
    link: '#1',
    imageCard: {
      sourceMax767: '../img/bg-card-1-240.jpg',
      sourceMin768: '../img/bg-card-1.jpg',
    },
    title: 'Автоклавируемые',
    subtitle: 'лабораторные ферментеры',
    offers: '4 предложения',
    products: [
      {
        title: 'BIOSTAT® A', 
        subtitle: 'Новый лабораторный ферментер',
      },
      {
        title: 'BIOSTAT® B', 
        subtitle: 'Лабораторный ферментер',
      },
      {
        title: 'BIOSTAT® B-DCU II', 
        subtitle: 'Многоцелевая система',
      },
      {
        title: 'Сосуд UniVessel®', 
        subtitle: 'Стеклянные сосуды',
      },
    ],
    
  },
  {
    link: '#2',
    imageCard: {
      sourceMax767: 'img/bg-card-2-240.jpg',
      sourceMin768: 'img/bg-card-2.jpg',
    },
    title: 'Стерилизуемые',
    subtitle: 'на месте ферментеры',
    offers: '2 предложения',
    products:[
      {
        title: 'BIOSTAT® Cplus', 
        subtitle: 'Полупромышленный ферментёр / биореактор',
      },
      {
        title: 'BIOSTAT® D-DCU', 
        subtitle: 'Полупромышленные ферментеры / биореакторы', 
      },
    ],
  },
  {
    link: '#3',
    imageCard: {
      sourceMax767: 'img/bg-card-3-240.jpg',
      sourceMin768: 'img/bg-card-3.jpg',
    },
    title: 'Малогабаритные',
    subtitle: 'биореакторы',
    offers: '4 предложения',
    products: [
      {
        title: 'ambr® 15', 
        subtitle: 'Автоматизированный биореактор', 
      },
      {
        title: 'ambr® 250', 
        subtitle: 'Системы для разработки тех процессов', 
      },
    ],
  },
  {
    link: '#4',
    imageCard: {
      sourceMax767: 'img/bg-card-4-240.jpg',
      sourceMin768: 'img/bg-card-4.jpg',
    },
    title: 'Одноразовые',
    subtitle: 'ферментеры',
    offers: '3 предложения',
    products: [
       {
        title: 'BIOSTAT® STR Gen.3', 
        subtitle: 'Биореакторы одноразового применения', 
      },
      {
        title: 'BIOSTAT® CultiBag RM', 
        subtitle: 'Одноразовый биореактор', 
      },
       {
        title: 'UniVessel® SU', 
        subtitle: 'Биореактор с механическим перемешиванием', 
      },
    ],
  },
   {
     link: '#5',
    imageCard: {
      sourceMax767: 'img/bg-card-5-240.jpg',
      sourceMin768: 'img/bg-card-5.jpg',
    },
    title: 'Управление',
    subtitle: 'биореактором',
    offers: '2 предложения',
    products: [
      {
        title: 'BioPAT® DCU', 
        subtitle: 'Платформа для управления биореакторами', 
      },
       {
        title: 'Biostat® T', 
        subtitle: 'Иструмент виртуального обучения операторов', 
      },
    ],
  },
  
];

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
