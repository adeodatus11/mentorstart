const state = {
  role: "mentor",
  taskView: "mentor",
  checked: {},
  stage: "before",
};

const stageContent = {
  mentor: {
    before: {
      title: "Potwierdź pakiet startowy przed pierwszym dniem",
      body: "Zamknij dane wejściowe: kontakt, plan pierwszego dnia, klasy, sale, dostęp do dziennika i termin pierwszej rozmowy.",
      question: "Których informacji nauczyciel nadal nie ma przed wejściem do szkoły?",
      risk: "Brak danych wejściowych opóźnia start pracy i generuje błędy organizacyjne.",
      page: "tydzien-0.html",
    },
    week1: {
      title: "Uruchom dostępy i procedury codzienne",
      body: "Sprawdź dziennik, pocztę, klucze, sale, plan zajęć, zgłaszanie nieobecności i podstawowe kontakty.",
      question: "Który dostęp albo procedura blokuje samodzielną pracę?",
      risk: "Niejasne zasady dziennika, kluczy i zastępstw generują problemy od pierwszego tygodnia.",
      page: "tydzien-1.html",
    },
    week2: {
      title: "Sprawdź rytm dziennika i pierwsze klasy",
      body: "Zweryfikuj wpisy w dzienniku, pierwsze doświadczenia z klasami, kontakt z wychowawcami i pytania do procedur.",
      question: "W której klasie trzeba szybko skonsultować zasady pracy albo zachowanie uczniów?",
      risk: "Odkładanie dziennika i brak konsultacji z wychowawcą utrwala błędy.",
      page: "tydzien-2.html",
    },
    week3: {
      title: "Domknij PSO i wymagania edukacyjne",
      body: "Skontroluj status PSO, wymagań edukacyjnych, planu wynikowego i zasad oceniania dla klas.",
      question: "Który dokument ma najbliższy termin i kto go zatwierdza?",
      risk: "Brak jasnych zasad oceniania komplikuje pierwsze oceny i kontakt z rodzicami.",
      page: "tydzien-3.html",
    },
    week4: {
      title: "Ustal procedury reakcji i wsparcia",
      body: "Przećwicz ścieżki: rodzic, trudna klasa, uczeń w kryzysie, wypadek, zwolnienie ucznia, dostosowania.",
      question: "Która procedura musi zostać pokazana praktycznie, nie tylko opisana?",
      risk: "Brak ścieżki eskalacji powoduje, że nauczyciel zostaje sam z decyzją proceduralną.",
      page: "tydzien-4.html",
    },
    month2: {
      title: "Przejdź od adaptacji do samodzielnego rytmu pracy",
      body: "Zaplanuj obserwację lekcji, kontrolę obciążenia, pracę z klasami i aktualizację dziennika wdrożenia.",
      question: "Jaką jedną praktykę warto zaobserwować u mentora lub nauczyciela doświadczonego?",
      risk: "Brak obserwacji i informacji zwrotnej ogranicza rozwój praktyki w drugim miesiącu.",
      page: "miesiac-2.html",
    },
    halfYear1: {
      title: "Przygotuj klasyfikację półroczną",
      body: "Zweryfikuj terminy ocen, arkusze, kompletność wpisów, informowanie rodziców i gotowość do rady klasyfikacyjnej.",
      question: "Które klasy, oceny lub wpisy wymagają kontroli przed radą?",
      risk: "Najczęstsze błędy to spóźnione oceny, niepełne obecności i brak informacji do rodziców.",
      page: "polrocze-1.html",
    },
    halfYear2: {
      title: "Wzmocnij obserwacje, awans i samodzielność",
      body: "Skontroluj dokumenty awansu, obserwacje lekcji, zadania rozwojowe i przygotowanie końca roku.",
      question: "Które materiały lub obserwacje trzeba zebrać przed końcem roku?",
      risk: "Odkładanie dokumentów awansu i obserwacji na czerwiec utrudnia zamknięcie roku.",
      page: "polrocze-2.html",
    },
    year: {
      title: "Zamknij rok i ewaluację wdrożenia",
      body: "Sprawdź oceny roczne, dokumentację, sprawozdanie, wnioski z onboardingu i plan rozwoju na kolejny rok.",
      question: "Które elementy procesu trzeba poprawić przed następną edycją?",
      risk: "Bez ewaluacji wiedza z pilotażu nie przechodzi do kolejnej edycji programu.",
      page: "koniec-roku.html",
    },
  },
  teacher: {
    before: {
      title: "Zbierz informacje wymagane przed pierwszym dniem",
      body: "Sprawdź miejsce i godzinę rozpoczęcia, kontakt do mentora, plan pierwszego dnia, klasy, sale i dostęp do dziennika.",
      question: "Których danych brakuje: mentor, plan, klasy, dziennik, sale, klucze?",
      risk: "Brak podstawowych informacji organizacyjnych opóźnia rozpoczęcie pracy.",
      page: "tydzien-0.html",
    },
    week1: {
      title: "Uruchom dostęp do codziennej pracy",
      body: "Zaloguj się do dziennika, sprawdź klasy, sale, klucze, pocztę, zastępstwa i terminy spotkań.",
      question: "Który dostęp albo procedurę trzeba jeszcze potwierdzić z mentorem?",
      risk: "Niejasne zasady dziennika i zastępstw powodują błędy administracyjne.",
      page: "tydzien-1.html",
    },
    week2: {
      title: "Ustabilizuj prowadzenie lekcji i dziennika",
      body: "Sprawdź kompletność tematów, obecności, pierwszych ocen oraz kontakt z wychowawcami klas.",
      question: "Która klasa wymaga omówienia z wychowawcą albo mentorem?",
      risk: "Brak bieżących wpisów w dzienniku szybko tworzy zaległości.",
      page: "tydzien-2.html",
    },
    week3: {
      title: "Przygotuj dokumenty oceniania",
      body: "Zamknij PSO, wymagania edukacyjne, plan wynikowy i zasady informowania uczniów oraz rodziców.",
      question: "Komu i w jakim terminie przekazać dokumenty oceniania?",
      risk: "Niejasne wymagania utrudniają pierwsze oceny i komunikację z rodzicami.",
      page: "tydzien-3.html",
    },
    week4: {
      title: "Poznaj ścieżki interwencji",
      body: "Ustal, co robić przy trudnej klasie, trudnym rodzicu, uczniu w kryzysie, wypadku i zwolnieniu ucznia.",
      question: "Którą procedurę trzeba przećwiczyć na przykładzie?",
      risk: "Nieznajomość osoby odpowiedzialnej opóźnia reakcję w sytuacji trudnej.",
      page: "tydzien-4.html",
    },
    month2: {
      title: "Rozwijaj praktykę i zbieraj informację zwrotną",
      body: "Zaplanuj obserwację lekcji, omówienie własnych zajęć, kontrolę obciążenia i listę obszarów do rozwoju.",
      question: "Jaką sytuację z lekcji warto omówić z mentorem?",
      risk: "Brak informacji zwrotnej utrudnia korektę pracy z klasą.",
      page: "miesiac-2.html",
    },
    halfYear1: {
      title: "Przygotuj dane do klasyfikacji półrocznej",
      body: "Sprawdź oceny, obecności, tematy, arkusze, informację dla rodziców i terminy rady klasyfikacyjnej.",
      question: "Które klasy wymagają uzupełnienia ocen, obecności lub tematów?",
      risk: "Największe ryzyko to brak kompletu wpisów przed terminem rady.",
      page: "polrocze-1.html",
    },
    halfYear2: {
      title: "Porządkuj awans, obserwacje i koniec roku",
      body: "Zbieraj dokumenty awansu, skorzystaj z obserwacji lekcji i zaplanuj zamknięcie dokumentacji rocznej.",
      question: "Jakie dokumenty i obserwacje muszą być gotowe przed końcem roku?",
      risk: "Zbyt późne porządkowanie dokumentów utrudnia spokojne zamknięcie roku.",
      page: "polrocze-2.html",
    },
    year: {
      title: "Zamknij dokumentację i plan rozwoju",
      body: "Zbierz dokumenty stażu, oceny roczne, wnioski z pracy z klasami i obszary rozwoju na kolejny rok.",
      question: "Jakie decyzje muszą być zamknięte przed zakończeniem roku?",
      risk: "Niezamknięta dokumentacja utrudnia awans i przygotowanie kolejnego roku.",
      page: "koniec-roku.html",
    },
  },
  director: {
    before: {
      title: "Przypisz mentora i potwierdź komplet wejściowy",
      body: "Sprawdź decyzję o mentorze, przekazanie danych kadrowych, dostęp do systemów i osobę odpowiedzialną za pierwszy dzień.",
      question: "Czy nauczyciel zna mentora, plan startu i osobę do spraw formalnych?",
      risk: "Brak decyzji organizacyjnych przed startem przenosi chaos na mentora i nauczyciela.",
      page: "tydzien-0.html",
    },
    week1: {
      title: "Upewnij się, że wdrożenie ruszyło zgodnie z planem",
      body: "Zweryfikuj, czy odbyło się spotkanie inauguracyjne, czy nauczyciel ma dostępy i czy termin cyklu rozmów jest ustalony.",
      question: "Czy pierwszy tydzień zakończył się bez blokad administracyjnych?",
      risk: "Brak pierwszej kontroli dyrekcji powoduje niewidoczne zaległości w dostępach i dokumentach.",
      page: "tydzien-1.html",
    },
    week2: {
      title: "Skontroluj pierwsze ryzyka dokumentacyjne",
      body: "Sprawdź, czy mentor zgłosił problemy z dziennikiem, klasami, wychowawcami lub procedurami codziennymi.",
      question: "Czy są klasy albo procedury wymagające decyzji dyrekcji?",
      risk: "Nieeskalowane problemy z pierwszych klas wracają przy klasyfikacji i kontaktach z rodzicami.",
      page: "tydzien-2.html",
    },
    week3: {
      title: "Dopilnuj dokumentów oceniania",
      body: "Upewnij się, że nauczyciel wie, kto przyjmuje PSO, wymagania edukacyjne i dokumenty zespołu przedmiotowego.",
      question: "Czy terminy i osoba przyjmująca dokumenty są jednoznaczne?",
      risk: "Niejasne wymagania formalne generują poprawki i niepotrzebny stres we wrześniu.",
      page: "tydzien-3.html",
    },
    week4: {
      title: "Zweryfikuj ścieżki bezpieczeństwa i interwencji",
      body: "Sprawdź, czy nauczyciel zna pedagoga, psychologa, wychowawcę, sekretariat i ścieżki eskalacji sytuacji trudnych.",
      question: "Czy każdy wie, kiedy sprawa wychodzi poza relację mentor-nauczyciel?",
      risk: "Nauczyciel zostaje sam z decyzją, która wymaga wsparcia specjalisty lub dyrekcji.",
      page: "tydzien-4.html",
    },
    month2: {
      title: "Sprawdź regularność mentoringu i obserwacji",
      body: "Potwierdź realizację spotkań, pierwszych obserwacji i rozmów o obciążeniu pracą.",
      question: "Czy program ma rytm, czy działa tylko reaktywnie?",
      risk: "Bez kontroli rytmu mentoring staje się doraźną pomocą zamiast procesem.",
      page: "miesiac-2.html",
    },
    halfYear1: {
      title: "Zamknij kontrolę pierwszego półrocza",
      body: "Zweryfikuj gotowość do klasyfikacji, IPR, ankietę programu i wnioski do drugiego półrocza.",
      question: "Jakie procedury trzeba wyjaśnić przed drugim półroczem?",
      risk: "Brak bilansu półrocznego osłabia drugą część programu.",
      page: "polrocze-1.html",
    },
    halfYear2: {
      title: "Monitoruj samodzielność i dokumentację rozwojową",
      body: "Sprawdź obserwacje, informację zwrotną, materiały awansowe i obciążenie zadaniami dodatkowymi.",
      question: "Czy nauczyciel ma warunki do samodzielnej pracy bez przeciążenia?",
      risk: "Zbyt późna reakcja dyrekcji utrwala przeciążenie albo braki formalne.",
      page: "polrocze-2.html",
    },
    year: {
      title: "Zamknij ewaluację programu wdrożeniowego",
      body: "Zbierz ankietę, rekomendacje mentora i nauczyciela oraz decyzje do kolejnej edycji programu.",
      question: "Co zmieniamy w programie przed następnym rokiem?",
      risk: "Bez ewaluacji program nie przenosi wiedzy do kolejnej edycji.",
      page: "koniec-roku.html",
    },
  },
};

const modules = {
  orientacja: {
    number: "Moduł 01",
    title: "Orientacja: dane wejściowe procesu wdrożenia",
    text:
      "Komplet informacji przed rozpoczęciem pracy: kontakt, plan pierwszego dnia, klasy, sale, dziennik elektroniczny, klucze i osoby pierwszego kontaktu.",
    tags: ["kontakt", "dostępy", "sale", "plan dnia"],
  },
  szkola: {
    number: "Moduł 02",
    title: "Organizacja szkoły: osoby, rytm roku i kanały decyzyjne",
    text:
      "Kto odpowiada za plan, zastępstwa, dokumenty, uczniów z trudnościami, sprawy techniczne i kontakt z rodzicami.",
    tags: ["struktura", "kalendarz", "odpowiedzialności"],
  },
  dokumenty: {
    number: "Moduł 03",
    title: "Dokumenty: dziennik, PSO, klasyfikacja i awans",
    text:
      "Bieżące wpisy w dzienniku, wymagania edukacyjne, PSO, dostosowania, arkusze klasyfikacyjne, dokumenty stażu i terminy formalne.",
    tags: ["dziennik", "PSO", "klasyfikacja", "awans"],
  },
  mentoring: {
    number: "Moduł 04",
    title: "Mentoring: cykl spotkań i kontrola ustaleń",
    text:
      "Spotkanie startowe, kontrola po 2 tygodniach, rozmowa po miesiącu, podsumowanie półrocza i zamknięcie roku.",
    tags: ["agenda", "ustalenia", "obserwacje"],
  },
  sytuacje: {
    number: "Moduł 05",
    title: "Sytuacje wymagające reakcji",
    text:
      "Klasa, rodzic, uczeń w kryzysie, wypadek i zwolnienie ucznia opisane jako ścieżki działania, eskalacji i dokumentowania.",
    tags: ["reakcja", "eskalacja", "notatka"],
  },
  dobrostan: {
    number: "Moduł 06",
    title: "Obciążenie pracą: priorytety i granice",
    text:
      "Monitorowanie pracy po godzinach, zaległości w dokumentacji, priorytetów i obciążenia zadaniami dodatkowymi.",
    tags: ["priorytety", "czas pracy", "samoocena"],
  },
};

const tasks = {
  mentor: [
    {
      id: "m-before",
      step: "0",
      title: "Przed pierwszym dniem",
      meta: "pakiet startowy",
      href: "tydzien-0.html",
      items: [
        "Przekazać kontakt do mentora, sekretariatu i osoby od spraw kadrowych.",
        "Potwierdzić godzinę, miejsce wejścia i plan pierwszego dnia.",
        "Sprawdzić informację o klasach, przedmiotach i salach.",
        "Ustalić termin pierwszej rozmowy wdrożeniowej.",
      ],
    },
    {
      id: "m-week1",
      step: "1",
      title: "Tydzień 1",
      meta: "dostępy i procedury",
      href: "tydzien-1.html",
      items: [
        "Sprawdzić logowanie do dziennika, poczty i dostęp do klas.",
        "Pokazać klucze, sale, zgłaszanie usterek i zastępstwa.",
        "Ustalić cykl spotkań mentorskich.",
        "Sprawdzić termin 14 dni na wniosek, jeżeli dotyczy.",
      ],
    },
    {
      id: "m-week2",
      step: "2",
      title: "Tydzień 2",
      meta: "dziennik i pierwsze klasy",
      href: "tydzien-2.html",
      items: [
        "Sprawdzić tematy, obecności i pierwsze wpisy w dzienniku.",
        "Omówić klasy wymagające kontaktu z wychowawcą.",
        "Ustalić zasady dokumentowania rozmów z rodzicami.",
        "Zebrać pytania do procedur codziennych.",
      ],
    },
    {
      id: "m-week3",
      step: "3",
      title: "Tydzień 3",
      meta: "PSO i wymagania",
      href: "tydzien-3.html",
      items: [
        "Sprawdzić PSO i wymagania edukacyjne.",
        "Omówić plan wynikowy i terminy przekazania dokumentów.",
        "Zweryfikować zasady oceniania i informowania uczniów.",
        "Sprawdzić źródło informacji o uczniach z dostosowaniami.",
      ],
    },
    {
      id: "m-week4",
      step: "4",
      title: "Tydzień 4",
      meta: "procedury reakcji",
      href: "tydzien-4.html",
      items: [
        "Przećwiczyć procedurę trudnego rodzica i trudnej klasy.",
        "Wskazać pedagoga, psychologa i procedurę kryzysową.",
        "Omówić wypadek, zasłabnięcie i zwolnienie ucznia.",
        "Zamknąć miesięczne podsumowanie w dzienniku wdrożenia.",
      ],
    },
    {
      id: "m-month2",
      step: "M2",
      title: "Miesiąc 2",
      meta: "obserwacje i samodzielność",
      href: "miesiac-2.html",
      items: [
        "Zaplanować obserwację lekcji mentora lub nauczyciela doświadczonego.",
        "Omówić jedną lekcję nauczyciela początkującego.",
        "Sprawdzić obciążenie i pracę po godzinach.",
        "Ustalić cele rozwojowe do półrocza.",
      ],
    },
    {
      id: "m-half1",
      step: "P1",
      title: "Półrocze 1",
      meta: "klasyfikacja półroczna",
      href: "polrocze-1.html",
      items: [
        "Sprawdzić kompletność tematów, obecności i ocen.",
        "Omówić informowanie rodziców o zagrożeniach.",
        "Przygotować klasy wymagające dodatkowej kontroli.",
        "Ustalić cele na drugie półrocze.",
      ],
    },
    {
      id: "m-half2",
      step: "P2",
      title: "Półrocze 2",
      meta: "awans i obserwacje",
      href: "polrocze-2.html",
      items: [
        "Sprawdzić dokumentowanie dorobku zawodowego.",
        "Zaplanować obserwacje i informację zwrotną.",
        "Zweryfikować przygotowanie końca roku.",
        "Ustalić zakres wsparcia po pierwszym roku.",
      ],
    },
    {
      id: "m-year",
      step: "R",
      title: "Koniec roku",
      meta: "zamknięcie i ewaluacja",
      href: "koniec-roku.html",
      items: [
        "Sprawdzić oceny roczne i dokumentację.",
        "Podsumować proces wdrożenia.",
        "Zebrać rekomendacje dla kolejnej edycji.",
        "Ustalić plan rozwoju na kolejny rok.",
      ],
    },
  ],
  teacher: [
    {
      id: "t-before",
      step: "0",
      title: "Przed pierwszym dniem",
      meta: "dane wejściowe",
      href: "tydzien-0.html",
      items: [
        "Mam kontakt do mentora, sekretariatu i osoby od spraw kadrowych.",
        "Wiem, gdzie i o której mam się stawić.",
        "Znam klasy, sale i plan pierwszego dnia.",
        "Wiem, jak uzyskać dostęp do dziennika.",
      ],
    },
    {
      id: "t-week1",
      step: "1",
      title: "Tydzień 1",
      meta: "dostępy",
      href: "tydzien-1.html",
      items: [
        "Zalogowałem/am się do dziennika i poczty.",
        "Wiem, gdzie są sale i jak pobierać klucze.",
        "Znam wychowawców moich klas.",
        "Wiem, jak zgłosić nieobecność.",
      ],
    },
    {
      id: "t-week2",
      step: "2",
      title: "Tydzień 2",
      meta: "dziennik i klasy",
      href: "tydzien-2.html",
      items: [
        "Prowadzę tematy i obecności na bieżąco.",
        "Mam listę pytań do wychowawców.",
        "Wiem, jak dokumentować kontakt z rodzicem.",
        "Znam procedurę zastępstw.",
      ],
    },
    {
      id: "t-week3",
      step: "3",
      title: "Tydzień 3",
      meta: "dokumenty oceniania",
      href: "tydzien-3.html",
      items: [
        "Mam PSO albo właściwy szablon.",
        "Znam termin oddania wymagań edukacyjnych.",
        "Mam plan wynikowy lub wiem, jak go przygotować.",
        "Znam źródło informacji o dostosowaniach.",
      ],
    },
    {
      id: "t-week4",
      step: "4",
      title: "Tydzień 4",
      meta: "procedury trudnych sytuacji",
      href: "tydzien-4.html",
      items: [
        "Wiem, co zrobić przy trudnym rodzicu.",
        "Wiem, kiedy włączyć wychowawcę.",
        "Znam kontakt do pedagoga i psychologa.",
        "Mam pytania do rozmowy po pierwszym miesiącu.",
      ],
    },
    {
      id: "t-month2",
      step: "M2",
      title: "Miesiąc 2",
      meta: "rozwój praktyki",
      href: "miesiac-2.html",
      items: [
        "Obserwuję lekcję mentora lub nauczyciela doświadczonego.",
        "Omawiam jedną własną lekcję.",
        "Porządkuję dokumenty awansu, jeśli dotyczy.",
        "Ustalam priorytety na kolejne tygodnie.",
      ],
    },
    {
      id: "t-half1",
      step: "P1",
      title: "Półrocze 1",
      meta: "klasyfikacja",
      href: "polrocze-1.html",
      items: [
        "Mam uzupełnione tematy, obecności i oceny.",
        "Znam terminy klasyfikacji.",
        "Dokumentuję ważne rozmowy z rodzicami poza stroną.",
        "Odbyłem/am rozmowę podsumowującą półrocze.",
      ],
    },
    {
      id: "t-half2",
      step: "P2",
      title: "Półrocze 2",
      meta: "samodzielność",
      href: "polrocze-2.html",
      items: [
        "Zbieram dokumenty do awansu, jeśli dotyczy.",
        "Korzystam z informacji zwrotnej po obserwacji.",
        "Planuję zamknięcie roku.",
        "Ustalam obszary rozwoju na kolejny rok.",
      ],
    },
    {
      id: "t-year",
      step: "R",
      title: "Koniec roku",
      meta: "zamknięcie",
      href: "koniec-roku.html",
      items: [
        "Mam komplet ocen rocznych i dokumentacji.",
        "Złożyłem/am sprawozdanie, jeśli dotyczy.",
        "Przekazałem/am wnioski o procesie wdrożenia.",
        "Mam plan rozwoju na kolejny rok.",
      ],
    },
  ],
  director: [
    {
      id: "d-before",
      step: "0",
      title: "Przed pierwszym dniem",
      meta: "decyzje startowe",
      href: "tydzien-0.html",
      items: [
        "Wyznaczony mentor i kanał kontaktu.",
        "Przekazane informacje kadrowe i organizacyjne.",
        "Dostępy do systemów skierowane do realizacji.",
        "Pierwsze spotkanie wpisane do kalendarza.",
      ],
    },
    {
      id: "d-week1",
      step: "1",
      title: "Tydzień 1",
      meta: "kontrola uruchomienia",
      href: "tydzien-1.html",
      items: [
        "Potwierdzone logowanie do dziennika i poczty.",
        "Mentor odbył rozmowę inauguracyjną.",
        "Nauczyciel zna kluczowe osoby i procedury.",
        "Nie ma blokad w planie, salach i klasach.",
      ],
    },
    {
      id: "d-month",
      step: "30",
      title: "Pierwsze 30 dni",
      meta: "ryzyka formalne",
      href: "tydzien-4.html",
      items: [
        "PSO i wymagania mają jasny termin i odbiorcę.",
        "Nauczyciel zna ścieżki pomocy przy trudnych sytuacjach.",
        "Mentor zgłosił ryzyka wymagające decyzji.",
        "Program spotkań ma ustalony rytm.",
      ],
    },
    {
      id: "d-half",
      step: "P1",
      title: "Półrocze 1",
      meta: "bilans i IPR",
      href: "polrocze-1.html",
      items: [
        "Klasyfikacja jest przygotowana bez braków krytycznych.",
        "Spotkanie bilansowe i IPR są wpisane do kalendarza.",
        "Ankieta programu została przeprowadzona.",
        "Wnioski do drugiego półrocza są zapisane poza stroną.",
      ],
    },
    {
      id: "d-year",
      step: "R",
      title: "Koniec roku",
      meta: "ewaluacja programu",
      href: "koniec-roku.html",
      items: [
        "Zebrano ankietę końcową.",
        "Mentor i nauczyciel przekazali rekomendacje.",
        "Zamknięto dokumenty i decyzje awansowe, jeśli dotyczą.",
        "Ustalono aktualizacje programu na kolejny rok.",
      ],
    },
  ],
};

const scenarios = {
  first: {
    title: "Pierwsza rozmowa: dane wejściowe i organizacja pracy",
    lead:
      "Cel: potwierdzić komplet informacji potrzebnych do rozpoczęcia pracy i ustalić tryb kontaktu mentorskiego.",
    steps: [
      "Sprawdź plan pierwszego tygodnia, klasy, sale, dziennik i pocztę.",
      "Wyjaśnij klucze, zgłaszanie nieobecności, zastępstwa i kontakt z sekretariatem.",
      "Ustal kanał kontaktu z mentorem i częstotliwość spotkań.",
      "Zapisz brakujące informacje w dzienniku wdrożenia prowadzonym poza stroną.",
    ],
  },
  twoWeeks: {
    title: "Po 2 tygodniach: kontrola dziennika i pierwszych klas",
    lead:
      "Cel: sprawdzić, czy nauczyciel prowadzi dokumentację i potrafi wskazać pierwsze trudności organizacyjne.",
    steps: [
      "Sprawdź tematy, obecności i dostęp do klas.",
      "Omów kontakt z wychowawcami.",
      "Nazwij jedną sytuację wymagającą decyzji.",
      "Ustal zadanie do zamknięcia przed tygodniem 3.",
    ],
  },
  month: {
    title: "Po miesiącu: dokumenty, ocenianie i procedury",
    lead:
      "Cel: zamknąć sprawy pierwszego miesiąca i sprawdzić gotowość do dalszej pracy.",
    steps: [
      "Sprawdź PSO, wymagania edukacyjne i plan wynikowy.",
      "Omów ocenianie, klasy, rodziców i procedury interwencji.",
      "Sprawdź znajomość pedagoga, psychologa i ścieżki kryzysowej.",
      "Zaplanuj obserwację lekcji albo informację zwrotną.",
    ],
  },
  halfYear: {
    title: "Koniec półrocza: klasyfikacja i dokumentacja",
    lead:
      "Cel: sprawdzić gotowość do rady klasyfikacyjnej i ustalić działania na drugie półrocze.",
    steps: [
      "Sprawdź terminy ocen, arkuszy, wpisów w dzienniku i rady.",
      "Zweryfikuj informowanie rodziców.",
      "Zidentyfikuj klasy lub procedury wymagające wsparcia.",
      "Ustal dwa zadania rozwojowe i sposób monitorowania.",
    ],
  },
};

const questionSets = {
  adaptacja: [
    "Które zadanie organizacyjne nie jest jeszcze zamknięte?",
    "Które informacje trzeba potwierdzić z dyrekcją, sekretariatem albo wychowawcą?",
    "Co powinno znaleźć się w agendzie kolejnego spotkania mentorskiego?",
  ],
  dokumenty: [
    "Który dokument jest najpilniejszy w tym tygodniu?",
    "Czy jest gotowy szablon PSO lub wymagań edukacyjnych?",
    "Które terminy klasyfikacyjne trzeba wpisać do kalendarza?",
  ],
  klasa: [
    "W której klasie występuje najwięcej problemów organizacyjnych?",
    "Która zasada pracy wymaga konsekwentnego egzekwowania?",
    "Czy jest uczeń, o którym warto porozmawiać z wychowawcą?",
  ],
  rodzice: [
    "Czy była rozmowa z rodzicem, którą warto udokumentować?",
    "Kiedy trzeba włączyć wychowawcę, pedagoga albo dyrekcję?",
    "Jak napisać wiadomość rzeczowo, jasno i z odniesieniem do faktów?",
  ],
  dobrostan: [
    "Które zadania są wykonywane po godzinach i dlaczego?",
    "Czy dziennik i wiadomości mają ustalone godziny obsługi?",
    "Które zadania można odłożyć, przekazać lub zaplanować w kalendarzu?",
  ],
};

const triage = {
  class: {
    title: "Klasa nie reaguje",
    body:
      "Działanie: zatrzymaj eskalację, zmień formę pracy, porozmawiaj po lekcji z konkretnymi uczniami. Eskalacja: jeśli sytuacja powtarza się przez kilka lekcji, włącz wychowawcę i mentora.",
  },
  parent: {
    title: "Trudny rodzic",
    body:
      "Działanie: nie prowadź sporu, zaproponuj rozmowę z wychowawcą, zakończ eskalację. Dokumentacja: zapisz datę, temat, ustalenia i osoby obecne.",
  },
  crisis: {
    title: "Uczeń w kryzysie",
    body:
      "Działanie: przekaż informację pedagogowi lub psychologowi, wychowawcy i dyrekcji. Eskalacja: przy bezpośrednim zagrożeniu zdrowia lub życia wezwij pomoc.",
  },
};

function setRole(role) {
  if (!stageContent[role]) role = "mentor";
  state.role = role;
  state.taskView = role;
  document.body.classList.toggle("role-mentor", role === "mentor");
  document.body.classList.toggle("role-teacher", role === "teacher");
  document.body.classList.toggle("role-director", role === "director");
  const labels = {
    mentor: "Mentor",
    teacher: "Nauczyciel początkujący",
    director: "Dyrekcja / koordynator",
  };
  const roleLabel = document.getElementById("currentRoleLabel");
  if (roleLabel) roleLabel.textContent = labels[role];
  document.querySelectorAll("[data-role]").forEach((button) => {
    button.classList.toggle("active", button.dataset.role === role);
  });
  document.querySelectorAll("[data-zone]").forEach((zone) => {
    zone.classList.toggle("active", zone.dataset.zone === role);
  });
  document.querySelectorAll("[data-role-copy]").forEach((copy) => {
    copy.hidden = copy.dataset.roleCopy !== role;
  });
  document.querySelectorAll(".view-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === state.taskView);
  });
  updateStage();
  renderTasks();
}

function updateStage() {
  if (!document.getElementById("nextActionTitle")) return;
  const content = stageContent[state.role][state.stage];
  document.getElementById("nextActionTitle").textContent = content.title;
  document.getElementById("nextActionBody").textContent = content.body;
  document.getElementById("nextQuestion").textContent = content.question;
  document.getElementById("nextRisk").textContent = content.risk;
  document.getElementById("stageDetailLink").href = content.page;
  document.querySelectorAll(".stage-pill").forEach((pill) => {
    pill.classList.toggle("active", pill.dataset.stage === state.stage);
  });
}

function renderModule(moduleId) {
  const module = modules[moduleId];
  const detail = document.getElementById("moduleDetail");
  detail.innerHTML = `
    <div>
      <p class="eyebrow">${module.number}</p>
      <h3>${module.title}</h3>
      <p>${module.text}</p>
    </div>
    <ul class="tag-list">
      ${module.tags.map((tag) => `<li>${tag}</li>`).join("")}
    </ul>
  `;
}

function renderTasks() {
  const board = document.getElementById("taskBoard");
  if (!board) return;
  board.innerHTML = tasks[state.taskView]
    .map(
      (task) => `
      <article class="task-card" data-search-card>
        <header>
          <span>${task.step}</span>
          <div>
            <h3>${task.title}</h3>
            <p class="eyebrow">${task.meta}</p>
          </div>
        </header>
        <div class="checklist">
          ${task.items
            .map((item, index) => {
              const id = `${task.id}-${index}`;
              return `
                <label class="check-item">
                  <input type="checkbox" data-check-id="${id}" ${state.checked[id] ? "checked" : ""} />
                  <span>${item}</span>
                </label>
              `;
            })
            .join("")}
        </div>
        <a class="task-link" href="${task.href}">Otwórz podstronę etapu <i data-lucide="arrow-up-right"></i></a>
      </article>
    `
    )
    .join("");
  if (window.lucide) window.lucide.createIcons();
}

function renderScenario(id = "first") {
  const scenario = scenarios[id];
  const card = document.getElementById("scenarioCard");
  if (!card || !scenario) return;
  card.innerHTML = `
    <h3>${scenario.title}</h3>
    <p>${scenario.lead}</p>
    <ol>${scenario.steps.map((step) => `<li>${step}</li>`).join("")}</ol>
  `;
}

function renderQuestions(id = "adaptacja") {
  const list = document.getElementById("questionList");
  if (!list || !questionSets[id]) return;
  list.innerHTML = questionSets[id]
    .map((question) => `<div class="question-card">${question}</div>`)
    .join("");
}

function updateSelfCheck() {
  if (!document.getElementById("selfCheckForm")) return;
  const values = [...document.querySelectorAll("#selfCheckForm input")].map((input) => Number(input.value));
  const score = Math.round(((values.reduce((sum, value) => sum + value, 0) - values.length) / (values.length * 4)) * 100);
  const weakestIndex = values.indexOf(Math.min(...values));
  const hints = [
    "Najbliższe spotkanie poświęć procedurom i osobom odpowiedzialnym.",
    "Omów konkretną klasę, zasadę pracy i warunek eskalacji do wychowawcy.",
    "Najbliższe spotkanie poświęć dokumentom, terminom i dziennikowi.",
    "Zweryfikuj obciążenie: dziennik, wiadomości, dodatkowe zadania i priorytety.",
  ];
  document.getElementById("selfCheckScore").textContent = `${score}%`;
  document.getElementById("selfCheckHint").textContent = hints[weakestIndex];
}

function ensureEuFooter() {
  if (document.querySelector(".eu-disclaimer-footer")) return;
  const footer = document.createElement("footer");
  footer.className = "eu-disclaimer-footer";
  footer.innerHTML = `
    <p>
      Finansowane przez Unię Europejską. Wyrażone poglądy i opinie są jednak wyłącznie poglądami autora/autorów
      i niekoniecznie odzwierciedlają stanowisko Unii Europejskiej ani Europejskiej Agencji Wykonawczej ds.
      Edukacji i Kultury (EACEA). Ani Unia Europejska, ani EACEA nie ponoszą za nie odpowiedzialności.
    </p>
  `;
  const target = document.querySelector("main") || document.body;
  target.appendChild(footer);
}

function ensureProjectStrip() {
  const shell = document.querySelector(".stage-shell");
  if (!shell || document.querySelector(".project-site-strip")) return;
  const strip = document.createElement("div");
  strip.className = "project-site-strip";
  strip.innerHTML = `
    <a href="index.html" class="project-strip-home" aria-label="Przejdź do strony głównej przewodnika">
      <strong>MentorStart</strong>
      <span>cyfrowy przewodnik wdrożeniowy</span>
    </a>
    <div class="project-strip-logos" aria-label="Logotypy projektu">
      <img src="assets/Logo-2025.png" alt="WIN4SMEs" />
      <img src="assets/cove-polska-logo.png" alt="COVE Polska" />
      <img src="assets/Orzeł + szkoła mistrzów.png" alt="ZSZ5 we Wrocławiu — Szkoła Mistrzów" />
      <img src="assets/PL_Co-fundedbytheEU_RGB_POS.png" alt="Finansowane przez Unię Europejską" />
    </div>
  `;
  shell.prepend(strip);
}

function setupEvents() {
  document.querySelectorAll("[data-scroll-target]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelector(button.dataset.scrollTarget)?.scrollIntoView({ behavior: "smooth" });
    });
  });

  document.querySelectorAll("[data-role]").forEach((button) => {
    button.addEventListener("click", () => setRole(button.dataset.role));
  });

  document.querySelectorAll(".stage-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      state.stage = pill.dataset.stage;
      updateStage();
    });
  });

  document.querySelectorAll(".process-node").forEach((node) => {
    node.addEventListener("click", () => {
      document.querySelectorAll(".process-node").forEach((item) => item.classList.remove("active"));
      node.classList.add("active");
      renderModule(node.dataset.module);
    });
  });

  document.querySelectorAll(".view-button").forEach((button) => {
    button.addEventListener("click", () => {
      state.taskView = button.dataset.view;
      document.querySelectorAll(".view-button").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderTasks();
    });
  });

  document.getElementById("taskBoard")?.addEventListener("change", (event) => {
    if (!event.target.matches("[data-check-id]")) return;
    state.checked[event.target.dataset.checkId] = event.target.checked;
  });

  document.querySelectorAll(".scenario-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".scenario-tab").forEach((item) => item.classList.remove("active"));
      tab.classList.add("active");
      renderScenario(tab.dataset.scenario);
    });
  });

  document.querySelectorAll(".question-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".question-chip").forEach((item) => item.classList.remove("active"));
      chip.classList.add("active");
      renderQuestions(chip.dataset.questionSet);
    });
  });

  document.querySelectorAll("#selfCheckForm input").forEach((input) => {
    input.addEventListener("input", updateSelfCheck);
  });

  document.querySelectorAll("[data-triage]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-triage]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      const item = triage[button.dataset.triage];
      const result = document.getElementById("triageResult");
      if (result) result.innerHTML = `<strong>${item.title}</strong><p>${item.body}</p>`;
    });
  });

  document.querySelectorAll(".accordion-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => trigger.classList.toggle("open"));
  });

  document.querySelector(".menu-toggle")?.addEventListener("click", () => {
    document.body.classList.toggle("sidebar-open");
  });

  document.querySelectorAll(".nav-link, .mobile-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      document.body.classList.remove("sidebar-open");
    });
  });

  document.getElementById("guideSearch")?.addEventListener("input", (event) => {
    const term = event.target.value.trim().toLowerCase();
    document.querySelectorAll("[data-search-card], .tool-card, .module-detail, .question-bank").forEach((card) => {
      card.classList.toggle("hidden-by-search", term && !card.textContent.toLowerCase().includes(term));
    });
  });

  const sections = [...document.querySelectorAll("main > .section[id]")];
  const links = [...document.querySelectorAll(".nav-link, .mobile-nav a")];
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: "-30% 0px -60% 0px" }
  );
  sections.forEach((section) => observer.observe(section));

  document.querySelectorAll("[data-print-target]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.querySelector(button.dataset.printTarget);
      document.querySelectorAll(".print-active").forEach((item) => item.classList.remove("print-active"));
      target?.classList.add("print-active");
      window.print();
      setTimeout(() => target?.classList.remove("print-active"), 300);
    });
  });
}

if (document.body.classList.contains("role-teacher")) state.role = "teacher";
if (document.body.classList.contains("role-director")) state.role = "director";
state.taskView = state.role;

renderTasks();
renderScenario();
renderQuestions();
updateSelfCheck();
ensureProjectStrip();
ensureEuFooter();
setupEvents();
setRole(state.role);
updateStage();

if (window.lucide) {
  window.lucide.createIcons();
}
