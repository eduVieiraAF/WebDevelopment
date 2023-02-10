// * factory returns new instance/object

module.exports = () => {
    return {
        ammount: 1,
        inc() {
            this.ammount++
        }
    }
}