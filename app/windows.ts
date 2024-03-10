import { BrowserWindow, app } from "electron";
import store from './store'
export class MainWindow {
	private window: BrowserWindow;

	#themeColors = {
		'light': '#ffffff',
		'dark': '#121212',
		'system': "#ffffff"
	}

	constructor() {

		this.window = new BrowserWindow({
			width: 1200,
			minWidth: 900,
			height: 600,
			minHeight: 500,
			show: false,
			backgroundColor: this.getColor(),
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

	private getColor() {
		return this.#themeColors[store.get('theme')]
	}
}