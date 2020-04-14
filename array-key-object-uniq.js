function isValidFinalKeyValue( value ) {

    return /^(number|boolean|string|undefined)$/i.test( typeof value ) || value === null ;
}

function checkParams( arrayUniq ) {

    if(
        !(arrayUniq instanceof Array) ||
        arrayUniq.filter( item => (
            typeof item !== 'object' || item === null
        ) ).length
    ) {

        throw RangeError('arg1: arrayUniq, should be a array of not object item') ;
    }

    arrayUniq.forEach( item => {

        const keys = Object.keys( item ) ;

        if( keys.length === 0 )
            return false;

        keys.forEach( key => {

            if( !isValidFinalKeyValue( item[ key ] ) ) {

                throw RangeError('arg1: arrayUniq, should be a array of not object item') ;
            }

        } ) ;

    } ) ;

}

const inlineTransform = require('./lib/inline-transform') ;

const arrayUniqResolver = require('array-uniq') ;

module.exports = function( arrayUniq ) {

    checkParams( arrayUniq ) ;

    return arrayUniqResolver( inlineTransform( arrayUniq ) ) ;

} ;
