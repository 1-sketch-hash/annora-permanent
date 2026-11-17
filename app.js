"use strict";
/* ===== НАСТРОЙКИ: всё, что меняет заказчик, — здесь (в финале переедет в CMS) ===== */
const CONFIG = {
  instagram: "annora_permanent",
  whatsapp: "4915228742115",   // номер без + и пробелов
  facebookUrl: "https://www.facebook.com/share/1CsFVmTBYj/",   // страница Facebook (без трекинг-параметров)
  telegram: {                      // каналы Telegram (имя после t.me/); пустая строка — пункт скрыт
    clients: "annorapermanentclients",   // для клиентов и моделей
    artists: "annorapermanetartists",    // для мастеров и учеников (канал так и называется)
    personal: ""                         // личный канал Анны — вписать, когда пришлёт ссылку
  },
  promo: {                         // акция на ремувер: после даты блок сам скрывается, цена возвращается
    until: "2026-11-30T23:59:59+01:00",   // продлить — поменять дату (время Мюнхена)
    price: "100 €", oldPrice: "150 €"
  },
  gtmId: "GTM-KB9NSLTW",             // контейнер Google Tag Manager
  adsId: "AW-10978525985"            // Google Ads (gtag.js), грузится только после согласия
};

const T = {
de:{
  note:"",
  nav:{about:"Über Anna",services:"Leistungen",portfolio:"Arbeiten",training:"Ausbildung",contact:"Kontakt"},
  hero:{eyebrow:"PMU · München",sub:"Permanent Make-up & professionelle Ausbildung in München",lead:"Schönheit muss nicht gleich aussehen. Permanent Make-up mit Respekt vor Ihren Gesichtszügen."},
  about:{eyebrow:"Über Anna",title:"Meisterin & Trainerin",lead:"Ich bin Anna Orlenko – Gründerin von ANNORA Permanent, Permanent-Make-up-Artist und Trainerin, Fachkosmetikerin für apparative Kosmetik.",
    p1:"Seit über 12 Jahren arbeite ich im Permanent Make-up. In dieser Zeit wurde ich Meisterin der Ukraine, und 2018 kam ich beim Europa Beauty Festival in München unter die Top 10 der Artists Europas. Heute empfange ich in derselben Stadt Kundinnen und unterrichte Artists.",
    p2:"Ich liebe meine Arbeit wegen des Moments, in dem eine Frau in den Spiegel schaut und sagt: „Ja, so gefällt es mir.“ Für jede ist dieses „so“ anders: Die eine möchte Brauen, die auch ungeschminkt weich wirken, die andere eine ausdrucksvollere Form. Deshalb ist es mir wichtig zu hören, was genau Sie sich wünschen – und schon auf der Skizze zeige ich, was ich vorschlage und warum ich die Form so sehe.",
    p3:"In der Ausbildung bin ich genauso. Wenn eine Schülerin fragt, warum ich diesen Farbton gewählt oder die Form verändert habe, gehen wir gemeinsam durch, was ich in der konkreten Arbeit gesehen habe. Ich möchte, dass sie, wenn sie allein mit ihrer Kundin ist, deren Gesicht ansehen, ihre Wünsche hören und sicher ihre eigene Entscheidung treffen kann.",
    facts:[["12+","Jahre Erfahrung"],["Meisterin","der Ukraine"],["Top 10","Europa Beauty Festival 2018"]]},
  promo:{tag:"Aktion",title:"Entfernung mit Remover",text:"Aktionspreis nur bis {date}. Die Termine zum Aktionspreis sind begrenzt.",bar:"Aktion: Entfernung mit Remover für {price} – nur bis {date}",d:"Tage",h:"Std.",m:"Min.",s:"Sek.",cta:"Termin sichern"},
  services:{eyebrow:"Leistungen & Preise",title:"Permanent Make-up",lead:"Dein Gesicht. Deine Form.",
    combo:"Bei zwei Zonen in einem Termin reduziert sich der Gesamtpreis um 50 €, bei drei Zonen um 100 €.",
    onreq:"Korrektur und Überdeckung von altem Permanent Make-up, Augenbrauen formen und färben, Wimpernlifting und -färben, Make-up und Beratung – Preis auf Anfrage.",
    items:[["Augenbrauen","Natürliche Form und Dichte, abgestimmt auf Ihre Gesichtszüge.",[["Permanent Make-up","300 €"]]],
      ["Lippen","Frischer Farbton und ein sauberer Kontur, der Ihre natürliche Lippenform respektiert.",[["Lippen","300 €"],["Lippen 3D","350 €"]]],
      ["Wimpernkranz","Feine Verdichtung am Wimpernrand für einen ausdrucksvollen Blick.",[["Wimpernkranz","200 €"],["Wimpernkranz mit Flügel","250 €"]]],
      ["Lidstrich","Vom klassischen Lidstrich bis zur weichen Schattierung.",[["Klassischer Lidstrich","300 €"],["Lidstrich „Winkel“","350 €"],["Lidstrich mit Schattierung","350 €"]]],
      ["Korrektur & Auffrischung","Nachbehandlung und Farbauffrischung von Permanent Make-up.",[["Korrektur","150 €"],["Nur Farbauffrischung","150 €"],["Skizzenanprobe","15 €"]]],
      ["Entfernung & Pflege","Entfernung von altem Permanent Make-up mit Remover und Pflege für die Brauen.",[["Entfernung mit Remover","150 €"],["Brauen-Komplex: Laminierung, Färben, Formen","30 €"]]]]},
  portfolio:{eyebrow:"Portfolio",title:"Echte Ergebnisse",lead:"Nur eigene Arbeiten – frisch und abgeheilt."},
  training:{cert:"Nach jedem Kurs und jeder Weiterbildung erhalten Sie ein Zertifikat.",eyebrow:"PMU Ausbildung",title:"Lernen Sie die Kunst des Permanent Make-ups",lead:"Vom ersten Strich bis zur sicheren Arbeit am Modell.",
    p:"Online-Vorbereitung, Einzelunterricht in München und eigene Arbeiten an Modellen unter meiner Kontrolle.",
    items:[["Basiskurs von Null","Augenbrauen, Lippen und Wimpernkranz – für Einsteiger.",[["Kompletter Kurs","3 200 €"],["Anzahlung (Platzreservierung)","960 €"],["Restbetrag","2 240 €"]]],
      ["Einzelkurse","Eine Zone gezielt erlernen.",[["Augenbrauen, 3 Tage","1 500 €"],["Wimpernkranz, 1 Tag","500 €"]]],
      ["Weiterbildung","Individuell, abgestimmt auf Niveau und Aufgabe der Artist.",[["1 Tag","800 €"],["2 Tage","1 500 €"],["VIP, 3 Tage","2 000 €"]]]],
    progTitle:"Programm des Basiskurses",
    prog:[["Online-Teil","Haut und Heilung, Sterilität, Geräte, Pigmente, Form- und Farbwahl, Beratung und Ablauf der Behandlung."],
      ["Präsenzteil","Wir beginnen mit der Handführung auf Latex und gehen dann zu Modellen über. Anna zeigt drei komplette Behandlungen, danach arbeiten Sie unter ihrer Kontrolle."],
      ["Techniken","Augenbrauen: Powder-Technik, Form und weiche Übergänge. Lippen: Kontur, Farbwahl, Aquarell- und Lippenstift-Technik. Wimpernkranz: Handhaltung, Lidspannung und saubere Linie."]],
    inclTitle:"Im Basiskurs enthalten",
    incl:["2 Wochen Online-Vorbereitung","5 Tage Einzelunterricht in München","3 komplette Behandlungen von Anna – je eine pro Zone","6 eigene Arbeiten unter Annas Kontrolle: 2× Augenbrauen, 2× Lippen, 2× Wimpernkranz","2 Monate Begleitung nach dem Kurs","Lernmaterial und Verbrauchsmaterial während des Kurses","Persönliches CHAMPION-Starter-Set (Gerät, Pigmente, Skizzen-Set, Makroobjektiv)","Besprechung Ihrer ersten eigenständigen Arbeiten innerhalb von 2 Monaten","Zusatzblock: Fotografieren der Arbeiten, Content und Promotion","Zertifikat nach Abschluss des Kurses"],
    kit:{"eyebrow":"Starter-Set","title":"Ihr Starter-Set ist im Kurs enthalten","lead":"Nach der Ausbildung gehen Sie nicht nur mit Wissen und geübten Fertigkeiten nach Hause, sondern mit einem Set, mit dem Sie schon arbeiten können.","items":["Professionelles CHAMPION-Gerät und Cartridges","Pigmente für Augenbrauen und Lippen sowie weißes Pigment für Farbnuancen","Komplettes Skizzen-Set: Paste, Pinsel, Stifte und die nötigen Werkzeuge","CHAMPION-Makroobjektiv, um Ihre Arbeiten von Anfang an schön und detailreich zu fotografieren"],"note":"Genau mit diesen Materialien und Geräten lernen Sie während des Kurses. So nehmen Sie nicht nur eine schöne Box mit nach Hause, sondern Werkzeuge, die Sie in der Praxis schon kennen. Nach dem Kurs müssen Sie nicht durch Geschäfte laufen oder zufällig einkaufen: Sie wissen bereits, womit Sie arbeiten und warum."},
    struct:{"btn":"Struktur des Kurses ansehen","head":"3 Zonen / 3 Demonstrationen / 6 Modelle","lead":"Powder-Augenbrauen, Lippen in Aquarell- und Lippenstift-Technik, Wimpernkranz.","label":"Präsenzprogramm","day":"Tag","res":"Ergebnis des Tages","days":[["Fundament und Handführung","Der erste Tag bringt Ordnung: was, womit und warum die Artist in jeder Phase der Behandlung tut.",[["Arbeitssystem","Geräte, Maschine, Cartridges, Pigmente, Einwegmaterial. Arbeitsplatz, Hygiene, Sterilität, Beratung, Kontraindikationen und Ablauf der Behandlung."],["Haut und Technik","Aufbau der Haut, Einbringtiefe des Pigments, Winkel der Maschine, Hautspannung, Handgeschwindigkeit und Kontrolle der Hautreizung. Wir besprechen Fehler, die Heilung und Ergebnis beeinflussen."],["Skizze und Farbe","Form und Symmetrie der Augenbrauen, anatomische Grenzen der Lippen, Farbwahl passend zu den Ausgangsdaten der Kundin. Wir lernen, Entscheidungen zu begründen, statt ein Schema nur zu kopieren."],["Latex","Handführung, Grundbewegungen, gleichmäßiges Einbringen und Kontrolle der Dichte. Wir üben die Mechanik vor der ersten Arbeit am Modell."]],"Sie kennen den Ablauf der Behandlung und wissen, was Sie mit Hand, Auge und Entscheidung kontrollieren."],["Powder-Augenbrauen","Zuerst sehen Sie die komplette Behandlung. Dann gehen Sie denselben Weg selbst.",[["Demonstration ANNORA","Beratung des Modells, Analyse von Gesicht und Haut, Skizze, Pigmentwahl, Vorbereitung des Arbeitsplatzes, Powder-Technik und abschließende Bewertung des Ergebnisses."],["Ihr erstes Modell","Sie führen die Behandlung selbst durch, unter meiner Kontrolle: vom Gespräch mit dem Modell und dem Aufbau der Form bis zum letzten Durchgang. Ich korrigiere Hand und Entscheidungen während der Arbeit."],["Technischer Schwerpunkt","Sauberer Brauenanfang, Verlauf, untere Linie, Dichte der Schattierung, gleichmäßige Farbe und Arbeiten ohne unnötige Hautreizung."],["Auswertung","Wir fotografieren das Ergebnis und besprechen, was schon gelungen ist und was Sie vor der zweiten Arbeit ändern sollten."]],"Eine Demonstration der Augenbrauen und Ihre erste vollständige Arbeit am Modell."],["Augenbrauen + Lippen","Wir festigen die Augenbrauen und gehen zu neuer Anatomie, Farbe und Technik über.",[["Zweites Modell für Augenbrauen","Sie wiederholen die gesamte Behandlung schon sicherer: Beratung, Skizze, Pigment, Arbeit und Selbstkontrolle. Meine Hinweise werden punktuell."],["Lippentheorie","Anatomische Grenzen, Asymmetrie, Skizze ohne Abweichung von der natürlichen Kontur, Farblehre, Neutralisation, Aquarell- und Lippenstift-Effekt. Wir besprechen gesondert die Erwartungen der Kundin."],["Demonstration ANNORA","Ich zeige die komplette Lippenbehandlung am Modell: Farbwahl, Vorbereitung, Spannung, Einbringen des Pigments, Kontrolle der Dichte und das Endergebnis."],["Vorbereitung auf die Praxis","Wir halten den Arbeitsablauf und die individuellen Punkte fest, auf die Sie bei Ihrem eigenen Modell achten müssen."]],"Zweite Arbeit an den Augenbrauen und eine vollständige Lippen-Demonstration vor Ihrer Praxis."],["Lippen + Wimpernkranz","Zwei verschiedene Zonen an einem Tag: Wir übertragen die Grundmechanik der Hand auf neue Aufgaben.",[["Erstes Modell für Lippen","Sie führen Beratung durch, bauen die Skizze auf, wählen die Farbe und führen die Behandlung aus. Wir arbeiten an Kontur, Spannung, gleichmäßiger Füllung und Kontrolle der Hautreizung."],["Sicherheit im Augenbereich","Anatomie der Lider, Auswahl der Kundin, Kontraindikationen, Arbeitsspannung, Handführung und Grenzen des Wimpernkranzes."],["Demonstration ANNORA","Ich zeige den Wimpernkranz am Modell von der Vorbereitung bis zum Endergebnis. Sie sehen Tempo, Bewegungsablauf und die Arbeit an einer empfindlichen Zone."],["Erstes Modell für Wimpernkranz","Sie führen die Behandlung unter meiner ständigen Kontrolle aus. Wir besprechen jede Phase in dem Moment, in dem sie noch korrigiert werden kann."]],"Ihre ersten Arbeiten an Lippen und Wimpernkranz und die dritte Demonstration des Kurses."],["Abschlusspraxis","Der Tag, an dem ich sehe, wie Sie selbst Entscheidungen treffen.",[["Zweites Modell für Lippen","Von Beratung und Skizze über die Wahl der Technik bis zum Abschlussfoto. Wir festigen Gleichmäßigkeit, Farbe, saubere Kontur und Heilungsprognose."],["Zweites Modell für Wimpernkranz","Sie führen die Behandlung selbstständiger durch: Sie beurteilen die Zone, organisieren die Arbeit, kontrollieren Hand und Ergebnis. Ich greife ein, wo eine genaue Korrektur nötig ist."],["Auswertung der sechs Arbeiten","Wir vergleichen erste und wiederholte Arbeiten in jeder Zone und erstellen eine persönliche Liste dessen, was Sie nach dem Kurs weiter üben sollten."],["Erste Schritte als Artist","Fotos der Arbeiten, Portfolio, Kommunikation mit Kundinnen, Promotion und praktische Nutzung von KI für Arbeitsaufgaben. Wir vereinbaren das Format des Feedbacks für die nächsten zwei Monate."]],"Insgesamt sechs eigene Arbeiten: zwei an den Augenbrauen, zwei an den Lippen und zwei am Wimpernkranz."]]},
    modelsEyebrow:"Modelle gesucht",modelsTitle:"Basiskurs · 23.–27. November",modelsText:"Zonen: Augenbrauen, Lippen und Wimpernkranz.",
    models:[["Die Behandlung führt Anna durch","150 €"],["Die Behandlung führt eine Schülerin unter Annas Kontrolle durch","70 €"]],
    modelsCta:"Als Modell anmelden"},
  adv:{eyebrow:"Warum Annora",title:"Worauf Sie sich verlassen können",items:["Individueller Ansatz","Natürliche Ergebnisse","Liebe zum Detail","Hochwertige Materialien","Praxisnahe Ausbildung","Angenehme Atmosphäre"]},
  rev:{eyebrow:"Bewertungen",title:"Stimmen von Kundinnen und Schülerinnen",items:[["Ich kann mich gar nicht sattsehen – ich strahle heute den ganzen Tag, die Begeisterung weicht nicht von meinen Lippen. Sie sind wunderschön, perfekt und einfach zauberhaft. Sie sind eine großartige Meisterin und zugleich eine warmherzige, liebe, zarte und bezaubernde junge Frau. Tausend Dank!","Kundin · Lippen"],["Das ist noch untertrieben. Du bist einfach eine Zauberin, ich bin immer noch ganz hin und weg und kann nicht aufhören, mich anzusehen. Ich werde nur dich weiterempfehlen, Anna.","Kundin"],["Mir hat alles gefallen – Annas Zugang zu ihrer Arbeit. Dank ihrer Erklärungen und ihrer Hilfe habe ich gelernt, wunderschöne Augenbrauen zu machen. Die Atmosphäre in der Ausbildung war ganz besonders. Ich komme auch zum Remover wieder.","Schülerin · Basiskurs"],["Ich habe den Basiskurs für Permanent Make-up von Augenbrauen und Lippen absolviert. Die Ausbildung hat mir sehr gefallen: alle Videos in hervorragender Qualität, die Informationen sind maximal verständlich, nach dem Anschauen bleiben kaum Fragen offen. Anna war immer erreichbar und hat mir geholfen, mein Starter-Set für die Ausbildung aufzuwerten. Insgesamt sind meine Eindrücke durchweg positiv.","Schülerin · Online-Kurs"],["Ich habe lange gezögert, wo ich einen Permanent-Make-up-Kurs machen soll. Ich habe viel recherchiert, dich gefunden und sofort geschrieben – denn was du machst, ist pure Schönheit, deine Hände sind einfach golden. Am meisten hatte ich Angst davor, an Modellen zu beginnen, und ich bin so dankbar, dass du immer an meiner Seite warst. Ich habe nach Gold gesucht und den schönsten Schatz gefunden.","Schülerin · Permanent-Make-up-Kurs"],["Anna, von Herzen Danke für diesen Tag und diese kraftvolle Masterclass! Ihre Energie, Ihre Art zu vermitteln, Ihre Liebe zur Arbeit – das ist einfach Feuer. Mit Ihnen möchte man wachsen, kreativ sein, nicht stehen bleiben. Ich habe schon zwei Kurse bei Ihnen gemacht und verfolge Sie seitdem ständig: Ihre Arbeiten, Ihre Seite, Ihr Ansatz – alles motiviert und gibt Selbstvertrauen.","Teilnehmerin · Masterclass"]]},
  contact:{eyebrow:"Kontakt",title:"Schreiben Sie Anna",lead:"Termin, Frage zur Behandlung oder Ausbildung – direkt und persönlich im Messenger."},
  cta:{book:"Termin anfragen",apply:"Ausbildung anfragen",more:"Mehr auf Instagram"},
  tg:{clients:"Für Kundinnen & Models",artists:"Für Artists & Schülerinnen",personal:"Persönlicher Kanal von Anna"},
  foot:{imprint:"Impressum",privacy:"Datenschutz",cookies:"Cookie-Einstellungen"},
  consent:{text:"Wir nutzen Google Tag Manager, Google Analytics und Google Ads nur mit Ihrer Einwilligung, um die Nutzung der Website statistisch auszuwerten und unsere Werbung zu messen. Sie können Ihre Wahl jederzeit ändern.",no:"Ablehnen",yes:"Akzeptieren"},
  ph:{hero:"Foto · Anna",about:"Foto · Porträt",train:"Foto · Schulung",student:"Foto · Schülerarbeit",work:"Foto · Arbeit"},
  alt:{hero:"Anna, Permanent-Make-up-Artistin in München",about:"Starter-Set von Champion Permanent Makeup – ein Geschenk für Kursteilnehmerinnen",train:"PMU-Ausbildung: Farbauswahl am Pigmentständer",student:"PMU-Ausbildung: Unterricht mit Lernmaterial",work:"Arbeit von Annora Permanent",svc:["Augenbrauen mit Permanent Make-up","Lippen mit Permanent Make-up","Wimpernkranz – Auge mit verdichteter Wimpernlinie","Lidstrich mit Schattierung","Korrektur von Augenbrauen","Augenbrauen, vorher und nachher"],kit1:"Starter-Set von Champion: Gerät, Cartridges, Pigmente und Verpackung",kit2:"Skizzen-Set von Champion: Paste, Pinsel und Stifte",kit3:"CHAMPION-Makroobjektiv mit Smartphone-Clip",kit4:"CHAMPION-Maschinen und Cartridges"},
  wa:{promo:"Hallo Anna! Ich interessiere mich für die Aktion: Entfernung mit Remover für 100 €.",appointment:"Hallo Anna! Ich möchte einen Termin für Permanent Make-up anfragen.",training:"Hallo Anna! Ich interessiere mich für die PMU Ausbildung.",model:"Hallo Anna! Ich möchte mich als Modell für den Basiskurs (23.–27. November) anmelden."}
},
uk:{
  note:"",
  nav:{about:"Про Анну",services:"Послуги",portfolio:"Роботи",training:"Навчання",contact:"Контакти"},
  hero:{eyebrow:"PMU · Мюнхен",sub:"Перманентний макіяж і професійне навчання в Мюнхені",lead:"Краса не має бути однаковою. Перманент із повагою до ваших рис."},
  about:{eyebrow:"Про Анну",title:"Майстер і тренер",lead:"Мене звати Анна Орленко. Я засновниця ANNORA Permanent, майстер і тренер перманентного макіяжу, майстер апаратної косметології.",
    p1:"У перманентному макіяжі я понад 12 років. За цей час я стала чемпіонкою України, а у 2018 році увійшла до топ-10 майстрів Європи на Europa Beauty Festival у Мюнхені. Зараз у цьому ж місті я приймаю клієнтів і навчаю майстрів.",
    p2:"Я люблю свою роботу за момент, коли жінка дивиться на себе в дзеркало й каже: «Так, ось так мені подобається». У кожної це «ось так» своє. Одна хоче, щоб брови виглядали м’яко навіть без макіяжу, інша любить виразнішу форму. Тому мені важливо почути, чого хочете саме ви. І вже на ескізі я можу показати, що пропоную, і пояснити, чому бачу форму саме такою.",
    p3:"У навчанні я така сама. Якщо учениця питає, чому я обрала цей відтінок чи змінила форму, я розбираю з нею, що побачила в конкретній роботі. Мені важливо, щоб, коли вона залишиться сам на сам зі своєю клієнткою, могла подивитися на її обличчя, почути її побажання й упевнено ухвалити власне рішення.",
    facts:[["12+","років досвіду"],["Чемпіонка","України"],["Топ-10","Europa Beauty Festival 2018"]]},
  promo:{tag:"Акція",title:"Видалення ремувером",text:"Акційна ціна діє лише до {date}. Кількість місць за акційною ціною обмежена.",bar:"Акція: видалення ремувером за {price} — лише до {date}",d:"днів",h:"год",m:"хв",s:"сек",cta:"Забронювати місце"},
  services:{eyebrow:"Послуги та ціни",title:"Перманентний макіяж",lead:"Твоє обличчя. Твоя форма.",
    combo:"При записі на дві зони перманенту знижка 50 €, на три зони — 100 €.",
    onreq:"Вартість виправлення та перекриття старого перманенту, окремого оформлення та фарбування брів, ламінування та фарбування вій, макіяжу й консультації уточнюється окремо.",
    items:[["Брови","Природна форма та густота з урахуванням ваших рис обличчя.",[["Перманентний макіяж","300 €"]]],
      ["Губи","Свіжий відтінок і акуратний контур з урахуванням природної форми губ.",[["Губи","300 €"],["Губи 3D","350 €"]]],
      ["Міжвійка","Делікатне заповнення лінії вій — виразний погляд без щоденної підводки.",[["Міжвійка","200 €"],["Міжвійка з вилітом","250 €"]]],
      ["Стрілки","Від класичної стрілки до м’якої розтушовки.",[["Класична стрілка","300 €"],["Стрілка «Куточок»","350 €"],["Стрілка з розтушовкою","350 €"]]],
      ["Корекція та оновлення","Корекція перманентного макіяжу та оновлення кольору.",[["Корекція","150 €"],["Оновлення лише кольору","150 €"],["Примірка ескіза","15 €"]]],
      ["Видалення та догляд","Видалення старого перманенту ремувером і догляд за бровами.",[["Видалення ремувером","150 €"],["Комплекс для брів: ламінування, фарбування, оформлення","30 €"]]]]},
  portfolio:{eyebrow:"Портфоліо",title:"Реальні результати",lead:"Лише власні роботи — свіжі та загоєні."},
  training:{cert:"Після кожного курсу та підвищення кваліфікації ви отримуєте сертифікат.",eyebrow:"Навчання PMU",title:"Опануйте мистецтво перманентного макіяжу",lead:"Від першої лінії до впевненої роботи на моделі.",
    p:"Онлайн-підготовка, індивідуальне навчання в Мюнхені та самостійні роботи на моделях під моїм контролем.",
    items:[["Базовий курс з нуля","Брови, губи та міжвійка — для початківців.",[["Повний курс","3 200 €"],["Бронь місця","960 €"],["Залишок","2 240 €"]]],
      ["Окремі курси","Опанувати одну зону.",[["Брови, 3 дні","1 500 €"],["Міжвійка, 1 день","500 €"]]],
      ["Підвищення кваліфікації","Програму добираю під рівень майстра та його завдання.",[["1 день","800 €"],["2 дні","1 500 €"],["VIP, 3 дні","2 000 €"]]]],
    progTitle:"Програма базового курсу",
    prog:[["Онлайн-частина","Шкіра та загоєння, стерильність, обладнання, пігменти, підбір форми й кольору, консультація та порядок проведення процедури."],
      ["Очна частина","Починаємо з постановки руки на латексі й переходимо до моделей. Я показую три повні процедури, далі ви працюєте під моїм контролем."],
      ["Техніки","Брови: пудрове напилення, форма та м’якість переходів. Губи: контур, підбір кольору, акварельна й помадна техніки. Міжвійка: положення руки, натяг повіки та чиста лінія."]],
    inclTitle:"У базовий курс входить",
    incl:["2 тижні онлайн-підготовки","5 днів індивідуального навчання в Мюнхені","3 повні процедури від Анни — по одній на кожну зону","6 самостійних робіт під контролем Анни: двоє брів, двоє губ, дві міжвійки","2 місяці супроводу після курсу","Навчальні матеріали та витратники на час курсу","Особистий стартовий набір CHAMPION (апарат, пігменти, набір для ескізу, макролінза)","Розбір перших самостійних робіт протягом двох місяців","Додатковий блок: фотографування робіт, контент і просування","Сертифікат після завершення курсу"],
    kit:{"eyebrow":"Стартовий набір","title":"Стартовий набір входить у курс","lead":"Після навчання ви йдете не лише зі знаннями та відпрацьованими навичками, а й з набором, з яким уже можна починати працювати.","items":["Професійний апарат CHAMPION та картриджі","Пігменти для брів і губ, а також білий пігмент для роботи з відтінками","Повноцінний набір для побудови ескізу: паста, пензлі, олівці та необхідні інструменти","Макролінза CHAMPION, щоб із самого початку вчитися красиво й детально знімати свої роботи"],"note":"На цих матеріалах і обладнанні ви навчаєтесь під час курсу. Тож додому забираєте не просто гарну коробку, а інструменти, з якими вже познайомилися на практиці. Після курсу не доведеться бігати по магазинах і робити випадкові покупки: ви вже розумієте, чим працювати і чому."},
    struct:{"btn":"Ознайомитись зі структурою курсу","head":"3 зони / 3 демонстрації / 6 моделей","lead":"Пудрові брови, губи в акварельній та помадній техніках, міжвійковий простір.","label":"Очна програма","day":"День","res":"Результат дня","days":[["Фундамент і постановка руки","Перший день знімає хаос: що, чим і чому майстер робить на кожному етапі процедури.",[["Робоча система","Обладнання, машинка, картриджі, пігменти, одноразові матеріали. Організація місця, гігієна, стерильність, консультація, протипоказання та послідовність процедури."],["Шкіра і техніка","Будова шкіри, глибина внесення пігменту, кут машинки, натяг шкіри, швидкість руки та контроль травматизації. Розбираємо помилки, які впливають на загоєння та результат."],["Ескіз і колір","Форма та симетрія брів, анатомічні межі губ, добір кольору відповідно до вихідних даних клієнта. Вчимося пояснювати рішення, а не просто копіювати схему."],["Латекс","Постановка руки, базові рухи, рівномірність внесення та контроль щільності. Відпрацьовуємо механіку перед першою роботою на моделі."]],"Ви знаєте алгоритм процедури й розумієте, що контролювати рукою, оком та рішенням."],["Пудрові брови","Спочатку бачите повну процедуру. Потім проходите той самий шлях самостійно.",[["Демонстрація ANNORA","Консультація моделі, аналіз обличчя і шкіри, ескіз, вибір пігменту, підготовка робочого місця, виконання пудрової техніки та фінальна оцінка результату."],["Ваша перша модель","Ви самі ведете процедуру під моїм контролем: від розмови з моделлю та побудови форми до останнього проходу. Я корегую руку й рішення в процесі."],["Технічний акцент","Чистий початок брови, градієнт, нижня лінія, щільність напилення, рівномірність кольору та робота без зайвого травмування шкіри."],["Розбір","Фотографуємо результат і розбираємо, що вже вийшло та що потрібно змінити перед другою роботою."]],"Одна демонстрація брів і ваша перша повноцінна робота на моделі."],["Брови + губи","Закріплюємо брови та переходимо до нової анатомії, кольору й техніки.",[["Друга модель на брови","Повторюєте всю процедуру вже впевненіше: консультація, ескіз, пігмент, робота та самоперевірка. Мої підказки стають точковими."],["Теорія губ","Анатомічні межі, асиметрія, ескіз без виходу за природний контур, колористика, нейтралізація, акварельний і помадний ефекти. Окремо розбираємо очікування клієнта."],["Демонстрація ANNORA","Я показую повну процедуру губ на моделі: вибір кольору, підготовка, натяг, внесення пігменту, контроль щільності та фінальний результат."],["Підготовка до практики","Фіксуємо послідовність роботи та індивідуальні моменти, на які вам потрібно звернути увагу на власній моделі."]],"Друга робота на бровах і повна демонстрація губ перед вашою практикою."],["Губи + міжвійка","Дві різні зони за день: переносимо базову механіку руки на нові задачі.",[["Перша модель на губи","Ви проводите консультацію, будуєте ескіз, підбираєте колір і виконуєте процедуру. Працюємо з контуром, натягом, рівномірним заповненням та контролем травматизації."],["Безпека зони очей","Анатомія повік, відбір клієнта, протипоказання, робочий натяг, постановка руки та межі міжвійкового простору."],["Демонстрація ANNORA","Показую міжвійку на моделі від підготовки до фінального результату. Ви бачите темп, порядок рухів і роботу з делікатною зоною."],["Перша модель на міжвійку","Виконуєте процедуру під моїм постійним контролем. Розбираємо кожен етап у моменті, коли його можна виправити."]],"Ваші перші роботи на губах і міжвійці та третя демонстрація курсу."],["Фінальна практика","День, у який я дивлюся, як ви самі приймаєте рішення.",[["Друга модель на губи","Від консультації та ескізу до добору техніки й фінального фото. Закріплюємо рівномірність, колір, чистий контур та прогноз загоєння."],["Друга модель на міжвійку","Самостійніше ведете процедуру: оцінюєте зону, організовуєте роботу, контролюєте руку й результат. Я втручаюся там, де потрібне точне коригування."],["Розбір шести робіт","Порівнюємо перші та повторні роботи на кожній зоні. Формуємо персональний список того, що відпрацьовувати після курсу."],["Перші кроки майстра","Фото робіт, портфоліо, комунікація з клієнтом, просування та практичне використання AI для робочих завдань. Узгоджуємо формат зворотного зв’язку на наступні два місяці."]],"Шість власних робіт загалом: дві на бровах, дві на губах і дві на міжвійці."]]},
    modelsEyebrow:"Шукаю моделей",modelsTitle:"Базовий курс · 23–27 листопада",modelsText:"Зони: брови, губи та міжвійка.",
    models:[["Процедуру виконує Анна","150 €"],["Процедуру виконує учениця під контролем Анни","70 €"]],
    modelsCta:"Записатися моделлю"},
  adv:{eyebrow:"Чому Annora",title:"На що можна покластися",items:["Індивідуальний підхід","Природні результати","Увага до деталей","Якісні матеріали","Практичний підхід до навчання","Комфортна атмосфера"]},
  rev:{eyebrow:"Відгуки",title:"Кажуть клієнтки й учениці",items:[["Я не можу налюбуватися — сьогодні цілий день сяю, захват не сходить з моїх вуст. Вони прекрасні, ідеальні й просто феєричні. Ви мега крутий майстер і водночас тепла, мила, ніжна й чарівна дівчина. Величезне вам дякую!","Клієнтка · губи"],["Ой, не те слово. Ти просто чарівниця, я досі не можу отямитись — дивлюся й не надивлюся. Рекомендуватиму тільки тебе, Анечко.","Клієнтка"],["Усе сподобалось — підхід Ані до своєї справи. Завдяки її поясненням і допомозі я навчилась робити шикарні брови. Атмосфера на навчанні була взагалі особлива. Прийду ще на ремувер.","Учениця · базовий курс"],["Я пройшла базовий курс з перманентного макіяжу брів і губ. Навчання дуже сподобалось: усі відео в чудовій якості, інформація подається максимально зрозуміло, питань після перегляду мінімум. Аня завжди була на зв’язку й допомогла мені з перетворенням стартового набору для навчання. Загалом враження найпозитивніші.","Учениця · онлайн-курс"],["Я довго вагалась, де проходити курси перманенту. Сиділа, вичитувала — і ось знайшла тебе й одразу написала, бо те, що ти робиш, — це краса, твої руки просто золоті. Найбільше мене лякало почати робити перманент на моделях, і я дуже вдячна, що ти завжди була поруч. Я шукала золото, а знайшла скарб найпрекрасніший.","Учениця · курс перманенту"],["Аню, щиро дякую за цей день і такий потужний майстер-клас! Ваша енергія, подача, любов до справи — це просто вогонь. З вами хочеться рости, творити, не зупинятись. Я проходила у вас уже два курси й відтоді постійно стежу за вами: ваші роботи, сторінка, підхід — усе заряджає на розвиток і дає віру в себе.","Учасниця · майстер-клас"]]},
  contact:{eyebrow:"Контакти",title:"Напишіть Анні",lead:"Запис, питання про процедуру чи навчання — напряму в месенджері."},
  cta:{book:"Записатися",apply:"Заявка на навчання",more:"Більше в Instagram"},
  tg:{clients:"Для клієнтів і моделей",artists:"Для майстрів і учнів",personal:"Особистий канал Анни"},
  foot:{imprint:"Impressum",privacy:"Конфіденційність",cookies:"Налаштування cookies"},
  consent:{text:"Ми використовуємо Google Tag Manager, Google Analytics і Google Ads лише з вашої згоди, щоб вести статистику відвідувань сайту та вимірювати ефективність реклами. Вибір можна змінити будь-коли.",no:"Відхилити",yes:"Прийняти"},
  ph:{hero:"Фото · Анна",about:"Фото · Портрет",train:"Фото · Навчання",student:"Фото · Робота учениці",work:"Фото · Робота"},
  alt:{hero:"Анна, майстер перманентного макіяжу в Мюнхені",about:"Стартовий набір Champion Permanent Makeup — подарунок для учениць",train:"Навчання PMU: підбір кольору на стійці з пігментами",student:"Навчання PMU: заняття з навчальними матеріалами",work:"Робота Annora Permanent",svc:["Брови, перманентний макіяж","Губи, перманентний макіяж","Міжвійка — око з підкресленою лінією вій","Стрілка з розтушовкою","Корекція брів","Брови до і після"],kit1:"Стартовий набір Champion: апарат, картриджі, пігменти та пакування",kit2:"Набір для ескізу Champion: паста, пензлі та олівці",kit3:"Макролінза CHAMPION із кліпсою для смартфона",kit4:"Апарати та картриджі CHAMPION"},
  wa:{promo:"Добрий день, Анно! Хочу записатися на видалення ремувером за акцією 100 €.",appointment:"Добрий день, Анно! Хочу записатися на перманентний макіяж.",training:"Добрий день, Анно! Мене цікавить навчання перманентному макіяжу.",model:"Добрий день, Анно! Хочу записатися моделлю на базовий курс (23–27 листопада)."}
},
en:{
  note:"",
  nav:{about:"About",services:"Services",portfolio:"Portfolio",training:"Training",contact:"Contact"},
  hero:{eyebrow:"PMU · Munich",sub:"Permanent Make-up & Professional Training in Munich",lead:"Enhance your natural beauty. Learn the art of permanent make-up."},
  about:{eyebrow:"About Anna",title:"Artist & Trainer",lead:"I'm Anna Orlenko – founder of ANNORA Permanent, permanent make-up artist and trainer, and a specialist in apparatus cosmetology.",
    p1:"I've worked in permanent make-up for over 12 years. In that time I became champion of Ukraine, and in 2018 I made the top 10 artists in Europe at the Europa Beauty Festival in Munich. Today I see clients and train artists in the same city.",
    p2:"I love my work for the moment a woman looks in the mirror and says: “Yes, this is what I like.” Everyone's “this” is different: one wants brows that look soft even without make-up, another prefers a more defined shape. That's why it matters to me to hear what you want – and already on the sketch I can show what I suggest and explain why I see the shape this way.",
    p3:"I'm the same in training. If a student asks why I chose a shade or changed a shape, we go through what I saw in that particular work. I want her, when she is alone with her client, to be able to look at her face, hear her wishes and confidently make her own decision.",
    facts:[["12+","years of experience"],["Champion","of Ukraine"],["Top 10","Europa Beauty Festival 2018"]]},
  promo:{tag:"Special offer",title:"Removal with remover",text:"Offer price only until {date}. Appointments at the offer price are limited.",bar:"Special offer: removal with remover for {price} – only until {date}",d:"days",h:"hrs",m:"min",s:"sec",cta:"Book your spot"},
  services:{eyebrow:"Services & prices",title:"Permanent Make-up",lead:"Your face. Your shape.",
    combo:"Book two permanent make-up zones together and save 50 €; three zones – save 100 €.",
    onreq:"Correction and cover-up of old permanent make-up, brow shaping and tinting, lash lift and tint, make-up and consultation – price on request.",
    items:[["Brows","Natural shape and density, matched to your features.",[["Permanent make-up","300 €"]]],
      ["Lips","A fresh tint and a clean contour that respects your natural lip shape.",[["Lips","300 €"],["Lips 3D","350 €"]]],
      ["Lash line","Subtle definition along the lash line for expressive eyes.",[["Lash line","200 €"],["Lash line with wing","250 €"]]],
      ["Eyeliner","From a classic line to a soft shaded finish.",[["Classic eyeliner","300 €"],["“Corner” eyeliner","350 €"],["Eyeliner with shading","350 €"]]],
      ["Correction & refresh","Touch-up and colour refresh of permanent make-up.",[["Correction","150 €"],["Colour refresh only","150 €"],["Sketch fitting","15 €"]]],
      ["Removal & care","Removal of old permanent make-up with remover, and brow care.",[["Removal with remover","150 €"],["Brow set: lamination, tint, shaping","30 €"]]]]},
  portfolio:{eyebrow:"Portfolio",title:"Real results",lead:"Only my own work – fresh and healed."},
  training:{cert:"You receive a certificate after every course and advanced training.",eyebrow:"PMU Training",title:"Learn the art of permanent make-up",lead:"From the first stroke to confident work on a model.",
    p:"Online preparation, one-to-one training in Munich and your own work on models under my supervision.",
    items:[["Basic course from scratch","Brows, lips and lash line – for beginners.",[["Full course","3 200 €"],["Deposit (place reservation)","960 €"],["Remaining amount","2 240 €"]]],
      ["Single courses","Master one zone.",[["Brows, 3 days","1 500 €"],["Lash line, 1 day","500 €"]]],
      ["Advanced training","I tailor the programme to the artist's level and goal.",[["1 day","800 €"],["2 days","1 500 €"],["VIP, 3 days","2 000 €"]]]],
    progTitle:"Basic course programme",
    prog:[["Online part","Skin and healing, sterility, equipment, pigments, choosing shape and colour, consultation and the order of a treatment."],
      ["In-person part","We start with hand positioning on latex and move on to models. I demonstrate three complete treatments, then you work under my supervision."],
      ["Techniques","Brows: powder technique, shape and soft transitions. Lips: contour, colour choice, watercolour and lipstick techniques. Lash line: hand position, eyelid tension and a clean line."]],
    inclTitle:"Included in the basic course",
    incl:["2 weeks of online preparation","5 days of one-to-one training in Munich","3 complete treatments by Anna – one per zone","6 of your own works under Anna's supervision: 2 brows, 2 lips, 2 lash lines","2 months of support after the course","Learning materials and consumables during the course","Personal CHAMPION starter kit (machine, pigments, sketching set, macro lens)","Review of your first independent works within 2 months","Extra block: photographing your work, content and promotion","Certificate on completion of the course"],
    kit:{"eyebrow":"Starter kit","title":"Your starter kit is included in the course","lead":"After the training you go home not only with knowledge and practised skills, but with a kit you can already start working with.","items":["Professional CHAMPION machine and cartridges","Pigments for brows and lips, plus white pigment for working with shades","Complete sketching set: paste, brushes, pencils and the necessary tools","CHAMPION macro lens, so you can photograph your work beautifully and in detail from day one"],"note":"You learn on exactly these materials and this equipment during the course. So you take home not just a nice box, but tools you already know from practice. After the course you don't have to run around shops or make random purchases: you already know what to work with and why."},
    struct:{"btn":"See the course structure","head":"3 zones / 3 demonstrations / 6 models","lead":"Powder brows, lips in watercolour and lipstick techniques, lash line.","label":"In-person programme","day":"Day","res":"Result of the day","days":[["Foundation and hand positioning","The first day clears the chaos: what the artist does, with what and why at every stage of the treatment.",[["Working system","Equipment, machine, cartridges, pigments, disposables. Workspace set-up, hygiene, sterility, consultation, contraindications and the order of a treatment."],["Skin and technique","Skin structure, pigment depth, machine angle, skin tension, hand speed and control of skin trauma. We go through the mistakes that affect healing and results."],["Sketch and colour","Brow shape and symmetry, anatomical lip borders, choosing colour to suit the client's starting point. We learn to explain decisions, not just copy a scheme."],["Latex","Hand positioning, basic movements, even implantation and control of density. We practise the mechanics before the first work on a model."]],"You know the algorithm of a treatment and understand what to control with hand, eye and decision."],["Powder brows","First you see the full treatment. Then you walk the same path yourself.",[["ANNORA demonstration","Model consultation, analysis of face and skin, sketch, pigment choice, workspace preparation, powder technique and a final assessment of the result."],["Your first model","You run the treatment yourself under my supervision: from talking to the model and building the shape to the last pass. I correct your hand and decisions as you go."],["Technical focus","A clean brow start, gradient, lower line, density of shading, even colour and work without unnecessary skin trauma."],["Review","We photograph the result and go through what already worked and what to change before the second work."]],"One brow demonstration and your first complete work on a model."],["Brows + lips","We consolidate brows and move on to new anatomy, colour and technique.",[["Second brow model","You repeat the whole treatment with more confidence: consultation, sketch, pigment, work and self-check. My prompts become occasional."],["Lip theory","Anatomical borders, asymmetry, a sketch that stays within the natural contour, colour theory, neutralisation, watercolour and lipstick effects. We discuss client expectations separately."],["ANNORA demonstration","I show the complete lip treatment on a model: colour choice, preparation, tension, pigment implantation, density control and the final result."],["Preparing for practice","We fix the order of work and the individual points you need to watch on your own model."]],"A second work on brows and a full lip demonstration before your practice."],["Lips + lash line","Two different zones in one day: we transfer the basic hand mechanics to new tasks.",[["First lip model","You run the consultation, build the sketch, choose the colour and carry out the treatment. We work on contour, tension, even filling and control of skin trauma."],["Eye area safety","Eyelid anatomy, client selection, contraindications, working tension, hand positioning and the limits of the lash line."],["ANNORA demonstration","I show the lash line on a model from preparation to the final result. You see the pace, the order of movements and the work on a delicate zone."],["First lash line model","You carry out the treatment under my constant supervision. We go through every stage at the moment it can still be corrected."]],"Your first works on lips and lash line, and the third demonstration of the course."],["Final practice","The day I watch how you make decisions yourself.",[["Second lip model","From consultation and sketch to choosing the technique and the final photo. We consolidate evenness, colour, a clean contour and healing prognosis."],["Second lash line model","You run the treatment more independently: you assess the zone, organise the work and control hand and result. I step in where a precise correction is needed."],["Review of six works","We compare first and repeated works in each zone and build a personal list of what to keep practising after the course."],["First steps as an artist","Photos of your work, portfolio, client communication, promotion and practical use of AI for work tasks. We agree the format of feedback for the next two months."]],"Six works of your own in total: two on brows, two on lips and two on lash line."]]},
    modelsEyebrow:"Models wanted",modelsTitle:"Basic course · 23–27 November",modelsText:"Zones: brows, lips and lash line.",
    models:[["Treatment performed by Anna","150 €"],["Treatment performed by a student under Anna's supervision","70 €"]],
    modelsCta:"Sign up as a model"},
  adv:{eyebrow:"Why Annora",title:"What you can rely on",items:["Individual approach","Natural results","Attention to detail","High-quality materials","Hands-on training","Comfortable atmosphere"]},
  rev:{eyebrow:"Reviews",title:"What clients and students say",items:[["I can’t stop admiring them – I’ve been glowing all day, the delight won’t leave my lips. They are beautiful, perfect, simply magical. You are an incredibly skilled artist and at the same time a warm, sweet, gentle and charming young woman. Thank you so much!","Client · lips"],["“Amazing” isn’t even the word. You’re simply a magician, I still can’t get over it and keep admiring the result. I will recommend only you, Anna.","Client"],["I loved everything – Anna’s approach to her craft. Thanks to her explanations and help I learned to do gorgeous brows. The atmosphere during the training was really special. I’ll be back for the remover.","Student · basic course"],["I completed the basic permanent make-up course for brows and lips. I really enjoyed the training: all videos in excellent quality, the information is as clear as it gets, and very few questions are left after watching. Anna was always available and helped me upgrade my starter set for the training. Overall, my impressions are entirely positive.","Student · online course"],["I hesitated for a long time about where to take a permanent make-up course. I searched and read a lot, found you and wrote right away – because what you do is pure beauty, your hands are simply golden. My biggest fear was starting on models, and I’m so grateful you were always by my side. I was looking for gold and found the most beautiful treasure.","Student · permanent make-up course"],["Anna, thank you so much for this day and such a powerful masterclass! Your energy, your delivery, your love for the craft – it’s simply fire. With you, you want to grow, create, never stop. I’ve already taken two courses with you and have followed you ever since: your work, your page, your approach – it all energises and gives confidence.","Participant · masterclass"]]},
  contact:{eyebrow:"Contact",title:"Message Anna",lead:"Appointments, questions about treatments or training – directly in your messenger."},
  cta:{book:"Book an appointment",apply:"Apply for Training",more:"See more on Instagram"},
  tg:{clients:"For clients & models",artists:"For artists & students",personal:"Anna's personal channel"},
  foot:{imprint:"Impressum",privacy:"Privacy",cookies:"Cookie settings"},
  consent:{text:"We use Google Tag Manager, Google Analytics and Google Ads only with your consent, to measure how this website is used and how our ads perform. You can change your choice at any time.",no:"Decline",yes:"Accept"},
  ph:{hero:"Photo · Anna",about:"Photo · Portrait",train:"Photo · Training",student:"Photo · Student work",work:"Photo · Work"},
  alt:{hero:"Anna, permanent make-up artist in Munich",about:"Champion Permanent Makeup starter set – a gift for training participants",train:"PMU training: choosing colour at the pigment stand",student:"PMU training: lesson with study materials",work:"Work by Annora Permanent",svc:["Eyebrows, permanent make-up","Lips, permanent make-up","Lash line – eye with enhanced lash line","Eyeliner with shading","Eyebrow correction","Eyebrows, before and after"],kit1:"Champion starter kit: machine, cartridges, pigments and packaging",kit2:"Champion sketching set: paste, brushes and pencils",kit3:"CHAMPION macro lens with smartphone clip",kit4:"CHAMPION machines and cartridges"},
  wa:{promo:"Hello Anna! I'm interested in the offer: removal with remover for 100 €.",appointment:"Hello Anna! I'd like to book a permanent make-up appointment.",training:"Hello Anna! I'm interested in PMU training.",model:"Hello Anna! I would like to sign up as a model for the basic course (23–27 November)."}
}};

const LANGS = ["de","uk","en"];
const store = {get(k){try{return localStorage.getItem(k)}catch(e){return null}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};
const $ = (s,r=document)=>r.querySelector(s), $$ = (s,r=document)=>[...r.querySelectorAll(s)];
const esc = s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
let lang = "de";
const SVC = ["brows","lips","lashline","liner","correction","removal"];
const SVC_D = [[600,800],[600,800],[600,800],[600,800],[600,800],[600,800]];
const GAL = [1,2,3,4,5,6,7,8];

/* ---------- проверка настроек: в ссылки попадает только то, что прошло шаблон ---------- */
const clean = (v,re)=>re.test(String(v||"")) ? String(v) : "";
const LINKS = {
  instagram: clean(CONFIG.instagram,/^[A-Za-z0-9._]{1,30}$/),
  whatsapp:  clean(CONFIG.whatsapp,/^[1-9][0-9]{7,14}$/),
  facebook:  clean(CONFIG.facebookUrl,/^https:\/\/www\.facebook\.com\/[A-Za-z0-9._\/-]{1,100}$/),
  telegram:  Object.fromEntries(Object.entries(CONFIG.telegram||{}).map(([k,v])=>[k,clean(v,/^[A-Za-z][A-Za-z0-9_]{4,31}$/)])),
  gtm:       clean(CONFIG.gtmId,/^GTM-[A-Z0-9]{4,12}$/),
  ads:       clean(CONFIG.adsId,/^AW-[0-9]{6,12}$/)
};

/* ---------- UTM: только известные ключи, только строки, с ограничением длины ---------- */
const UTM_KEYS = ["utm_source","utm_medium","utm_campaign","utm_term","utm_content","gclid","fbclid"];
function pickUtm(src){
  const o={};
  if(src && typeof src==="object") UTM_KEYS.forEach(k=>{ const v=Object.prototype.hasOwnProperty.call(src,k)?src[k]:null; if(typeof v==="string" && v) o[k]=v.slice(0,150); });
  return o;
}
const utm = (()=>{
  const p=new URLSearchParams(location.search), q={};
  UTM_KEYS.forEach(k=>{ const v=p.get(k); if(v) q[k]=v; });
  const fromUrl=pickUtm(q);
  try{
    if(Object.keys(fromUrl).length) sessionStorage.setItem("utm",JSON.stringify(fromUrl));
    return pickUtm(JSON.parse(sessionStorage.getItem("utm")||"{}"));
  }catch(e){ return fromUrl; }
})();

/* ---------- ссылки на каналы ---------- */
function href(channel,intent){
  if(channel==="instagram" && LINKS.instagram) return intent==="profile" ? `https://www.instagram.com/${LINKS.instagram}/` : `https://ig.me/m/${LINKS.instagram}`;
  if(channel==="facebook" && LINKS.facebook) return LINKS.facebook;
  if(channel==="telegram" && LINKS.telegram[intent]) return `https://t.me/${LINKS.telegram[intent]}`;
  if(channel==="whatsapp" && LINKS.whatsapp) return `https://wa.me/${LINKS.whatsapp}?text=${encodeURIComponent(T[lang].wa[intent]||T[lang].wa.appointment)}`;
  return "#contact";
}
function wireLinks(){
  $$("a[data-channel]").forEach(a=>{
    const u=href(a.dataset.channel,a.dataset.intent), ext=u.startsWith("https://");
    a.href=u;
    if(ext){ a.target="_blank"; a.rel="noopener noreferrer"; a.dataset.live="1"; }
    else { a.removeAttribute("target"); a.removeAttribute("rel"); delete a.dataset.live; }
    if(a.dataset.channel==="telegram") a.hidden=!ext;     // пункт без ссылки не показываем
  });
  $$("details.tg").forEach(d=>{ d.hidden=!d.querySelector("a[data-channel=telegram]:not([hidden])"); });
}
/* меню Telegram: закрывается после выбора и по клику вне его */
document.addEventListener("click",e=>{
  $$("details.tg[open]").forEach(d=>{ if(!d.contains(e.target) || e.target.closest("a")) d.open=false; });
});

/* ---------- аналитика: события уходят в dataLayer (GTM → GA4) ---------- */
window.dataLayer = window.dataLayer || [];
function gtag(){ dataLayer.push(arguments); }
function track(event,params){ dataLayer.push(Object.assign({},utm,params,{event,page_language:lang})); }
document.addEventListener("click",e=>{
  const a=e.target.closest("a[data-channel]");
  if(!a || !a.dataset.live) return;               // заглушки без настоящей ссылки не считаются
  const p={link_channel:a.dataset.channel,link_intent:a.dataset.intent,link_section:a.closest(".sticky")?"sticky_bar":((a.closest("section")||{}).id||(a.closest(".hero")?"hero":"other"))};
  track(a.dataset.channel+"_click",p);
  if(a.dataset.intent==="appointment"||a.dataset.intent==="model"||a.dataset.intent==="promo") track("appointment_click",p);
  if(a.dataset.intent==="training") track("training_click",p);
});

/* ---------- согласие (Consent Mode v2): по умолчанию всё запрещено, GTM не загружается ---------- */
const CONSENT_KEYS = ["ad_storage","ad_user_data","ad_personalization","analytics_storage"];
const consentState = v=>Object.fromEntries(CONSENT_KEYS.map(k=>[k,v]));
gtag("consent","default",consentState("denied"));
const grantedState = {analytics_storage:"granted",ad_storage:"granted",ad_user_data:"granted",ad_personalization:"granted"};   // всё только после «Принять»
let gtmLoaded = false;
function loadGTM(){
  if(!LINKS.gtm || gtmLoaded) return; gtmLoaded=true;
  dataLayer.push({"gtm.start":Date.now(),event:"gtm.js"});
  const s=document.createElement("script"); s.async=true; s.src="https://www.googletagmanager.com/gtm.js?id="+LINKS.gtm; document.head.appendChild(s);
}
let adsLoaded = false;
function loadAds(){
  if(!LINKS.ads || adsLoaded) return; adsLoaded=true;
  const s=document.createElement("script"); s.async=true; s.src="https://www.googletagmanager.com/gtag/js?id="+LINKS.ads; document.head.appendChild(s);
  gtag("js",new Date()); gtag("config",LINKS.ads);
}
function clearGoogleCookies(){
  const host=location.hostname, root="."+host.split(".").slice(-2).join(".");
  document.cookie.split(";").forEach(c=>{
    const n=c.split("=")[0].trim();
    if(/^_(ga|gid|gat|gcl)/.test(n)) ["",`; domain=${host}`,`; domain=${root}`].forEach(d=>{ document.cookie=`${n}=; Max-Age=0; path=/${d}`; });
  });
}
const consentBox=$("#consent");
function setConsent(v){
  store.set("consent",v); consentBox.classList.remove("open");
  if(v==="yes"){ gtag("consent","update",grantedState); loadGTM(); loadAds(); }
  else {
    gtag("consent","update",consentState("denied"));
    if(gtmLoaded){ clearGoogleCookies(); location.reload(); }   // отзыв согласия: теги выгружаются полностью
  }
}
$("#consentYes").onclick=()=>setConsent("yes");
$("#consentNo").onclick=()=>setConsent("no");
$("#consentOpen").onclick=()=>consentBox.classList.add("open");
if(store.get("consent")==="yes"){ gtag("consent","update",grantedState); loadGTM(); loadAds(); }
else if(store.get("consent")!=="no") consentBox.classList.add("open");

/* ---------- рендер текста ---------- */
/* ---------- акция с таймером (CONFIG.promo) ---------- */
const PROMO_END = Date.parse((CONFIG.promo||{}).until||"") || 0;
const promoOn = ()=>Date.now() < PROMO_END;
let promoTimer = null;
function promoTick(){
  if(!promoOn()){ clearInterval(promoTimer); promoTimer=null; render(); return; }
  let s=Math.floor((PROMO_END-Date.now())/1000);
  const v={d:Math.floor(s/86400),h:Math.floor(s%86400/3600),m:Math.floor(s%3600/60),s:s%60};
  $$("#promoTimer [data-u]").forEach(el=>{ el.textContent=String(v[el.dataset.u]).padStart(2,"0"); });
}
function renderPromo(){
  const on=promoOn(), box=$("#promo"), bar=$("#promoBar");
  box.hidden=!on; bar.hidden=!on;
  if(!on) return;
  const t=T[lang], P=CONFIG.promo;
  const date=new Intl.DateTimeFormat({de:"de-DE",uk:"uk-UA",en:"en-GB"}[lang],{day:"numeric",month:"long",timeZone:"Europe/Berlin"}).format(PROMO_END);
  $("#promoText").textContent=t.promo.text.replace("{date}",date);
  $("#promoOld").textContent=P.oldPrice; $("#promoNew").textContent=P.price;
  bar.textContent=t.promo.bar.replace("{price}",P.price).replace("{date}",date);
  // цена в карточке «Удаление»: зачёркнутая старая + акционная
  const b=$$("#cards .card")[5]?.querySelector(".rows li b");
  if(b){ b.textContent=""; const old=document.createElement("s"); old.textContent=P.oldPrice; b.append(old," "+P.price); b.classList.add("deal"); }
  promoTick();
  if(!promoTimer) promoTimer=setInterval(promoTick,1000);
}

function render(){
  const t=T[lang];
  document.documentElement.lang=lang;
  $$("[data-i18n]").forEach(el=>{ el.textContent=el.dataset.i18n.split(".").reduce((o,k)=>o&&o[k],t)||""; });
  $("#facts").innerHTML=t.about.facts.map(f=>`<li><b>${esc(f[0])}</b>${esc(f[1])}</li>`).join("");
  const rows=r=>`<ul class="rows">${r.map(x=>`<li><span>${esc(x[0])}</span><b>${esc(x[1])}</b></li>`).join("")}</ul>`;
  $("#cards").innerHTML=t.services.items.map((s,i)=>`<article class="card"><div class="ph photo"><img src="img/svc-${SVC[i]}.webp?v=20261117d" width="${SVC_D[i][0]}" height="${SVC_D[i][1]}" alt="${esc(t.alt.svc[i]||"")}" loading="lazy" decoding="async"></div><div><h3>${esc(s[0])}</h3><p>${esc(s[1])}</p>${rows(s[2])}</div></article>`).join("");
  $("#formats").innerHTML=t.training.items.map(s=>`<div class="format"><h3>${esc(s[0])}</h3><p>${esc(s[1])}</p>${rows(s[2])}</div>`).join("");
  $("#prog").innerHTML=t.training.prog.map(x=>`<div class="format"><h3>${esc(x[0])}</h3><p>${esc(x[1])}</p></div>`).join("");
  $("#incl").innerHTML=t.training.incl.map(s=>`<li>${esc(s)}</li>`).join("");
  $("#kit").innerHTML=t.training.kit.items.map(s=>`<li>${esc(s)}</li>`).join("");
  const st=t.training.struct;
  $("#struct").innerHTML=`<div class="s-head"><p class="s-chips">${esc(st.head)}</p><p>${esc(st.lead)}</p></div><div class="days">`+st.days.map((d,i)=>`<article class="day"><p class="eyebrow">${esc(st.label)} · ${esc(st.day)} ${i+1}</p><h4>${esc(d[0])}</h4><p class="day-lead">${esc(d[1])}</p><dl>${d[2].map(b=>`<dt>${esc(b[0])}</dt><dd>${esc(b[1])}</dd>`).join("")}</dl><p class="day-res"><b>${esc(st.res)}</b>${esc(d[3])}</p></article>`).join("")+`</div>`;
  $("#models").innerHTML=rows(t.training.models);
  $("#adv").innerHTML=t.adv.items.map(s=>`<li>${esc(s)}</li>`).join("");
  $("#rev").innerHTML=t.rev.items.map(r=>`<blockquote><p>${esc(r[0])}</p><cite>${esc(r[1])}</cite></blockquote>`).join("");
  $$(".lang button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.lang===lang));
  $$(".ph[data-ph]").forEach(e=>{ e.dataset.label=t.ph[e.dataset.ph]+(e.dataset.n?" "+e.dataset.n:""); });
  $$("img[data-alt]").forEach(i=>{ i.alt=(t.alt[i.dataset.alt]||"")+(i.dataset.n?" "+i.dataset.n:""); });
  $$("#gallery button").forEach(b=>b.setAttribute("aria-label",b.firstElementChild.dataset.label));
  wireLinks();
  renderPromo();
}
function setLang(l){ if(!LANGS.includes(l)) return; lang=l; store.set("lang",l); render(); }
$$(".lang button").forEach(b=>{ b.onclick=()=>setLang(b.dataset.lang); });

/* ---------- галерея + увеличение ---------- */
$("#gallery").innerHTML=GAL.map(n=>`<button type="button"><div class="ph photo" data-ph="work" data-n="${n}"><img src="img/g${n}.webp?v=20261115" width="720" height="900" alt="" data-alt="work" data-n="${n}" loading="lazy" decoding="async"></div></button>`).join("");
const lb=$("#lightbox"), lbClose=$(".x",lb);
let lastFocus=null;
function closeLb(){ if(!lb.classList.contains("open")) return; lb.classList.remove("open"); document.body.classList.remove("lock"); if(lastFocus) lastFocus.focus(); }
$("#gallery").addEventListener("click",e=>{
  const btn=e.target.closest("button"); if(!btn) return;
  const ph=btn.firstElementChild;
  const im=ph.querySelector("img"); $("#lightboxImg").className="ph photo";
  $("#lightboxImg").innerHTML=`<img src="${esc(im.getAttribute("src"))}" alt="${esc(im.alt)}">`;
  lastFocus=btn; lb.classList.add("open"); document.body.classList.add("lock"); lbClose.focus();
});
lb.addEventListener("click",e=>{ if(e.target===lb||e.target===lbClose) closeLb(); });
document.addEventListener("keydown",e=>{
  if(!lb.classList.contains("open")) return;
  if(e.key==="Escape") closeLb();
  if(e.key==="Tab"){ e.preventDefault(); lbClose.focus(); }   // фокус не уходит под окно
});

$("#year").textContent=new Date().getFullYear();
const saved=store.get("lang"), br=(navigator.language||"de").slice(0,2).toLowerCase();
lang = LANGS.includes(saved) ? saved : (br==="uk"||br==="ru") ? "uk" : br==="en" ? "en" : "de";
render();
$("#structure").addEventListener("toggle",e=>{ if(e.target.open) track("structure_open"); });
