import { useState } from 'react'
import './App.css'
import { Footer, Header } from './components/common'
// import Footer from './components/common/Footer'
// import Header from './components/common/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Footer></Footer>
    </div>
  )
}

export default App
