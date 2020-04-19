import NodeTree, { NodeOrNull } from './NodeTree';

export default class BST {
  protected root: NodeOrNull;

  constructor(root?: NodeOrNull) {
    this.root = root || null;
  }

  private isEmpty() {
    return this.root === null;
  }

  public add(newNode: NodeTree): void {
    this.root = this.recAdd(newNode, this.root);
  }

  private recAdd(newNode: NodeTree, currentNode: NodeOrNull): NodeTree {
    if (currentNode === null) return newNode;
    if (newNode.data <= currentNode.data) {
      if (currentNode.left !== null) {
        this.recAdd(newNode, currentNode.left);
      } else {
        currentNode.left = newNode;
      }
    }
    if (newNode.data > currentNode.data) {
      if (currentNode.right !== null) {
        this.recAdd(newNode, currentNode.right);
      } else {
        currentNode.right = newNode;
      }
    }
    return currentNode;
  }

  public remove(data: number): void {
    if (this.isEmpty()) {
      throw new Error('The tree is empty!');
    }
    if (this.root !== null) {
      this.root = this.recRemove(data, this.root);
    }
  }

  private recRemove(data: number, currentNode: NodeTree): NodeOrNull {
    if (data === currentNode.data) return this.removeNode(currentNode);
    if (currentNode.left !== null)
      currentNode.left = this.recRemove(data, currentNode.left);
    if (currentNode.right !== null)
      currentNode.right = this.recRemove(data, currentNode.right);
    return currentNode;
  }

  private removeNode(currentNode: NodeTree): NodeOrNull {
    if (currentNode.left === null) return currentNode.right;
    if (currentNode.right === null) return currentNode.left;
    const temp = this.findHighestLeft(currentNode.left);
    currentNode.data = temp.data;
    currentNode.left = this.recRemove(temp.data, currentNode.left);
    return currentNode;
  }

  private findHighestLeft(currentNode: NodeTree): NodeTree {
    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }
    return currentNode;
  }

  public findDeepFirstSearch(data: number): NodeOrNull {
    return this.root === null ? null : this.dfs(data, this.root);
  }

  private dfs(data: number, rootNode: NodeTree): NodeOrNull {
    const stack: Array<NodeTree> = [];
    stack.push(rootNode);
    while (stack.length > 0) {
      const temp = stack.pop();
      if (!temp) return null;
      if (temp.data === data) return temp;
      if (temp.left !== null) stack.push(temp.left);
      if (temp.right !== null) stack.push(temp.right);
    }
    return null;
  }

  public findBreadthFirstSearch(data: number): NodeOrNull {
    return this.root === null ? null : this.bfs(data, this.root);
  }

  private bfs(data: number, rootNode: NodeTree): NodeOrNull {
    const stack: Array<NodeTree> = [];
    stack.push(rootNode);

    while (stack.length > 0) {
      const temp = stack.shift();
      if (!temp) return null;
      if (temp.data === data) return temp;
      if (temp.left !== null) stack.push(temp.left);
      if (temp.right !== null) stack.push(temp.right);
    }
    return null;
  }
}
