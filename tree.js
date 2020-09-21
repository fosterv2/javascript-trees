function makeNode(name, leftNode, rightNode) {
    return { name, left: leftNode, right: rightNode }
}

function printBranches(root) {
    console.log(root.name)
    if (root.left) {
        printBranches(root.left)
    }
    if (root.right) {
        printBranches(root.right)
    }
}

function printLevels(root) {
    const queue = [root]
    while (queue.length > 0) {
        node = queue.shift()
        console.log(node.name)
        if (node.left) {
            queue.push(node.left)
        }
        if (node.right) {
            queue.push(node.right)
        }
    }
}

function printTree(root) {
    const nodeArr = collectNodes(root)
    const width = nodeArr[nodeArr.length - 1].depth
    const whitespace = "  "
    let string = whitespace.repeat(width) + nodeArr[0].name + "\n"
    for (let i = 1; i < nodeArr.length - 1; i++) {
        if (nodeArr[i - 1].depth < nodeArr[i].depth) {
            string += whitespace.repeat(width - nodeArr[i].depth)
        }
        string += nodeArr[i].name
        if (nodeArr[i + 1].depth > nodeArr[i].depth) {
            string += "\n"
        }
    }
    string += nodeArr[nodeArr.length - 1].name
    console.log(string)
}

function collectNodes(root) {
    const print = []
    const queue = [root]
    root["depth"] = 0
    while (queue.length > 0) {
        node = queue.shift()
        print.push(node)
        if (node.left) {
            node.left["depth"] = node.depth + 1
            queue.push(node.left)
        }
        if (node.right) {
            node.right["depth"] = node.depth + 1
            queue.push(node.right)
        }
    }
    return print
}
