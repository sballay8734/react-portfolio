import Modal from "../components/about-card/Modal"
import useModal from "../hooks/useModal"
import { primaryColors } from "../components/about-card/themeData"
import ThemeButton from "../components/about-card/ThemeButton"

function Theme() {
  const { hideModal } = useModal()

  return (
    <Modal>
      <div className="modal-background" onClick={() => hideModal()}></div>
      <div className="modal-content">
        <h3>Theme Select</h3>
        <small>Choose your preferred theme!</small>
        <div className="theme-buttons">
          {primaryColors.map((color) => {
            return <ThemeButton key={color.primary} className={color.primary} />
          })}
        </div>
      </div>
    </Modal>
  )
}

export default Theme
