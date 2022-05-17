/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function (original, cloned, target) {
    const getTarget = (node, target) => {
        if (node) {
            if (node.val == target) {
                return node
            }
            return getTarget(node.left, target) || getTarget(node.right, target)
        }
        return null
    }
    return getTarget(cloned, target.val)
};
