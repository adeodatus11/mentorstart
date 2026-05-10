# Raport zgodności strony z podręcznikiem wdrożeniowym

Data analizy: 2026-05-09  
Zakres: `podrecznik_wdrozeniowy_ZSZ5_v2.docx`, obecna strona statyczna HTML/CSS/JS, grafiki SVG w katalogu `grafiki/`.

## 1. Najważniejsze wnioski

Obecna strona dobrze realizuje kierunek cyfrowego przewodnika: ma ekran startowy, przełącznik roli mentor/nauczyciel, mapę procesu, podstrony etapów, bazę wiedzy, checklisty, miniankietę, scenariusze rozmów i grafiki procesowe. To jest dobry fundament interaktywnego narzędzia pracy.

Największa luka polega na tym, że strona jest nadal uproszczoną mapą procesu, a podręcznik jest kompletnym zestawem pracy rocznej: zawiera szczegółowe agendy 9 spotkań mentorskich, arkusz obserwacji lekcji, miesięczne karty refleksji, Indywidualny Plan Rozwoju, ankietę ewaluacyjną, mapę kontaktów, FAQ, dobre praktyki europejskie i kontekst prawny. Te elementy są na stronie obecne tylko częściowo albo jako krótkie streszczenia.

Docelowo strona powinna działać w dwóch warstwach:

- warstwa operacyjna: co mentor i nauczyciel robią teraz, w konkretnym tygodniu lub etapie,
- warstwa narzędziowa: gotowe karty, agendy, arkusze, procedury, pytania, wzory do druku i materiały multimedialne.

Rekomendacja strategiczna: nie przenosić podręcznika jeden do jednego. Trzeba rozbić go na interaktywne moduły, których można użyć podczas realnego spotkania mentorskiego. Treści lokalne ZSZ5 powinny być wydzielone jako konfiguracja lub lokalny dodatek, a rdzeń strony powinien pozostać uniwersalny dla procesu wdrożenia nauczyciela. Należy unikać nieprecyzyjnych nazw typu placówki; jeśli kiedyś potrzebny będzie taki kontekst, używać poprawnej, konkretnej nazwy.

## 2. Struktura podręcznika

Podręcznik ma strukturę rocznego programu wdrożeniowego, a nie zwykłej instrukcji. Składa się z czterech głównych części i załączników.

### Część I: Ścieżka nauczyciela początkującego

1. Przed pierwszym dniem: pakiet startowy, kontakt do mentora, dostępy, plan, klasy, sale, dokumenty, BHP, RODO, pytania przed startem.
2. Pierwszy tydzień: spotkanie inauguracyjne, kontrakt mentoringowy, mapa szkoły, kluczowe osoby, miejsca i procedury codzienne.
3. Pierwsze 30 dni: dziennik elektroniczny, PSO, wymagania edukacyjne, pierwsze zasady pracy z klasą, konsultacje z wychowawcą i mentorem.
4. Miesiące 2-3: komunikacja z rodzicami, przygotowanie zebrań, analiza pierwszych sprawdzianów, dokumentowanie kontaktów.
5. Koniec pierwszego półrocza: klasyfikacja półroczna, procedury, bilans, IPR, energia i motywacja.
6. Drugie półrocze: rozwój warsztatu dydaktycznego, metody aktywizujące, zarządzanie klasą, obserwacje lekcji i informacja zwrotna.
7. Koniec roku: klasyfikacja roczna, dokumenty końcowe, bilans roku, cele na kolejny rok, elementy awansu zawodowego.

### Część II: Ścieżka mentora

Podręcznik opisuje mentora jako przewodnika po instytucji, procedurach i kulturze szkoły. Kluczowe elementy:

- kompetencje mentora: słuchanie, pytania, informacja zwrotna, wiedza instytucjonalna, cierpliwość, granice zawodowe,
- rozróżnienie mentoringu od kontroli, ewaluacji i superwizji,
- fazy relacji mentoringowej: inicjacja, stabilizacja, kryzys, wzrost, integracja,
- model informacji zwrotnej OWP: obserwacja, wpływ, pytanie,
- 9 scenariuszy spotkań mentorskich z agendą, czasem, celem i kartą po spotkaniu.

### Część III: Narzędzia wspólne

Podręcznik zawiera narzędzia, które powinny mieć cyfrowe odpowiedniki:

- arkusz obserwacji lekcji,
- karty refleksji miesięcznej od września do czerwca,
- Indywidualny Plan Rozwoju,
- ankietę ewaluacyjną programu na koniec pierwszego półrocza i koniec roku.

### Część IV: Kontekst i zasoby

Ta część zawiera skrót o Karcie Nauczyciela, awansie, wynagrodzeniu, pensum, ochronie prawnej, inspiracjach europejskich i źródłach. Treści prawne należy opisywać jako skrót operacyjny, nie jako zamkniętą poradę prawną. Wymagane jest linkowanie do aktualnych źródeł.

Uwaga merytoryczna: część o awansie i wynagrodzeniu wymaga aktualizacji względem oficjalnych źródeł. ELI pokazuje tekst jednolity Karty Nauczyciela z 2026 r., a materiały Gov.pl rozróżniają obecne procedury awansu i wzory dokumentów. Na stronie trzeba zostawić ostrożny opis oraz link do aktualnego aktu i stron ministerialnych.

### Załączniki

Załączniki podręcznika są bardzo praktyczne i powinny mieć mocną reprezentację na stronie:

- mapa kontaktów ZSZ5,
- FAQ nowego nauczyciela,
- źródła i literatura.

## 3. Obecna struktura strony

Obecna strona składa się z:

- `index.html`: ekran startowy, przełącznik roli, mapa drogi, strefy mentora i nauczyciela, aktualny etap, mapa procesu, widok etapowy, baza wiedzy, rozmowy, narzędzia, materiały, procedury, dobre praktyki i FAQ.
- `baza-wiedzy.html`: 12 kart wiedzy i sekcja źródeł.
- `tydzien-0.html`, `tydzien-1.html`, `tydzien-2.html`, `tydzien-3.html`, `tydzien-4.html`, `miesiac-2.html`, `polrocze-1.html`, `polrocze-2.html`, `koniec-roku.html`: podstrony etapów z powtarzalnym układem: cel, zadania mentora, zadania nauczyciela, rozmowa mentorska, dokumenty/procedury, ryzyka, dziennik poza stroną.
- `app.js`: dane etapów, moduły, checklisty, scenariusze rozmów, pytania, triage sytuacji trudnych, przełącznik roli, wyszukiwarka i akordeony.
- `styles.css`: pełna warstwa wizualna, rozróżnienie roli mentora i nauczyciela, układy kart, mapy, responsywność, widoki mobilne.
- `grafiki/G01-G16`: grafiki procesowe i narzędziowe użyte na stronie. `G17` pozostaje w folderze, ale nie jest podpięta do widocznej strony.

## 4. Tabela zgodności strony z podręcznikiem

| Obszar z podręcznika | Obecność na stronie | Ocena zgodności | Co poprawić | Priorytet |
|---|---|---|---|---|
| Model wdrożenia jako roczny proces | Obecny w mapie i etapach | Dobra, ale uproszczona | Dopasować nazwy etapów do 7 etapów z podręcznika i pokazać relację między tygodniami, miesiącami i półroczami | Pilne |
| Przed pierwszym dniem | Obecny jako `tydzien-0.html` | Dobra | Dodać pełną listę: umowa, mentor, e-dziennik, klucze, plan, regulaminy, BHP, RODO, pytania przed startem | Pilne |
| Pierwszy tydzień | Obecny jako `tydzien-1.html` | Częściowa | Dodać agendę 60-minutowej rozmowy inauguracyjnej, kontrakt mentoringowy, mapę miejsc i kluczowe osoby | Pilne |
| Pierwsze 30 dni | Rozbite na tygodnie 2-4 | Dobra koncepcja, treść zbyt skrótowa | Uzupełnić checklistę e-dziennika, PSO, wymagania, pierwsze zasady pracy z klasą i konsultacje | Pilne |
| Miesiące 2-3 | Obecne jako `miesiac-2.html` | Częściowa | Dodać komunikację z rodzicami, przygotowanie zebrania, analizę sprawdzianów i dokumentowanie kontaktów | Pilne |
| Koniec pierwszego półrocza | Obecne jako `polrocze-1.html` | Częściowa | Dodać pełną procedurę klasyfikacji, bilans, IPR, rozmowę 5 i kartę refleksji | Pilne |
| Drugie półrocze | Obecne jako `polrocze-2.html` | Częściowa | Dodać warsztat dydaktyczny, metody aktywizujące, zarządzanie klasą, obserwacje lekcji i feedback | Ważne |
| Koniec roku | Obecne jako `koniec-roku.html` | Częściowa | Dodać pełną rozmowę 9, ewaluację programu, cele na rok 2, zamknięcie dokumentów i awans jako skrót operacyjny | Pilne |
| Rola mentora | Obecna w strefie mentora i zadaniach | Częściowa | Dodać osobną podstronę lub moduł: kompetencje mentora, granice roli, mentoring nie jest kontrolą | Pilne |
| Rola nauczyciela początkującego | Obecna w przełączniku i zadaniach | Częściowa | Dodać centrum nauczyciela: moje zadania, pytania do mentora, przygotowanie do rozmów, karty refleksji | Ważne |
| Rola dyrekcji i koordynatora | Prawie nieobecna | Niska | Dodać trzecią perspektywę lub sekcję administracyjną: decyzje, terminy, ewaluacja programu, mapa kontaktów | Ważne |
| 9 spotkań mentorskich | Strona ma 4 scenariusze rozmów | Częściowa | Utworzyć osobny moduł „9 spotkań” z agendami, czasem, celem, pytaniami i kartą po spotkaniu | Pilne |
| Kontrakt mentoringowy | Wspomniany pośrednio | Niska | Dodać kartę kontraktu: zasady poufności, częstotliwość, kanały kontaktu, granice roli | Pilne |
| Model OWP | Pojawia się pośrednio w rozmowach | Częściowa | Dodać interaktywny trener feedbacku: obserwacja, wpływ, pytanie, przykłady dobrych i złych komunikatów | Ważne |
| Fazy relacji mentoringowej | Nieobecne jako osobny element | Brak | Dodać oś faz: inicjacja, stabilizacja, kryzys, wzrost, integracja; powiązać z działaniami mentora | Ważne |
| Arkusz obserwacji lekcji | Wspomniany, brak pełnego narzędzia | Niska | Dodać kartę obserwacji do druku i cyfrowy kreator rozmowy po obserwacji | Pilne |
| Karty refleksji miesięcznej | Miniankieta jest obecna | Częściowa | Dodać miesięczne karty refleksji z pytaniami z podręcznika, najlepiej do druku/eksportu | Ważne |
| Indywidualny Plan Rozwoju | Wspomniany przy półroczu | Niska | Dodać moduł IPR: obszary, ocena 1-5, 3 cele, termin, wsparcie | Pilne |
| Ankieta ewaluacyjna programu | Miniankieta adaptacji częściowo pokrywa temat | Częściowa | Dodać ankietę ewaluacyjną programu dla końca pierwszego półrocza i końca roku | Ważne |
| Mapa kontaktów | Brak jako narzędzie | Brak | Dodać lokalną mapę kontaktów z rolami, kiedy kontaktować, bez wpisywania danych osobowych w kodzie publicznym | Ważne |
| FAQ nowego nauczyciela | Obecne jako krótkie FAQ | Częściowa | Rozwinąć FAQ o agresję ucznia, trudnego rodzica, ucznia w kryzysie, dokumenty, godziny pracy, klasyfikację | Ważne |
| Komunikacja z rodzicami | Obecna w bazie i procedurach | Częściowa | Dodać scenariusze wiadomości, plan zebrania, strukturę trudnej rozmowy i dokumentowanie kontaktu | Pilne |
| Uczeń w kryzysie | Obecny w triage i bazie | Dobra, ale zbyt krótka | Rozwinąć o granice roli nauczyciela, eskalację, kontakt z pedagogiem/psychologiem, dokumentowanie zdarzenia | Pilne |
| Trudna klasa | Obecna w triage i bazie | Częściowa | Dodać mikroprocedury: wejście, sygnał uwagi, normy, rozmowa po lekcji, kiedy włączyć wychowawcę | Ważne |
| Dostosowania | Obecne w bazie i tygodniu 3 | Częściowa | Dodać checklistę: gdzie sprawdzić, kto wyjaśnia, jak uwzględnić w ocenianiu i planowaniu lekcji | Ważne |
| Klasyfikacja półroczna i roczna | Obecna na podstronach i w bazie | Częściowa | Dodać checklistę terminów, zagrożeń, rad, arkuszy i kontroli wpisów | Pilne |
| Prawo, awans, wynagrodzenie | Obecne w bazie | Częściowa, wymaga ostrożności | Zaktualizować zgodnie z oficjalnymi źródłami, nie podawać niepewnych stawek ani lokalnych dat | Pilne |
| Dobre praktyki europejskie | Obecne w formie akordeonów | Częściowa | Powiązać każdą praktykę z konkretnym elementem wdrożenia, np. wellbeing, buddy, feedback | Ważne |
| Źródła | Obecne w `baza-wiedzy.html` | Dobra | Dodać także podręcznik DOCX jako źródło lokalne i oddzielić źródła prawne od inspiracyjnych | Ważne |
| Materiały do pobrania | Jest sekcja materiałów, ale bez rzeczywistych plików PDF/DOCX | Częściowa | Wygenerować karty do druku: kontrakt, obserwacja, refleksja, IPR, karta spotkania, mapa kontaktów | Pilne |

## 5. Lista braków

### Braki pilne

- Pełne 9 spotkań mentorskich jako oddzielny moduł, nie tylko 4 ogólne scenariusze.
- Kontrakt mentoringowy.
- Arkusz obserwacji lekcji z pełnymi sekcjami z podręcznika.
- Indywidualny Plan Rozwoju.
- Rozwinięcie podstron etapów z 6 krótkich kart do pełnych kart operacyjnych.
- Materiały do druku lub eksportu, zwłaszcza: karta spotkania, karta refleksji, IPR, arkusz obserwacji, mapa kontaktów.
- Aktualizacja treści prawno-awansowych w bazie wiedzy z linkami do oficjalnych źródeł.
- Wyraźne oznaczenie, które treści są uniwersalne, a które lokalne dla ZSZ5.

### Braki ważne

- Trzecia perspektywa: dyrekcja/koordynator programu.
- Fazy relacji mentoringowej.
- Trener informacji zwrotnej OWP.
- Rozwinięcie komunikacji z rodzicami o przykłady wiadomości i strukturę rozmowy.
- Miesięczne karty refleksji od września do czerwca.
- Ankieta ewaluacyjna programu.
- Rozbudowane FAQ na podstawie załącznika B.
- Mapa kontaktów jako wzór do wypełnienia poza stroną.

### Braki opcjonalne

- Krótkie filmy instruktażowe.
- Nagrania audio z poradami mentora.
- Animowane infografiki etapów.
- Quizy sprawdzające znajomość procedur.
- Tryb prezentacyjny dla szkolenia mentorów.

## 6. Docelowa struktura strony

### 1. Start

Cel: użytkownik od razu wybiera rolę i widzi aktualny kierunek pracy.

Elementy:

- wybór: mentor, nauczyciel początkujący, dyrekcja/koordynator,
- skrót: „co zrobić teraz?”,
- wejście do mapy procesu,
- wejście do narzędzi spotkania,
- informacja, że notatki prowadzi się poza stroną lub eksportuje/drukuje.

### 2. Mapa drogowa wdrożenia

Cel: pokazać cały rok jako proces.

Etapy:

1. Przed pierwszym dniem.
2. Pierwszy tydzień.
3. Pierwsze 30 dni.
4. Miesiące 2-3.
5. Koniec pierwszego półrocza.
6. Drugie półrocze.
7. Koniec roku.

Obecne strony tygodniowe mogą zostać, ale powinny być podpięte pod te 7 etapów z podręcznika jako mikroetapy.

### 3. Centrum mentora

Cel: mentor widzi proces, spotkania, ryzyka i narzędzia.

Sekcje:

- rola mentora i granice odpowiedzialności,
- 9 spotkań mentorskich,
- kontrakt mentoringowy,
- checklista tygodniowa,
- arkusz obserwacji lekcji,
- model OWP,
- fazy relacji mentoringowej,
- mapa ryzyk.

### 4. Centrum nauczyciela początkującego

Cel: nauczyciel widzi swoje zadania i pytania do przygotowania.

Sekcje:

- moje zadania w etapach,
- dokumenty i terminy,
- pytania do mentora,
- miesięczne karty refleksji,
- przygotowanie do obserwacji lekcji,
- przygotowanie do klasyfikacji,
- plan rozwoju.

### 5. Centrum dyrekcji/koordynatora

Cel: administracyjne utrzymanie programu.

Sekcje:

- przypisanie mentora,
- harmonogram 9 spotkań,
- kontrola minimalnych punktów programu,
- ankieta ewaluacyjna,
- rekomendacje do kolejnej edycji,
- źródła i aktualizacja dokumentów.

### 6. Etapy wdrożenia

Każda podstrona etapu powinna mieć:

- cel etapu,
- kontekst z podręcznika,
- zadania mentora,
- zadania nauczyciela,
- decyzje dyrekcji, jeśli występują,
- agenda rozmowy,
- checklisty,
- dokumenty/procedury,
- ryzyka,
- typowe pytania,
- mini-przykłady,
- materiały do druku,
- sekcję „zapisz poza stroną”.

### 7. Spotkania mentor-nauczyciel

Osobna podstrona `spotkania.html`.

Układ:

- lista 9 spotkań,
- filtr według miesiąca/etapu,
- cel, czas, agenda,
- pytania mentora,
- karta ustaleń do druku,
- powiązane materiały z bazy wiedzy.

### 8. Obserwacje lekcji

Osobna podstrona `obserwacje.html`.

Układ:

- przygotowanie do obserwacji,
- arkusz obserwacji,
- rozmowa po obserwacji,
- OWP,
- przykłady informacji zwrotnej,
- plan działania po obserwacji.

### 9. Narzędzia

Podstrona lub sekcja narzędzi:

- kontrakt mentoringowy,
- karta spotkania,
- karta refleksji miesięcznej,
- IPR,
- ankieta ewaluacyjna,
- mapa kontaktów,
- checklista klasyfikacji,
- karta trudnej rozmowy z rodzicem,
- karta ucznia w kryzysie,
- karta dziennika wdrożenia poza stroną.

### 10. Baza wiedzy

Obecna baza jest dobrym początkiem. Należy ją rozbudować o:

- źródła z podręcznika,
- status aktualności prawnej,
- podział: procedury, dydaktyka, relacje, dobrostan, prawo, materiały lokalne,
- wyszukiwarkę/filtrowanie po roli i etapie.

## 7. Elementy interaktywne

| Element | Po co | Dla kogo | Powiązanie z podręcznikiem | Łatwość wdrożenia | Priorytet |
|---|---|---|---|---|---|
| Interaktywna oś czasu procesu | Pokazuje, gdzie użytkownik jest w roku i co go czeka | Mentor, nauczyciel, dyrekcja | Część I, 7 etapów | Średnia | Pilne |
| Przełącznik roli z trzecią rolą dyrekcji | Rozdziela odpowiedzialności | Wszyscy | Instrukcja użycia podręcznika | Średnia | Ważne |
| Checklisty etapowe bez stałego zapisu | Pomagają pracować na spotkaniu bez obietnicy trwałego przechowywania | Mentor, nauczyciel | Część I i II | Łatwa | Pilne |
| Karty 9 spotkań | Zamienia podręcznik w narzędzie rozmowy | Mentor | Część II | Średnia | Pilne |
| Kreator agendy spotkania | Dobiera agendę według etapu i roli | Mentor | 9 spotkań | Średnia | Ważne |
| Karta kontraktu mentoringowego do druku | Ustala zasady współpracy | Mentor, nauczyciel | Spotkanie 1 | Łatwa | Pilne |
| Arkusz obserwacji lekcji | Wspiera obserwację i rozmowę po lekcji | Mentor, dyrekcja | Część III | Średnia | Pilne |
| Trener informacji zwrotnej OWP | Uczy formułowania feedbacku bez oceniania | Mentor | Model OWP | Średnia | Ważne |
| Miesięczne karty refleksji | Utrzymują rytm autorefleksji | Nauczyciel | Karty refleksji | Łatwa | Ważne |
| IPR jako formularz do druku/eksportu | Pomaga ustalić cele rozwojowe | Mentor, nauczyciel | IPR | Średnia | Pilne |
| Ankieta ewaluacyjna programu | Zbiera informację o skuteczności programu | Dyrekcja, koordynator | Ankieta ewaluacyjna | Średnia | Ważne |
| Scenariusze trudnych sytuacji | Dają gotowy sposób reakcji | Mentor, nauczyciel | FAQ i procedury | Średnia | Ważne |
| Miniquiz procedur | Sprawdza, czy nauczyciel wie, co robić | Nauczyciel | e-dziennik, rodzice, kryzys | Średnia | Opcjonalne |
| Wyszukiwarka treści | Szybkie znalezienie procedury | Wszyscy | Całość | Już częściowo obecna | Ważne |
| Filtrowanie materiałów według roli i etapu | Skraca czas szukania | Mentor, nauczyciel | Całość | Średnia | Ważne |
| Tryb do druku | Umożliwia realne użycie na spotkaniu | Wszyscy | Narzędzia wspólne | Średnia | Pilne |
| Eksport wybranej karty do PDF/drukowania | Pozwala pracować poza stroną | Wszyscy | Karty pracy | Średnia | Ważne |
| Podpowiedzi kontekstowe | Wyjaśniają skróty i procedury | Nauczyciel | Baza wiedzy | Łatwa | Ważne |
| Akordeony z przykładami | Ograniczają tekst na ekranie | Wszyscy | FAQ, praktyki, procedury | Już częściowo obecne | Ważne |
| Infografiki etapów | Ułatwiają orientację w procesie | Wszyscy | Etapy | Już obecne | Ważne |

### Zasada zapisu danych

Nie rekomenduję `localStorage` ani ukrytego zapisywania notatek w przeglądarce. To byłoby niespójne z założeniem, że strona ma być statycznym narzędziem bez backendu i nie powinna udawać systemu dokumentowania pracy. Bezpieczniejsze rozwiązania:

- stan checklist tylko w bieżącej sesji,
- druk widoku,
- eksport pojedynczej karty do PDF przez `window.print()`,
- opcjonalny eksport/import pliku JSON tylko jako świadoma akcja użytkownika, jeśli później zostanie zaakceptowana.

## 8. Rozwinięcia treści

### Etapy

Każda podstrona etapu powinna dostać pełniejsze treści:

- „Na czym polega etap” jako krótki opis operacyjny,
- „Co mentor sprawdza”,
- „Co nauczyciel ma zrobić”,
- „Na co uważać”,
- „Pytania do rozmowy”,
- „Dokumenty i decyzje”,
- „Kiedy włączyć dyrekcję/pedagoga/psychologa/sekretariat”,
- „Karta do druku”.

### Spotkania mentorskie

Dopisać dla każdego z 9 spotkań:

- cel,
- czas,
- przygotowanie mentora,
- przygotowanie nauczyciela,
- agenda minutowa,
- pytania otwierające,
- pytania diagnostyczne,
- typowe ryzyka,
- ustalenia po spotkaniu,
- linki do powiązanych narzędzi.

### Komunikacja z rodzicami

Dodać:

- przykłady rzeczowych komunikatów,
- schemat wiadomości w e-dzienniku,
- plan zebrania z rodzicami,
- struktura trudnej rozmowy,
- kiedy włączać wychowawcę lub dyrekcję,
- zasada dokumentowania ustaleń.

### Obserwacja lekcji

Dodać:

- przygotowanie przed obserwacją,
- kryteria obserwacji z podręcznika,
- pytania do rozmowy po obserwacji,
- przykład informacji zwrotnej w modelu OWP,
- wybór 1-2 obszarów do rozwoju,
- plan sprawdzenia po 2-3 tygodniach.

### Dobrostan i obciążenie

Dodać:

- sygnały przeciążenia,
- rozmowę o granicach pracy,
- ustalanie priorytetów,
- zasady obsługi wiadomości i dziennika,
- krótką kartę rozmowy wellbeing.

### Awans i prawo

Dodać jako ostrożny skrót:

- aktualny link do Karty Nauczyciela,
- linki do wzorów dokumentów awansu,
- wyraźne oznaczenie: „sprawdź aktualny stan prawny i lokalne procedury szkoły”,
- brak niepewnych stawek i dat lokalnych.

## 9. Warstwa multimedialna

| Multimedia | Cel | Miejsce | Powiązanie z podręcznikiem | Priorytet |
|---|---|---|---|---|
| Animowana mapa roku | Pokazać przebieg procesu i punkty kontrolne | Start, mapa procesu | Część I | Ważne |
| Infografika 9 spotkań | Ułatwić mentorowi planowanie cyklu | `spotkania.html` | Część II | Pilne |
| Grafika roli mentora | Pokazać mentor jako przewodnik, nie kontroler | Centrum mentora | Rola mentora | Ważne |
| Grafika faz relacji | Pokazać zmianę wsparcia w czasie | Centrum mentora | Fazy relacji | Ważne |
| Schemat OWP | Uczyć feedbacku | Obserwacje, centrum mentora | Model OWP | Pilne |
| Infografika obserwacji lekcji | Pokazać cykl: przygotowanie, obserwacja, rozmowa, działanie | `obserwacje.html` | Arkusz obserwacji | Pilne |
| Karty procesowe PDF | Dać materiały na spotkania | Narzędzia, materiały | Część III | Pilne |
| Krótkie filmy instruktażowe | Pokazać, jak prowadzić rozmowę lub obserwację | Spotkania, obserwacje | Część II/III | Opcjonalne |
| Nagrania audio „wskazówka mentora” | Szybkie wsparcie przed rozmową | Etapy i spotkania | Część II | Opcjonalne |
| Mini-prezentacja dla mentorów | Pomoc w szkoleniu mentorów | Materiały | Całość programu | Opcjonalne |
| Schemat procedur trudnych sytuacji | Szybka decyzja: kto, kiedy, co dokumentować | Narzędzia, baza wiedzy | FAQ i procedury | Pilne |

Obecne grafiki G01-G16 są funkcjonalne i powinny zostać. Brakuje grafik dla: 9 spotkań, kontraktu mentoringowego, OWP, faz relacji, arkusza obserwacji, IPR i mapy kontaktów.

## 10. UX/UI

### Co działa

- Użytkownik ma jasny start i widzi wybór roli.
- Kolorystyczne rozróżnienie mentora i nauczyciela jest obecne.
- Mapa drogi i linki do podstron etapów dobrze rozwiązują problem orientacji.
- Strona nie jest już statycznym dokumentem.
- Mobilna nawigacja jest przewidziana.

### Co wymaga poprawy

- Podstrony etapów są za krótkie i mają zbyt podobny układ. Użytkownik widzi strukturę, ale nie dostaje jeszcze pełnej treści operacyjnej z podręcznika.
- Brakuje panelu „użyj na spotkaniu teraz”, który prowadzi mentora przez agendę rozmowy.
- Strefa mentora i nauczyciela powinna działać nie tylko na stronie głównej, ale też na podstronach etapów.
- Brakuje roli dyrekcji/koordynatora, mimo że podręcznik wskazuje tę grupę jako użytkownika części monitorującej.
- Sekcja materiałów sugeruje materiały operacyjne, ale nie dostarcza jeszcze realnych plików do pobrania lub druku.
- Miniankieta adaptacji jest użyteczna, ale nie pokrywa pełnych miesięcznych kart refleksji z podręcznika.
- Wyszukiwarka działa na głównej stronie, ale baza wiedzy i etapowe podstrony powinny mieć również filtrowanie po roli/etapie.

### Konkretne poprawki UX/UI

- Dodać pasek kontekstu na każdej podstronie: aktualna rola, etap, najbliższe spotkanie, powiązane narzędzia.
- Na każdej podstronie dodać przyciski: „Otwórz kartę spotkania”, „Drukuj checklistę”, „Przejdź do bazy wiedzy”.
- Dodać widok „spotkanie mentorskie” bez rozpraszaczy: cel, agenda, pytania, ustalenia do zapisania poza stroną.
- Dodać etykiety typu: „dla mentora”, „dla nauczyciela”, „dla dyrekcji”.
- Rozbić dłuższe treści na akordeony i karty.
- Wprowadzić stały komponent „Ryzyko / reakcja / kto pomaga”.
- Dodać `@media print` dla kart pracy.
- Uporządkować nazwy etapów tak, aby mikroetapy tygodniowe nie konkurowały z 7 etapami podręcznika.

## 11. Plan wdrożenia zmian

### Etap 1: Zgodność z podręcznikiem

- Rozszerzyć treść wszystkich podstron etapów.
- Dodać `spotkania.html` z 9 spotkaniami.
- Dodać `narzedzia.html` albo rozbudować sekcję narzędzi o kontrakt, obserwację, refleksję, IPR i ankietę.
- Uzupełnić bazę wiedzy o źródło DOCX i rozdział „status aktualności prawnej”.
- Zaktualizować treści awansu i prawa jako skrót operacyjny z linkami.
- Dodać mapę kontaktów jako wzór do druku, bez wpisywania danych osobowych w kodzie.

### Etap 2: Interaktywność

- Rozbudować przełącznik roli o dyrekcję/koordynatora.
- Dodać filtrowanie kart po roli i etapie.
- Dodać komplet checklist etapowych jako komponent danych.
- Dodać kreator karty spotkania.
- Dodać formularze ekranowe bez trwałego zapisu i z opcją druku.
- Dodać trener OWP.
- Dodać obsługę `window.print()` dla wybranych kart.

### Etap 3: Multimedia

- Dodać grafiki dla 9 spotkań, OWP, faz relacji, obserwacji, IPR i mapy kontaktów.
- Przygotować PDF/DOCX do pobrania: kontrakt, karta spotkania, arkusz obserwacji, karta refleksji, IPR, ankieta.
- Dodać krótkie animacje tylko tam, gdzie wspierają zrozumienie procesu.
- Przygotować opcjonalne filmy instruktażowe dla rozmowy inauguracyjnej, obserwacji lekcji i trudnej rozmowy z rodzicem.

### Etap 4: Dopracowanie doświadczenia użytkownika

- Przetestować ścieżkę mentora od wejścia na stronę do przeprowadzenia spotkania.
- Przetestować ścieżkę nauczyciela od wejścia na stronę do przygotowania pytań i refleksji.
- Przetestować ścieżkę dyrekcji od przypisania mentora do ewaluacji programu.
- Sprawdzić mobile 390 px i 430 px.
- Sprawdzić wydruk kart pracy.
- Usunąć powtórzenia, zbyt ogólne teksty i elementy bez związku z podręcznikiem.

## 12. Rekomendacje techniczne

### HTML

- Dodać `spotkania.html`.
- Dodać `obserwacje.html`.
- Dodać `narzedzia.html` lub rozbudować istniejącą sekcję narzędzi do osobnej podstrony.
- Dodać `centrum-mentora.html`, `centrum-nauczyciela.html`, opcjonalnie `centrum-dyrekcji.html`, jeśli strona ma mieć jasne ścieżki roli.
- Rozszerzyć wszystkie podstrony etapów o sekcje: agenda rozmowy, checklisty, materiały, powiązana baza wiedzy, narzędzia do druku.
- Dodać linki krzyżowe między etapami, spotkaniami, narzędziami i bazą wiedzy.

### CSS

- Dodać mocniejsze style kontekstowe dla trzech ról: mentor, nauczyciel, dyrekcja.
- Dodać style dla kart do druku.
- Dodać `@media print` ukrywające nawigację i zostawiające tylko wybraną kartę pracy.
- Dodać komponenty: timeline spotkań, formularz IPR, arkusz obserwacji, karta kontaktu, karta OWP.
- Ujednolicić karty etapów, aby były czytelne na telefonie i nie wyglądały jak powtarzalne streszczenia.

### JavaScript

- Przenieść dane etapów, spotkań, narzędzi i bazy wiedzy do osobnych struktur danych lub plików JS.
- Dodać obsługę roli dyrekcji.
- Dodać filtrowanie po roli, etapie i typie materiału.
- Dodać renderer 9 spotkań.
- Dodać renderer kart do druku.
- Dodać prostą funkcję drukowania aktywnej karty.
- Dodać trener OWP: pola ekranowe mogą istnieć, ale bez stałego zapisu; wynik można wydrukować.
- Nie dodawać `localStorage` ani ukrytego cache.

### Nowe dane/sekcje

- `meetingsData`: 9 spotkań z czasem, celem, agendą, pytaniami i materiałami.
- `toolsData`: kontrakt, karta spotkania, obserwacja, refleksja, IPR, ankieta, mapa kontaktów.
- `stageData`: pełne dane etapów według struktury podręcznika.
- `knowledgeData`: karty wiedzy z tagami roli i etapu.
- `riskData`: trudna klasa, rodzic, uczeń w kryzysie, dokumentacja, klasyfikacja, przeciążenie.

### Elementy do lokalnego zapisu

Domyślnie: brak trwałego lokalnego zapisu.  
Do wdrożenia zamiast tego:

- druk aktywnej karty,
- eksport karty przez dialog drukowania do PDF,
- pobieralne wzory PDF/DOCX,
- opcjonalny import/eksport pliku JSON tylko po osobnej decyzji projektowej.

### Elementy do druku

- kontrakt mentoringowy,
- karta spotkania mentoringowego,
- arkusz obserwacji lekcji,
- karta refleksji miesięcznej,
- Indywidualny Plan Rozwoju,
- ankieta ewaluacyjna programu,
- mapa kontaktów,
- checklista klasyfikacji,
- karta trudnej rozmowy z rodzicem,
- karta postępowania przy uczniu w kryzysie.

### Elementy multimedialne do przygotowania

- infografika 9 spotkań,
- infografika OWP,
- infografika faz relacji mentoringowej,
- grafika obserwacji lekcji,
- grafika IPR,
- grafika mapy kontaktów,
- grafika roli dyrekcji/koordynatora,
- zestaw ikon: spotkanie, obserwacja, dokumentacja, rodzic, klasa, kryzys, dobrostan, klasyfikacja, awans.

## 13. Priorytety

### Pilne

- Rozszerzyć podstrony etapów o pełne treści z podręcznika.
- Dodać 9 spotkań mentorskich.
- Dodać kontrakt mentoringowy.
- Dodać arkusz obserwacji lekcji.
- Dodać IPR.
- Dodać tryb do druku dla kart pracy.
- Uporządkować treści prawne i awansowe z linkami do aktualnych źródeł.
- Dodać realne materiały do pobrania lub druku.

### Ważne

- Dodać perspektywę dyrekcji/koordynatora.
- Rozbudować bazę wiedzy i filtrowanie.
- Dodać fazy relacji mentoringowej.
- Dodać trener OWP.
- Rozwinąć FAQ i procedury trudnych sytuacji.
- Rozbudować komunikację z rodzicami.
- Dodać miesięczne karty refleksji i ankietę ewaluacyjną.
- Przygotować brakujące infografiki.

### Opcjonalne

- Krótkie filmy instruktażowe.
- Audio-wskazówki.
- Quizy proceduralne.
- Tryb prezentacyjny do szkolenia mentorów.
- Eksport/import pliku danych jako świadoma funkcja użytkownika.

## 14. Źródła sprawdzone w analizie

- Lokalne: `podrecznik_wdrozeniowy_ZSZ5_v2.docx`.
- Lokalne: `index.html`, `baza-wiedzy.html`, podstrony etapów, `app.js`, `styles.css`, katalog `grafiki/`.
- Oficjalne źródło prawne: https://eli.gov.pl/eli/DU/1982/19/
- Oficjalne materiały Gov.pl dotyczące awansu: https://www.gov.pl/web/cea/awans-zawodowy-nowe-przepisy
