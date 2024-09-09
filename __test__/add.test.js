const {describe,expect,test}=require('@jest/globals')
const {add}=require('../src/add')


describe('des to addtion',()=>{
    test(`summtion`,()=>{
      expect(add(1,1)).toBe(2)
    })
})