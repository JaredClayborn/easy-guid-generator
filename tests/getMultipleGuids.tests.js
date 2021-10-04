const { generateMultipleGuids } = require('..')
const { guidWithBrackets, guidNoBrackets, getTestPassPercentage } = require('./testHelpers')
const failedTests = []
let passed = 0, failed = 0, testsRan = 0

const generateMultipleGuids_given4AndFalse_returns4GuidsWithNoBrackets = () => {
    testsRan++
    let correctNum = true, correctFormat = true
    const multipleGuids = generateMultipleGuids(4, false)
    if (multipleGuids.length !== 4) {
        correctNum = false
    }
    multipleGuids.forEach(g => {
        if (!g.match(guidNoBrackets)) {
            correctFormat = false
        }
    })

    return correctFormat && correctNum
}

const generateMultipleGuids_given5AndTrue_returns5GuidsWithBrackets = () => {
    testsRan++
    let correctNum = true, correctFormat = true
    const multipleGuids = generateMultipleGuids(5, true)
    if (multipleGuids.length !== 5) {
        correctNum = false
    }
    multipleGuids.forEach(g => {
        if (!g.match(guidWithBrackets)) {
            correctFormat = false
        }
    })


    return correctFormat && correctNum
}

const generateMultipleGuids_givenNoArguments_returnsEmptyArray = () => {
    testsRan++
    let correctNum = true, correctFormat = true
    const multipleGuids = generateMultipleGuids()
    if (multipleGuids.length) {
        correctNum = false
    }

    return correctFormat && correctNum
}

const generateMultipleGuids_given3AndStringArgument_returns3GuidsNoBrackets = () => {
    testsRan++
    let correctNum = true, correctFormat = true
    const multipleGuids = generateMultipleGuids(3, 'true')
    if (multipleGuids.length !== 3) {
        correctNum = false
    }
    multipleGuids.forEach(g => {
        if (!g.match(guidNoBrackets)) {
            correctFormat = false
        }
    })

    return correctFormat && correctNum
}

const funcs = [
    generateMultipleGuids_given4AndFalse_returns4GuidsWithNoBrackets,
    generateMultipleGuids_given5AndTrue_returns5GuidsWithBrackets,
    generateMultipleGuids_givenNoArguments_returnsEmptyArray,
    generateMultipleGuids_given3AndStringArgument_returns3GuidsNoBrackets
]

const runAllMultiple = () => {
    funcs.forEach(f => {
        if (f()) {
            passed++
        } else {
            failed++
            failedTests.push(f)
        }
    })
}

runAllMultiple()

console.log('File: getMultipleGuids.tests.js')
console.log(`Passed: ${passed}, Failed: ${failed}, % Passed: ${getTestPassPercentage(passed, testsRan)}`)
if (failedTests.length) {
    console.log(`Failed Tests: ${failedTests}`)
}
module.exports = {
    runAllMultiple
}