import { useState } from 'react'
import './App.css'
import { Footer, Header } from './components/common'
import { StudentCard } from './features/labs/Student'
import { Student } from './models/student'
// import Footer from './components/common/Footer'
// import Header from './components/common/Header'

function App() {
  const [count, setCount] = useState(0)

  function abc() {}

  const john: Student = {
    name: 'John',
    age: 3,
  }

  return (
    <div>
      <Header></Header>
      <StudentCard student={john} />
      <Footer></Footer>
    </div>
  )
}

export default App
