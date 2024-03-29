const board = [] 
let solution = []
let solutionFound = false
let wordsIn = []
let inputArr = []
let wordCount = 0
let dimensionRow = 0
let dimensionCol = 0

export const crosswordSolverTest = (inputStr,inputWords) => { // Basically the main
    if (typeof inputStr !== 'string' || !Array.isArray(inputWords)) { // Verify input types
        return "Error\n"
    }
    let regex = /^[a-zA-Z]+$/ // Verify words are only comprised of letters
    for (let word of inputWords) {
        if (!regex.test(word)) {
            return "Error\n"
        }
    }
    // Assign inputs to global variables
    wordsIn = inputWords
    inputArr = inputStr.split('\n')
    dimensionRow = inputArr.length
    dimensionCol = inputArr[0].length
    wordCount = inputWords.length
    let numCount = 0
    // loop through the input and verify it 
    for (let row = 0; row < dimensionRow; row++) {
        board.push(".".repeat(dimensionCol).split(''))
        if (inputArr[row].length !== dimensionCol) {
            // console.log("Error: inconsistent column dimensions")
            return "Error\n"
        }
        inputArr[row] = inputArr[row].split('')
        for (let col = 0; col < dimensionCol; col++) {
            if (inputArr[row][col] > '0' && inputArr[row][col] <= '2') {
                numCount += inputArr[row][col] - '0'
            } else if (inputArr[row][col] !== '.' && inputArr[row][col] !== '0') {
                // console.log("Error: invalid characer detected")
                return "Error\n"
            } 
        }
    }
    // Verify number sum with word count
    if (numCount !== wordCount) {
        // console.log("Error: word count do not match board parameters")
        return "Error\n"
    }
    solveRecursive(0) // Solve using backtracking
    if (solution.length > 0) {
        let result = ""
        for (let i=0; i < dimensionRow; i++) {
            result = result + solution[i].join('') + "\n"
        }
        return result
    } else {
        //console.log("Error: No unique solutions found")
        return "Error\n"
    }
}


const solveRecursive = (wordIDX) => {
    if (wordIDX === wordCount && !solutionFound) { // Success condition
        for (let i=0; i < board.length; i++) {
            solution[i] = board[i].slice()
        }
        solutionFound = true
        return
    } else if (wordIDX === wordCount && solutionFound) { // Multiple solution condition
        solution = []
        return
    }
    // No solutions yet, loop through the board and try to place the word
    for (let row = 0; row < dimensionRow; row++) {
        for (let col = 0; col <= dimensionCol; col++) {
            if (inputArr[row][col] > '0') {
                if (safeVertical(wordIDX,row,col)) { // Try to place it vertically
                    inputArr[row][col] = inputArr[row][col] - 1
                    placeVertical(wordIDX,row,col)
                    solveRecursive(wordIDX+1)
                    // After recursion remove the piece and try another location
                    removeVertical(wordIDX,row,col)
                    inputArr[row][col]++
                }
                if (safeHorizontal(wordIDX,row,col)) { // Try to place it horizontally
                    inputArr[row][col]--
                    placeHorizontal(wordIDX,row,col)
                    solveRecursive(wordIDX+1)
                    // After recursion remove the piece and try another location
                    removeHorizontal(wordIDX,row,col)
                    inputArr[row][col]++
                }
            }
        }
    }
}

const safeVertical = (wordIDX,row,col) => {
    if (row+wordsIn[wordIDX].length > dimensionRow) {
        return false
    }
    for (let i=0; i < wordsIn[wordIDX].length; i++) {
        if ((inputArr[row+i][col] === '.') || (board[row+i][col] !== '.' && board[row+i][col] !== wordsIn[wordIDX][i])) {
            return false
        }
    }
    return true
}

const safeHorizontal = (wordIDX,row,col) => {
    if (col+wordsIn[wordIDX].length > dimensionCol) {
        return false
    }
    for (let i=0; i < wordsIn[wordIDX].length; i++) {
        if ((inputArr[row][col+i] === '.') || (board[row][col+i] !== '.'  && board[row][col+i] !== wordsIn[wordIDX][i])) {
            return false
        }
    }
    return true
}

const placeVertical = (wordIDX,row,col) => {
    for (let i=0; i < wordsIn[wordIDX].length; i++) {
        board[row+i][col] = wordsIn[wordIDX][i]
    }
}


const placeHorizontal = (wordIDX,row,col) => {
    for (let i=0; i < wordsIn[wordIDX].length; i++) {
        board[row][col+i] = wordsIn[wordIDX][i]
    }
}


const removeVertical = (wordIDX,row,col) => {
    for (let i=0; i < wordsIn[wordIDX].length; i++) {
        board[row+i][col] = '.'
    }
}


const removeHorizontal = (wordIDX,row,col) => {
    for (let i=0; i < wordsIn[wordIDX].length; i++) {
        board[row][col+i] = '.'
    }
}