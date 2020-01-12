import React, { useState } from 'react'
import './App.css'
import Modal from 'react-modal'

Modal.setAppElement('#root')
function App () {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <div className='App'>
      <button onClick={() => setModalIsOpen(true)}>Open modal</button>
      <Modal isOpen={modalIsOpen}>
        <h2>Modal title</h2>
        <div>Modal Body</div>
        <div>
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </div>
      </Modal>
    </div>
  )
}

export default App
