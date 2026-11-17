# Annora Permanent — сайт

Одностраничный сайт (DE / UK / EN), статика без сборки: `index.html`, `impressum.html`, `datenschutz.html`, `styles.css`, `app.js`, `img/`, `fonts/`.

## Как править
- Тексты на трёх языках — объект `T` в `app.js`; цены, программа курса, отзывы — там же.
- Ссылки на Instagram/WhatsApp/Facebook и ID тегов Google — объект `CONFIG` в начале `app.js`.
- Картинки — `img/*.webp` (карточки услуг 600×800, галерея 720×900). При замене меняйте `?v=` в `app.js` и `index.html`, чтобы браузеры не держали старые.
- Локально: `python3 -m http.server 4173` в этой папке.

## Публикация
GitHub Pages: ветка `main`, корень. Любой `git push` в `main` обновляет сайт за 1–2 минуты. Заголовки из `_headers` GitHub Pages не применяет (они нужны, если сайт переедет на Netlify/Cloudflare); защита держится на CSP в `<meta>`.

## Запуск (17.11.2026) и что осталось
Сайт открыт для поиска: `noindex` снят с главной; Impressum и Datenschutz — `noindex, follow` (в поиске не нужны). Пометки «ENTWURF» и жёлтые `todo` убраны, хостинг в Datenschutz — GitHub Pages.

Осталось доделать (сейчас не видно на сайте):
- Impressum: USt-IdNr (§ 27a UStG) или указание на Kleinunternehmerregelung (§ 19 UStG); подтвердить членство в Handwerkskammer и Berufsbezeichnung.
- Юридическая проверка Impressum и Datenschutz.
- Google: принять AVV/DPA в Ads и Analytics; Analytics — срок хранения 2/14 мес., Google Signals выключены; в Ads проверить ремаркетинг/персонализацию.

## Аналитика
Теги (GTM + Google Ads `gtag.js`) загружаются только после «Принять» в баннере (Consent Mode v2). События кликов уходят в `dataLayer`: `whatsapp_click`, `instagram_click`, `facebook_click`, `appointment_click`, `training_click`, `structure_open`.
