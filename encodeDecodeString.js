const encode = (arr) => {
	let str = ""
	for (let i = 0; i < arr.length; i++) {
		str += arr[i].length + "#" + arr[i]
	}
	return str
}

const encodedStr = encode(["lint", "code", "love", "you"])

console.log(encodedStr)

const decode = (str) => {
	const arr = []
	for (let i = 0; i < str.length;) {
		if (!isNaN(str[i]) && str[i + 1] === "#") {
			const strLength = Number(str[i])
			i += 2
			const newStr = str.slice(i, i + strLength)
			arr.push(newStr)
			i += strLength
		}
	}
	return arr
}

console.log('DECODED ARR', decode(encodedStr))
