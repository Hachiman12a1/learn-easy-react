import { useState } from 'react';
import './App.css';
import { Footer, Header } from './components/common';
import { MainLayout } from './components/Layout';
import { MyText } from './features/labs/MyText';
import { StudentCard } from './features/labs/Student';
import { Student } from './models/student';
// import Footer from './components/common/Footer'
// import Header from './components/common/Header'

function App() {
  const [count, setCount] = useState(0);

  function abc() {}

  const john: Student = {
    name: 'John',
    age: 3,
  };

  function handleStudentClick(student: Student) {
    console.log('student click', student);
  }
  return (
    <div>
      <MainLayout>
        <StudentCard student={john} onClick={handleStudentClick} />
      </MainLayout>

      <MyText></MyText>

      <MyText>Easy Frontend</MyText>
      <MyText>{123}</MyText>
      <MyText>{false}</MyText>
      <MyText>{null}</MyText>
      <MyText>{undefined}</MyText>

      <MyText>
        <span>easy</span>
      </MyText>

      <MyText>
        <span>easy</span> frontend
      </MyText>

      <MyText>
        <span>easy</span>
        <span>frontend</span>
      </MyText>
    </div>
  );
}

export default App;
