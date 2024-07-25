import { createContext,useContext, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ThemeContext = createContext();

export const useTheme = () => {
    return useContext(ThemeContext)
};

export const ThemeProvider = ({children}) =>{

    const [isDarkMode,setIsDarkMode]= useState(false);

    const toggleTheme = ()=>{
        AOS.refresh();
        setIsDarkMode((prevState)=>!prevState);
    };
    const theme = isDarkMode?'Dark':'Light';
    useEffect(()=>{
        toggleTheme();;
    },[setIsDarkMode])

    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>{children}</ThemeContext.Provider>
    )
}