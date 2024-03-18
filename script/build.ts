import { build } from 'esbuild'

const argv = process.argv.slice(2);

; (async () => {
	const isDev = argv.includes('--dev');

	console.log(isDev)

	await build({
		entryPoints: ['app/app.ts', 'app/preload.ts'],
		bundle: true,
		splitting: true,
		external: ['electron', '@prisma/client', 'electron-store'],
		define: {
			'process.env.NODE_ENV': '"production"'
		},
		platform: 'node',
		loader: {
			'.png': 'dataurl',
			'.svg': 'text'
		},
		format: 'esm',
		outdir: './electron/app',
		outExtension: {
			'.js': '.mjs'
		},
		treeShaking: true,
	})

})();