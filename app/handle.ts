import { app, ipcMain } from 'electron'
import store from './store'
import { PrismaClient } from '@prisma/client'
import { Handle } from '../share/constant'
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
		app.on('ready', () => {
			ipcMain.handle(Handle.GetTheme, this.getTheme.bind(this))
			console.log('handle ready')
		})
	}

	getTheme () {
		return store.get('theme')
	}

	setTheme (_:unknown, value: string) {
		store.set('theme', value)
	}


}
