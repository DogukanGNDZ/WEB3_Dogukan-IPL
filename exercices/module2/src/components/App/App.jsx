import Button from "components/Button/Button"
import Display from "components/DIsplay/Display"
import { useState } from 'react'

const App = () => {
    const [ counter, setCounter ] = useState(0)
  
    const changeCount = (delta) => setCounter(counter + delta)

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