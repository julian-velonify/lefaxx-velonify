# Le Faxx Jeans – Startseite: Wireframe-Konzept

Stand: 12.10.2026 · Velonify-Pitch · Prototyp: `index.html` (dieser Ordner)

## Leitidee: „Die Linie“

Ein einziger Faden zieht durch die gesamte Startseite: eine goldene Doppel-Kontrastnaht, wie man sie von jeder Jeans kennt. Der Faden beginnt am Haupt-Button im Hero, läuft beim Scrollen mit und verbindet jede Station der Produktion. In der Knot-Washed-Sektion wird er selbst zum Knoten. Danach führt er durch das Nachhaltigkeits-Etikett, von Istanbul nach Sivas und endet im Anfrageformular.

Die Botschaft ist dieselbe wie bei Le Faxx: **alles in einer Hand, ohne Unterbrechung.**

- **Farben:** Tiefindigo `#0E1A33` und Anthrazit `#1F2126` als Bühnen, Leinenweiß `#F4F2EE` und Papier `#FAFAF8` als Arbeitsflächen, Nahtgold `#C99A5B` als Faden und einzige Akzentfarbe, Moos `#5F6B4A` / Salbei `#D9DCCB` für Nachhaltigkeit.
- **Schatten:** keine. Etiketten und Hangtags heben sich nur über 1px-Kanten ab.
- **Schriften:** Big Shoulders Display (kondensierte Industrie-Grotesk, Versalien) für Headlines, Inter für Fließtext.
- **Formsprache:** keine Rundungen, keine Verläufe als Deko, feine Linien, Hangtags und Etiketten als wiederkehrende Objekte.
- **Bewegung:** Lenis-Smooth-Scroll, ein zentraler Bewegungsmoment (der Faden), sonst ruhige Reveals.

---

## Sektion 1 · Navigation (fixiert)

| | |
|---|---|
| **Sieht** | Links die Wortmarke „LE FAXX“ (XX in Nahtgold), mittig 5 Links: Unternehmen, Produktion, Knot Washed®, Produkte, Kontakt. Rechts: Sprachschalter EN / DE / TR und der Button „Projekt anfragen“. |
| **Verhalten** | Transparent über dem Hero, wird beim Scrollen zu einem Indigo-Balken mit leichter Unschärfe. Blendet sich beim Runterscrollen aus und beim Hochscrollen wieder ein. Mobil: Burger öffnet ein Vollbild-Menü in Indigo, das sich wie ein Rollo von oben aufzieht. |
| **Sprache** | Der Wechsel passiert sofort ohne Neuladen und wird gespeichert. Die Startsprache folgt dem Browser, und `?lang=tr` ist als direkter Link möglich. |

## Sektion 2 · Hero (100 % Viewport)

| | |
|---|---|
| **Sieht** | Vollflächiger Video-Loop aus der Produktion (Näherin an Denim), indigo eingefärbt und unten abgedunkelt. |
| **Liest** | Headline in drei Zeilen: **VOM BALLEN / BIS ZUM KARTON. / IN EIGENER HAND.** (dritte Zeile in Gold). Subline: „Le Faxx fertigt Premium-Denim für internationale Modemarken. Eigene Fabrik in Sivas, eigene Wäscherei, eigene Waschtechnologie: Knot Washed®.“ |
| **Aktion** | Primär „Projekt anfragen“, sekundär „Knot Washed® ansehen“. |
| **Zahlenleiste** | Am unteren Rand, wie eine Spezifikationszeile: 2000 · 600+ · 150.000 · IST · SVS. |
| **Animation** | Die Headline-Zeilen fahren nacheinander aus einer Maske nach oben. Danach blenden Subline, Buttons und Zahlen ein. Das Video bewegt sich beim Scrollen langsamer als die Seite (Parallax). Der Faden beginnt am Haupt-Button; mobil läuft er hinter dem zweiten Button und entlang der Trennlinie der Zahlen nach unten. |
| **Performance** | Das Video lädt erst per JS, auf dem Smartphone in 720p. Bei Datensparmodus oder „Bewegung reduzieren“ bleibt nur das Standbild. |

## Sektion 3 · Statement „Unternehmen“

| | |
|---|---|
| **Sieht** | Helle Fläche, links läuft der Faden herein. |
| **Liest** | Großer Satz in Display-Schrift: „Seit 2000 nähen, waschen und veredeln wir Denim. Unter einem Dach, ohne Zwischenhändler.“ Darunter zwei kurze Absätze: Zuschnitt, Näherei und Finish in Sivas, eigene Wäscherei, ein Ansprechpartner von der Musterung bis zur Auslieferung. |
| **Animation** | Die Texte gleiten von unten ein. |
| **Warum so** | Die Zahlen stehen schon im Hero; hier folgt die Haltung dahinter, ohne Wiederholung. |

## Sektion 4 · „Eine Linie. Sechs Stationen.“ (Produktion)

| | |
|---|---|
| **Sieht** | Sechs Stationen im Wechsel links und rechts. Jede hat ein Bild, in der Mitte eine quadratische Stationsmarke auf dem Faden, daneben Nummer, Titel, Text und ein Herkunftsetikett. |
| **Stationen** | 01 Entwicklung & Muster (Istanbul · HQ) · 02 Zuschnitt (Sivas) · 03 Näherei (Sivas) · 04 Wäscherei: Knot Washed® · 05 Finish & Endkontrolle (Sivas) · 06 Verpackung & Versand (weltweit). |
| **Animation (Signatur)** | Der Faden wird beim Scrollen gezeichnet, und seine Spitze läuft auf etwa 60 % Bildschirmhöhe mit. Erreicht er eine Station, wird ihre Marke mit einem Kreuzstich „vernäht“. Bilder öffnen sich mit einem Clip-Reveal und bewegen sich leicht parallax. |
| **Mobil** | Der Faden läuft am linken Rand, die Stationen stehen untereinander. |

## Sektion 5 · Knot Washed® (Demo in 3 Phasen, WebGL)

Das Herzstück, als klickbare Demo statt Scroll-Animation. Die Sektion ist einen Bildschirm hoch, die Besucher steuern selbst.

| Phase (Button) | Was passiert | Text |
|---|---|---|
| **01 · Bimsstein** | Rund 20.000 Partikel (mobil 9.000): grau-poröse Steinbrocken taumeln in einem blauen Wasserring (der Trommel). | „Konventionell: Bimsstein.“ Der Stein zerfällt, das Wasser wird zu Schlamm. |
| **02 · Knoten** | Die Steine lösen sich auf, und die Partikel ordnen sich zu einem goldenen Knoten aus der Farbe des Fadens. | „Unsere Antwort: Knoten.“ Recycelter Kunststoff, entwickelt bei Le Faxx. |
| **03 · Die Hälfte** | Genau jede zweite Wassereinheit fließt nach unten ab und verschwindet. **Die Partikeldichte ist der Beweis.** | „Die Hälfte.“ 50 % weniger Wasser, Energie, CO₂. |

- **Steuerung:** drei Buttons (01 · 02 · 03), jeder Wechsel animiert in rund 1,8 Sekunden. Eine Goldlinie im aktiven Button zeigt den Fortschritt. Pfeiltasten wechseln die Phase.
- **Messbalken:** Wasser, Energie und CO₂ fallen live von 100 % auf 50 % und wechseln dabei von Blau auf Nahtgold.
- **Weiter:** Der Link „Alles über Knot Washed®“ führt zur Unterseite.
- **Technik:** three.js-Partikelschwarm nach dem Prinzip von particles.casberry.in. Es wird nur gerendert, solange die Sektion sichtbar ist. Der Code liegt in `assets/knot.js` und läuft auf Start- und Unterseite.

## Sektion 6 · Nachhaltigkeit als Etikett

| | |
|---|---|
| **Sieht** | Salbeigrüne Fläche. Rechts hängt ein weißes Pflegeetikett am Faden, der durch die Öse läuft. Es schwingt beim Scrollen nach und pendelt aus. |
| **Liest** | „Nachhaltigkeit, die auf dem Etikett steht.“ Knot Washed® als selbst entwickeltes Verfahren, nicht als gekauftes Zertifikat. Drei Zeilen zur Grundlage: Material (recycelte Knoten statt Bimsstein), Vergleich (alle Werte relativ zur Bimssteinwäsche), Einsatz (eigene Wäscherei). Die −50 %-Werte stehen auf dem Etikett, mit Pflegesymbolen und „Made in Türkiye · Sivas“. |
| **Aktion** | „Zur Nachhaltigkeit“ (führt später zur Unterseite Innovation & Sustainability). |

## Sektion 7 · „Was wir fertigen.“ (Produkte)

| | |
|---|---|
| **Sieht** | Festes Hangtag-Raster mit allen Kategorien auf einen Blick (Desktop 5 Spalten, Tablet 3, Smartphone 2). Kein Karussell. Jede Karte trägt einen Hangtag an Gold-Schnur mit festem Raster: Stoff, Waschung, Menge („auf Anfrage“). |
| **Kategorien** | Jeans · Jacken · Overshirts · Non-Denim · Private Label. |
| **Hinweis** | Keine Preise. Ausdrücklich Inspiration für Einkäufer, und jede Karte führt zur Anfrage. |
| **Animation** | Beim Hover zoomt das Bild sanft, und der Hangtag dreht sich wie angestoßen. |

## Sektion 8 · „Zwei Standorte. Ein Faden.“

| | |
|---|---|
| **Sieht** | Anthrazit-Fläche, zwei große Bilder (Istanbul bei Nacht, Fabrikgebäude für Sivas). Darunter goldene Stecknadeln mit Koordinaten. |
| **Animation** | Der Faden läuft am linken Rand herein, verschwindet hinter den Fotos (wie eingewebt) und verbindet die Stecknadel Istanbul mit Sivas. |
| **Später** | Auf der Kontaktseite wird daraus die interaktive Karte. |

## Sektion 9 · Anfrage

| | |
|---|---|
| **Sieht** | Indigo-Fläche mit hunderten feinen Kettfäden als Hintergrund. Fährt die Maus darüber, teilen sich die Fäden (Prinzip „fibre-arc“ aus originkit.dev). |
| **Liest** | „IHRE KOLLEKTION. UNSERE LINIE.“ Antwort kommt von einem Ansprechpartner aus der Entwicklung, nicht von einem Callcenter. E-Mail und Sprachen. |
| **Formular** | Name, Marke, E-Mail, Stückzahl pro Saison (Auswahl), Projekt. Fehlermeldungen in der gewählten Sprache. Nach dem Absenden: „Danke. Der Faden ist gelegt.“ Der Faden endet am Formular. |

## Sektion 10 · Footer

Riesige Wortmarke „LE FAXX“, Adressen Istanbul und Sivas, Seitenlinks, Rechtliches. Unten: © Le Faxx Jeans · **Made by [Velonify](https://velonify.de)**.

---

## Unterseite · Knot Washed® (`/knot-washed/`)

1. **Hero:** Waschtrommel-Bild in Indigo, knot-washed-Logo, Headline „Gleicher Look. Halber Verbrauch.“, Buttons „Muster anfragen“ und „Zur Demo“. Darunter −50 % Wasser · Energie · CO₂ mit Vergleichsbasis.
2. **Das Problem:** Bimsstein zerfällt, Schlamm, Spülen, Nachfüllen, Entsorgen.
3. **Demo:** dieselbe 3-Phasen-Demo wie auf der Startseite („Sehen Sie den Unterschied.“).
4. **So funktioniert's:** vier Schritte (Knoten statt Stein, Abrieb für den Look, kein Steinschlamm, halber Verbrauch), als vereinfacht gekennzeichnet.
5. **Für Ihre Kollektion:** Pflegeetikett plus Muster, Etikett-Nutzung, Kapazität.
6. **FAQ:** vier Fragen (Look, Vergleichsbasis, Markenkommunikation, seit wann).
7. **Abschluss:** „Sehen Sie es am Muster.“ mit Anfrage-Button.

„Seit 2020“ stammt aus einem Bericht der TextilWirtschaft (Umstellung Mitte 2020) und sollte mit Le Faxx bestätigt werden.

## Buttons & Mikro-Interaktionen

- **Wasser-Button:** Beim Hover steigt eine Füllung mit animierter Wellenkante von unten in den Button.
- **Magnetisch:** Buttons ziehen leicht zum Mauszeiger, nur bei Maus und nicht auf Touch.
- **Reduzierte Bewegung:** Kein Smooth-Scroll, kein Video, der Faden ist komplett gezeichnet, und der Knoten steht im Endzustand. Der Slider funktioniert trotzdem.

## Technische Empfehlung für die Umsetzung

- **CMS:** Webflow (Localization für DE/EN/TR nativ, für den Kunden leicht pflegbar). Die WebGL- und Faden-Module kommen als Custom Code dazu. Alternative: Astro + Headless CMS (Storyblok mit Feld-Übersetzungen).
- **Seiten:** Home · Unternehmen · Produktion & Kapazitäten · Innovation & Nachhaltigkeit (Knot Washed®) · Produkte · Kontakt mit interaktiver Karte.
- **Performance:** Videos als komprimiertes MP4/WebM mit Poster, Bilder in AVIF/WebP mit `srcset`, Lazy Loading, WebGL nur im sichtbaren Bereich.
- **Schriften:** selbst gehostet (`fonts/`), keine Verbindung zu Google Fonts (DSGVO).

## Vor der Präsentation zu klären / zu ersetzen

1. **Logo:** Die echten Logos (le Faxx jeans, knot washed) sind aus einem Screenshot der Website freigestellt (`assets/`). Sie sind nur 241 px breit aufgelöst; für die finale Seite bitte die Original-Dateien (SVG) von Le Faxx anfordern.
2. **Bilder & Video:** Alle Bilder sind Stock-Platzhalter von Unsplash und Pexels (siehe unten). Für den Pitch ideal wären echte Aufnahmen aus Sivas: Näherei, Wäscherei, die Knoten selbst.
3. **Fakten bestätigen:** Welche Schritte genau in Sivas und welche in Istanbul passieren (v. a. Wäscherei), außerdem Kategorien, Non-Denim-Angebot, E-Mail-Adresse und Adressen.
4. **Knot Washed®:** Die −50 %-Werte stammen aus dem Briefing. Vor der Live-Schaltung sollten sie mit einer Quelle oder Messung belegt werden, und der Markenstatus (®) sollte geprüft sein.

## Bildquellen (Platzhalter)

- Hero-Video: Pexels #36066871 „Skilled tailor working on denim fabric“
- Unsplash: photo-1631112230741 (Denim-Köper, Dylann Hendricks) · photo-1706802196230 (Denim-Lagen, Michaela St) · photo-1497997092403 (Nähfuß, Alexander Andrews) · photo-1761079976271 (Waschtrommel, Vlad Deep) · photo-1515459961680 (gefaltete Jeans, Leighann Blackwood) · photo-1672552226380 (Kartons im Lager, Arum Visuals) · photo-1529391409740 (Jeans an Leine, Ricardo Gomez Angel) · photo-1555583743 (Denimjacke, Adrian Dascal) · photo-1543076447 (Jacke an Tür, kemal alkan) · photo-1516257984 (Denimjacke, Isaac Ramirez) · photo-1713880453396 (Jeansstapel, TuanAnh Blue) · photo-1696711551721 (Istanbul, Joshua Kettle) · photo-1713894055910 (Fabrikgebäude, Christer Lässman)
