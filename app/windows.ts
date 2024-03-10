import { BrowserWindow, app } from "electron";

export class MainWindow {
	private window: BrowserWindow;

	constructor() {
		this.window = new BrowserWindow({
			width: 1200,
			height: 600,
			title: app.name,
			webPreferences: {
				nodeIntegration: true,
			},
		});

		if (app.isPackaged) {
			this.window.loadFile("file://dist/index.html");
		} else {
			this.window.loadURL("http://localhost:5678");
		}
	}

	public show() {
		this.window.once('ready-to-show', () => {
			this.window.show();
		})
	}
}