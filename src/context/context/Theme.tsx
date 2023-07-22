import React, { useState, useEffect, createContext, Dispatch, SetStateAction } from "react";

interface ThemeContextTypes {
    theme: string;
    changeTheme: Dispatch<SetStateAction<any>>
}

interface ThemeProps {
    children: JSX.Element;
}

const ThemeContext = createContext<ThemeContextTypes>({
    theme: "dark",
    changeTheme: () => ""
})

export function ThemeProvider(props: ThemeProps) {
    const [theme, setTheme] = useState<string>("");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        setTheme(savedTheme || "dark");
    }, [])

    function changeTheme(newTheme: string) {
        console.log(theme)
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    }

    return (
        <ThemeContext.Provider value={{theme, changeTheme}}> 
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext;