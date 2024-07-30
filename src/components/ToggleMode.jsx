import { ThemeContext } from "../useContext/ThemeContext";
import { useState,useContext } from "react";
function ToggleMode() {
    const [isChecked, setIsChecked] = useState(false)
    const {toggleTheme} = useContext(ThemeContext)
    
    const handleCheckboxChange = () => {
      setIsChecked(!isChecked)
    }
  return (
    <div>
        <label className='flex cursor-pointer select-none items-center w-16 '>
        <div className='relative right-6'>
          <input
            type='checkbox'
            checked={isChecked}
            onClick={toggleTheme}
            onChange={handleCheckboxChange}
            className='sr-only'
          />
          <div
            className={`box block h-10 w-20 rounded-full ${
              isChecked ?'bg-day bg-cover':'bg-night bg-cover'
            }`}
          ></div>
          <div
          
            className={`absolute left-2 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-gray-400 dark:bg-white transition border-[1.9px] border-red-300 dark:border-gray-800 bg-opacity-60 dark:bg-opacity-20 ${
              isChecked ? 'translate-x-full' : ''
            }`}
          ></div>
        </div>
      </label>
    </div>
  )
}

export default ToggleMode;