import { createContext, useState } from "react"

const ModalContext = createContext()

function ModalProvider({ children }) {
  const [modalIsShown, setModalIsShown] = useState(false)

  function showModal() {
    setModalIsShown(true)
  }

  function hideModal() {
    setModalIsShown(false)
  }

  return (
    <ModalContext.Provider value={{ modalIsShown, showModal, hideModal }}>
      {children}
    </ModalContext.Provider>
  )
}

export { ModalContext }
export { ModalProvider }
