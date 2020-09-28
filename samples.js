const d = { data: 'd', left: null, right: null }
const e = { data: 'e', left: null, right: null }
const f = { data: 'f', left: null, right: null }
const g = { data: 'g', left: null, right: null }
const b = { data: 'b', left: d, right: e }
const c = { data: 'c', left: f, right: g }
const a = { data: 'a', left: b, right: c }
//        A
//      /   \
//    B       C
//  /   \    /  \
// D     E   F   G

const ten = { data: 10, left: null, right: null }
const eight = { data: 8, left: null, right: null }
const one = { data: 1, left: null, right: null }
const nine = { data: 9, left: eight, right: ten }
const six = { data: 6, left: null, right: null }
const four = { data: 4, left: null, right: null }
const two = { data: 2, left: one, right: null }
const seven = { data: 7, left: six, right: nine }
const three = { data: 3, left: two, right: four }
const five = { data: 5, left: three, right: seven }
//         5
//       /   \
//      3      7
//     / \    / \
//   2    4  6   9
//  /           /  \
// 1           8    10
