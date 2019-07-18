import { createContext, useContext } from 'react'

/* Define the ThemeContext context */
const ThemeContext = createContext()

export default ThemeContext
export const Provider = ThemeContext.Provider
export const Consumer = ThemeContext.Consumer


/* Define custom hook to use ThemeContext */
export const useThemes = () => useContext(ThemeContext);