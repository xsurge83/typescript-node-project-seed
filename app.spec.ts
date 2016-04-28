import foo from './app.ts'
import * as assert from 'assert';

describe('food', ()=>{
   it('should return foo', ()=>{
       assert.equal(foo(), 'foo')
   })
});