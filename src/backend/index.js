const { ipcMain } = require("electron")
const pathtoRows = require("./pathstoRows");
const prepareData = require("./prepareData");
const groupedWords = require("./groupedWords");

ipcMain.on("process-subtitles", (event, paths) => {
    pathtoRows(paths)
    .then(rows => prepareData(rows))
    .then(preparedData=>groupWords(preparedData))
    .then(groupedWords=>{
        event.reply("process-subtitles", groupedWords);
    })
});