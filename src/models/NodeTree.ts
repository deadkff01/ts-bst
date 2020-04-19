export type NodeOrNull = NodeTree | null;

interface NodeInterface {
  data: number;
  left: NodeOrNull;
  right: NodeOrNull;
}

export default class NodeTree implements NodeInterface {
  public data: number;
  public left: NodeOrNull;
  public right: NodeOrNull;

  constructor(data: number, left?: NodeOrNull, right?: NodeOrNull) {
    this.data = data;
    this.left = left || null;
    this.right = right || null;
  }
}
