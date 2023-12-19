function isValidSudoku(board: string[][]): boolean {
	let valid: boolean = true
	if (board.length !== 9) { return false }
	for (let i = 0; i < board.length; i++) {
		if (contains1to9Digits(board[i])) {
			valid = false
			break
		}
	}

	const columns = [];

	for (let i = 0; i < board.length; i++) {
		const column = []
		for (let j = 0; j < board.length; j++) {
			column.push(board[j][i])
		}
		if (contains1to9Digits(column)) {
			valid = false
			break
		}
	}

	const grids = []

	for (let i = 1; i <= board.length; i + 3) {
		const grid = []
		const row1 = board[i]
		const row2 = board[i + 1]
		const row3 = board[i + 2]
		for (let j = 1; j <= row1.length; j + 3) {
			const g = []
			g.push(row1.slice(j, 3))
			g.push(row2.slice(j, 3))
			g.push(row3.slice(j, 3))
			grid.push(g)
		}
		grids.push(grid)
	}

	console.log('GRIDS', grids)




	return valid
};

const contains1to9Digits = (arr: string[]) => {
	let duplicates: boolean = false
	for (let i = 0; i < arr.length; i++) {
		const value = arr[i]
		if (value === ".") continue
		const duplicateValues = arr.filter(v => v === value)
		if (duplicateValues.length > 1) {
			duplicates = true
			break
		}

	}
	return duplicates
}

const test = [["5", "3", ".", ".", "7", ".", ".", ".", "."]
	, ["6", ".", ".", "1", "9", "5", ".", ".", "."]
	, [".", "9", "8", ".", ".", ".", ".", "6", "."]
	, ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
	, ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
	, ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
	, [".", "6", ".", ".", ".", ".", "2", "8", "."]
	, [".", ".", ".", "4", "1", "9", ".", ".", "5"]
	, [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
console.log(isValidSudoku(test))
