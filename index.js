const { app, BrowserWindow, globalShortcut } = require('electron')

function createWindow () {
    // Create the browser window.
    let win = new BrowserWindow({
        width: 1366,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    // and load the index.html of the app.
    win.loadFile('index.html')
    win.webContents.openDevTools();
    globalShortcut.register("Alt+Left", () => {
        win.webContents.goBack();
    })
    globalShortcut.register("Alt+Right", () => {
        win.webContents.goForward();
    })
}

app.commandLine.appendSwitch("ignore-certificate-errors", 'true');
app.whenReady().then(createWindow);
