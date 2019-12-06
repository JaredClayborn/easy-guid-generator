module.exports = {
    generateGuid: (brackets) => {
        const sizes = [8,4,4,4,12]
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
    },

    emptyGuid: (brackets) => {
        let emptyGuid = '00000000-0000-0000-0000-000000000000'
        return brackets === true ? `{${emptyGuid}}` : emptyGuid
    },

    generateMultipleGuids: (numToGen, brackets) => {
        let guids = []
        for (let i = 0; i < numToGen; i++) {
            guids.push(this.generateGuid(brackets))
        }

        return guids
    }
}