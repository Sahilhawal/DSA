function topKFrequent(nums: number[], k: number): number[] {
	const freq: { [key: number]: number } = {}
	for (let i = 0; i < nums.length; i++) {
		freq[nums[i]] = (freq[nums[i]] || 0) + 1
	}

	return Object.entries(freq).sort((a, b) => b[1] - a[1]).slice(0, k).map(v => Number(v[0]))
};
