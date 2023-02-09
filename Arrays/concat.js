const daughters = ["Jane", "Mary", "Heather"]
const sons = ["Willard", "Chris"]

const children = daughters.concat(sons, "Isabella") // can add another element

children.sort().forEach(kid => console.log(kid))

const nums1 = [1, 2, 3]
const nums2 = [4, 5, 6]

const allNums = nums1.concat(nums2, 7, 8, [[9, 10, 11], ["Jane"], [true, false]])

allNums.forEach(it => console.log(it))
console.log(allNums)