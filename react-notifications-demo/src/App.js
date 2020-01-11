import React from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App () {
  const notify = () => {
    toast('Wow so easy !', { position: toast.POSITION.TOP_LEFT })
    toast('Wow so easy !', { position: toast.POSITION.TOP_CENTER })
    toast('Wow so easy !', { position: toast.POSITION.TOP_RIGHT })
    toast('Wow so easy !', { position: toast.POSITION.BOTTOM_LEFT })
    toast('Wow so easy !', { position: toast.POSITION.BOTTOM_CENTER })
    toast('Wow so easy !', { position: toast.POSITION.BOTTOM_RIGHT })
  }
  return (
    <div className='App'>
      <button onClick={notify}>Notify !</button>
      <ToastContainer />
    </div>
  )
}

export default App
