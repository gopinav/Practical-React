import React from 'react'
import './App.css'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

const CustomToast = ({ closeToast }) => {
  return (
    <div>
      Something went wrong! <button onClick={closeToast}>Close</button>
    </div>
  )
}

function App () {
  const notify = () => {
    toast('Default!', { position: toast.POSITION.TOP_LEFT })
    toast.success('Success!', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 8000
    })
    toast.info('Info!', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: false
    })
    toast.warn(<CustomToast />, {
      position: toast.POSITION.BOTTOM_LEFT
    })
    toast.error('Error!', { position: toast.POSITION.BOTTOM_CENTER })
    toast('Wow so easy !', { position: toast.POSITION.BOTTOM_RIGHT })
  }
  return (
    <div className='App'>
      <button onClick={notify}>Notify !</button>
    </div>
  )
}

export default App
