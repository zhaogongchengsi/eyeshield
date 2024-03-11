import { app, ipcMain } from 'electron'
import store from './store'
import { PrismaClient } from '@prisma/client'

export default class Handle {
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
		app.on('ready', () => {
			// ipcMain.handle('', this.getDbFilePath.bind(this))
			console.log('handle ready')
		})
	}


}
