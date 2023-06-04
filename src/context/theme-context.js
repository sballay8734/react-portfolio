import { createContext, useState } from "react"

const ThemeContext = createContext()

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("color-1")

  function updateTheme(newTheme) {
    setTheme(newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext }
export { ThemeProvider }
