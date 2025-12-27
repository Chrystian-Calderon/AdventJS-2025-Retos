/**
 * @param {object} tree1 - The first binary tree.
 * @param {object} tree2 - The second binary tree.
 * @returns {[boolean, string]}
 */
function isTreesSynchronized(tree1, tree2) {
  function isMirror(node1, node2) {
    if (!node1 && !node2) return true;

    if (!node1 || !node2) return false;

    if (node1.value !== node2.value) return false;

    return (isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left));
  }

  const synchronized = isMirror(tree1, tree2);
  return [synchronized, tree1.value];
}

const tree1 = {
  value: '🎄',
  left: { value: '⭐' },
  right: { value: '🎅' }
}

const tree2 = {
  value: '🎄',
  left: { value: '🎅' },
  right: { value: '⭐' },
}

console.log(isTreesSynchronized(tree1, tree2)) // [true, '🎄']

/*
  tree1          tree2
   🎄              🎄
  / \             / \
⭐   🎅         🎅   ⭐
*/

const tree3 = {
  value: '🎄',
  left: { value: '🎅' },
  right: { value: '🎁' }
}

console.log(isTreesSynchronized(tree1, tree3)) // [false, '🎄']

const tree4 = {
  value: '🎄',
  left: { value: '⭐' },
  right: { value: '🎅' }
}

console.log(isTreesSynchronized(tree1, tree4)) // [false, '🎄']

console.log(isTreesSynchronized(
  { value: '🎅' },
  { value: '🧑‍🎄' }
)) // [false, '🎅']