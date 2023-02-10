function ClassRoom(student, videoID) {
    this.student = student
    this.videoID = videoID
}

const std1 = new ClassRoom("John", 123)
const std2 = new ClassRoom("Sarah", 124)
console.log(std1, std2)

// simulating how the 'new' keyword works under the hood

function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)

    return obj
}

const std3 = novo(ClassRoom, "Bob", 145)
const std4 = novo(ClassRoom, "Monica", 175)
console.log(std3, std4)