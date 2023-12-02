import { crosswordSolver } from './crosswordSolver.js';
const puzzle = '2001\n0..0\n2000\n0..0'
const words = ['casa', 'alan', 'ciao', 'anta']
let result = crosswordSolver(puzzle, words);
console.log(result);