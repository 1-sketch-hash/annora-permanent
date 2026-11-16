# Annora Permanent — сайт

Одностраничный сайт (DE / UK / EN), статика без сборки: `index.html`, `impressum.html`, `datenschutz.html`, `styles.css`, `app.js`, `img/`, `fonts/`.

## Как править
- Тексты на трёх языках — объект `T` в `app.js`; цены, программа курса, отзывы — там же.
- Ссылки на Instagram/WhatsApp/Facebook и ID тегов Google — объект `CONFIG` в начале `app.js`.
- Картинки — `img/*.webp` (карточки услуг 600×800, галерея 720×900). При замене меняйте `?v=` в `app.js` и `index.html`, чтобы браузеры не держали старые.
- Локально: `python3 -m http.server 4173` в этой папке.

## Публикация
GitHub Pages: ветка `main`, корень. Любой `git push` в `main` обновляет сайт за 1–2 минуты. Заголовки из `_headers` GitHub Pages не применяет (они нужны, если сайт переедет на Netlify/Cloudflare); защита держится на CSP в `<meta>`.

## Перед запуском (убрать «черновой» режим)
- Удалить `<meta name="robots" content="noindex, nofollow">` из трёх HTML и `X-Robots-Tag` из `_headers`.
- Заполнить пометки `todo` и убрать «ENTWURF» в `impressum.html` и `datenschutz.html`; юридическая проверка.
- Google: принять AVV/DPA, Analytics — срок хранения 2/14 мес., Google Signals выключены; для Google Ads проверить ремаркетинг.

## Аналитика
Теги (GTM + Google Ads `gtag.js`) загружаются только после «Принять» в баннере (Consent Mode v2). События кликов уходят в `dataLayer`: `whatsapp_click`, `instagram_click`, `facebook_click`, `appointment_click`, `training_click`, `structure_open`.

## Дизайн-варианты (черновики, noindex)
- `v2/` — «Оливковое ателье» (отклонён).
- `v3/` — «Noir Atelier»: тёмный кино-люкс. Шрифты Playfair Display (SIL OFL, `fonts/playfair-*.woff2`) + Manrope, лежат локально.
  Контент и тексты общие (`../app.js`), эффекты — в `v3/fx.js`. Локально: `python3 -m http.server 4173` и открыть `/v3/`.
