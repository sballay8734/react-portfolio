import ReactDOM from "react-dom"
import "./modal.css"

function Modal({ children }) {
  return ReactDOM.createPortal(
    <>{children}</>,
    document.querySelector("#modal-container")
  )
}

export default Modal
