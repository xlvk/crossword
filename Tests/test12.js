import { crosswordSolverTest } from './crosswordSolverTest.js';
const puzzle = '2001\n0..0\n1000\n0..0'
const words = ['aaab', 'aaac', 'aaad', 'aaae']
const result = crosswordSolverTest(puzzle, words)
const expected = `Error
`
console.log('2001\n0..0\n1000\n0..0')
console.log('aaab', 'aaac', 'aaad', 'aaae')
console.log("Expected results:\n"+expected)
console.log("Actual results:\n"+result)
if (result===expected) {
    console.log("Passed!")
} else {
    console.log("Failed...")
}