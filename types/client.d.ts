declare interface Window {
	is: {
		isMacOS: boolean;
		isWindows: boolean;
		isLinux: boolean;
	},
	ipc: {
		send: <A>(channel: string, ...args: A[]) => void;
		on: (channel: string, callback: (e: IpcRendererEvent) => void) => void;
		removeListener: (channel: string, callback: (e: IpcRendererEvent) => void) => void;
		invoke: <R>(channel: string, ...args: unknown[]) => Promise<R>;
		addEventListener: (channel: string, callback: (e: IpcRendererEvent) => void) => void
	}
}