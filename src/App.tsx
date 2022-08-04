import { useEffect, useState } from 'react';
import './App.css';
import { Footer, Header, Widget } from './components/common';
import { MainLayout } from './components/Layout';
import { MyText } from './features/labs/MyText';
import { StudentCard } from './features/labs/Student';
import { Student } from './models/student';
// import Footer from './components/common/Footer'
// import Header from './components/common/Header'

function App() {
  const [count, setCount] = useState(0);
  // const loading = false;

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  function abc() {}

  const john: Student = {
    name: 'John',
    age: 3,
  };

  function handleStudentClick(student: Student) {
    console.log('student click', student);
  }

  // if (loading) return <p>Loading.....</p>;

  return (
    <div>
      {loading && <p>Loading....</p>}
      {loading ? <p>Loading....</p> : <p>Data ready!</p>}
      {loading ? 'Loading....' : 'Data ready!'}
      <br />

      {true && 'show true'}
      <br />
      {false && 'show false'}
      <br />
      {'' && 'show empty'}
      <br />

      {'0' && 'show zero string'}
      <br />

      {[].length > 0 && 'show zero'}
      <br />

      {Boolean(NaN) && 'show NaN'}
      <br />

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

      <div>
        <div>
          <Widget title="Earning Overview">Chart 1</Widget>
        </div>

        <div>
          <Widget title="Revenue Sources">
            <div>Chart 2</div>
          </Widget>
        </div>

        <div>
          <Widget title="Earning Overview">
            <img src="sdasdda" alt="" />
          </Widget>
        </div>

        <div>
          <Widget title="Earning Overview">Chart 4</Widget>
        </div>
      </div>
    </div>
  );
}

export default App;
