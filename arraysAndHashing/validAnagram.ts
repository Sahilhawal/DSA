function isAnagram(s: string, t: string): boolean {
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
};
