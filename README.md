# MentorStart — wdrożenie nauczycieli

Wielostronicowa witryna programu wdrożenia nauczycieli realizowanego w ramach
WIN4SMEs / COVE Polska przez Zespół Szkół Zawodowych nr 5 we Wrocławiu.

Serwis obejmuje osobne ścieżki dla:

- mentora,
- nauczyciela początkującego,
- dyrekcji i koordynatora,
- formularzy oraz materiałów do pobrania.

## Uruchomienie lokalne

Projekt jest statyczny i nie wymaga procesu budowania.

```bash
python3 -m http.server 8000
```

Następnie otwórz `http://localhost:8000`.

## Publikacja

Repozytorium jest publikowane przez GitHub Pages z gałęzi `main`, z katalogu
głównego. Domena niestandardowa jest ustawiona w pliku `CNAME`:

```text
mentor.covepolska.pl
```

Plik `.nojekyll` wyłącza przetwarzanie Jekyll.

## Struktura

```text
.
├── index.html
├── mentor/
├── nauczyciel/
├── dyrekcja/
├── formularze/
├── assets/
├── CNAME
└── .nojekyll
```

© 2026 ZSZ nr 5 Wrocław · WIN4SMEs / COVE Polska
