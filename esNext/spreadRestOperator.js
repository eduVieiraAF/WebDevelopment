// * Using spread with objects

const worker = {
    nome: "Jake",
    wage: 85000
} // simple object

const copy = { active: true, ...worker }

console.log(copy)

// * Using spread with arrays

const groupA = ["Kevin", "Hugh", "Ryan"]
const grouping = ["Neil", ...groupA].sort()

grouping.forEach(it => console.log(it))