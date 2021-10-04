const generateGuid = function (brackets) {
    const sizes = [8, 4, 4, 4, 12]
    const possible = 'ABCDEF0123456789'
    let guid = ''
    sizes.forEach((size, index) => {
        if (index !== 0) {
            guid += '-'
        }
        for (let i = 0; i < size; i++) {
            guid += possible[Math.floor(Math.random() * 16)]
        }
    })

    return brackets === true ? `{${guid}}` : guid
}

const generateMultipleGuids = function (numGuids, brackets) {
    const guids = []
    for (let i = 0; i < numGuids; i++) {
        guids.push(generateGuid(brackets))
    }

    return guids
}

const emptyGuid = function (brackets) {
    let emptyGuid = '00000000-0000-0000-0000-000000000000'
    return brackets === true ? `{${emptyGuid}}` : emptyGuid
}

module.exports = {
    generateGuid,
    generateMultipleGuids,
    emptyGuid
}