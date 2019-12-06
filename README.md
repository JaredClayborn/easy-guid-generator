# Easy Guid Generator

Generates a guid/multiple guids


## Installation

```javascript

npm install easy-guid-generator

```

 ##  Usage

```javascript
var easyGuidGenerator = require('easy-guid-generator');

var guidWithBrackets = easyGuidGenerator.generateGuid(true)
var guidWithoutBrackets = easyGuidGenerator.generateGuid(false)
var guidNiceTry = easyGuidGenerator.generateGuid('true')
var multiGuid = easyGuidGenerator.generateMultipleGuids(2, false)
var multiGuidWithBracket = easyGuidGenerator.generateMultipleGuids(2, true)
```


## Output
```
console.log(guidWithBrackets) // "{EE151A55-51EE-0641-3999-15B5E6CC18F4}"
console.log(guidWithoutBrackets) // "301EEF86-FA8B-9E03-94E6-D2F7C81286C0"
console.log(guidNiceTry) // "E3819D76-7F93-71AE-9528-E02B83C402DB"
console.log(multiGuid) // ["33F9E571-9AF6-F33E-F3B3-F7F026CA5558", "4F48C01E-2C8F-2B52-C66E-47651C72BE05"]
console.log(multiGuidWithBracket) // ["{4B7ECDA0-E60B-FAF1-C7D4-26BAAFAC0C52}", "{609CE50E-2AB0-A31F-500D-1A08F374E013}"]
```