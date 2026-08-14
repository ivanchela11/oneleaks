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
          { name: "Sand Storm", hex: "#E3DDD8", image: "assets/devices/oneplus15/white.png" },
          { name: "Infinity Black", hex: "#1A1F26", image: "assets/devices/oneplus15/black.png" },
          { name: "Ultra Violet", hex: "#EDE5F1", image: "assets/devices/oneplus15/purple.png" },
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
  slug: "oneplus-15t",
  category: "Смартфоны",
  regions: [
    {
      key: "china",
      label: "China",
      name: "OnePlus 15T",
      tagline: "Компактный флагман со Snapdragon 8 Elite Gen 5, экраном 165 Гц и батареей 7500 мА·ч.",
      status: "Продажа",
      colors: [
        { name: "Healing White Chocolate", hex: "#F0F0EC", image: "assets/devices/oneplus15t/white.png" },
        { name: "Pure Cocoa", hex: "#4F4547", image: "assets/devices/oneplus15t/brown.png" },
        { name: "Relaxing Matcha", hex: "#B8CE93", image: "assets/devices/oneplus15t/green.png" }
      ],
      description: "Компактный китайский флагман OnePlus с 6,32-дюймовым LTPO AMOLED-дисплеем разрешением 1216 × 2640 пикселей и частотой обновления до 165 Гц, чипсетом Snapdragon 8 Elite Gen 5, аккумулятором 7500 мА·ч, проводной зарядкой 100 Вт, беспроводной зарядкой 50 Вт и ColorOS 16. ",
      relatedTags: null,
      specs: [
        {
          group: "Экран",
          items: [
            { label: "Диагональ", value: "6,32 дюйма" },
            { label: "Тип матрицы", value: "LTPO AMOLED, 1,07 млрд цветов, Dolby Vision, HDR10+, HDR Vivid" },
            { label: "Частота обновления", value: "До 165 Гц, адаптивная" },
            { label: "Яркость", value: "До 3600 нит" },
            { label: "ШИМ", value: "3840 ГЦ" }
          ]
        },
        {
          group: "Производительность",
          items: [
            { label: "Чипсет", value: "Qualcomm Snapdragon 8 Elite Gen 5" },
            { label: "Частота ядер", value: "4,61 ГЦ" },
            { label: "Память", value: "12/16 ГБ LPDDR5X Ultra Pro, 256/512 ГБ или 1 ТБ UFS 4.1" },
            { label: "ОС", value: "ColorOS 16 на базе Android 16" }
          ]
        },
        {
          group: "Камеры",
          items: [
            { label: "Основной сенсор", value: "50 Мп, Sony, 1/1,56 дюйма, OIS" },
            { label: "Телефото", value: "50 Мп, перископический модуль, 3,5× оптический зум, OIS" },
            { label: "Видео", value: "До 8K 60 к/с; 4K 120 к/с; Dolby Vision" }
          ]
        },
        {
          group: "Батарея и зарядка",
          items: [
            { label: "Ёмкость", value: "7500 мА·ч" },
            { label: "Проводная зарядка", value: "100 Вт SUPERVOOC" },
            { label: "Беспроводная зарядка", value: "50 Вт" }
          ]
        },
        {
          group: "Прочее",
          items: [
            { label: "Защита", value: "IP68/IP69K" },
            { label: "Сканер отпечатка", value: "Ультразвуковой, под экраном" },
            { label: "Дополнительные функции", value: "Qi2 и магнитные аксессуары, игровые оптимизации, 3200 Гц мгновенная частота сенсорного отклика, NFC, 5G" }
          ],
        },
      ],
    },
  ],
},
{
  slug: "oneplus-15r-ace-6t",
  category: "Смартфоны",
  regions: [
    {
      key: "global",
      label: "Global",
      name: "OnePlus 15R",
      tagline: "Игровой субфлагман со Snapdragon 8 Gen 5, дисплеем 165 Гц и батареей 7400 мА·ч.",
      status: "Продажа",
      colors: [
        { name: "Mint Breeze", hex: "#ECF8E0", image: "assets/devices/oneplusace6t/green.png" },
        { name: "Charcoal Black", hex: "#494B4D", image: "assets/devices/oneplusace6t/black.png" },
      ],
      description: "Глобальная версия OnePlus 15R с 6,83-дюймовым AMOLED-дисплеем разрешением 1.5K и частотой обновления до 165 Гц, чипсетом Snapdragon 8 Gen 5, аккумулятором 7400 мА·ч, зарядкой 80 Вт SUPERVOOC и OxygenOS 16. ",
      relatedTags: null,
      specs: [
        {
          group: "Экран",
          items: [
            { label: "Диагональ", value: "6,83 дюйма" },
            { label: "Тип матрицы", value: "AMOLED, 1.5K, 10 бит, HDR10+, Dolby Vision" },
            { label: "Частота обновления", value: "До 165 Гц" },
            { label: "Яркость", value: "До 3600 нит" },
            { label: "ШИМ", value: "3640Гц" },
          ]
        },
        {
          group: "Производительность",
          items: [
            { label: "Чипсет", value: "Qualcomm Snapdragon 8 Gen 5" },
            { label: "Частота ядер", value: "Не указано" },
            { label: "Память", value: "12 ГБ LPDDR5X Ultra, 256/512 ГБ UFS 4.1" },
            { label: "ОС", value: "OxygenOS 16" },
          ],
        },
        {
          group: "Камеры",
          items: [
            { label: "Основной сенсор", value: "50 Мп, Sony IMX906, f/1.8, OIS" },
            { label: "Ультраширик", value: "8 Мп, угол обзора 112°" },
            { label: "Видео", value: "До 4K 120 к/с" }
          ],
        },
        {
          group: "Батарея и зарядка",
          items: [
            { label: "Ёмкость", value: "7400 мА·ч" },
            { label: "Проводная зарядка", value: "80 Вт SUPERVOOC" },
          ]
        },
        {
          group: "Прочее",
          items: [
            { label: "Защита", value: "Не указано" },
            { label: "Сканер отпечатка", value: "Ультразвуковой, под экраном" },
            { label: "Дополнительные функции", value: "Always-on 120 FPS в поддерживаемых играх, игровые оптимизации, Wi‑Fi 7, NFC, 5G" },
          ],
        },
      ],
    },
    {
      key: "china",
      label: "China",
      name: "OnePlus Ace 6T",
      tagline: "Игровой смартфон со Snapdragon 8 Gen 5, экраном 165 Гц и батареей 8300 мА·ч.",
      status: "Продажа",
      colors: [
        { name: "Shifting Green", hex: "#ECF8E0", image: "assets/devices/oneplusace6t/green.png" },
        { name: "Electric Purple", hex: "#D5D1E9", image: "assets/devices/oneplusace6t/purple.png" },
        { name: "Flash Black", hex: "#494B4D", image: "assets/devices/oneplusace6t/black.png" },
        { name: "Genshin Impact Edition", hex: "#DCE8F1", image: "assets/devices/oneplusace6t/genshin.png" },
      ],
      description: "Китайская версия OnePlus Ace 6T с 6,83-дюймовым 1.5K AMOLED-дисплеем с частотой обновления 165 Гц, Snapdragon 8 Gen 5, аккумулятором 8300 мА·ч, зарядкой 100 Вт, тройной системой игровых чипов и ColorOS 16. ",
      relatedTags: null,
      specs: [
        {
          group: "Экран",
          items: [
            { label: "Диагональ", value: "6,83 дюйма" },
            { label: "Тип матрицы", value: "AMOLED, 1.5K, плоский экран" },
            { label: "Частота обновления", value: "До 165 Гц" },
            { label: "Яркость", value: "1800 нит глобальной максимальной яркости; 3600 нит при 25% APL" },
            { label: "ШИМ", value: "3840Гц" },
          ],
        },
        {
          group: "Производительность",
          items: [
            { label: "Чипсет", value: "Qualcomm Snapdragon 8 Gen 5" },
            { label: "Частота ядер", value: "3,8 ГГц" },
            { label: "Память", value: "LPDDR5X Ultra 9600 Мбит/с, 256/512 ГБ или 1 ТБ UFS 4.1" },
            { label: "ОС", value: "ColorOS 16" },
          ],
        },
        {
          group: "Камеры",
          items: [
            { label: "Основной сенсор", value: "50 Мп, Sony IMX906, 1/1,56 дюйма, f/1.8, OIS" },
            { label: "Ультраширик", value: "8 Мп, f/2.2" },
            { label: "Видео", value: "4K/120FPS" },
          ],
        },
        {
          group: "Батарея и зарядка",
          items: [
            { label: "Ёмкость", value: "8300 мА·ч типичная, 8070 мА·ч номинальная" },
            { label: "Проводная зарядка", value: "100 Вт SUPERVOOC" },
          ],
        },
        {
          group: "Прочее",
          items: [
            { label: "Защита", value: "IP66/IP68/IP69/IP69K" },
            { label: "Сканер отпечатка", value: "Ультразвуковой, под экраном" },
            { label: "Дополнительные функции", value: "Три игровых чипа, Wi‑Fi-чип, 3200 Гц мгновенная частота сенсорного отклика, обходная зарядка, NFC, 5G" },
          ],
        },
      ],
    },
  ],
},
{
  slug: "oneplus-ace-6",
  category: "Смартфоны",
  regions: [
    {
      key: "china",
      label: "China",
      name: "OnePlus Ace 6",
      tagline: "Игровой смартфон со Snapdragon 8 Elite, экраном 165 Гц и батареей 7800 мА·ч.",
      status: "Продажа",
      colors: [
        { name: "Quick Silver", hex: "#E5E5E8", image: "assets/devices/oneplusace6/silver.png" },
        { name: "Racing Black", hex: "#2F363E", image: "assets/devices/oneplusace6/black.png" },
        { name: "Flash White", hex: "#F6F6FB", image: "assets/devices/oneplusace6/white.png" }
      ],
      description: "Китайская версия OnePlus Ace 6 с 6,83-дюймовым плоским OLED-дисплеем разрешением 2800 × 1272 пикселя, частотой обновления до 165 Гц, платформой Snapdragon 8 Elite, аккумулятором 7800 мА·ч, зарядкой 120 Вт и ColorOS 16. Смартфон получил защиту IP66/IP68/IP69/IP69K и ультразвуковой сканер отпечатка пальца. ",
      relatedTags: null,
      specs: [
        {
          group: "Экран",
          items: [
            { label: "Диагональ", value: "6,83 дюйма" },
            { label: "Тип матрицы", value: "Плоский OLED, 1.5K, 10 бит, HDR10+, Dolby Vision, HDR Vivid, 100% DCI-P3" },
            { label: "Частота обновления", value: "60/90/120/144/165 Гц, адаптивная" },
            { label: "Яркость", value: "1800 нит пиковой яркости" },
            { label: "ШИМ", value: "2160 Гц" }
          ]
        },
        {
          group: "Производительность",
          items: [
            { label: "Чипсет", value: "Qualcomm Snapdragon 8 Elite" },
            { label: "Частота ядер", value: "До 4,32 ГГц" },
            { label: "Память", value: "12/16 ГБ LPDDR5X, 256/512 ГБ или 1 ТБ UFS 4.1" },
            { label: "ОС", value: "ColorOS 16" }
          ]
        },
        {
          group: "Камеры",
          items: [
            { label: "Основной сенсор", value: "50 Мп, OIS" },
            { label: "Ультраширик", value: "8 Мп, угол обзора 112°" },
            { label: "Видео", value: "4K/120FPS" },
          ],
        },
        {
          group: "Батарея и зарядка",
          items: [
            { label: "Ёмкость", value: "7800 мА·ч типичная, 7620 мА·ч номинальная" },
            { label: "Проводная зарядка", value: "120 Вт SUPERVOOC" },
          ],
        },
        {
          group: "Прочее",
          items: [
            { label: "Защита", value: "IP66/IP68/IP69/IP69K" },
            { label: "Сканер отпечатка", value: "Ультразвуковой, под экраном" },
            { label: "Дополнительные функции", value: "Три игровых чипа, игровой движок Fengchi, улучшенная система охлаждения, NFC, ИК-порт, стереодинамики, 5G" },
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
        { name: "Midnight Ocean", hex: "#173A4A", image: "assets/devices/oneplus13/blue.png" },
        { name: "Arctic Dawn", hex: "#E8E8E3", image: "assets/devices/oneplus13/white.png" },
        { name: "Black Eclipse", hex: "#17191B", image: "assets/devices/oneplus13/black.png" }
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
  slug: "oneplus-13r-ace-5",
  category: "Смартфоны",
  regions: [
    {
      key: "global",
      label: "Global",
      name: "OnePlus 13R",
      tagline: "Субфлагман с Snapdragon 8 Gen 3, LTPO-дисплеем ProXDR и телефотокамерой.",
      status: "Продажа",
      colors: [
        { name: "Astral Trail", hex: "#EFE6E3", image: "assets/devices/oneplus13r/white.png" },
        { name: "Nebula Noir", hex: "#44454A", image: "assets/devices/oneplus13r/black.png" }
      ],
      description: "Глобальная версия OnePlus 13R с 6,78-дюймовым LTPO 4.1 AMOLED-дисплеем ProXDR, платформой Snapdragon 8 Gen 3, тройной камерой с 2-кратным телефотообъективом, аккумулятором 6000 мА·ч и OxygenOS 15 на базе Android 15.",
      relatedTags: null,
      specs: [
        {
          group: "Экран",
          items: [
            { label: "Диагональ", value: "6,78 дюйма" },
            { label: "Тип матрицы", value: "LTPO 4.1 AMOLED, ProXDR, 10 бит, 100% Display P3" },
            { label: "Частота обновления", value: "1–120 Гц, динамическая" },
            { label: "Яркость", value: "1600 нит HBM, до 4500 нит пиковой яркости" },
            { label: "ШИМ", value: "2160 Гц PWM; поддерживается DC-затемнение на всех уровнях яркости" }
          ]
        },
        {
          group: "Производительность",
          items: [
            { label: "Чипсет", value: "Qualcomm Snapdragon 8 Gen 3" },
            { label: "Частота ядер", value: "До 3,3 ГГц" },
            { label: "Память", value: "12 ГБ LPDDR5X, 256 ГБ UFS 4.0" },
            { label: "ОС", value: "OxygenOS 15.0 на базе Android 15" }
          ]
        },
        {
          group: "Камеры",
          items: [
            { label: "Основной сенсор", value: "50 Мп, Sony LYT-700, f/1.8, OIS" },
            { label: "Ультраширик", value: "8 Мп, f/2.2, угол обзора 112°" },
            { label: "Телефото", value: "50 Мп, Samsung S5KJN5, 2× оптический зум" },
            { label: "Видео", value: "До 4K 60 к/с; замедленная съёмка до 1080p 240 к/с" }
          ]
        },
        {
          group: "Батарея и зарядка",
          items: [
            { label: "Ёмкость", value: "6000 мА·ч, типичная; 5860 мА·ч, номинальная" },
            { label: "Проводная зарядка", value: "80 Вт SUPERVOOC" }
          ]
        },
        {
          group: "Прочее",
          items: [
            { label: "Защита", value: "IP65" },
            { label: "Сканер отпечатка", value: "Оптический, под экраном" },
            { label: "Дополнительные функции", value: "Wi‑Fi 7, Bluetooth 5.4, NFC, ИК-порт, Alert Slider, стереодинамики" }
          ]
        }
      ]
    },
    {
      key: "china",
      label: "China",
      name: "OnePlus Ace 5",
      tagline: "Производительный смартфон с Snapdragon 8 Gen 3, 1.5K-дисплеем и батареей Glacier.",
      status: "Продажа",
      colors: [
        { name: "Full Speed Black", hex: "#44454A", image: "assets/devices/oneplus13r/black.png" },
        { name: "Titanium Grey", hex: "#EFE6E3", image: "assets/devices/oneplus13r/white.png" },
        { name: "Celestial Porcelain", hex: "#D7E0D4", image: "assets/devices/oneplusace5/green.png" }
      ],
      description: "Китайская версия OnePlus Ace 5 с 6,78-дюймовым AMOLED-дисплеем разрешением 1.5K, платформой Snapdragon 8 Gen 3, тройной основной камерой, аккумулятором типичной ёмкостью 6415 мА·ч и ColorOS 15 на базе Android.",
      relatedTags: ["OnePlus Ace 5", "OnePlus", "Ace"],
      specs: [
        {
          group: "Экран",
          items: [
            { label: "Диагональ", value: "6,78 дюйма" },
            { label: "Тип матрицы", value: "AMOLED, плоский экран, 10 бит, 100% DCI-P3" },
            { label: "Частота обновления", value: "1–120 Гц, интеллектуальное переключение" },
            { label: "Яркость", value: "800 нит глобальной типичной яркости, до 1600 нит типичной пиковой яркости" },
            { label: "ШИМ", value: "2160 Гц PWM; поддерживается DC-затемнение на всех уровнях яркости" }
          ]
        },
        {
          group: "Производительность",
          items: [
            { label: "Чипсет", value: "Qualcomm Snapdragon 8 Gen 3" },
            { label: "Частота ядер", value: "До 3,3 ГГц" },
            { label: "Память", value: "12/16 ГБ LPDDR5X, 256/512 ГБ или 1 ТБ UFS 4.0" },
            { label: "ОС", value: "ColorOS 15.0" }
          ]
        },
        {
          group: "Камеры",
          items: [
            { label: "Основной сенсор", value: "50 Мп, f/1.8, автофокус, двухосевая OIS" },
            { label: "Ультраширик", value: "8 Мп, f/2.2, угол обзора 112°" },
            { label: "Телефото", value: "50 Мп, Samsung S5KJN5, 2× оптический зум" },
            { label: "Видео", value: "До 4K 60 к/с; замедленная съёмка до 1080p 240 к/с" }
          ]
        },
        {
          group: "Батарея и зарядка",
          items: [
            { label: "Ёмкость", value: "6415 мА·ч типичная, 6285 мА·ч номинальная" },
            { label: "Проводная зарядка", value: "80 Вт SUPERVOOC" }
          ]
        },
        {
          group: "Прочее",
          items: [
            { label: "Защита", value: "IP65" },
            { label: "Сканер отпечатка", value: "Оптический, под экраном" },
            { label: "Дополнительные функции", value: "Wi‑Fi 7, Bluetooth 5.4, NFC, ИК-порт, X‑осевой линейный вибромотор, стереодинамики" }
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
