nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

for (x in nums){
    if (x == 8) break

    console.log(nums[x])
}

console.log("•••••••••••••••••••••")

for (y in nums){
    if (y == 8) continue

    console.log(nums[y])
}

outerFor: for (a in nums) {
    for (b in nums) {
        if (a == 2 && b == 3) break outerFor

        console.log(a, b)
    }
}