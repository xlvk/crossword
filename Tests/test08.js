import { crosswordSolverTest } from './crosswordSolverTest.js';
const puzzle = ''
const words = ['casa', 'alan', 'ciao', 'anta']
const result = crosswordSolverTest(puzzle, words)
const expected = `Error
`
console.log('')
console.log('casa', 'alan', 'ciao', 'anta')
console.log("Expected results:\n"+expected)
console.log("Actual results:\n"+result)
if (result===expected) {
    console.log("Passed!")
} else {
    console.log("Failed...")
}