import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const ThemeContext = createContext();

// export const useTheme = () => {
//     return useContext(ThemeContext)
// };

export const ThemeProvider = ({children}) =>{

    const [isDarkMode,setIsDarkMode]= useState(false);

    const toggleTheme = ()=>{
        
        setIsDarkMode((prevState)=>!prevState);
    };
    const theme = isDarkMode?'Dark':'Light';
    useEffect(()=>{
        toggleTheme();
    // console.log('theme useEffect is run')
    },[setIsDarkMode])

    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>{children}</ThemeContext.Provider>
    )
}
ThemeProvider.propTypes = {
    children: PropTypes.node,
  };