import './App.css'
import { useState } from 'react'

function App () {
  // const color = 'green'
  const boxes = []
  const rows = 12
  const cols = 12

  // const [isLit, setIsLit] = useState(false)

  for (let i = 1; i <= cols * rows; i++) {
    boxes.push(i)
  }

  return (
    <div>Hello World
      <div className='container'>
        <div className='content-block row animate__animated animate__fadeInUp'>
          {boxes.map((box, idx) => {
            return (
              <LightBox box={box} key={idx} />
            )
          }
          )}

        </div>
      </div>
    </div>
  )
}

function LightBox (props) {
  // const { idx } = idx
  const { box } = props
  const [isLit, setIsLit] = useState(false)

  return (
    <div className='shell'>
      {box && (
        <div> {isLit
          ? <div className='box color-on red' onClick={() => setIsLit(false)}>{box}</div>

          : <div className='box color-off' onClick={() => setIsLit(true)}>{box}</div>}
        </div>)}
    </div>
  )
}

function ColorChangeButton (props) {
  console.log(props)
  return (
    <button className={props.color} onClick={() => props.setColor(props.color)}>
      {props.color}
    </button>
  )
}

export default App
