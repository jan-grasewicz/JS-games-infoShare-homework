# Prace domowe

## React - weekend 22-24 lutego 2019 [homework-3]

1. Przygotuj nowe repozytorium na githubie (na swoim prywatnym koncie)
2. Zainicjuj projekt z użyciem `create-react-app` i zacommituj wersję bazową.
3. W komponencie `App` wyświetl listę osób na bazie danych, które są załączone poniżej:

```
[
  { 
    id: 1, 
    name: 'John',
    surname: 'Doe',
    phone: '123-456-789',
    isFavorite: false
  },
  {
    id: 2, 
    name: 'Steve',
    surname: 'Stevens',
    phone: '987-654-321',
    isFavorite: true
  }
]
```
4. Niech dane wyświetlają się w formie tabeli z kolumnami: 'Name', 'Surname', 'Phone'.
5. Niech osoba, która ma atrybut `isFavorite: true` będzie wyróżniona na liście (np. żółte tło)
6. Niech w tabeli pojawi się dodatkowa kolumna bez nagłówka, w której będą wyświetlane przyciski "Toggle favorite" (po jednym dla każdej osoby).
7. Niech kliknięcie przycisku zmienia `isFavorite` danej osoby z `true` na `false` albo z `false` na `true`.
8. Nad listą osób wstaw formularz, za pomocą którego będzie możliwe dodawanie nowych osób do listy (wskazówka: lista osób powinna być w `state` komponentu `App`).
9. Dodaj nowy przycisk w kolumnie z przyciskami: 'Remove contact', niech kliknięcie w niego usuwa daną osobę z listy.
10. (HARD) Spróbuj zrobić edycję kontaktów ;)

## Przerwa w kursie 11-15 lutego 2019 [homework-2]

- [ ] [Shooter](./shooter/README.md)
- [ ] [Maze](./maze/README.md)
- [ ] [Racer](./racer/README.md)
- [ ] [Memo](./memo/README.md)

---

## Weekend 19-20 stycznia 2019 [homework-1] 

### 1. Strona profilowa
Dokończ swoją stronę profilową zgodnie z wymaganiami zapisanymi w Twoim zadaniu na Jirze

#### Punktacja
- 1pkt - poprawny HTML
- 1pkt - poprawny CSS
- 1pkt - responsywne zachowanie layoutu

### 2. Layouty
Przećwicz budowanie layoutów z użyciem `flexbox` i `grid`. Layouty możesz zrealizować w dowolnej kolejności. Jeżeli chcesz odwzorować layout innej strony niż jedna z tych, które wymieniłem, to jest taka możliwość, jeżeli wcześniej mi to zadeklarujesz :)

#### Wskazówki i punktacja
1. Sklonuj to repozytorium
2. Załóż branch o nazwie `homework-1/[twój login z githuba]`
3. Utwórz w repozytorium folder `layouts`, a w nim plik `google.html`
4. Wykonaj pierwszy commit i push, tak, żeby Twój branch z folderem i plikiem google.html znalazł się w tym repozytorium.
5. Na tym etapie masz już **1pkt** na zachętę ;)
6. W pliku `google.html` postaraj się odwzorować layout strony głównej wyszukiwarki `google.com` 
  - **1pkt** logo, formularz i 2 przyciski
  - **1pkt** nawigacja w prawym górnym rogu
  - **1pkt** stopka na dole strony
7. Pamiętaj, że wynik Twojej pracy musi znaleźć się w formie commitów w repozytorium na githubie (nie zapomnij o `git push`)
8. Przygotuj podobnie plik `twitter.html`i odwzoruj w nim layout strony głównej `twitter.com` (zwróć uwagę na responsywność; interesuje mnie ekran rejestracyjny widoczny dla nowych użytkowników - nie musisz zakładać konta na Twitterze, jeżeli go nie masz)
  - **1pkt** layout desktopowy
  - **1pkt** layout mobilny
  - **1pkt** jakość kodu
9. Pamiętaj, że wynik Twojej pracy musi znaleźć się w formie commitów w repozytorium na githubie (nie zapomnij o `git push`)
10. Podobnie jak powyżej spróbuj odwzorować layout strony `https://infoshareacademy.com/` (wyzwanie: zrób ją lepiej) w pliku `infoshareacademy.html`

W razie pytań łapcie mnie na slacku :) Na rozwiązania czekam do poniedziałku do 9:00.

