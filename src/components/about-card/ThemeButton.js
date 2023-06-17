import useModal from "../../hooks/useModal"
import useTheme from "../../hooks/useTheme"
import { IoMdArrowDropup } from "react-icons/io"
import "./theme-button.css"

function ThemeButton({ className }) {
  const { updateTheme, theme } = useTheme()
  const { hideModal } = useModal()

  function handleClick(className) {
    updateTheme(className)
    hideModal()
  }

  return (
    <div className="modal-theme-button">
      <button
        onClick={() => handleClick(className)}
        className={`${className} ${theme === className ? "active" : ""}`}
      ></button>
      {theme === className ? (
        <IoMdArrowDropup />
      ) : (
        <div className="hide">
          <IoMdArrowDropup />
        </div>
      )}
    </div>
  )
}

export default ThemeButton
