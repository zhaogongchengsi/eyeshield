import { ipcMain, nativeTheme, IpcMainInvokeEvent } from 'electron'
import store from './store'
import { Handle } from '@eyeshield/shared'

export default class {
	private dbFile: string;
	constructor () {
		this.dbFile = store.get('dbFile')
		ipcMain.handle(Handle.GetTheme, this.getTheme.bind(this))
		ipcMain.handle(Handle.SetTheme, this.setTheme.bind(this))
	}

	getTheme () {
		return store.get('theme')
	}

	setTheme(_: IpcMainInvokeEvent, value: Theme) {
		nativeTheme.themeSource = value
		store.set('theme', value)
	}


}
