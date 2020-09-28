require('../index')
const expect = require('chai').expect

describe('Trees', function () {
    describe('#makeNode()', function () {
        it('makes a node when given a data, left, and right', function () {
            const B = { data: 'B' }
            const C = { data: 'C' }
            const newNode = makeNode('A', B, C)
            expect(newNode.data).to.equal('A')
            expect(newNode.left).to.equal(B)
            expect(newNode.right).to.equal(C)
        })
        it('makes a node without left or right', function () {
            const newNode = makeNode('A')
            expect(newNode.data).to.equal('A')
            expect(newNode.left, newNode.right).to.be.undefined
        })
    })
})
