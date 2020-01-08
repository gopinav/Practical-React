import React from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App () {
  const notify = () => toast('Wow so easy !')
  return (
    <div className='App'>
      <button onClick={notify}>Notify !</button>
      <ToastContainer />
    </div>
  )
}

export default App
