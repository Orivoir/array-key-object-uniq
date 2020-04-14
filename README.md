# [array-key-object-uniq](https://www.npmjs.com/package/array-key-object-uniq)

> do you have needs check duplicate value inside complex item array ?

- [installation](#installation)

- [usage](#usage)

- [inline array](#inline-array)

    - [usage](#inline-array-usage)

- [more informations](#more-informations)

## installation

- npm install array-key-object-uniq --save

- yarn add array-key-object-uniq

## usage

index.js
```javascript

const arrayKeyObjectUniq = require('array-key-object-uniq') ;

const myArray = [
    {
        username: "Foo",
        isLicorn: false
    } , {
        username: "Bar",
        isLicorn: false
    } , {
        username: "FooBar",
        isLicorn: true
    }, {
        username: "Foo",
        isLicorn: false
    }
] ;

const resolveMyArray = arrayKeyObjectUniq( myArray ) ;

console.log( resolveMyArray ) ;
```

output
```javascript
[
    "Foo",false,
    "Bar",
    "FooBar",true
]
```

## inline array

you can just transform your complex array in inline array
with: `require('array-key-object-uniq/lib/inline-transform')`

### inline array usage

index.js
```javascript
const inlineArray = require('array-key-object-uniq/lib/inline-transform') ;

const myArray = [
    {
        username: "Foo",
        isLicorn: false
    } , {
        username: "Bar",
        isLicorn: false
    } , {
        username: "FooBar",
        isLicorn: true
    }, {
        username: "Foo",
        isLicorn: false
    }
] ;

const myInlineArray = inlineArray( myArray ) ;

console.log( myInlineArray ) ;
```

output
```javascript
[
    "Foo", false,
    "Bar", false,
    "FooBar", true,
    "Foo", false
]
```

The `inline-array` module not applicate filter this the module call by `array-key-object-uniq` before filter final values,
if you have needs applicate custom filter, you should use: `inline-array` module.

currently `inline-array` is not installable in standalone this is possible for
next minor version: `0.6.0`.
