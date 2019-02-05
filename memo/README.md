# Memo game

Let's build a game of memory.

The board should be composed of 16 cards (8 pairs).

In the beginning cards are composed as a square (all covered): 

```
####
####
####
####
```

## Task 1

To start with the game try to build a board. 
Let's assume cards are numbers 1-8.

Try to render the board with numbers on cards.

```
1 1 2 2
3 3 4 4
5 5 6 6
7 7 8 8
```

## Task 2

Try to render the board with random order of cards. Let the order change after page refresh.

## Task 3

When user click card it should be highlighted. When user click another card both cards should be highlighted. 

If we have 2 cards highlighted user cannot click another card.

If cards are the same and are highlighted they should disappear after 1 second after second highlight.

If cards are different they should loose the highlight after 3 seconds.

## Task 4

Render cards the way they look like covered (we do not see the numbers). Replace highlight by the effect that shows the card number (uncovers it).

## Task 5

When there are no more cards the game should end and the board should be regenerated (with different random order). Page refresh is not allowed here.

## Task 6

Add timer and store the best time of solution in the localStorage so that when user visits the game next time he will se the last top score.