var assert = require('assert');
const add = require('../add.js')
const expect = require('chai').expect

describe('加法函数测试', function() {
    it('add() should return 0', function() {
        assert.equal(add(),0)
    })
    it('1 + 1 等于 2', function() {
        expect(add(1, 1)).to.be.equal(2)
    })
    it('返回值是Number', function() {
        expect(add(1, 1)).to.be.a('number')
    })
})