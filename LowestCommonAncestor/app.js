var TreeNode = function(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
}

var tree = new TreeNode(30,
    new TreeNode(8,
        new TreeNode(3),
        new TreeNode(20,
            new TreeNode(10),
            new TreeNode(29)
        )
    ),
    new TreeNode(52)
);

var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        lowestCommonAncestor(line);
    }
});

function lowestCommonAncestor(line) {
    var temp = line.trim().split(" "),
        path1 = pathToNodeWithValue(tree, parseInt(temp[0]), []),
        path2 = pathToNodeWithValue(tree, parseInt(temp[1]), []),
        common = undefined;
    
    for (var i = 0, count = Math.min(path1.length, path2.length); i < count; i++) {
        if (path1[i] === path2[i]) {
            common = path1[i];
        } else {
            break;
        }
    }

    console.log(common);
}

function pathToNodeWithValue(tree, value, path) {
    if (tree.value === value) {
        path.push(tree.value);
        return path;
    } else if (value < tree.value) {
        if (tree.left) {
            path.push(tree.value);
            return pathToNodeWithValue(tree.left, value, path);
        } else {
            throw Error("node with value " + value + " doesn't find");
        }
    } else {
        if (tree.right) {
            path.push(tree.value);
            return pathToNodeWithValue(tree.right, value, path);
        } else {
            throw Error("node with value " + value + " doesn't find");
        }
    }
}