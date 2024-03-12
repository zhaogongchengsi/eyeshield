import { useAtom } from "jotai";
import { Handle } from "../../share/constant";
import { atomWithStorage } from 'jotai/utils'
import { useEffect } from "react";

const darkModeAtom = atomWithStorage('darkMode', Boolean(localStorage.getItem('darkMode') || false))

const html = document.documentElement;
const body = document.body;

export const useTheme = ():[boolean, () => void] => {
	const [theme, setTheme] = useAtom(darkModeAtom)

	useEffect(() => {
		if (theme) {
			body.setAttribute('theme-mode', 'dark');
			html.classList.add('dark-theme', 'dark');
			window.ipc.invoke(Handle.SetTheme, 'dark');
		} else {
			body.setAttribute('theme-mode', 'light');
			html.classList.remove('dark-theme', 'dark');
			window.ipc.invoke(Handle.SetTheme, 'light');
		}
	}, [theme]);

	const triggerTheme = () => {
		setTheme(!theme)
	}

	return [theme, triggerTheme]
}

