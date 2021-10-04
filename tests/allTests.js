const { runAllEmpty } = require('./emptyGuid.tests')
const { runAllMultiple } = require('./getMultipleGuids.tests')
const { runAllGenerate } = require('./generateGuid.tests')

const runAll = () => {
    runAllMultiple()
    runAllEmpty()
    runAllGenerate()
}