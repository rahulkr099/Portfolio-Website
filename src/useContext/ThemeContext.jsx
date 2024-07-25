import { createContext,useContext, useEffect, useState } from "react";


const ThemeContext = createContext();

export const useTheme = () => {
    return useContext(ThemeContext)
};

export const ThemeProvider = ({children}) =>{

    const [isDarkMode,setIsDarkMode]= useState(false);

    const toggleTheme = ()=>{
        
        setIsDarkMode((prevState)=>!prevState);
    };
    const theme = isDarkMode?'Dark':'Light';
    useEffect(()=>{
        toggleTheme();
    console.log('theme useEffect is run')
    },[setIsDarkMode])

    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>{children}</ThemeContext.Provider>
    )
}