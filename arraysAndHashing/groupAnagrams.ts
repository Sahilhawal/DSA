function groupAnagrams(strs: string[]): string[][] {
	const grpAnagramsArr = []
	for (let i = 0; i < strs.length; i++) {
		if (strs[i] == null) continue
		const anagrams = [strs[i]];
		for (let j = 0; j < strs.length; j++) {
			if (i === j || strs[j] == null) continue
			if (isAnagram(strs[i], strs[j])) {
				anagrams.push(strs[j])
				strs[j] = null
			}
		}
		grpAnagramsArr.push(anagrams)
	}

	return grpAnagramsArr
};

const isAnagram = (s: string, t: string) => {
	if (s.length !== t.length) return false

	const sElements = s.split('')
	const tElements = t.split('')

	for (let i = 0; i < sElements.length; i++) {
		const eleIndex = tElements.indexOf(sElements[i])
		if (eleIndex !== -1) {
			tElements[eleIndex] = null
		} else {
			return false
		}
	}

	return true
}
