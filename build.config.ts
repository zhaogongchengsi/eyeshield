import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
	entries: [
		'./app/app.ts'
	],
	outDir: "electron",
	externals: [
		'electron'
	]
})
