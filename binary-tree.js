/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (this.root === null) {
      return 0;
    }

    let queue = [{ node: this.root, depth: 1}];

    while (queue.length > 0){   
      let { node, depth } = queue.shift(); 
      
      if (node.left === null && node.right === null) {
        return depth
      }
      if (node.left !== null) {
        queue.push({ node: node.left, depth: depth + 1 });
      }
      if (node.right !== null) {
        queue.push({ node: node.right, depth: depth + 1 });
      }
    }
  };

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (this.root === null) {
      return 0;
    }

    let stack = [{ node: this.root, depth: 1}];
    let maxDepth = 0;

    while (stack.length > 0) {
      let { node, depth } = stack.pop();
      maxDepth = Math.max(maxDepth, depth);

      if (node.left !== null) {
        stack.push({ node: node.left, depth: depth + 1});
      }
      if (node.right !== null) {
        stack.push({ node: node.right, depth: depth + 1});
      }
    }
    return maxDepth;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    if (this.root === null) {
      return 0
    };

    let maxSum = -Infinity;
    let stack = [{ node: this.root, sum: 0}];

    while (stack.length > 0) {
      let { node, sum } = stack.pop();

      if (node !== null) {
        sum += node.val;
        maxSum = Math.max(maxSum, sum);

        stack.push({ node: node.left, sum: sum});
        stack.push({ node: node.right, sum: sum});
      }
    }
    return maxSum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (this.root === null) {
      return null;
    }

    let stack = [this.root];
    let result = null;

    while (stack.length > 0) {
      let node = stack.pop();

      if (node.val > lowerBound) {
        if (result === null || node.val < result) {
          result = node.val;
        }
      }

      if (node.left !== null) {
        stack.push(node.left);
      }
      if (node.right !== null) {
        stack.push(node.right);
      }
    }
    return result;
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
