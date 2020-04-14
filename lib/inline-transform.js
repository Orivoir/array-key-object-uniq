/*
* ./test/inline-transform.test.js
*/
module.exports = function( arr2inline ) {

    if( !(arr2inline instanceof Array) ) {

        throw RangeError("arg1: array object to convert inline should be a array") ;
    }

    const back = [] ;

    arr2inline.forEach( item => {

        Object.keys( item ).forEach( attr => {

            back.push( item[attr] ) ;

        } ) ;

    } ) ;

    return back ;

} ;
