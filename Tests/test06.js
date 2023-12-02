import { crosswordSolver } from './crosswordSolver.js';
const puzzle = '0001\n0..0\n3000\n0..0'
const words = ['casa', 'alan', 'ciao', 'anta']
let result = crosswordSolver(puzzle, words);
console.log(result);