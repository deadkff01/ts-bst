/**
 * Binary Search Tree with TypeScript
 * @author Dennis Kaffer
 */

import NodeTree from './models/NodeTree';
import BST from './models/BST';

const bst = new BST();

bst.add(new NodeTree(5));
bst.add(new NodeTree(4));
bst.add(new NodeTree(6));
bst.add(new NodeTree(3));
bst.add(new NodeTree(7));
bst.add(new NodeTree(5));
bst.remove(5);

console.log(bst);

console.log('dfs', bst.findDeepFirstSearch(5));

console.log('bfs', bst.findDeepFirstSearch(6));
