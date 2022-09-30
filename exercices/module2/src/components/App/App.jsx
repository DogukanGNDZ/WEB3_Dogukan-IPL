import Button from "components/Button/Button"
import Display from "components/DIsplay/Display"
import { useState } from 'react'

const App = () => {
    
    const [ counter, setCounter ] = useState(JSON.parse(localStorage.getItem("counter")))
    
    

    const changeCount = (delta) => {
      let counter1=counter+delta
      setCounter(counter1)
      localStorage.setItem("counter", JSON.stringify(counter1))
      //console.log(counter1)
    }

    
    return (
      <div>
        <Display counter={counter}/>
        <Button
          change={changeCount}
          text='plus'
          delta= "1"
        />
        <Button
          change={changeCount}
          text='zero'
          delta={-counter}
        />     
        <Button
          change={changeCount}
          text='minus'
          delta="-1"
        />           
      </div>
    )
  }

  export default App