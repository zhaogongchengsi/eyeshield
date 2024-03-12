import { useEffect, useState } from "react";

export function useDarkModel(){
    const [dark, setDark] = useState(false)

    useEffect(()=>{
        const currentTheme = dark;
        if (currentTheme) {
            localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        } else {
            localStorage.removeItem("theme");
            document.documentElement.classList.remove("dark");
    }
    }, [dark])

    return [setDark]
}