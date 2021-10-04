const { emptyGuid } = require('..')
const { getTestPassPercentage } = require("./testHelpers")
const failedTests = []
let passed = 0, failed = 0, testsRan = 0
const emptyGuidString = '00000000-0000-0000-0000-000000000000'

const emptyGuid_givenNoArgument_shouldReturnAnEmptyGuidWithNoBrackets = () => {
    testsRan++
    return emptyGuid() == emptyGuidString
}

const emptyGuid_givenFalseArguemnt_shouldReturnAnEmptyGuidWithNoBrakets = () => {
    testsRan++
    return emptyGuid(false) == emptyGuidString
}

const emptyGuid_givenTrueArgument_shouldReturnAnEmptyGuidWithBrackets = () => {
    testsRan++
    return emptyGuid(true) == `{${emptyGuidString}}`
}

const emptyGuid_givenStringArgument_shouldReturnAnEmptyGuidWithNoBrackets = () => {
    testsRan++
    return emptyGuid('true') == emptyGuidString
}

const funcs = [
    emptyGuid_givenNoArgument_shouldReturnAnEmptyGuidWithNoBrackets,
    emptyGuid_givenFalseArguemnt_shouldReturnAnEmptyGuidWithNoBrakets,
    emptyGuid_givenTrueArgument_shouldReturnAnEmptyGuidWithBrackets,
    emptyGuid_givenStringArgument_shouldReturnAnEmptyGuidWithNoBrackets
]

const runAllEmpty = () => {
    funcs.forEach(f => {
        if (f()) {
            passed++
        } else {
            failed++
            failedTests.push(f)
        }
    })
}

runAllEmpty()

console.log('File: emptyGuid.tests.js')
console.log(`Passed: ${passed}, failed: ${failed}, % Passed: ${getTestPassPercentage(passed, testsRan)}`)
if (failedTests.length) {
    console.log(`Failed Tests: ${failedTests}`)
}
module.exports = {
    runAllEmpty
}