const { generateGuid } = require("..")
const { guidNoBrackets, guidWithBrackets, getTestPassPercentage } = require("./testHelpers")
const failedTests = []
let passed = 0, failed = 0, testsRan = 0

const generateGuid_givenNoArgument_ReturnsGuidWithNoBracket = () => {
    testsRan++
    return generateGuid().match(guidNoBrackets)
}

const generateGuid_givenFalseArgument_ReturnsGuidWithNoBracket = () => {
    testsRan++
    return generateGuid(false).match(guidNoBrackets)
}

const generateGuid_givenTrueArgument_ReturnsGuidWithBrackets = () => {
    testsRan++
    return generateGuid(true).match(guidWithBrackets)
}

const generateGuid_givenStringTrueArgument_ReturnsGuidWithNoBracket = () => {
    testsRan++
    return generateGuid('true').match(guidNoBrackets)
}

const funcs = [
    generateGuid_givenNoArgument_ReturnsGuidWithNoBracket,
    generateGuid_givenFalseArgument_ReturnsGuidWithNoBracket,
    generateGuid_givenTrueArgument_ReturnsGuidWithBrackets,
    generateGuid_givenStringTrueArgument_ReturnsGuidWithNoBracket
]

const runAllGenerate = () => {
    funcs.forEach(f => {
        if (f()) {
            passed++
        } else {
            failed++
            failedTests.push(f)
        }
    })
}

runAllGenerate()

console.log(`File: generateGuid.tests.js`)
console.log(`Passed: ${passed}, Failed: ${failed}, % Passed: ${getTestPassPercentage(passed, testsRan)}`)
if (failedTests.length) {
    console.log(`FailedTests: ${failedTests}`)
}
module.exports = {
    runAllGenerate
}