document.documentElement.classList.add('js');
const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
const FINE = matchMedia('(pointer: fine)').matches;

/* ================= i18n ================= */
const I18N = {
de:{cS1:"Abb. 2 — Köperbindung, Denim (Platzhalter)",cS2:"Abb. 3 — Denimlagen zum Zuschnitt (Platzhalter)",cS3:"Abb. 4 — Industrienähmaschine (Platzhalter)",cS4:"Abb. 5 — Waschtrommel (Platzhalter)",cS5:"Abb. 6 — Gewaschene Jeans (Platzhalter)",cS6:"Abb. 7 — Kartons im Lager (Platzhalter)",kCap:"Abb. 8 — Stein, Knoten, Trommel (Platzhalter)",cP1:"Abb. 9 — Jeans (Platzhalter)",cP2:"Abb. 10 — Jacke (Platzhalter)",cP3:"Abb. 11 — Overshirt (Platzhalter)",cP4:"Abb. 12 — Non-Denim (Platzhalter)",cP5:"Abb. 13 — Private Label (Platzhalter)",cL1:"Abb. 14 — Istanbul, Bosporus (Platzhalter)",cL2:"Abb. 15 — Fabrikgebäude, nicht das Le-Faxx-Werk (Platzhalter)",facts:"Seit 2000 · 600+ Mitarbeitende · 150.000 Teile pro Monat · Istanbul &amp; Sivas",cap0:"Abb. 1 — Konfektion (Platzhaltervideo)",kImg0:"Graue Steinbrocken",kImg1:"Blaue verknotete Seile",kImg2:"Blick in eine Waschtrommel",kMore:"Alles über Knot Washed®",ph0:"Bimsstein",ph1:"Knoten",ph2:"Die Hälfte",phAria:"Phasen der Knot-Washed-Demo",cb1:"Material",cb2:"Vergleich",cb3:"Einsatz",skip:"Zum Inhalt springen",navAria:"Hauptnavigation",nav1:"Unternehmen",nav2:"Produktion",nav3:"Knot Washed®",nav4:"Produkte",nav5:"Kontakt",cta:"Projekt anfragen",
h1a:"Vom Ballen",h1b:"bis zum Karton.",h1c:"In eigener Hand.",
heroSub:"Le Faxx fertigt Premium-Denim für internationale Modemarken. Eigene Fabrik in Sivas, eigene Wäscherei, eigene Waschtechnologie: Knot Washed®.",
cta2:"Knot Washed® ansehen",spec1:"am Markt seit",spec2:"Mitarbeitende",spec3:"Teile pro Monat",spec4:"Istanbul HQ · Fabrik Sivas",
say:'Seit 2000 nähen, waschen und veredeln wir Denim. <span class="soft">Unter einem Dach, ohne Zwischenhändler.</span>',
say1:"Zuschnitt, Näherei und Finish in unserer Fabrik in Sivas, gewaschen in unserer eigenen Wäscherei. Deshalb verantworten wir Qualität, Liefertermine und Umweltwerte selbst.",
say2:"Für Marken heißt das: ein Ansprechpartner von der ersten Musterung bis zur Auslieferung, und eine Kapazität, die mit Ihren Kollektionen mitwächst.",
lineH:"Eine Linie. Sechs Stationen.",lineP:"Folgen Sie dem Faden: So entsteht ein Le-Faxx-Teil, ohne dass es unser Haus verlässt.",
s1h:"Entwicklung &amp; Muster",s1p:"Schnitt, Passform und Waschung entwickeln wir gemeinsam mit Ihrem Team. Sie sehen und prüfen Muster, bevor die erste Serie läuft.",
s2h:"Zuschnitt",s2p:"Stoffe werden geprüft, gelegt und zugeschnitten. In Serie und ohne Fremdfertiger.",
s3h:"Näherei",s3p:"Kontrastnähte, Riegel, Nieten: Konfektion im eigenen Haus, mit der Kapazität für große Serien von bis zu 150.000 Teilen im Monat.",
s4h:"Wäscherei: Knot Washed®",s4p:"Knoten aus recyceltem Kunststoff ersetzen den Bimsstein. Der Look bleibt, der Verbrauch halbiert sich.",
s5h:"Finish &amp; Endkontrolle",s5p:"Bügeln, Etikettieren, Prüfen. Jedes Teil geht durch die Endkontrolle, bevor es verpackt wird.",
s6h:"Verpackung &amp; Versand",s6p:"Kartoniert nach Ihren Vorgaben und auf dem Weg zu Ihren Lagern, weltweit.",
o1:"Istanbul · HQ",o2:"Sivas · Fabrik",o4:"Eigene Wäscherei",o6:"Weltweit",
alt1:"Nahaufnahme von blauem Denim mit Köperbindung",alt2:"Lagen von Denimstoff, gestapelt zum Zuschnitt",alt3:"Nähfuß einer Industrienähmaschine auf dunklem Stoff",alt4:"Blick in die Edelstahltrommel einer Waschmaschine",alt5:"Gefaltete Jeans in verschiedenen Waschungen",alt6:"Kartons auf Palettenregalen im Lager",
k0h:"Konventionell: Bimsstein.",k0p:"Für den Used-Look werden Jeans seit Jahrzehnten mit Bimsstein gewaschen. Der Stein zerfällt in der Trommel, das Wasser wird zu Schlamm und muss ständig erneuert werden.",
k1h:"Unsere Antwort: Knoten.",k1p:"Knot Washed® ersetzt den Stein durch Knoten aus recyceltem Kunststoff. Entwickelt bei Le Faxx, im Einsatz in unserer Wäscherei.",
k2h:"Die Hälfte.",k2p:"Gleicher Look, halber Verbrauch: 50 % weniger Wasser, 50 % weniger Energie, 50 % weniger CO₂.",
m1:"Wasser",m2:"Energie",cmpA:"Bimsstein",cmpAria:"Vergleich zwischen Bimssteinwäsche und Knot Washed",kNote:"Werte relativ zur Bimssteinwäsche",
careH:"Nachhaltigkeit, die auf dem Etikett steht.",careP:"Knot Washed® ist kein Zertifikat, das wir eingekauft haben, sondern ein Verfahren, das wir selbst entwickelt haben. Ihre Kollektion trägt den Unterschied messbar mit sich.",
cp1:"Knoten aus recyceltem Kunststoff statt Bimsstein",cp2:"Alle Werte relativ zur konventionellen Bimssteinwäsche",cp3:"Entwickelt und eingesetzt in der eigenen Wäscherei",careCta:"Zur Nachhaltigkeit",lblSub:"Recycelte Knoten statt Bimsstein",
prH:"Was wir fertigen.",prP:"Denim und Non-Denim für Damen, Herren und Kids. Inspiration für Ihre Kollektion: Preise und Mindestmengen besprechen wir persönlich.",prev:"Zurück",next:"Weiter",railAria:"Produktkategorien",
p1:"Jeans",p2:"Jacken",p3:"Overshirts",p4:"Non-Denim",p1s:"5-Pocket, Fits für alle Linien",p2s:"Trucker, Oversize, gefüttert",p3s:"Hemden &amp; Shackets",p4s:"Chinos, Cargo, Workwear",p5s:"Ihre Marke, unsere Linie",
tF:"Stoff",tW:"Waschung",tM:"Menge",tReq:"auf Anfrage",tAny:"nach Wahl",
pa1:"Fünf Jeans auf einer Leine vor gelber Wand",pa2:"Mann in gewaschener Denimjacke",pa3:"Hellblaue Denimjacke an einer weißen Tür",pa4:"Mann in Denimjacke vor Stadtkulisse",pa5:"Stapel gefalteter Jeans",
plH:"Zwei Standorte. Ein Faden.",plP:"In Istanbul entwickeln und verkaufen wir, in Sivas produzieren wir. Dazwischen liegt kein Zwischenhändler.",
pl1:"Hauptsitz: Vertrieb, Produktentwicklung, Musterung, Kundenbetreuung.",pl2:"Fabrik: Zuschnitt, Näherei, Finish. Hier arbeitet der Großteil unserer 600+ Mitarbeitenden.",pl1a:"Istanbul bei Nacht mit Bosporus-Brücke",pl2a:"Fabrikgebäude mit großen Fensterfronten",
ctA:"Ihre Kollektion.",ctB:"Unsere Linie.",ctP:"Erzählen Sie uns von Ihrer nächsten Saison. Wir melden uns mit einem Ansprechpartner aus der Entwicklung, nicht mit einem Callcenter.",ctLang:"Wir sprechen Türkisch, Englisch und Deutsch.",
fName:"Name",fBrand:"Marke / Unternehmen",fMail:"E-Mail",fVol:"Stückzahl pro Saison",fVol0:"Bitte wählen",fMsg:"Ihr Projekt",fMsgPh:"Produkte, Waschungen, Zeitplan …",fNote:"Prototyp: Es wird nichts versendet.",fSend:"Anfrage senden",
eReq:"Bitte ausfüllen.",eMail:"Bitte eine gültige E-Mail-Adresse eingeben, z. B. name@marke.com.",
okH:"Danke. Der Faden ist gelegt.",okP:"Ihre Anfrage ist angekommen. In der Live-Version meldet sich ein Ansprechpartner aus unserer Entwicklung bei Ihnen.",
adr1:"Adresse folgt<br>İstanbul, Türkiye",adr2:"Adresse folgt<br>Sivas, Türkiye",fFac:"Sivas · Fabrik",fNav:"Seiten",fLegal:"Rechtliches",imp:"Impressum",priv:"Datenschutz",tm:"ist eine eingetragene Marke von Le Faxx.",draft:"Pitch-Entwurf · Platzhalterbilder",title:"Le Faxx Jeans · Denim in eigener Hand"},

en:{cS1:"Fig. 2 — Twill weave, denim (placeholder)",cS2:"Fig. 3 — Denim plies ready for cutting (placeholder)",cS3:"Fig. 4 — Industrial sewing machine (placeholder)",cS4:"Fig. 5 — Washing drum (placeholder)",cS5:"Fig. 6 — Washed jeans (placeholder)",cS6:"Fig. 7 — Cartons in the warehouse (placeholder)",kCap:"Fig. 8 — Stone, knots, drum (placeholder)",cP1:"Fig. 9 — Jeans (placeholder)",cP2:"Fig. 10 — Jacket (placeholder)",cP3:"Fig. 11 — Overshirt (placeholder)",cP4:"Fig. 12 — Non-denim (placeholder)",cP5:"Fig. 13 — Private label (placeholder)",cL1:"Fig. 14 — Istanbul, Bosphorus (placeholder)",cL2:"Fig. 15 — Factory building, not the Le Faxx plant (placeholder)",facts:"Since 2000 · 600+ employees · 150,000 pieces per month · Istanbul &amp; Sivas",cap0:"Fig. 1 — Garment making (placeholder video)",kImg0:"Grey stone fragments",kImg1:"Blue knotted ropes",kImg2:"Inside a washing drum",kMore:"All about Knot Washed®",ph0:"Pumice",ph1:"Knots",ph2:"Half",phAria:"Phases of the Knot Washed demo",cb1:"Material",cb2:"Baseline",cb3:"In use",skip:"Skip to content",navAria:"Main navigation",nav1:"Company",nav2:"Manufacturing",nav3:"Knot Washed®",nav4:"Products",nav5:"Contact",cta:"Start a project",
h1a:"From the bolt",h1b:"to the carton.",h1c:"All in-house.",
heroSub:"Le Faxx manufactures premium denim for international fashion brands. Our own factory in Sivas, our own laundry, our own washing technology: Knot Washed®.",
cta2:"See Knot Washed®",spec1:"in business since",spec2:"employees",spec3:"pieces per month",spec4:"Istanbul HQ · Sivas factory",
say:'Since 2000 we have been sewing, washing and finishing denim. <span class="soft">Under one roof, with no middlemen.</span>',
say1:"Cutting, sewing and finishing in our factory in Sivas, washing in our own laundry. That is why we can take responsibility for quality, delivery dates and environmental performance ourselves.",
say2:"For brands, that means one contact from the first sample to final delivery, and capacity that grows with your collections.",
lineH:"One line. Six stations.",lineP:"Follow the thread: this is how a Le Faxx piece is made without ever leaving our hands.",
s1h:"Development &amp; sampling",s1p:"We develop cut, fit and wash together with your team. You see and approve samples before the first run starts.",
s2h:"Cutting",s2p:"Fabrics are inspected, spread and cut. At scale, with no subcontractors.",
s3h:"Sewing",s3p:"Contrast stitching, bartacks, rivets: garment making in-house, with capacity for large runs of up to 150,000 pieces a month.",
s4h:"Laundry: Knot Washed®",s4p:"Knots made from recycled plastic replace pumice stone. The look stays, consumption is cut in half.",
s5h:"Finishing &amp; final inspection",s5p:"Pressing, labelling, checking. Every piece passes final inspection before it is packed.",
s6h:"Packing &amp; shipping",s6p:"Packed to your specifications and on its way to your warehouses, worldwide.",
o1:"Istanbul · HQ",o2:"Sivas · Factory",o4:"In-house laundry",o6:"Worldwide",
alt1:"Close-up of blue twill denim",alt2:"Plies of denim fabric stacked for cutting",alt3:"Industrial sewing machine foot on dark fabric",alt4:"Inside the stainless steel drum of a washing machine",alt5:"Folded jeans in different washes",alt6:"Cartons on pallet racks in a warehouse",
k0h:"Conventional: pumice stone.",k0p:"For decades, the worn-in look has been achieved by washing jeans with pumice. The stone breaks down in the drum, the water turns to sludge and has to be replaced constantly.",
k1h:"Our answer: knots.",k1p:"Knot Washed® replaces the stone with knots made from recycled plastic. Developed by Le Faxx and in use in our own laundry.",
k2h:"Half.",k2p:"Same look, half the consumption: 50% less water, 50% less energy, 50% less CO₂.",
m1:"Water",m2:"Energy",cmpA:"Pumice",cmpAria:"Comparison between pumice washing and Knot Washed",kNote:"Values relative to pumice washing",
careH:"Sustainability you can put on the label.",careP:"Knot Washed® is not a certificate we bought. It is a process we developed ourselves, and your collection carries the difference with it, measurably.",
cp1:"Knots made from recycled plastic instead of pumice",cp2:"All figures relative to conventional pumice washing",cp3:"Developed and used in our own laundry",careCta:"Sustainability",lblSub:"Recycled knots instead of pumice",
prH:"What we make.",prP:"Denim and non-denim for women, men and kids. Inspiration for your collection: we discuss pricing and minimums in person.",prev:"Previous",next:"Next",railAria:"Product categories",
p1:"Jeans",p2:"Jackets",p3:"Overshirts",p4:"Non-denim",p1s:"5-pocket, fits for every line",p2s:"Trucker, oversized, lined",p3s:"Shirts &amp; shackets",p4s:"Chinos, cargo, workwear",p5s:"Your brand, our line",
tF:"Fabric",tW:"Wash",tM:"Volume",tReq:"on request",tAny:"your choice",
pa1:"Five pairs of jeans on a line against a yellow wall",pa2:"Man in a washed denim jacket",pa3:"Light blue denim jacket on a white door",pa4:"Man in a denim jacket in front of a city backdrop",pa5:"Stack of folded jeans",
plH:"Two sites. One thread.",plP:"We develop and sell in Istanbul and manufacture in Sivas. Nothing and no one sits in between.",
pl1:"Headquarters: sales, product development, sampling, account management.",pl2:"Factory: cutting, sewing, finishing. Most of our 600+ employees work here.",pl1a:"Istanbul at night with the Bosphorus bridge",pl2a:"Factory building with large window fronts",
ctA:"Your collection.",ctB:"Our line.",ctP:"Tell us about your next season. You'll hear back from someone in product development, not a call centre.",ctLang:"We speak Turkish, English and German.",
fName:"Name",fBrand:"Brand / company",fMail:"Email",fVol:"Pieces per season",fVol0:"Please select",fMsg:"Your project",fMsgPh:"Products, washes, timeline …",fNote:"Prototype: nothing is sent.",fSend:"Send inquiry",
eReq:"Please fill this in.",eMail:"Please enter a valid email address, e.g. name@brand.com.",
okH:"Thank you. The thread is laid.",okP:"Your inquiry has arrived. In the live version, someone from our development team will get back to you.",
adr1:"Address to follow<br>İstanbul, Türkiye",adr2:"Address to follow<br>Sivas, Türkiye",fFac:"Sivas · Factory",fNav:"Pages",fLegal:"Legal",imp:"Imprint",priv:"Privacy",tm:"is a registered trademark of Le Faxx.",draft:"Pitch draft · placeholder images",title:"Le Faxx Jeans · Denim, all in-house"},

tr:{cS1:"Şek. 2 — Dimi örgü, denim (temsili)",cS2:"Şek. 3 — Kesime hazır denim katları (temsili)",cS3:"Şek. 4 — Endüstriyel dikiş makinesi (temsili)",cS4:"Şek. 5 — Yıkama tamburu (temsili)",cS5:"Şek. 6 — Yıkanmış kotlar (temsili)",cS6:"Şek. 7 — Depoda koliler (temsili)",kCap:"Şek. 8 — Taş, düğüm, tambur (temsili)",cP1:"Şek. 9 — Kot pantolon (temsili)",cP2:"Şek. 10 — Ceket (temsili)",cP3:"Şek. 11 — Gömlek ceket (temsili)",cP4:"Şek. 12 — Denim dışı (temsili)",cP5:"Şek. 13 — Private label (temsili)",cL1:"Şek. 14 — İstanbul, Boğaz (temsili)",cL2:"Şek. 15 — Fabrika binası, Le Faxx tesisi değil (temsili)",facts:"2000'den beri · 600+ çalışan · Ayda 150.000 parça · İstanbul &amp; Sivas",cap0:"Şek. 1 — Konfeksiyon (temsili video)",kImg0:"Gri taş parçaları",kImg1:"Mavi düğümlü halatlar",kImg2:"Bir yıkama tamburunun içi",kMore:"Knot Washed® hakkında her şey",ph0:"Süngertaşı",ph1:"Düğümler",ph2:"Yarısı",phAria:"Knot Washed demosunun aşamaları",cb1:"Malzeme",cb2:"Kıyas",cb3:"Kullanım",skip:"İçeriğe geç",navAria:"Ana menü",nav1:"Kurumsal",nav2:"Üretim",nav3:"Knot Washed®",nav4:"Ürünler",nav5:"İletişim",cta:"Proje başlatın",
h1a:"Kumaş topundan",h1b:"koliye kadar.",h1c:"Hepsi bizde.",
heroSub:"Le Faxx, uluslararası moda markaları için premium denim üretir. Sivas'ta kendi fabrikamız, kendi yıkamahanemiz ve kendi yıkama teknolojimiz: Knot Washed®.",
cta2:"Knot Washed®'i keşfedin",spec1:"yılından beri",spec2:"çalışan",spec3:"aylık parça",spec4:"İstanbul merkez · Sivas fabrika",
say:'2000 yılından beri denim dikiyor, yıkıyor ve bitiriyoruz. <span class="soft">Tek çatı altında, aracısız.</span>',
say1:"Kesim, dikim ve bitim Sivas'taki fabrikamızda, yıkama kendi yıkamahanemizde. Bu yüzden kaliteyi, teslim tarihlerini ve çevresel değerleri kendimiz üstleniyoruz.",
say2:"Markalar için bunun anlamı: ilk numuneden teslimata kadar tek bir muhatap ve koleksiyonlarınızla birlikte büyüyen bir kapasite.",
lineH:"Tek hat. Altı istasyon.",lineP:"İpliği takip edin: Bir Le Faxx ürünü, evimizden hiç çıkmadan böyle doğar.",
s1h:"Geliştirme &amp; numune",s1p:"Kalıp, kalıp oturuşu ve yıkamayı ekibinizle birlikte geliştiriyoruz. İlk seri başlamadan numuneleri görür ve onaylarsınız.",
s2h:"Kesim",s2p:"Kumaşlar kontrol edilir, serilir ve kesilir. Seri halinde, fason üretici olmadan.",
s3h:"Dikim",s3p:"Kontrast dikişler, punterizler, perçinler: ayda 150.000 parçaya kadar büyük seriler için kapasiteyle, konfeksiyon kendi bünyemizde.",
s4h:"Yıkama: Knot Washed®",s4p:"Geri dönüştürülmüş plastikten düğümler süngertaşının yerini alır. Görünüm aynı kalır, tüketim yarıya iner.",
s5h:"Bitim &amp; son kontrol",s5p:"Ütü, etiketleme, kontrol. Her parça paketlenmeden önce son kontrolden geçer.",
s6h:"Paketleme &amp; sevkiyat",s6p:"Talimatlarınıza göre kolilenir ve dünyanın her yerindeki depolarınıza yola çıkar.",
o1:"İstanbul · Merkez",o2:"Sivas · Fabrika",o4:"Kendi yıkamahanemiz",o6:"Dünya geneli",
alt1:"Dimi örgülü mavi denimin yakın çekimi",alt2:"Kesim için katlanmış denim kumaş katları",alt3:"Koyu kumaş üzerinde endüstriyel dikiş makinesi ayağı",alt4:"Bir yıkama makinesinin paslanmaz çelik tamburunun içi",alt5:"Farklı yıkamalarda katlanmış kot pantolonlar",alt6:"Depoda palet raflarında koliler",
k0h:"Geleneksel: süngertaşı.",k0p:"Eskitilmiş görünüm için kotlar onlarca yıldır süngertaşıyla yıkanır. Taş tamburda parçalanır, su çamura döner ve sürekli yenilenmesi gerekir.",
k1h:"Bizim cevabımız: düğümler.",k1p:"Knot Washed®, taşın yerine geri dönüştürülmüş plastikten düğümler kullanır. Le Faxx tarafından geliştirildi, yıkamahanemizde kullanılıyor.",
k2h:"Yarısı.",k2p:"Aynı görünüm, yarı tüketim: %50 daha az su, %50 daha az enerji, %50 daha az CO₂.",
m1:"Su",m2:"Enerji",cmpA:"Süngertaşı",cmpAria:"Süngertaşı yıkama ile Knot Washed karşılaştırması",kNote:"Değerler süngertaşı yıkamaya göre",
careH:"Etikete yazılabilen sürdürülebilirlik.",careP:"Knot Washed® satın alınmış bir sertifika değil, kendi geliştirdiğimiz bir yöntem. Koleksiyonunuz bu farkı ölçülebilir biçimde taşır.",
cp1:"Süngertaşı yerine geri dönüştürülmüş plastik düğümler",cp2:"Tüm değerler geleneksel süngertaşı yıkamaya göredir",cp3:"Kendi yıkamahanemizde geliştirildi ve kullanılıyor",careCta:"Sürdürülebilirlik",lblSub:"Süngertaşı yerine geri dönüştürülmüş düğümler",
prH:"Ne üretiyoruz.",prP:"Kadın, erkek ve çocuk için denim ve denim dışı ürünler. Koleksiyonunuz için ilham: fiyatları ve minimum adetleri birebir görüşüyoruz.",prev:"Geri",next:"İleri",railAria:"Ürün kategorileri",
p1:"Kot pantolon",p2:"Ceketler",p3:"Gömlekler",p4:"Denim dışı",p1s:"5 cep, her hat için kalıplar",p2s:"Trucker, oversize, astarlı",p3s:"Gömlek &amp; gömlek ceket",p4s:"Chino, kargo, iş giysisi",p5s:"Sizin markanız, bizim hattımız",
tF:"Kumaş",tW:"Yıkama",tM:"Adet",tReq:"talebe göre",tAny:"tercihe göre",
pa1:"Sarı duvar önünde ipte asılı beş kot pantolon",pa2:"Yıkanmış denim ceketli adam",pa3:"Beyaz kapıda asılı açık mavi denim ceket",pa4:"Şehir manzarası önünde denim ceketli adam",pa5:"Katlanmış kot pantolon yığını",
plH:"İki lokasyon. Tek iplik.",plP:"İstanbul'da geliştiriyor ve satıyoruz, Sivas'ta üretiyoruz. Arada aracı yok.",
pl1:"Genel merkez: satış, ürün geliştirme, numune, müşteri ilişkileri.",pl2:"Fabrika: kesim, dikim, bitim. 600'ü aşkın çalışanımızın büyük kısmı burada.",pl1a:"Gece İstanbul ve Boğaz köprüsü",pl2a:"Geniş pencereli fabrika binası",
ctA:"Sizin koleksiyonunuz.",ctB:"Bizim hattımız.",ctP:"Bize bir sonraki sezonunuzu anlatın. Size bir çağrı merkezi değil, ürün geliştirme ekibimizden bir muhatap dönüş yapar.",ctLang:"Türkçe, İngilizce ve Almanca konuşuyoruz.",
fName:"Ad soyad",fBrand:"Marka / şirket",fMail:"E-posta",fVol:"Sezon başına adet",fVol0:"Lütfen seçin",fMsg:"Projeniz",fMsgPh:"Ürünler, yıkamalar, zaman planı …",fNote:"Prototip: hiçbir şey gönderilmez.",fSend:"Talebi gönder",
eReq:"Lütfen doldurun.",eMail:"Lütfen geçerli bir e-posta adresi girin, ör. ad@marka.com.",
okH:"Teşekkürler. İplik atıldı.",okP:"Talebiniz ulaştı. Canlı sürümde geliştirme ekibimizden biri size dönüş yapacak.",
adr1:"Adres eklenecek<br>İstanbul, Türkiye",adr2:"Adres eklenecek<br>Sivas, Türkiye",fFac:"Sivas · Fabrika",fNav:"Sayfalar",fLegal:"Yasal",imp:"Künye",priv:"Gizlilik",tm:"Le Faxx'in tescilli markasıdır.",draft:"Pitch taslağı · temsili görseller",title:"Le Faxx Jeans · Hepsi bizde"}
};
if(window.PAGE_I18N){for(const l in PAGE_I18N){Object.assign(I18N[l],PAGE_I18N[l]);}}
function kernW(){
  document.querySelectorAll('.h2,.display,.knot-title,.h3').forEach(h=>{
    const w=document.createTreeWalker(h,NodeFilter.SHOW_TEXT); const nodes=[]; while(w.nextNode()) nodes.push(w.currentNode);
    nodes.forEach(t=>{ if(!/W(?=[aeo])/.test(t.data)||t.parentNode.classList.contains('kern-w')) return;
      const f=document.createDocumentFragment(); t.data.split(/(W(?=[aeo]))/).forEach(part=>{ if(part==='W'){const sp=document.createElement('span'); sp.className='kern-w'; sp.textContent='W'; f.appendChild(sp);} else if(part) f.appendChild(document.createTextNode(part)); });
      t.parentNode.replaceChild(f,t); });
  });
}
let LANG='de';
function fmt(n){return n.toLocaleString(LANG==='en'?'en-US':(LANG==='tr'?'tr-TR':'de-DE'))}
function setLang(l, initial){
  if(!I18N[l]) l='de'; LANG=l; const d=I18N[l];
  document.documentElement.lang=l; document.title=d.title;
  document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.dataset.i18n; if(d[k]!=null) el.innerHTML=d[k];});
  document.querySelectorAll('[data-i18n-alt]').forEach(el=>{const k=el.dataset.i18nAlt; if(d[k]) el.alt=d[k];});
  document.querySelectorAll('[data-i18n-aria]').forEach(el=>{const k=el.dataset.i18nAria; if(d[k]) el.setAttribute('aria-label',d[k]);});
  document.querySelectorAll('[data-i18n-ph]').forEach(el=>{const k=el.dataset.i18nPh; if(d[k]) el.placeholder=d[k];});
  document.querySelectorAll('[data-lang]').forEach(b=>b.setAttribute('aria-pressed', String(b.dataset.lang===l)));
  document.querySelectorAll('.hero .spec li:nth-child(3) b').forEach(b=>b.textContent=fmt(150000));
  try{localStorage.setItem('lfx-lang',l)}catch(e){}
  kernW();
  if(!initial){ countUp(true); window.dispatchEvent(new Event('lfx:relayout')); }
  window.dispatchEvent(new CustomEvent('lfx:lang',{detail:l}));
}
document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.lang)));
(function(){let l=null; const q=new URLSearchParams(location.search).get('lang'); if(q) l=q; else {try{l=localStorage.getItem('lfx-lang')}catch(e){} } if(!l){const n=(navigator.language||'de').slice(0,2); l=['de','en','tr'].includes(n)?n:'en';} setLang(l,true);})();

/* ================= count-up ================= */
function countUp(instant){
  document.querySelectorAll('[data-count]').forEach(el=>{
    const to=+el.dataset.count, suf=el.dataset.suffix||'';
    if(instant||REDUCED||el.dataset.done){el.textContent=fmt(to)+suf; el.dataset.done=1; return;}
    el.dataset.done=1; const o={v:0};
    gsap.to(o,{v:to,duration:1.6,ease:'expo.out',onUpdate:()=>{el.textContent=fmt(Math.round(o.v))+suf}});
  });
}

/* ================= smooth scroll ================= */
gsap.registerPlugin(ScrollTrigger);
let lenis=null;
if(!REDUCED && window.Lenis){
  lenis=new Lenis({duration:1.15,easing:t=>Math.min(1,1.001-Math.pow(2,-10*t)),smoothWheel:true});
  lenis.on('scroll',ScrollTrigger.update);
  gsap.ticker.add(t=>lenis.raf(t*1000)); gsap.ticker.lagSmoothing(0);
}
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
  const id=a.getAttribute('href'); if(id.length<2) return; const t=document.querySelector(id); if(!t) return;
  e.preventDefault(); closeMenu();
  if(lenis) lenis.scrollTo(t,{offset:id==='#top'?0:-10,duration:1.4}); else t.scrollIntoView();
  history.replaceState(null,'',id);
}));

/* ================= nav ================= */
const nav=document.getElementById('nav'); let lastY=0;
function onNav(y){ nav.classList.toggle('is-solid',y>60); const menu=document.body.classList.contains('menu-open'); nav.classList.toggle('is-hidden',!menu && y>lastY && y>400); lastY=y; }
if(lenis) lenis.on('scroll',e=>onNav(e.scroll)); else addEventListener('scroll',()=>onNav(scrollY),{passive:true});
const burger=document.querySelector('.burger'), mm=document.getElementById('mmenu');
function closeMenu(){document.body.classList.remove('menu-open');burger.setAttribute('aria-expanded','false');mm.setAttribute('aria-hidden','true');lenis&&lenis.start();}
burger.addEventListener('click',()=>{const open=!document.body.classList.contains('menu-open'); document.body.classList.toggle('menu-open',open); burger.setAttribute('aria-expanded',String(open)); mm.setAttribute('aria-hidden',String(!open)); open?lenis&&lenis.stop():lenis&&lenis.start();});
addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});

/* ================= hero video ================= */
(function(){
  const v=document.getElementById('heroVideo'); if(!v||REDUCED) return;
  const conn=navigator.connection; if(conn && (conn.saveData || /2g/.test(conn.effectiveType||''))) return;
  v.src = innerWidth>1100 ? v.dataset.srcHd : v.dataset.srcSd;
  v.play().catch(()=>{});
})();

/* ================= hero intro ================= */
if(!REDUCED){
  gsap.from('.hero h1 .ln>span',{yPercent:110,duration:1.3,ease:'expo.out',stagger:.12,delay:.15});
  gsap.from('.hero-sub,.hero-ctas,.spec li',{opacity:0,y:18,duration:1,ease:'expo.out',stagger:.07,delay:.6});
  gsap.to('.hero-media',{yPercent:10,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});
}

/* ================= reveals ================= */
if(!REDUCED){
  gsap.utils.toArray('.rv').forEach(el=>gsap.to(el,{opacity:1,y:0,duration:1.1,ease:'expo.out',scrollTrigger:{trigger:el,start:'top 88%',once:true}}));
  gsap.utils.toArray('.rv-img').forEach(el=>gsap.to(el,{clipPath:'inset(0% 0 0% 0)',duration:1.4,ease:'expo.out',scrollTrigger:{trigger:el,start:'top 85%',once:true}}));
  gsap.utils.toArray('.st-media img').forEach(img=>gsap.fromTo(img,{yPercent:-6},{yPercent:6,ease:'none',scrollTrigger:{trigger:img.parentElement,start:'top bottom',end:'bottom top',scrub:true}}));
}



/* ================= THE THREAD ================= */
class Thread{
  constructor(host,prefix){this.host=host;this.prefix=prefix;this.svg=host.querySelector('svg.thread');this.ghost=this.svg.querySelector('.ghost');this.stitch=this.svg.querySelector('.stitch');this.stitches=[...this.svg.querySelectorAll('.stitch')];this.mask=this.svg.querySelector('.mpath');this.needle=this.svg.querySelector('.needle');this.samples=[];this.len=0;this.stops=[];}
  anchors(){
    const hb=this.host.getBoundingClientRect();
    return [...this.host.querySelectorAll('[data-thread-anchor^="'+this.prefix+'"]')]
      .sort((a,b)=>parseFloat(a.dataset.threadAnchor.slice(1))-parseFloat(b.dataset.threadAnchor.slice(1)))
      .filter(el=>el.offsetParent!==null || el.getClientRects().length)
      .map(el=>{const r=el.getBoundingClientRect(); let x=r.left+r.width/2-hb.left, y=r.top+r.height/2-hb.top;
        if(el.tagName==='A'||el.tagName==='BUTTON'){y=r.bottom-hb.top;}
        if(innerWidth<821 && el.hasAttribute('data-thread-m')){ x = el.dataset.threadAnchor==='A0' ? r.right-hb.left-2 : 3; }
        return {x,y,el};});
  }
  build(){
    const hb=this.host.getBoundingClientRect(); const W=hb.width, H=this.host.offsetHeight;
    this.svg.setAttribute('viewBox',`0 0 ${W} ${H}`);
    const pts=this.anchors(); if(pts.length<2) return;
    if(this.prefix==='A'){ pts[pts.length-1].y=H; }
    let d=`M${pts[0].x},${pts[0].y}`;
    for(let i=1;i<pts.length;i++){const a=pts[i-1],b=pts[i]; const dy=b.y-a.y; const k=Math.max(40,dy*.5);
      d+=` C${a.x},${a.y+k} ${b.x},${b.y-k} ${b.x},${b.y}`;}
    [this.ghost,this.mask,...this.stitches].forEach(p=>p.setAttribute('d',d));
    this.len=this.stitch.getTotalLength();
    this.mask.style.stroke='#fff'; this.mask.style.strokeWidth=8; this.mask.style.fill='none';
    this.mask.style.strokeDasharray=this.len;
    // sample y→length table
    const N=Math.max(200,Math.round(this.len/12)); this.samples=new Float32Array(N+1); this.sx=new Float32Array(N+1);
    let maxY=-1e9; for(let i=0;i<=N;i++){const p=this.stitch.getPointAtLength(this.len*i/N); maxY=Math.max(maxY,p.y); this.samples[i]=maxY; this.sx[i]=p.x;}
    this.N=N;
    this.firstY=pts[0].y; this.stops=pts.map(p=>({el:p.el.closest('[data-station]')||p.el, y:p.y}));
    this.top=hb.top+scrollY;
  }
  update(scroll){
    if(!this.len) return;
    let target = REDUCED ? 1e9 : scroll + innerHeight*.62 - this.top; if(this.prefix==='A') target=Math.max(target,this.firstY+150);
    let lo=0,hi=this.N; while(lo<hi){const m=(lo+hi)>>1; if(this.samples[m]<target) lo=m+1; else hi=m;}
    const L=this.len*lo/this.N; this.mask.style.strokeDashoffset=this.len-L;
    const p=this.stitch.getPointAtLength(Math.min(L,this.len)); this.needle.setAttribute('transform',`translate(${p.x},${p.y}) rotate(45)`);
    this.needle.style.opacity = (L>2 && L<this.len-2)?1:0;
    this.stops.forEach(s=>{ if(s.el.hasAttribute('data-station')) s.el.classList.toggle('is-stitched', target>=s.y-4); });
  }
}
const threads=[['segA','A'],['segB','B']].filter(([id])=>document.getElementById(id)).map(([id,pre])=>new Thread(document.getElementById(id),pre));
function curScroll(){return lenis?lenis.scroll:scrollY}
function layoutThreads(){threads.forEach(t=>t.build()); threads.forEach(t=>t.update(curScroll()));}
if(lenis) lenis.on('scroll',e=>threads.forEach(t=>t.update(e.scroll))); else addEventListener('scroll',()=>threads.forEach(t=>t.update(scrollY)),{passive:true});
let rT; const relayout=()=>{clearTimeout(rT); rT=setTimeout(()=>{ScrollTrigger.refresh();},120)};
addEventListener('resize',relayout); addEventListener('lfx:relayout',relayout);
ScrollTrigger.addEventListener('refresh',layoutThreads);
addEventListener('load',()=>ScrollTrigger.refresh());
document.fonts && document.fonts.ready.then(()=>ScrollTrigger.refresh());



/* ================= form ================= */
(function(){
  const f=document.getElementById('inquiry'); if(!f) return;
  f.addEventListener('submit',e=>{
    e.preventDefault(); let ok=true; const d=I18N[LANG];
    f.querySelectorAll('[required]').forEach(inp=>{const fld=inp.closest('.field'); let msg='';
      if(!inp.value.trim()) msg=d.eReq; else if(inp.type==='email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(inp.value.trim())) msg=d.eMail;
      fld.classList.toggle('has-err',!!msg); fld.querySelector('.err').textContent=msg; inp.setAttribute('aria-invalid',String(!!msg)); if(msg&&ok){ok=false;inp.focus();}
    });
    if(!ok) return;
    const btn=f.querySelector('button[type=submit]'); btn.disabled=true;
    setTimeout(()=>{f.classList.add('is-sent'); relayout();},700);
  });
})();


