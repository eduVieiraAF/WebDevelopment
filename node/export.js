// console.log(module.exports === this)
// console.log(module.exports === exports)

// * so...
this.a = 1
exports.b = 2
module.exports.c = 3
// *  are the same

// console.log(this)
// console.log(exports)

//* exporting an object
// previous exports no longer apply
module.exports = { public: true }