import Store from 'electron-store'
import { app } from 'electron'
import { join } from 'path'

type Config = {
	dbFile: string,
	theme: Theme
}

const store = new Store<Config>({
	defaults: {
		dbFile: app.isPackaged ? join(process.cwd(), 'prisma/dev.db') : join(app.getPath('userData'), 'db.sqlite'),
		theme: 'light'
	}
})

export default store