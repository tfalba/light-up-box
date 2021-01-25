import './App.css'
import { useState } from 'react'

function App () {
  const boxes = []
  const rows = 16
  const cols = 16
  const [color, setColor] = useState('')

  for (let i = 1; i <= cols * rows; i++) {
    boxes.push(i)
  }

  return (
    <div className='container'>
      <div className='flex'>
        <button className='blue button' onClick={() => setColor('blue')}>Blue</button>
        <button className='green button' onClick={() => setColor('green')}>Green</button>
        <button className='yellow button' onClick={() => setColor('yellow')}>Yellow</button>
        <button className='red button' onClick={() => setColor('red')}>Red</button>
      </div>
      <div>
        <div className='content-block row animate__animated animate__fadeInUp'>
          {boxes.map((box, idx) => {
            return (
              <LightBox box={box} color={color} key={idx} />
            )
          }
          )}

        </div>
      </div>
    </div>
  )
}

function LightBox (props) {
  const [isLit, setIsLit] = useState(false)
  const { box } = props
  const { color } = props

  return (
    <div className='shell'>
      {box && (
        <div> {isLit
          ? <div className={`box color-on ${color}`} onMouseEnter={() => setIsLit(false)} />

          : <div className='box color-off' onMouseEnter={() => setIsLit(true)} />}
        </div>)}
    </div>

  )
}

export default App
