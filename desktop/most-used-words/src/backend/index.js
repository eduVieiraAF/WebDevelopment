const {ipcMain} = require('electron')

ipcMain.on("hello", (event, data) => {
    console.log(data)
    event.reply("hello", "→ Connection stable")
})