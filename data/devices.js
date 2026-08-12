/**
 * =============================================================================
 *  OneLeaks Forum — файл с устройствами
 * =============================================================================
 *  Это файл для раздела «Устройства» — работает точно так же, как
 *  data/posts.js: редактируете только этот файл, сайт подхватывает
 *  изменения сам, пересборка не нужна.
 *
 *  Как добавить устройство:
 *  1. Скопируйте один из объектов ниже и вставьте его ПЕРВЫМ элементом
 *     массива DEVICES.
 *  2. "slug" — уникальный, латиницей, без пробелов. По нему строится
 *     ссылка вида device.html?slug=vash-slug.
 *  3. "colors" — массив расцветок устройства. У каждой: "name" (название
 *     цвета), "hex" (цвет для кружка-переключателя) и "image" (путь до
 *     фото/рендера устройства в этом цвете). Кликая по кружку на странице
 *     устройства, посетитель переключает картинку — ничего вручную
 *     собирать не нужно, просто перечислите цвета.
 *  4. "specs" — характеристики, сгруппированные по разделам. Можно
 *     добавлять любые свои группы и строки, порядок сохраняется.
 *  5. "relatedTags" — необязательно: теги из data/posts.js, которые нужно
 *     подтягивать как «посты про это устройство» на странице устройства.
 * =============================================================================
 */

const DEVICES = [
  {
    slug: "oneplus-15",
    category: "Смартфоны",
    regions: [
      {
        key: "global",
        label: "Global",
        name: "OnePlus 15",
        tagline: "Флагман с упором в производительность.",
        status: "Продажа",
        colors: [
          { name: "Sand Storm", hex: "#F5F2DF", image: "assets/devices/oneplus15/white.png" },
          { name: "Infinity Black", hex: "#1A1F26", image: "assets/devices/oneplus15/15-black.png" },
          { name: "Ultra Violet", hex: "#DDD3E1", image: "assets/devices/oneplus15/15-purple.png" },
        ],
        description:
          "OnePlus 15 — это мощный флагманский смартфон с рекордной автономностью и упором на высокую скорость работы.",
        relatedTags: ["OnePlus 15", "Номерная линейка"],
        specs: [
          {
            group: "Экран",
            items: [
              { label: "Диагональ", value: "6.78\"" },
              { label: "Тип матрицы", value: "LTPO AMOLED (BOE)" },
              { label: "Частота обновления", value: "165 Гц" },
              { label: "Яркость", value: "1800 нит." },
              { label: "ШИМ", value: "3840 Гц" },
            ],
          },
          {
            group: "Производительность",
            items: [
              { label: "Чипсет", value: "Snapdragon 8 Elite Gen 5 (3 нм)" },
              { label: "Частота ядер", value: "до 4.61 ГГц" },
              { label: "Память", value: "LPDDR5X Ultra/Ultra+" },
              { label: "ОС", value: "OxygenOS 16 / ColorOS 16" },
            ],
          },
          {
            group: "Камеры",
            items: [
              { label: "Основной сенсор", value: "50 Мп" },
              { label: "Ультраширик", value: "50 Мп" },
              { label: "Телефото", value: "50 Мп, 3.5x зум" },
              { label: "Видео", value: "4K/120fps" },
            ],
          },
          {
            group: "Батарея и зарядка",
            items: [
              { label: "Ёмкость", value: "7300 мАч (кремний-углерод)" },
              { label: "Проводная зарядка", value: "120 Вт" },
              { label: "Беспроводная зарядка", value: "50 Вт" },
            ],
          },
          {
            group: "Прочее",
            items: [
              { label: "Защита", value: "IP68 / IP69K" },
              { label: "Сканер отпечатка", value: "Ультразвуковой" },
              { label: "Отдельная кнопка", value: "OnePlus AI" },
            ],
          },
        ],
      },
    ],
  },
{
  slug: "oneplus-13",
  category: "Смартфоны",
  regions: [
    {
      key: "global",
      label: "Global",
      name: "OnePlus 13",
      tagline: "Флагман со Snapdragon 8 Elite, дисплеем ProXDR и тройной камерой Hasselblad.",
      status: "Продажа",
      colors: [
        { name: "Midnight Ocean", hex: "#173A4A", image: "assets/data/devices/oneplus13/13-blue.png" },
        { name: "Arctic Dawn", hex: "#E8E8E3", image: "assets/data/devices/oneplus13/13-white.png" },
        { name: "Black Eclipse", hex: "#17191B", image: "assets/data/devices/oneplus13/13-black.png" }
      ],
      description: "Флагманский смартфон OnePlus с 6,82-дюймовым QHD+ LTPO 4.1 AMOLED-дисплеем ProXDR, платформой Snapdragon 8 Elite, тройной камерой Hasselblad 50 Мп, аккумулятором 6000 мА·ч и защитой IP68/IP69. Глобальная версия работает на OxygenOS 15 на базе Android 15.",
      relatedTags: null,
      specs: [
        {
          group: "Экран",
          items: [
            { label: "Диагональ", value: "6,82 дюйма" },
            { label: "Тип матрицы", value: "LTPO 4.1 AMOLED, ProXDR, 10 бит, 100% Display P3" },
            { label: "Частота обновления", value: "1–120 Гц, динамическая" },
            { label: "Яркость", value: "1600 нит HBM, до 4500 нит пиковой яркости" },
            { label: "ШИМ", value: "Не указано" }
          ]
        },
        {
          group: "Производительность",
          items: [
            { label: "Чипсет", value: "Qualcomm Snapdragon 8 Elite" },
            { label: "Частота ядер", value: "До 4,32 ГГц" },
            { label: "Память", value: "12/16 ГБ LPDDR5X, 256/512 ГБ UFS 4.0" },
            { label: "ОС", value: "OxygenOS 15" }
          ]
        },
        {
          group: "Камеры",
          items: [
            { label: "Основной сенсор", value: "50 Мп, Sony LYT-808, f/1.6, OIS" },
            { label: "Ультраширик", value: "50 Мп, угол обзора 120°" },
            { label: "Телефото", value: "50 Мп Sony LYT-600, 3× оптический зум, OIS" },
            { label: "Видео", value: "До 8K 30 к/с; 4K 60/30 к/с; 4K Dolby Vision на всех камерах" }
          ]
        },
        {
          group: "Батарея и зарядка",
          items: [
            { label: "Ёмкость", value: "6000 мА·ч, двухэлементная батарея" },
            { label: "Проводная зарядка", value: "100 Вт SUPERVOOC" },
            { label: "Беспроводная зарядка", value: "50 Вт AIRVOOC" }
          ]
        },
        {
          group: "Прочее",
          items: [
            { label: "Защита", value: "IP68/IP69" },
            { label: "Сканер отпечатка", value: "Ультразвуковой, под экраном" },
            { label: "Дополнительные функции", value: "Hasselblad Camera for Mobile, Aqua Touch 2.0, NFC, Wi‑Fi 7, 5G" }
          ],
        },
      ],
    },
  ],
},
  {
    slug: "oneplus-pad-3",
    name: "OnePlus Pad 3",
    tagline: "Планшет для работы и медиа",
    status: "Слухи",
    category: "Планшеты",
    releaseDate: "2026-08",
    colors: [
      { name: "Космический серый", hex: "#4A4C50", image: "assets/devices/oneplus-pad3-space-grey.svg" },
      { name: "Гало зелёный", hex: "#2E6B52", image: "assets/devices/oneplus-pad3-halo-green.svg" },
    ],
    description:
      "OnePlus Pad 3 по слухам получит OLED-панель впервые в линейке планшетов и чипсет Dimensity 9400+ — заметный шаг вверх по сравнению с Pad 2.",
    relatedTags: ["OnePlus Pad", "Цены"],
    specs: [
      {
        group: "Экран",
        items: [
          { label: "Диагональ", value: "12.1\"" },
          { label: "Тип матрицы", value: "OLED" },
          { label: "Частота обновления", value: "144 Гц" },
          { label: "Разрешение", value: "2800×2000" },
        ],
      },
      {
        group: "Производительность",
        items: [
          { label: "Чипсет", value: "Dimensity 9400+" },
        ],
      },
      {
        group: "Батарея и зарядка",
        items: [
          { label: "Ёмкость", value: "10 000 мАч" },
          { label: "Зарядка", value: "67W SUPERVOOC" },
        ],
      },
      {
        group: "Аксессуары",
        items: [
          { label: "Стилус", value: "OnePlus Stylo 2" },
          { label: "Клавиатура", value: "Smart Keyboard" },
        ],
      },
    ],
  },
];

// Экспортируем в глобальную область видимости — используется в js/app.js
window.DEVICES = DEVICES;
