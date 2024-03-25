import Store from 'electron-store'
import { app } from 'electron'
import { join } from 'path'

type Config = {
	dbFile: string,
	theme: Theme
}
const idDev = process.env.NODE_ENV === 'development'

const store = new Store<Config>({
	defaults: {
		dbFile: idDev ? join(process.cwd(), 'prisma/dev.db') : join(app.getPath('userData'), app.getName(), 'db.db'),
		theme: 'light'
	}
})

export default store