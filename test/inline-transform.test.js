const
    {assert,expect} = require('chai'),

    factoryData = require('./factory-data/inline-transform.json'),

    inlineTransform = require('./../lib/inline-transform')
;

describe('test `inline-transform` module' , () => {

    it('should be a function' , () => {

        assert.isFunction( inlineTransform ) ;

    } ) ;

    describe('should accept only `array` arg1' , () => {

        let fxAttempt = null ;

        [
            {
                arg1: null,
                isThrow: true,
            } ,
            {
                arg1: {},
                isThrow: true,
            } ,
            {
                arg1: [],
                isThrow: false,
            }
        ].forEach( attempt => {
            const messageIt = `should be ${attempt.isThrow ? "":"not"} throw RangeError` ;

            it( messageIt , () => {

                fxAttempt = () => inlineTransform( attempt.arg1 ) ;

                if( attempt.isThrow ) {

                    expect( fxAttempt ).to.be.throw( RangeError ) ;
                } else {
                    expect( fxAttempt ).to.be.not.throw( RangeError ) ;
                }

            } ) ;

        } ) ;


    } ) ;

    describe('test output: should return exactly `array` for each:' , () => {

        const data = factoryData['attempts'] ;

        data.forEach( attempt => {

            const messageDescribe = `await: [${attempt.output.join(',')}]` ;

            // should be not throw ^.^
            const attemptOutput = inlineTransform( attempt.input ) ;

            it('should be return a array' , () => {

                assert.isArray(attemptOutput) ;
            } ) ;

            const messageIt = `should be exactly length of: ${attempt.output.length}`;

            it( messageIt, () => {

                expect( attemptOutput ).to.be.lengthOf( attempt.output.length ) ;

            } ) ;

            // output test
            describe( messageDescribe , () => {

                attemptOutput.forEach( (val,index) => {

                    const messageIt = `await: ${attempt.output[index]}, receveid: ${val}` ;

                    it( messageIt , () => {
                        expect( attempt.output[index] ).to.be.equal( val ) ;
                    } ) ;

                } ) ;

            } ) ;


        } ) ;

    } ) ;

} ) ;
