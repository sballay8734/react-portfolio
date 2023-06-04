import useModal from "../../hooks/useModal"
import useTheme from "../../hooks/useTheme"
import "./theme-button.css"

function ThemeButton({ className }) {
  const { updateTheme } = useTheme()
  const { hideModal } = useModal()

  function handleClick(className) {
    updateTheme(className)
    hideModal()
  }

  return (
    <button
      onClick={() => handleClick(className)}
      className={className}
    ></button>
  )
}

export default ThemeButton
