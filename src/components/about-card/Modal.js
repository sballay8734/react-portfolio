import ReactDOM from "react-dom"
import "./modal.css"
import useModal from "../../hooks/useModal"

function Modal() {
  const { hideModal } = useModal()
  return ReactDOM.createPortal(
    <>
      <div className="modal-background" onClick={() => hideModal()}></div>
      <div className="modal-content">Blah</div>
    </>,
    document.querySelector("#modal-container")
  )
}

export default Modal
