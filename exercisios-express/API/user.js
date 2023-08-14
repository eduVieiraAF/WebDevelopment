function save(req, res) {
    res.send('User → save')
}

function obtain(req, res) {
    res.send("user → get")
}

module.exports = { save, obtain }