import { useState } from 'react'
import Header from './components/header/Header'
import InputBar from './components/inputbar/InputBar'
import Tasklist from './components/tasklist/tasklist'

function App() {
  const [tasks, setTasks] = useState('')

  return (
    
    <div className="App">
      <Header/>
      <InputBar/>
      
    </div>
  )
}

export default App
