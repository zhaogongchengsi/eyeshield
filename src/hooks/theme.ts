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

const getLocalTheme = ()  => window.localStorage.getItem('theme') as Theme
const setLocalTheme = (t: Theme) => window.localStorage.setItem('theme', t)

const theme = atom('light')


const readWriteAtom = atom(
	// async (): Promise<Theme> => {
	// 	const t = await window.ipc.invoke(Handle.GetTheme) as Theme
	// 	setTheme(t)
	// 	return t as Theme
	// },
	(): Theme => {
		const theme = getLocalTheme()
		setTheme(theme)
		return theme
	},
	(_, set, newTheme: Theme) => {
		set(theme, newTheme)
		setTheme(newTheme)
		setLocalTheme(newTheme)
		window.ipc.invoke(Handle.SetTheme, newTheme)
	},
)


export const useTheme = () => useAtom(readWriteAtom)

