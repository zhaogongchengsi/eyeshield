import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
	entries: [
		'./app/app.ts',
		'./app/preload.ts'
	],
	outDir: "electron",
	externals: [
		'electron'
	],
	declaration: false,
})
