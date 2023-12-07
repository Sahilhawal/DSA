function twoSum(nums: number[], target: number): number[] {
	for (let i = 0; i < nums.length; i++) {
		const difference = target - nums[i]
		const secondNumberIndex = nums.indexOf(difference)

		if (secondNumberIndex !== -1 && i !== secondNumberIndex) {
			return [i, secondNumberIndex]
		}

	}
};
