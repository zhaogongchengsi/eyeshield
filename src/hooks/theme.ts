import { useAtom } from "jotai";
import { Handle } from "../../share/constant";
import { atomWithStorage } from 'jotai/utils'

const darkModeAtom = atomWithStorage('darkMode', false)

const html = document.documentElement;
const body = document.body;

export const useTheme = ():[boolean, () => void] => {
	const [theme, setTheme] = useAtom(darkModeAtom)

	const triggerTheme = () => {
		if (theme) {
			body.setAttribute('theme-mode', 'dark');
			html.classList.add('dark-theme');
			window.ipc.invoke(Handle.SetTheme, 'dark');
		} else  {
			body.setAttribute('theme-mode', 'light');
			html.classList.remove('dark-theme');
			window.ipc.invoke(Handle.SetTheme, 'light');
		}

		setTheme(!theme)
	}


	return [theme, triggerTheme]
}

