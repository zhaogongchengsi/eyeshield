import { BrowserWindow, app } from 'electron'
import { MainWindow } from './windows'
import Handle from './handle'
let mainWindow: MainWindow

new Handle()

app.whenReady().then(() => {
	mainWindow = new MainWindow()
	mainWindow.show()
})

app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		mainWindow = new MainWindow()
		mainWindow.show()
	}
})
