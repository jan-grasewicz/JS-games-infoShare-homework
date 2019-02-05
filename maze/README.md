# Maze

Let's build a game of maze explorer.

The main goal of the game is to find a tresure chest.

## Task 1

Let's assume we want to easily build a maze. 
We will store the maze data as an array:

```js
const maze = [
  '#########',
  '#.....#.#',
  '#.###..T#',
  '#..#..#.#',
  '#.#######',
  '#..#..P.#',
  '#.##.##.#',
  '#.....#.#',
  '#########',
]
```
- `.` - means the Path
- `#` - means the Wall
- `P` - means the Player
- `T` - means the Treasure

Try to take this array and build a game board in DOM.

## Task 2

Let's move the Player.
We want to use keys `W`, `S`, `A`, `D` to move players in all directions.

For now let's assume he is a ghost and it can go through walls.

## Task 3

Make the Walls solid - Player should not be able to go through them.

## Task 4

When Player enters the Treasure cell the game should end. Display an alert with "Success" message and restart the game so that the Player and Treasure go back to their initial places.

## Task 5

Prepare second level map. When Player collects Treasure from first level the alert with "Success" should be displayed and then Second Level map should be loaded.

