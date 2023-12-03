import { crosswordSolverTest } from './crosswordSolverTest.js';
const puzzle = '2000\n0...\n0...\n0...'
const words = ['abba', 'assa']
const result = crosswordSolverTest(puzzle, words)
const expected = `Error
`
console.log('2000\n0...\n0...\n0...')
console.log('abba', 'assa')
console.log("Expected results:\n"+expected)
console.log("Actual results:\n"+result)
if (result===expected) {
    console.log("Passed!")
} else {
    console.log("Failed...")
}