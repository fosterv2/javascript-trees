const d = { data: 'd', left: undefined, right: undefined }
const e = { data: 'e', left: undefined, right: undefined }
const f = { data: 'f', left: undefined, right: undefined }
const g = { data: 'g', left: undefined, right: undefined }
const b = { data: 'b', left: d, right: e }
const c = { data: 'c', left: f, right: g }
const a = { data: 'a', left: b, right: c }
//        A
//      /   \
//    B       C
//  /   \    /  \
// D     E   F   G

const ten = { data: 10, left: undefined, right: undefined }
const eight = { data: 8, left: undefined, right: undefined }
const one = { data: 1, left: undefined, right: undefined }
const nine = { data: 9, left: eight, right: ten }
const six = { data: 6, left: undefined, right: undefined }
const four = { data: 4, left: undefined, right: undefined }
const two = { data: 2, left: one, right: undefined }
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
