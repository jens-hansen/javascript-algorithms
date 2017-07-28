export const Node = (data = null) => {
    let next = null;
    return {
        data,
        next,
    };
};

export const LinkedList = (head = null) => {
    let _head = head;
    let _tail = head;
    if (_head !== null) {
        _head.next = _tail;
    }

    return {
        push(newLastNode) {
            if (_head === null) {
                _head = newLastNode;
            }
            else {
                _tail.next = newLastNode;
            }
            _tail = newLastNode;
        },
        peek() {
            return _head;
        },
        unshift(newFirstNode) {
            newFirstNode.next = _head;
            _head = newFirstNode;
        },
        pop() {
            if (_head === null) return false;
            let prev;
            let node = _head;
            while(node !== null) {
                if (node === _tail) {
                    if (prev !== null) {
                        prev.next = null;
                        _tail = prev;
                    }
                    return node;
                }
                prev = node;
                node = node.next;
            }
        },
        shift() {
            const oldHead = _head;
            _head = _head.next;
            return oldHead;
        },
        remove(data) {
            if (_head === null) return false;
            let node = _head;
            let prev = null;

            while(node !== null) {
                if(node.data === data) {
                    prev.next = node.next;
                    return true;
                }
                prev = node;
                node = node.next;
            }

            return false;
        },
    }
};