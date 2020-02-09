import React, { useState } from 'react'
import { ChromePicker } from 'react-color'
import './App.css'

function App () {
  const [color, setColor] = useState('#fff')
  const [showColorPicker, setShowColorPicker] = useState(false)

  return (
    <div>
      <button
        onClick={() => setShowColorPicker(showColorPicker => !showColorPicker)}
      >
        {showColorPicker ? 'Close color picker' : 'Pick a color'}
      </button>
      {showColorPicker && (
        <ChromePicker
          color={color}
          onChange={updatedColor => setColor(updatedColor.hex)}
        />
      )}
      <h2>You picked {color}</h2>
    </div>
  )
}

export default App
