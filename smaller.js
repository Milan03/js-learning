function smaller(nums) {
    for (let i = 0; i < nums.length; ++i) {
        let lessThanCount = 0;
        for (let x = i + 1; x < nums.length; ++x) {
            if (i + 1 >= nums.length) {
                break;
            } else {
                if (+nums[x] < +nums[i]) {
                    ++lessThanCount;
                }
            }
        }
        nums[i] = lessThanCount;
    }
    return nums;
}