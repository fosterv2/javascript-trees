const { expect } = require('chai')

describe('Trees', function () {
    const d = { data: 'd', left: undefined, right: undefined }
    const e = { data: 'e', left: undefined, right: undefined }
    const f = { data: 'f', left: undefined, right: undefined }
    const g = { data: 'g', left: undefined, right: undefined }
    const b = { data: 'b', left: d, right: e }
    const c = { data: 'c', left: f, right: g }
    const a = { data: 'a', left: b, right: c }

    const ten = { data: 10, left: undefined, right: undefined }
    const eight = { data: 8, left: undefined, right: undefined }
    const nine = { data: 9, left: eight, right: ten }
    const four = { data: 4, left: undefined, right: undefined }
    const two = { data: 2, left: undefined, right: undefined }
    const seven = { data: 7, left: undefined, right: nine }
    const three = { data: 3, left: two, right: four }
    const five = { data: 5, left: three, right: seven }

    describe('#makeNode()', function () {
        it('makes a node when given a data, left, and right', function () {
            expect(makeNode('A', { data: 'B' }, { data: 'C' })).to.deep.equal({ data: 'A', left: { data: 'B' }, right: { data: 'C' } })
        })

        it('makes a node without left or right', function () {
            expect(makeNode('A')).to.deep.equal({ data: 'A', left: undefined, right: undefined })
        })
    })

    describe('#printBranches', function () {
        it('prints the data from each of the branches to the console')
    })

    describe('#printLevels', function () {
        it('prints the data from each of the branches from top to bottom to the console')
    })

    describe('#printTree', function () {
        it('prints the data from each of the branches to look like a tree to the console')
    })

    describe('#collectNodes', function () {
        it('collects the nodes of the tree into an array starting with the given root', function () {
            const nodeArr = collectNodes(a)
            expect(nodeArr[0]).to.equal(a)
        })

        it('collects all of the nodes into the array', function () {
            const nodeArr = collectNodes(a)
            expect(nodeArr.length).to.equal(7)
        })

        it('gives all the nodes a depth property starting from zero', function () {
            const nodeArr = collectNodes(a)
            expect(nodeArr[0].depth).to.equal(0)
            expect(nodeArr[nodeArr.length - 1]).to.have.own.property('depth')
        })
    })

    describe('#find', function () {
        it('searches through the tree and returns the node with the given data', function () {
            expect(find(a, "b")).to.equal(b)
            expect(find(a, "a")).to.equal(a)
        })

        it('returns undefined if the data is not found from the given root', function () {
            expect(find(b, "a")).to.be.undefined
        })
    })

    describe('#bfind', function () {
        it('searches through the tree using binary search and returns the node with the given data', function () {
            expect(find(five, 2)).to.equal(two)
            expect(find(seven, 8)).to.equal(eight)
        })

        it('returns undefined if the data is not found from the given root', function () {
            expect(find(three, 5)).to.be.undefined
        })
    })

    describe('#insert', function () {
        it("inserts a new node with the given data (that's less than any in the tree) in the correct place", function () {
            insert(five, 1)
            expect(two.left).to.deep.equal({ data: 1, left: undefined, right: undefined })
        })

        it("inserts a new node with the given data (that's in the middle of data in the tree) in the correct place", function () {
            insert(five, 6)
            expect(seven.left).to.deep.equal({ data: 6, left: undefined, right: undefined })
        })
    })
})
