import { crosswordSolverTest } from './crosswordSolverTest.js';
const puzzle = '0001\n0..0\n3000\n0..0'
const words = ['casa', 'alan', 'ciao', 'anta']
const result = crosswordSolverTest(puzzle, words)
const expected = `Error
`
console.log('0001\n0..0\n3000\n0..0')
console.log('casa', 'alan', 'ciao', 'anta')
console.log("Expected results:\n"+expected)
console.log("Actual results:\n"+result)
if (result===expected) {
    console.log("Passed!")
} else {
    console.log("Failed...")
}