import React from 'react'
import ReactPlayer from 'react-player'
import './App.css'
function App () {
  return (
    <div className='App'>
      <ReactPlayer
        url='https://www.twitch.tv/videos/570405604'
        controls
        onReady={() => console.log('onReady callback')}
        onStart={() => console.log('onStart callback')}
        onPause={() => console.log('onPause callback')}
        onEnded={() => console.log('onEnded callback')}
        onError={() => console.log('onError callback')}
      />
    </div>
  )
}

export default App
