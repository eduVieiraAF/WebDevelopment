const { ipcMain } = require('electron')
const pathToRows = require('./pathsToRows')
const prepareData = require('./prepareData')
const groupWords = require('./groupWord')

ipcMain.on("process-subtitles", (event, paths) => {
    // console.log(paths)

    pathToRows(paths)
        .then(rows => prepareData(rows))
        .then(preparedData => groupWords(preparedData))
        .then(groupedWords => {
            event.reply("process-subtitles", groupedWords)
                //* Mocked data
                // { word: "i", amount: 547 },
                // { word: "you", amount: 478 },
                // { word: "it", amount: 110 },
            
        })

})