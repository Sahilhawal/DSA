function productExceptSelf(nums: number[]): number[] {
	const sumArr = []
	let preFix = 1

	for (let i = 0; i < nums.length; i++) {
		sumArr[i] = preFix;
		preFix *= nums[i]
	}

	let postFix = 1

	for (let i = nums.length - 1; i >= 0; i--) {
		sumArr[i] *= postFix;
		postFix *= nums[i]
	}

	return sumArr
};
