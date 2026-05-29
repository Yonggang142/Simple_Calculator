import { createContext, useState } from "react"
import './App.css'

function App() {
  const [output, setOutput] = useState("")

  const [evaluated, setEvaluated] = useState(false)


  const registers = {0: "0", 1: "1", 2: "2", 3: "3", 
    4: "4", 5: "5", 6: "6", 7: "7", 
    8: "8", 9: "9", 10: "+", 
    11: "-", 12: "*", 13: "/", 14: "="}

  function evaluate() {
    try {
      const result = eval(output)
      setOutput(result)
      setEvaluated(true)
    } catch (error) {

      setOutput("invalid input")
      setEvaluated(true)
    }
  }

  function handleClick(x) {
    if (x == 14) {
      evaluate()
      return 
    }

    const char = registers[x]


    if (evaluated == true) {
      setOutput(char)
      setEvaluated(false)
    } else {
      setOutput(prev => prev + char)
    }
  } 

  return (
    <>
      <div>
        <h1 className='Title'>
          Calculator
        </h1>

        <div className='Calculator'>
        
          <h2 className='Output'>
            {output}
          </h2>
        
          <div className='grid-container'>
            <button className = "button" onClick={() => handleClick(0)}> 0 </button>
            <button className = "button" onClick={() => handleClick(1)}> 1 </button>
            <button className = "button" onClick={() => handleClick(2)}> 2 </button>
            <button className = "button" onClick={() => handleClick(3)}> 3 </button>
            <button className = "button" onClick={() => handleClick(4)}> 4 </button>
            <button className = "button" onClick={() => handleClick(5)}> 5 </button>
            <button className = "button" onClick={() => handleClick(6)}> 6 </button>
            <button className = "button" onClick={() => handleClick(7)}> 7 </button>
            <button className = "button" onClick={() => handleClick(8)}> 8 </button>
            <button className = "button" onClick={() => handleClick(9)}> 9 </button>
            <button className = "button" onClick={() => handleClick(10)}> + </button>
            <button className = "button" onClick={() => handleClick(11)}> - </button>
            <button className = "button" onClick={() => handleClick(12)}> × </button>
            <button className = "button" onClick={() => handleClick(13)}> ÷ </button>
            <button className = "button" onClick={() => handleClick(14)}> = </button>
          </div>
        </div>
        
    





      </div>
    </>
  )
}

export default App
