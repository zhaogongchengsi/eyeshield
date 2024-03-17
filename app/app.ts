import { BrowserWindow, app } from 'electron'
import { MainWindow } from './windows'
let mainWindow: MainWindow

new (await import('./handle')).default()

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

