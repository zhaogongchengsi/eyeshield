import { ipcMain, nativeTheme, IpcMainInvokeEvent } from 'electron'
import store from './store'
import { PrismaClient } from '@prisma/client'
import { Handle } from '../shared'

export default class {
	private dbFile: string;
	private prisma: PrismaClient;
	constructor () {
		this.dbFile = store.get('dbFile')
		this.prisma = new PrismaClient({
			datasources: {
				db: {
					url: this.dbFile
				}
			}
		})
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
