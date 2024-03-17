// import { contextBridge, ipcRenderer } from "electron"
// const { contextBridge, ipcRenderer } = require('electron')
import type { IpcRendererEvent } from 'electron'
import { isMacOS, isWindows, isLinux } from 'std-env'

const exposeInMainWorld = async () => {
	const { contextBridge, ipcRenderer } = await import('electron')

	contextBridge.exposeInMainWorld("ipc", {
		send: <A>(channel: string, ...args: A[]) => {
			ipcRenderer.send(channel, ...args)
		},
		on: (channel: string, callback: (e: IpcRendererEvent) => void) => {
			ipcRenderer.on(channel, callback)
		},
		removeListener: (channel: string, callback: (e: IpcRendererEvent) => void) => {
			ipcRenderer.removeListener(channel, callback)
		},
		invoke: <R>(channel: string, ...args: unknown[]): Promise<R> => {
			return ipcRenderer.invoke(channel, ...args)
		},
		addEventListener: (channel: string, callback: (e: IpcRendererEvent) => void) => {
			ipcRenderer.on(channel, callback)
		},
	})

	contextBridge.exposeInMainWorld("is", {
		isMacOS,
		isWindows,
		isLinux,
	})
}


exposeInMainWorld()