function isValidSudoku(board) {
    var valid = true;
    if (board.length !== 9) {
        return false;
    }
    for (var i = 0; i < board.length; i++) {
        if (contains1to9Digits(board[i])) {
            valid = false;
            break;
        }
    }
    var columns = [];
    for (var i = 0; i < board.length; i++) {
        var column = [];
        for (var j = 0; j < board.length; j++) {
            column.push(board[j][i]);
        }
        if (contains1to9Digits(column)) {
            valid = false;
            break;
        }
    }
    var grids = [];
    for (var i = 1; i <= board.length; i + 3) {
        var grid = [];
        var row1 = board[i];
        var row2 = board[i + 1];
        var row3 = board[i + 2];
        for (var j = 1; j <= row1.length; j + 3) {
            var g = [];
            g.push(row1.slice(j, 3));
            g.push(row2.slice(j, 3));
            g.push(row3.slice(j, 3));
            grid.push(g);
        }
        grids.push(grid);
    }
    console.log('GRIDS', grids);
    return valid;
}
;
var contains1to9Digits = function (arr) {
    var duplicates = false;
    var _loop_1 = function (i) {
        var value = arr[i];
        if (value === ".")
            return "continue";
        var duplicateValues = arr.filter(function (v) { return v === value; });
        if (duplicateValues.length > 1) {
            duplicates = true;
            return "break";
        }
    };
    for (var i = 0; i < arr.length; i++) {
        var state_1 = _loop_1(i);
        if (state_1 === "break")
            break;
    }
    return duplicates;
};
var test = [["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]];
console.log(isValidSudoku(test));
