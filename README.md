## crossword

### Instructions

Create the function `crosswordSolver` that is able to solve an empty crossword puzzle. The function must be submitted in a file named `crosswordSolver.js`.

The function takes two arguments:

1. an empty puzzle, passed as a string and
2. a list of words to fill in the puzzle (no double words allowed)

The function must print on the console a string representing the puzzle filled with the input words.

The empty puzzle will be a string with the following rules:

- each character will be either a number, a `.` or a `\n`;
- a number represents the number of words starting from the specific position and a `.` represents a space that does not need to be filled.

If the puzzle or list of words provided as inputs does not guarantee a unique solution, or any other conditions stated above are not met, the function must print `'Error'`.

### Usage:

1. fill the puzzle and the words thtat you  want to put in the puzzle like that:

```
const puzzle = '2001\n0..0\n1000\n0..0'
const words = ['casa', 'alan', 'ciao', 'anta']
```

2. run it using `node` + `"the name of the file. (which is crosswordSolver.js)"`

### Examples

```js
const emptyPuzzle = `2001
0..0
1000
0..0`
const words = ['casa', 'alan', 'ciao', 'anta']

crosswordSolver(emptyPuzzle, words)

/* output:
`casa
i..l
anta
o..n`
*/
```

##### authers:

* Ammar Saeed (ammsaeed)
* Fatima Abbas (fatabbas)
* Yusuf Alajmi (yalajmi)
