const expect = require('chai').expect;
var request = require('request');
// import math file
// const math = require('../math');
// describe('math.js tests', () => {
//     describe('math.add() Test', () => {
//         it('should equal 2', () => {
//             const result = math.add(1, 1);
//             expect(result).to.equal(2);
//         });
//         it('should equal 4', () => {
//             const result = math.add(2, 2);
//             expect(result).to.equal(4);
//         });
//     });
    
//     describe('math.multiply() Test', () => {
//         it('should equal 3', () => {
//             const result = math.multiply(3, 1);
//             expect(result).to.equal(3);
//         });
//         it('should equal 10', () => {
//             const result = math.multiply(5, 2);
//             expect(result).to.equal(10);
//         });
//     });
// });


// const hello=require('../hello');
//     describe('hello.js test', ()=> {
//         it('should equal hello', () =>{
//             const result = 
//         })
//     })


const nom=require("../app");
describe("app.js test", ()=>{
    describe("app.nameTest() Test", ()=>{
        it("should equal 1234", ()=>{
            let value=nom.nameTest("1234");
            expect(value).equals("1234");
        })
    })
})