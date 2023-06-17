import { createContext, useState } from "react"

const ThemeContext = createContext()

function ThemeProvider({ children }) {
  const storedTheme = localStorage.getItem("theme")
  const [theme, setTheme] = useState(storedTheme || "color-1")

  function updateTheme(newTheme) {
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext }
export { ThemeProvider }
