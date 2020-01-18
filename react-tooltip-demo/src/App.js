import React, { forwardRef } from 'react'
import './App.css'
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'

const ColoredTooltip = () => {
  return <span style={{ color: 'yellow' }}>Colored</span>
}

const CustomChild = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div>First line</div>
      <div>Second line</div>
    </div>
  )
})

function App () {
  return (
    <div className='App'>
      <div style={{ paddingBottom: '20px' }}>
        <Tippy content='Hello' arrow={false} delay={1000}>
          <button>My button</button>
        </Tippy>
      </div>
      <div style={{ paddingBottom: '20px' }}>
        <Tippy content={<span style={{ color: 'orange' }}>Colored</span>}>
          <button>My button</button>
        </Tippy>
      </div>
      <div style={{ paddingBottom: '20px' }}>
        <Tippy content={<ColoredTooltip />} >
          <button>My button</button>
        </Tippy>
      </div>
      <div style={{ paddingBottom: '20px' }}>
        <Tippy content={<ColoredTooltip />} placement='top-end'>
          <CustomChild />
        </Tippy>
      </div>
    </div>
  )
}

export default App
