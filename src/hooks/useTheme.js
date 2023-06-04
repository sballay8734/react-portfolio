import { ThemeContext } from "../context/theme-context"
import { useContext } from "react"

function useTheme() {
  return useContext(ThemeContext)
}

export default useTheme
