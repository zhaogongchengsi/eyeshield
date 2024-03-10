import { BrowserWindow, app } from "electron";
import store from './store'
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const _dirname =
	typeof __dirname !== "undefined"
		? __dirname
		: dirname(fileURLToPath(import.meta.url));

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
			darkTheme: store.get('theme') === 'dark',
			titleBarStyle: 'hidden',
			title: app.name,
			webPreferences: {
				nodeIntegration: true,
				preload: join(_dirname, app.isPackaged ? './preload.js' : '../electron/app/preload.mjs')
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