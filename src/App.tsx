import { useState } from 'react';

// pure
// impure

let run = 0;
function calcCount() {
  run += 5;
  console.log('calc count', run);
  return run;
}

function App() {
  let i = 0;
  const [showMore, setShowMore] = useState(false);
  const [count, setCount] = useState(calcCount);
  const [name, setName] = useState('');

  function handleIncreaseClick() {
    setCount(count + 1); //async function
    console.log('after setting count', count); //old count
    i += 5;
  }

  console.log({ count, i });

  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={handleIncreaseClick}>Increase Count</button>

      {showMore && <p>{name}</p>}
    </div>
  );
}

export default App;
