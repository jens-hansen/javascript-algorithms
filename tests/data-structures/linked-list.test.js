import { LinkedList, Node } from '../../src/data-structures/linked-list';

test('that node returns correct data', () => {
    const data = 'test-data';
    const node = Node(data);
    expect(node.data).toBe(data);
});

test('that node.next returns null by default', () => {
    const node = Node('first node');
    expect(node.next).toBeNull();
});

test('that node.next returns correct second node', () => {
    const secondNode = Node('second node');
    const firstNode = Node('first node');
    firstNode.next = secondNode;

    expect(firstNode.next.data).toBe('second node');
});

test('that creating a simple linked-list is empty', () => {
    const linkedList = LinkedList();

    expect(linkedList.peek()).toBe(null);
});

test('that creating a linked-list with a node returns this on peek', () => {
    const node = Node('test-data');
    const linkedList = LinkedList(node);

    expect(linkedList.peek().data).toBe('test-data');
});

test('that unshift adds a node at the beginning of the list ' +
  'and old first node is second node now', () => {
    const firstNode = Node('first node');
    const linkedList = LinkedList(firstNode);
    const newFirstNode = Node('new first Node');

    linkedList.unshift(newFirstNode);
    expect(linkedList.peek().data).toBe('new first Node');
    expect(linkedList.peek().next.data).toBe('first node');
});

test('that pushing a node to an empty list makes it new head', () => {
    const firstNode = Node('first node');
    const linkedList = LinkedList();

    linkedList.push(firstNode);

    expect(linkedList.peek().data).toBe('first node');
});

test('that pushing a node adds it to the end of the list', () => {
    const firstNode = Node('first node');
    const linkedList = LinkedList(firstNode);
    const secondNode = Node('second node');
    const thirdNode = Node('third node');

    linkedList.push(secondNode);
    linkedList.push(thirdNode);

    expect(linkedList.peek().next.data).toBe('second node');
    expect(linkedList.peek().next.next.data).toBe('third node');
});

test('that pop on an empty array returns false', () => {
    const linkedList = LinkedList();

    expect(linkedList.pop()).toBe(false);
});

test('that pop removes and returns the last element', () => {
    const linkedList = LinkedList(Node('first Node'));
    linkedList.push(Node('second node'));
    linkedList.push(Node('third node'));

    expect(linkedList.peek().next.next).not.toBeNull();
    expect(linkedList.pop().data).toBe('third node');
    expect(linkedList.peek().next.next).toBeNull();
});

test('that shift removes and returns the first element', () => {
    const linkedList = LinkedList(Node('first node'));
    linkedList.push(Node('second node'));
    linkedList.push(Node('third node'));

    expect(linkedList.peek().data).toBe('first node');
    expect(linkedList.shift().data).toBe('first node');
    expect(linkedList.peek().data).toBe('second node');
});

test('that remove on empty list returns false', () => {
    const linkedList = LinkedList();
    expect(linkedList.remove()).toBe(false);
});

test('that remove returns false if item is not in list',() => {
    const linkedList = LinkedList(Node('first node'));
    linkedList.push(Node('second node'));
    linkedList.push(Node('third node'));
    linkedList.push(Node('fourth node'));
    linkedList.push(Node('fifth node'));
    linkedList.push(Node('sixth node'));

    expect(linkedList.remove('node not in linked list')).toBe(false);
});

test('that remove the node with the first occurence of a data', () => {
    const linkedList = LinkedList(Node('first node'));
    linkedList.push(Node('second node'));
    linkedList.push(Node('third node'));
    linkedList.push(Node('fourth node'));
    linkedList.push(Node('fifth node'));
    linkedList.push(Node('sixth node'));

    expect(linkedList.peek().next.next.data).toBe('third node');
    expect(linkedList.remove('third node')).toBe(true);
    expect(linkedList.peek().next.next.data).not.toBe('third node');
});