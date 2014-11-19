function biggerThanNeighbors(index, arr) {
    if (index >= arr.length || index < 0) {
         jsConsole.writeLine("invalid index");
    } else if (index === 0 || index === arr.length - 1) {
         jsConsole.writeLine("only one neighbour");
    } else if (arr[index] > arr[index - 1] && arr[index] > arr[index + 1]) {
         jsConsole.writeLine("bigger");
    } else {
        jsConsole.writeLine("not bigger");
    }
}
biggerThanNeighbors(2, [1, 2, 3, 3, 5 ]);
biggerThanNeighbors(2, [1, 2, 5, 3, 4 ]);
biggerThanNeighbors(5, [1, 2, 5, 3, 4 ]);
biggerThanNeighbors(0, [1, 2, 5, 3, 4 ]);