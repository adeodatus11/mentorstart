# Onboarding nauczycieli — ZSZ nr 5 Wrocław

Strona projektu wdrożenia strukturalnego modelu onboardingu nauczycieli
w Zespole Szkół Zawodowych nr 5 we Wrocławiu, w ramach europejskiej
inicjatywy **WIN4SMEs** (Workplace Innovation for SMEs).

Autorzy: **Maciej Najwer**, **Wiesław Filipiak**

## Co tu jest

```
.
├── index.html        ← cała strona, jeden plik, bez build-stepa
├── assets/           ← logotypy: ZSZ5, COVE Polska, WIN4SMEs, EU
└── README.md
```

## Jak uruchomić lokalnie

Strona to czysty HTML/CSS/JS — nie wymaga żadnego build-stepa.

Wystarczy otworzyć `index.html` w przeglądarce, lub uruchomić prosty serwer:

```bash
# Python 3
python3 -m http.server 8000

# Node
npx serve .
```

## Publikacja na GitHub Pages

1. Wrzuć tę paczkę na nowe repo
2. Settings → Pages → Source: `Deploy from a branch` → `main` / `(root)`
3. Strona będzie dostępna pod `https://<twoj-login>.github.io/<nazwa-repo>/`

## Języki

Strona dostępna w 3 językach (przełącznik w prawym górnym rogu):

- 🇵🇱 Polski (domyślny)
- 🇬🇧 English
- 🇩🇪 Deutsch

Wybór języka jest zapamiętywany w `localStorage`.

## Linki zewnętrzne

- [win4smes.eu](https://win4smes.eu) — strona programu europejskiego
- [covepolska.pl](https://covepolska.pl) — partner programu
- [LinkedIn COVE Polska](https://www.linkedin.com/company/cove-polska)
- [Facebook COVE Polska](https://www.facebook.com/people/COVE-PolskaWIN4SMEs/61573736918326/)
- [YouTube — wideo wprowadzające](https://youtu.be/s3SoBvTP3i4)

## Finansowanie

Program wdrożenia współfinansowany przez Unię Europejską w ramach inicjatywy
WIN4SMEs (Workplace Innovation for SMEs).

> Sfinansowane przez Unię Europejską. Wyrażone poglądy i opinie są jednak
> wyłącznie poglądami autorów i niekoniecznie odzwierciedlają poglądy Unii
> Europejskiej lub Europejskiej Agencji Wykonawczej ds. Edukacji i Kultury
> (EACEA). Ani Unia Europejska, ani EACEA nie ponoszą za nie odpowiedzialności.

---

© 2026 ZSZ nr 5 Wrocław · WIN4SMEs
