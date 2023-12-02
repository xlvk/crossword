import { crosswordSolver } from './crosswordSolver.js';
const puzzle = '2000\n0...\n0...\n0...'
const words = ['abba', 'assa']
let result = crosswordSolver(puzzle, words);
console.log(result);