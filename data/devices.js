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
    name: "OnePlus 15",
    tagline: "Флагман с упором в производительность.",
    status: "Продажа",
    category: "Смартфоны",
    releaseDate: "2025-10",
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
