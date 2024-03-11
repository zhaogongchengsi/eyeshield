import { atom, useAtom } from "jotai";
import { Handle } from "../../share/constant";

const html = document.documentElement;
const body = document.body;

const setTheme =  (t: Theme) => {
	if (t === 'dark') {
		body.setAttribute('theme-mode', 'dark');
		html.classList.add('dark-theme');
	}

	if (t === 'light') {
		body.setAttribute('theme-mode', 'light');
		html.classList.remove('dark-theme');
	}
}

const theme = atom('light')

const readWriteAtom = atom(
	async (): Promise<Theme> => {
		const t = await window.ipc.invoke(Handle.GetTheme) as Theme
		setTheme(t)
		return t as Theme
	},
	(_, set, newTheme: Theme) => {
		setTheme(newTheme)
		set(theme, newTheme)
		window.ipc.invoke(Handle.SetTheme, newTheme)
	},
)


export const useTheme = () => useAtom(readWriteAtom)

