function tag(parts, ...values) {
    console.log(parts)
    console.log(values)

    return "another string"
}

const student = "Julie"
const _status = "Approved"

console.log(tag `${student} → ${_status}`)