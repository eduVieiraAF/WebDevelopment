const { words, reject } = require("lodash")

function speakAfterwards(time, words) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(words)
        }, time * 1000)
    })
}

speakAfterwards(3, "Ahoy")
    .then(addintion => addintion.concat("! This is working fine..."))
    .then(moreWords => console.log(moreWords))
    .catch(e => console.log(e))