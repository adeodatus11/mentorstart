# Audyt treści i grafik strony wdrożeniowej

Data audytu: 2026-05-08  
Zakres: `index.html`, `app.js`, `baza-wiedzy.html`, podstrony etapów, `styles.css` oraz lokalne pliki źródłowe Markdown.

## 1. Wniosek główny

Strona jest już kompletna strukturalnie: ma stronę główną, ścieżkę etapową, podstrony tygodni i półroczy, bazę wiedzy, checklisty, rozmowy mentorskie i narzędzia diagnostyczne. Nie jest już pustym prototypem.

Największe braki nie dotyczą układu, tylko danych lokalnych szkoły i materiałów źródłowych, które muszą zostać dostarczone, żeby strona stała się w pełni operacyjnym podręcznikiem dla konkretnej placówki.

## 2. Dane potrzebne do pełnego wypełnienia strony

### 2.1. Dane identyfikacyjne szkoły

Potrzebne:

- pełna oficjalna nazwa szkoły,
- skrócona nazwa używana w serwisie,
- logo szkoły w formacie SVG/PNG,
- ewentualne logo projektu COVE/WIN4SMEs, jeśli ma być widoczne,
- kolorystyka identyfikacji wizualnej szkoły lub projektu,
- informacja, czy nazwa robocza `MentorStart` zostaje, czy ma być zastąpiona nazwą oficjalną.

Gdzie użyć:

- `index.html`: sidebar, favicon, tytuł strony, hero,
- wszystkie podstrony etapów: nagłówki i identyfikacja,
- grafiki startowe i raportowe.

### 2.2. Kontakty i odpowiedzialności

Potrzebne:

- dyrektor: imię, nazwisko, zakres spraw, kanał kontaktu,
- wicedyrektorzy: zakresy odpowiedzialności,
- sekretariat: telefon, e-mail, godziny pracy,
- kadry lub osoba od spraw zatrudnienia,
- osoba od dziennika elektronicznego,
- koordynator zastępstw,
- pedagog,
- psycholog,
- administrator IT,
- osoba od kluczy, sal, sprzętu, usterek,
- biblioteka, BHP, RODO, koordynator projektów lub innych działań szkolnych, jeśli dotyczy,
- jasna zasada: z czym nauczyciel idzie do mentora, z czym do dyrekcji, z czym do sekretariatu.

Gdzie użyć:

- `tydzien-0.html`: pakiet startowy,
- `tydzien-1.html`: dostępy, klucze, nieobecność, zastępstwa,
- `tydzien-4.html`: interwencje i osoby wsparcia,
- `baza-wiedzy.html`: komunikacja, uczeń w kryzysie, prawa i obowiązki,
- `index.html`: materiały operacyjne i FAQ.

### 2.3. Procedury lokalne

Potrzebne dokumenty lub krótkie opisy:

- logowanie do dziennika elektronicznego,
- zakładanie konta pocztowego,
- pobieranie i zwrot kluczy,
- korzystanie z ksero, drukarki, sprzętu i sal specjalistycznych,
- zgłaszanie usterek,
- zgłaszanie nieobecności nauczyciela,
- organizacja zastępstw,
- zwalnianie ucznia z lekcji,
- wypadek lub zasłabnięcie ucznia,
- kontakt z rodzicem,
- eskalacja sprawy do wychowawcy, pedagoga, psychologa, dyrekcji,
- uczeń w kryzysie,
- praca z uczniem z opinią, orzeczeniem, IPET lub dostosowaniami,
- dokumentowanie ważnych rozmów,
- zasady korzystania z dziennika do wiadomości do rodziców,
- RODO i dane wrażliwe w praktyce pracy nauczyciela.

Gdzie użyć:

- `index.html`: sekcja procedur i FAQ,
- `baza-wiedzy.html`: karty wiedzy,
- `tydzien-1.html`, `tydzien-2.html`, `tydzien-4.html`: konkretne etapy.

### 2.4. Kalendarz i rytm roku szkolnego

Potrzebne:

- termin rozpoczęcia pracy lub orientacyjny harmonogram pierwszego tygodnia,
- terminy rad pedagogicznych,
- terminy zebrań z rodzicami,
- terminy wystawiania ocen przewidywanych,
- terminy klasyfikacji półrocznej i rocznej,
- termin rady klasyfikacyjnej,
- terminy przekazania PSO i wymagań edukacyjnych,
- terminy planów wynikowych,
- egzaminy, próbne egzaminy, rekolekcje, wycieczki, dni projektowe, wydarzenia lokalne,
- momenty zwiększonego obciążenia w tej konkretnej szkole.

Gdzie użyć:

- `miesiac-2.html`,
- `polrocze-1.html`,
- `polrocze-2.html`,
- `koniec-roku.html`,
- `index.html`: rytm roku szkolnego,
- `baza-wiedzy.html`: klasyfikacja.

### 2.5. Dokumenty i wzory

Potrzebne pliki lub treści do przepisania na karty:

- wzór PSO,
- wzór wymagań edukacyjnych,
- wzór planu wynikowego, jeśli szkoła go wymaga,
- instrukcja dziennika elektronicznego,
- wzór notatki po rozmowie z rodzicem,
- wzór notatki po rozmowie mentorskiej,
- wzór arkusza obserwacji lekcji,
- wzór informacji zwrotnej po obserwacji,
- checklisty klasyfikacyjne,
- procedura awansu lub przygotowania do zawodu nauczyciela początkującego,
- wzory dokumentów awansowych, jeżeli szkoła je stosuje,
- regulamin wynagradzania lub link do niego,
- regulamin pracy,
- statut szkoły,
- regulamin dyżurów,
- dokumenty BHP.

Gdzie użyć:

- `index.html`: materiały operacyjne,
- `baza-wiedzy.html`: karty PSO, klasyfikacja, awans, wynagrodzenie,
- podstrony etapów: `Dokumenty/procedury`.

### 2.6. Treści prawne i formalne wymagające weryfikacji

Potrzebne:

- decyzja, jak opisywać aktualną ścieżkę nauczyciela początkującego: czy używać lokalnego języka szkoły, czy ściśle terminologii z aktualnych przepisów,
- sprawdzenie, czy fragmenty o `stażu`, `opiekunie stażu` i terminie 14 dni są nadal właściwe dla docelowej grupy użytkowników,
- informacja, czy szkoła zatrudnia nauczycieli według starszych ścieżek przejściowych,
- linki do aktualnych lokalnych regulaminów i zarządzeń,
- akceptacja dyrekcji/kadr dla treści o awansie, prawach, obowiązkach i wynagrodzeniu.

Miejsca wymagające szczególnej kontroli:

- `index.html`: akordeon „Awans zawodowy: kontrola terminów”,
- `app.js`: teksty checklist zawierające „staż” i „wniosek”,
- `baza-wiedzy.html`: karty `Awans zawodowy`, `Prawa i obowiązki`, `Wynagrodzenie i dodatki`,
- `tydzien-1.html`, `miesiac-2.html`, `polrocze-2.html`, `koniec-roku.html`.

Rekomendacja:

Nie wpisywać stawek, dat lokalnych ani interpretacji prawnych bez zatwierdzenia. W treści strony zostawić język „skrót operacyjny” i link do aktualnego źródła.

### 2.7. Materiały do pobrania

Obecnie sekcja „Materiały operacyjne” zawiera treści na stronie, ale nie ma realnych plików do pobrania.

Potrzebne:

- PDF „Pakiet startowy nauczyciela”,
- PDF „Checklista pierwszego tygodnia”,
- PDF „Agenda rozmowy mentorskiej”,
- DOCX „Notatka po rozmowie mentorskiej”,
- DOCX „Notatka po kontakcie z rodzicem”,
- PDF „Procedury pierwszej reakcji”,
- PDF „Checklista klasyfikacji półrocznej”,
- PDF „Checklista zamknięcia roku”,
- ewentualnie wersja do druku: „Dziennik wdrożenia poza stroną”.

Gdzie użyć:

- `index.html`: sekcja `Materiały operacyjne`,
- `baza-wiedzy.html`: linki przy właściwych kartach wiedzy,
- podstrony etapów: bloki „Dokumenty/procedury”.

### 2.8. Przykłady rozmów i scenariusze

Obecnie są agendy i pytania, ale można dodać bardziej realistyczne scenariusze.

Potrzebne:

- przykładowa pierwsza rozmowa mentor-nauczyciel,
- rozmowa po trudnej lekcji,
- rozmowa po kontakcie z rodzicem,
- rozmowa przed klasyfikacją,
- rozmowa o obciążeniu pracą,
- rozmowa podsumowująca półrocze,
- rozmowa zamykająca rok,
- przykłady pytań mentora i możliwych odpowiedzi nauczyciela,
- przykłady decyzji kończących rozmowę.

Gdzie użyć:

- `index.html`: sekcja rozmów,
- `tydzien-2.html`, `tydzien-4.html`, `polrocze-1.html`, `koniec-roku.html`.

## 3. Miejsca z treścią zbyt ogólną

### 3.1. Strona główna

Plik: `index.html`

Obszary do doprecyzowania:

- „MentorStart” i „ZSZ5 Wrocław” są identyfikacją roboczą. Trzeba potwierdzić nazwę.
- W hero brakuje krótkiego zdania: dla kogo dokładnie jest przewodnik i w jakim roku szkolnym obowiązuje.
- Mapa procesu opisuje obszary, ale nie pokazuje jeszcze realnych terminów szkoły.
- Sekcja „Materiały operacyjne” nie ma realnych plików do pobrania.
- Procedury są prawidłowe jako schemat, ale brakuje nazw osób, kanałów, godzin i lokalnych zasad.
- FAQ powinno dostać lokalne przykłady: pierwszy dzień, dziennik, klucze, nieobecność, rodzic, klasyfikacja.

### 3.2. Podstrony etapów

Pliki:

- `tydzien-0.html`,
- `tydzien-1.html`,
- `tydzien-2.html`,
- `tydzien-3.html`,
- `tydzien-4.html`,
- `miesiac-2.html`,
- `polrocze-1.html`,
- `polrocze-2.html`,
- `koniec-roku.html`.

Obszary do doprecyzowania:

- Każda podstrona ma strukturę, ale zadania są nadal uniwersalne.
- Brakuje lokalnych kontaktów, terminów i nazw dokumentów.
- Brakuje linków do plików, PDF, DOCX lub zasobów szkoły.
- Brakuje przykładów „jak wygląda dobrze wykonane zadanie”.
- Brakuje realnych sytuacji typowych dla tej szkoły.

### 3.3. Baza wiedzy

Plik: `baza-wiedzy.html`

Obszary do doprecyzowania:

- Karty są kompletne jako format, ale źródła lokalne są opisane ogólnie.
- Przy każdej karcie warto dodać link do konkretnego dokumentu szkoły.
- Karty prawne wymagają zatwierdzenia przez osobę odpowiedzialną za kadry/dyrekcję.
- Brakuje odwołań do konkretnych dokumentów lokalnych szkoły.
- Brakuje krótkiej karty o BHP i bezpieczeństwie pracy z uczniami w warunkach typowych dla danej placówki.

### 3.4. App JS

Plik: `app.js`

Obszary do doprecyzowania:

- Część dynamicznych tekstów w checklistach jest nadal skrótem.
- Występują sformułowania „jeżeli dotyczy”, zwłaszcza przy awansie i dokumentach. To jest poprawne jako zabezpieczenie prawne, ale docelowo trzeba określić, kiedy dotyczy konkretnej osoby.
- Brakuje dynamicznych danych lokalnych, np. aktualny etap według kalendarza szkoły. Strona działa statycznie, więc można dodać tylko ręcznie ustawiany opis roku szkolnego.

## 4. Raport grafik i infografik do wygenerowania

Poniższe pozycje można potraktować jako brief dla generatora grafik. Zalecany styl wspólny: nowoczesna edukacyjna infografika, jasne tło, czytelne kształty, bez zdjęć stockowych, mocny zielony wariant dla mentora i mocny niebieski wariant dla nauczyciela. Format najlepiej `SVG` albo `PNG/WebP` 1600 px szerokości dla hero oraz 900-1200 px dla kart etapów.

### 4.1. Inwentarz obecnych grafik generycznych

Obecnie strona używa głównie ikon Lucide i prostych inline SVG. To jest dobre dla prototypu i dostępności, ale przed publikacją warto zastąpić część z nich bardziej informacyjnymi grafikami.

| ID | Plik / sekcja | Obecny typ grafiki | Ocena | Rekomendacja |
|---|---|---|---|---|
| V01 | `index.html`, favicon | Data URI z literą `W` | generyczne | zastąpić logo szkoły lub znakiem projektu |
| V02 | `index.html`, sidebar i mobile nav | ikony Lucide | akceptowalne | zostawić, chyba że powstanie pełny system ikon projektu |
| V03 | `index.html`, karty ról | ikony Lucide `user-check`, `graduation-cap` | czytelne, ale podstawowe | można zastąpić grafiką G12 |
| V04 | `index.html`, `journey-graphic` | prosta ścieżka SVG | funkcjonalne, ale prototypowe | zastąpić grafiką G01 |
| V05 | `index.html`, karty bazy wiedzy | ikony Lucide | akceptowalne | zostawić jako ikony pomocnicze, dodać hero G11 |
| V06 | `index.html`, miniankieta | ikona Lucide i suwaki | tekstowo-funkcjonalne | dodać miniinfografikę G13 |
| V07 | `index.html`, dziennik wdrożenia | ikona Lucide | zbyt mało informacyjne | dodać wzór graficzny G14 |
| V08 | `index.html`, triage trudnych sytuacji | ikona Lucide | zbyt skrótowe | dodać flowchart G15 |
| V09 | `index.html`, materiały operacyjne | ikony Lucide | brak miniatur materiałów | dodać okładki/miniatury G16 |
| V10 | `tydzien-0.html`, `stage-visual` | abstrakcyjna ścieżka SVG | generyczne | zastąpić G02 |
| V11 | `tydzien-1.html`, `stage-visual` | abstrakcyjne dokumenty SVG | generyczne | zastąpić G03 |
| V12 | `tydzien-2.html`, `stage-visual` | abstrakcyjna oś z punktami | generyczne | zastąpić G04 |
| V13 | `tydzien-3.html`, `stage-visual` | dokument SVG | generyczne | zastąpić G05 |
| V14 | `tydzien-4.html`, `stage-visual` | znak ostrzegawczy SVG | zbyt ogólne | zastąpić G06 |
| V15 | `miesiac-2.html`, `stage-visual` | dwa okręgi i strzałka | generyczne | zastąpić G07 |
| V16 | `polrocze-1.html`, `stage-visual` | dokument SVG | generyczne | zastąpić G08 |
| V17 | `polrocze-2.html`, `stage-visual` | dwa okręgi i strzałka | generyczne | zastąpić G09 |
| V18 | `koniec-roku.html`, `stage-visual` | ścieżka i strzałka | generyczne | zastąpić G10 |
| V19 | `baza-wiedzy.html`, `knowledge-visual` | dokumenty/checkmark SVG | poprawne, ale prototypowe | zastąpić G11 |
### G01. Hero strony głównej: mapa drogi wdrożenia

Obecnie:

- `index.html`, sekcja `journey-graphic`,
- prosta linia SVG z punktami etapów.

Docelowa grafika:

- ilustracyjna mapa drogi nauczyciela od „przed startem” do „koniec roku”,
- punkty: start, tydzień 1, tydzień 2, tydzień 3, tydzień 4, miesiąc 2, półrocze 1, półrocze 2, koniec roku,
- powinna wyglądać jak narzędzie procesowe, nie dekoracja,
- wersja desktop i uproszczona mobilna.

Prompt roboczy:

„Nowoczesna infografika edukacyjna pokazująca drogę wdrożenia nowego nauczyciela w szkole, 9 etapów procesu, mentor jako przewodnik, nauczyciel początkujący jako uczestnik procesu, jasne tło, zielono-niebieska paleta, czytelne punkty etapów, styl profesjonalny, lekki, bez postaci kreskówkowych, format panoramiczny.”

### G02. Etap 0: przed pierwszym dniem

Obecnie:

- `tydzien-0.html`, `stage-visual`,
- abstrakcyjna ścieżka z punktami.

Docelowa grafika:

- pakiet startowy nauczyciela: plan dnia, klucze, dziennik, kontakt do mentora,
- checklistowy charakter,
- bez danych osobowych.

Prompt roboczy:

„Infografika: pakiet startowy nowego nauczyciela przed pierwszym dniem pracy, elementy: plan pierwszego dnia, kontakt do mentora, dziennik elektroniczny, sale, klucze, szkoła w tle, profesjonalny styl edukacyjny, zielony motyw mentora.”

### G03. Etap 1: pierwszy tydzień

Obecnie:

- `tydzien-1.html`, `stage-visual`,
- trzy białe prostokąty dokumentów.

Docelowa grafika:

- uruchomienie dostępów i procedur: login, dziennik, poczta, sale, klucze, zastępstwa,
- dobra jako mini-infografika „5 rzeczy do sprawdzenia”.

Prompt roboczy:

„Infografika pierwszego tygodnia pracy nauczyciela: dostęp do dziennika, poczta szkolna, klucze do sal, plan lekcji, zgłaszanie nieobecności, nowoczesne ikony, jasne tło, mocny zielony i niebieski akcent.”

### G04. Etap 2: dziennik i pierwsze klasy

Obecnie:

- `tydzien-2.html`, `stage-visual`,
- linia z trzema punktami.

Docelowa grafika:

- dashboard dziennika elektronicznego, pierwsze klasy, wychowawca, kompletność tematów/obecności,
- motyw kontroli rytmu pracy.

Prompt roboczy:

„Infografika: nauczyciel kontroluje dziennik elektroniczny po drugim tygodniu, widoczne elementy: tematy, obecności, pierwsze oceny, kontakt z wychowawcą, klasy jako grupy ikon, styl nowoczesny, czytelny, bez konkretnych danych.”

### G05. Etap 3: PSO i wymagania edukacyjne

Obecnie:

- `tydzien-3.html`, `stage-visual`,
- dokument z liniami i okręgiem.

Docelowa grafika:

- dokument PSO, wymagania edukacyjne, kryteria oceniania, dostosowania,
- dobra jako ilustracja procesu „od dokumentu do jasnych kryteriów dla ucznia”.

Prompt roboczy:

„Infografika: PSO i wymagania edukacyjne w szkole, dokument z kryteriami oceniania, znacznik zgodności ze statutem, ikony ucznia i nauczyciela, dostosowania edukacyjne, profesjonalny styl, zielono-niebieska paleta.”

### G06. Etap 4: procedury reakcji

Obecnie:

- `tydzien-4.html`, `stage-visual`,
- trójkąt ostrzegawczy.

Docelowa grafika:

- drzewko decyzyjne: klasa, rodzic, uczeń w kryzysie, wypadek,
- pokazuje eskalację: mentor, wychowawca, pedagog/psycholog, dyrekcja.

Prompt roboczy:

„Infografika decyzyjna dla nauczyciela: co zrobić w trudnej sytuacji szkolnej, ścieżki: trudna klasa, kontakt z rodzicem, uczeń w kryzysie, wypadek, osoby wsparcia: mentor, wychowawca, pedagog, psycholog, dyrekcja, styl czytelnego flowchartu.”

### G07. Miesiąc 2: obserwacje i informacja zwrotna

Obecnie:

- `miesiac-2.html`, `stage-visual`,
- dwa okręgi i strzałka.

Docelowa grafika:

- obserwacja lekcji, informacja zwrotna, cel rozwojowy, balans obciążenia,
- powinna pokazywać cykl: obserwacja → rozmowa → działanie → sprawdzenie.

Prompt roboczy:

„Infografika cyklu rozwojowego nauczyciela w drugim miesiącu pracy: obserwacja lekcji, rozmowa mentora, informacja zwrotna, cel rozwojowy, ponowne sprawdzenie, styl procesowy, nowoczesny, jasny.”

### G08. Półrocze 1: klasyfikacja

Obecnie:

- `polrocze-1.html`, `stage-visual`,
- prosty dokument z liniami.

Docelowa grafika:

- checklista klasyfikacyjna: oceny, obecności, tematy, zagrożenia, rodzice, rada klasyfikacyjna,
- mocny charakter operacyjny.

Prompt roboczy:

„Infografika checklisty klasyfikacji półrocznej w szkole: oceny, obecności, tematy lekcji, informacja dla rodziców, rada klasyfikacyjna, nauczyciel i mentor sprawdzają kompletność dokumentacji, styl profesjonalny.”

### G09. Półrocze 2: awans, obserwacje i samodzielność

Obecnie:

- `polrocze-2.html`, `stage-visual`,
- dwa okręgi i strzałka.

Docelowa grafika:

- przejście od wsparcia do samodzielności,
- elementy: obserwacja, dokumenty awansu/przygotowania do zawodu, cel rozwojowy, plan końca roku.

Prompt roboczy:

„Infografika: drugie półrocze nauczyciela początkującego, przejście od wsparcia mentora do większej samodzielności, obserwacje lekcji, dokumenty rozwojowe, przygotowanie końca roku, profesjonalny edukacyjny styl.”

### G10. Koniec roku: zamknięcie i ewaluacja

Obecnie:

- `koniec-roku.html`, `stage-visual`,
- ścieżka i strzałka.

Docelowa grafika:

- zamknięcie dokumentacji, oceny roczne, podsumowanie mentoringu, rekomendacje na kolejną edycję,
- powinna mieć motyw „pętli uczenia się organizacji”.

Prompt roboczy:

„Infografika końca roku wdrożenia nauczyciela: zamknięcie ocen, dokumentacja roczna, rozmowa podsumowująca, wnioski dla szkoły, plan rozwoju na kolejny rok, styl nowoczesny, jasny, profesjonalny.”

### G11. Baza wiedzy: hero

Obecnie:

- `baza-wiedzy.html`, `knowledge-visual`,
- dokumenty i checkmark w SVG.

Docelowa grafika:

- wizualny katalog wiedzy: dokumenty, procedury, rozmowy, prawo, uczeń, rodzic, dobrostan,
- najlepiej jako system kart połączonych w jedną mapę.

Prompt roboczy:

„Nowoczesna infografika bazy wiedzy dla mentora nauczyciela początkującego: karty wiedzy, dokumenty, rozmowy mentorskie, procedury, prawo, uczeń w kryzysie, rodzice, dobrostan, jasne tło, zielono-niebieska paleta.”

### G12. Strefa mentora i strefa nauczyciela

Obecnie:

- `index.html`, karty ról z ikonami Lucide.

Docelowa grafika:

- rozdzielona wizualnie para perspektyw: mentor zarządza procesem, nauczyciel wykonuje zadania,
- może być jako dwie ilustracje lub jedna porównawcza grafika.

Prompt roboczy:

„Infografika porównująca dwie perspektywy procesu wdrożenia: mentor zarządza procesem, nauczyciel początkujący wykonuje zadania; dwa wyraźne kolory: zielony dla mentora, niebieski dla nauczyciela; styl profesjonalny i edukacyjny.”

### G13. Miniankieta adaptacji

Obecnie:

- `index.html`, narzędzie z suwakami, bez grafiki.

Docelowa grafika:

- mała ilustracja radar/termometr adaptacji: procedury, klasa, dokumentacja, dobrostan,
- może być ikoną lub mini-infografiką obok narzędzia.

Prompt roboczy:

„Miniinfografika samooceny adaptacji nauczyciela: cztery obszary: procedury, klasa, dokumentacja, dobrostan; wygląd jak prosty radar lub panel diagnostyczny, jasny styl, edukacyjny.”

### G14. Dziennik wdrożenia poza stroną

Obecnie:

- `index.html` i wszystkie podstrony etapów opisują schemat wpisu tekstowo.

Docelowa grafika:

- wzór strony dziennika: data, etap, temat rozmowy, ustalenia, odpowiedzialny, termin, pytania,
- może być ilustracją lub gotową kartą PDF do pobrania.

Prompt roboczy:

„Infografika wzoru dziennika wdrożenia nauczyciela prowadzonego poza stroną: pola data, etap, temat rozmowy, ustalenia, osoba odpowiedzialna, termin sprawdzenia, pytania na kolejne spotkanie, styl czytelnego formularza do druku.”

### G15. Procedury szybkiej reakcji

Obecnie:

- `index.html`, triage „Klasa nie reaguje / Trudny rodzic / Uczeń w kryzysie” oraz sekcja procedur.

Docelowa grafika:

- flowchart pierwszej reakcji: obserwuj fakt, zabezpiecz, włącz osobę, zapisz ustalenia,
- warianty dla klasy, rodzica, kryzysu.

Prompt roboczy:

„Infografika flowchart: szybka reakcja nauczyciela w trudnej sytuacji szkolnej, warianty: trudna klasa, trudny rodzic, uczeń w kryzysie, kroki: fakt, reakcja, eskalacja, dokumentowanie, styl czytelny i profesjonalny.”

### G16. Materiały do pobrania

Obecnie:

- `index.html`, sekcja materiałów jest tekstowa.

Docelowa grafika:

- zestaw okładek/miniatur PDF: pakiet startowy, checklista tygodnia 1, agenda rozmowy, checklista klasyfikacji, zamknięcie roku.

Prompt roboczy:

„Zestaw miniatur dokumentów PDF dla cyfrowego przewodnika wdrożenia nauczyciela: pakiet startowy, checklista pierwszego tygodnia, agenda rozmowy mentorskiej, checklista klasyfikacji, zamknięcie roku, styl spójny z zielono-niebieskim systemem.”

## 5. Priorytety uzupełniania

### Priorytet 1: konieczne przed publikacją

- oficjalna nazwa szkoły i logo,
- kontakty i odpowiedzialności,
- procedura dziennika,
- procedura nieobecności i zastępstw,
- procedura kontaktu z rodzicem,
- procedura ucznia w kryzysie,
- kalendarz klasyfikacji,
- zatwierdzenie treści prawnych i awansowych,
- realne materiały do pobrania albo decyzja, że sekcja pozostaje tylko jako treść online.

### Priorytet 2: mocno podnosi użyteczność

- wzory dokumentów,
- przykłady rozmów mentorskich,
- lokalne FAQ,
- grafiki etapów G02-G10,
- okładki PDF dla materiałów.

### Priorytet 3: ulepszenia wizualne

- rozbudowana hero-mapa G01,
- grafika bazy wiedzy G11,
- grafika stref ról G12,
- miniinfografiki narzędzi G13-G15.

## 6. Gotowa lista pytań do szkoły

1. Jaka ma być oficjalna nazwa strony i czy `MentorStart` zostaje?
2. Kto jest odbiorcą pierwszej wersji: mentor, nauczyciel początkujący, dyrekcja, czy wszyscy?
3. Kto w szkole odpowiada za dziennik elektroniczny?
4. Jakiego dziennika używa szkoła i czy jest instrukcja logowania?
5. Kto odpowiada za zastępstwa?
6. Jak nauczyciel zgłasza nieobecność?
7. Jak pobiera się klucze i sprzęt?
8. Gdzie są regulaminy: statut, ocenianie, wynagradzanie, BHP?
9. Jakie są lokalne terminy PSO, wymagań edukacyjnych i planów wynikowych?
10. Jak wygląda procedura kontaktu z rodzicem?
11. Kiedy nauczyciel ma włączyć wychowawcę?
12. Kiedy nauczyciel ma włączyć pedagoga lub psychologa?
13. Jak wygląda procedura ucznia w kryzysie?
14. Jak wygląda procedura wypadku lub zasłabnięcia?
15. Jakie dokumenty awansowe ma prowadzić nauczyciel początkujący?
16. Czy w szkole są nauczyciele objęci starszą ścieżką stażu?
17. Jakie materiały mają być możliwe do pobrania?
18. Jakie są trzy najczęstsze problemy nowych nauczycieli w tej szkole?
19. Jakie grafiki są preferowane: ilustracje, infografiki, zdjęcia szkoły, czy mieszany system?
