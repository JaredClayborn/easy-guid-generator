# Easy Guid Generator

Generates a guid/multiple guids
This package includes a types file for typescript projects


## Installation

```javascript

npm install easy-guid-generator

```

##  Usage

```javascript
const { generateGuid, emptyGuid, generateMultipleGuids} = require('easy-guid-generator')

let guidWithBrackets = generateGuid(true)
let guidWithoutBrackets = generateGuid(false)
let guidNiceTry = generateGuid('true')
let emptyGuid = emptyGuid()
let multi = generateMultipleGuids(5, true)
```


## Output
```
console.log(guidWithBrackets) // "{EE151A55-51EE-0641-3999-15B5E6CC18F4}"
console.log(guidWithoutBrackets) // "301EEF86-FA8B-9E03-94E6-D2F7C81286C0"
console.log(guidNiceTry) // "E3819D76-7F93-71AE-9528-E02B83C402DB"
console.log(emptyGuid) // "00000000-0000-0000-0000-000000000000"
console.log(multi) // " ['{9703A3EC-5D25-301E-4C8F-5B6F85481937}', '{BBD97E0E-6AE1-D717-54E0-7085DB626833}', '{BBE1ABF3-5A57-7E55-C51D-5A9E8C528B0C}', '{2D860F97-DA72-B14F-1910-1ED2E8DB7AC1}', '{D099893A-2A86-0A6D-B2B8-1E28EF32E23D}']
```

## Testing

Open the project and run ```npm test```
This will print out a report of all current test files and passes/failures