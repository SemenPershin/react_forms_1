import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("white");
  const [RGB, setRGB] = useState("")

  function HEXtoRGB(event: React.ChangeEvent<HTMLInputElement>) {
    const ruleString = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i

    if (event.target.value.length === 7 && ruleString.test(event.target.value))  {
      const red = parseInt(event.target.value.substring(1, 3), 16);
      const green = parseInt(event.target.value.substring(3, 5), 16);
      const blue = parseInt(event.target.value.substring(5, 7), 16);
      setColor(`rgb(${red}, ${green}, ${blue})`);
      setRGB(`rgb(${red}, ${green}, ${blue})`);
    }

    if (event.target.value.length === 7 && !ruleString.test(event.target.value))  {
      setRGB("Ошибка!");
    }
  }


  return (
    <div className='app' style={{ backgroundColor: color }}>
      <input className="input" type="text" placeholder='#RRGGBB' onChange={(event) => HEXtoRGB(event)} />
      <div className='text_box'>{RGB}</div>
    </div>

  )
}

export default App
