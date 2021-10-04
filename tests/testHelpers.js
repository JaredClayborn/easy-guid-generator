const guidNoBrackets = /^[0-9A-Z]{8}-([0-9A-Z]{4}-){3}[0-9A-Z]{12}$/
const guidWithBrackets = /^\{[0-9A-Z]{8}-([0-9A-Z]{4}-){3}[0-9A-Z]{12}\}$/

const getTestPassPercentage = (numPass, numTests) => {
    const p = numPass / numTests * 100
    return `${p}%`
}

module.exports = {
    guidWithBrackets,
    guidNoBrackets,
    getTestPassPercentage
}