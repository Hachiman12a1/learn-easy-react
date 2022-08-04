import { useState } from 'react'
import './App.css'
import { Footer, Header } from './components/common'
import { Student } from './features/labs/Student'
// import Footer from './components/common/Footer'
// import Header from './components/common/Header'

function App() {
  const [count, setCount] = useState(0)

  function abc() {}

  return (
    <div>
      <Header></Header>
      <Student
        name="Easy Frontend"
        age={18}
        isHero
        hobbyList={['eat', 'code', 'sleep']}
        sayHello={abc}
      />
      <Footer></Footer>
    </div>
  )
}

export default App
