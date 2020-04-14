const
    {expect,assert} = require('chai'),
    arrayKeyObjectUniq = require('./../array-key-object-uniq'),

    factoryData = require('./factory-data/array-key-object-uniq.json')
;

describe('test `array-key-object-uniq` module' , () => {

    it('should be a function' , () => {

        assert.isFunction( arrayKeyObjectUniq ) ;

    } ) ;

    describe('should be accept only object[] with: `string`, `number`, `boolean` or `null` for each keys object' , () => {

        const dataRangeError = factoryData["RangeError"] ;

        // test of data test read this before upgrade test
        describe('factory data RangeError should be a object[]' , () => {

            it('factory data RangeError is `array`' , () => {

                assert.isArray( dataRangeError ) ;
            } ) ;

            dataRangeError.forEach( data => {

                it('current factory data RangeError is a obejct' , () => {

                    assert.isObject( data ) ;

                } ) ;

            } ) ;

        } ) ;

        let fxAttempt = null ;

        dataRangeError.forEach( attempt => {

            const messageIt = `should be ${attempt.isThrow ? "":"not"} throw` ;

            it( messageIt, () => {

                fxAttempt = () => arrayKeyObjectUniq( attempt.arg1 ) ;

                if( attempt.isThrow ) {

                    expect( fxAttempt ).to.be.throw( RangeError ) ;

                } else {
                    expect( fxAttempt ).to.be.not.throw( RangeError ) ;
                }


            } ) ;

        } )  ;

    } ) ;

    describe('test output should return exactly array for each:' , () => {

        const data = factoryData["attemps"] ;

        data.forEach( attempt => {

            const messageDesc = `await: [${attempt.output.join(',')}]` ;

            describe( messageDesc, () => {

                const outputAttempt = arrayKeyObjectUniq( attempt.entry ) ;

                outputAttempt.forEach( (val,index) => {

                    const messageIt = `await: ${attempt.output[index]} receveid: ${val}` ;

                    it( messageIt, () => {

                        expect( val ).to.be.equal( attempt.output[index] ) ;

                    } ) ;

                } ) ;

            } ) ;

        } ) ;

    } ) ;

} ) ;
