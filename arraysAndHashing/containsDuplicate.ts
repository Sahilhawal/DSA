function containsDuplicate(nums: number[]): boolean {
	let duplicateFound: boolean = false
	for (let index = 0; index < nums.length; index++) {
		const num = nums[index]
		for (let j = 0; j < nums.length; j++) {
			if (j === index) continue

			if (num === nums[j]) {
				duplicateFound = true
				break
			}
		}
	}

	return duplicateFound


};
