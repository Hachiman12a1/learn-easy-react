import { useState } from 'react';

function App() {
  const [showMore, setShowMore] = useState(false);
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  function handleIncreaseClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={handleIncreaseClick}>Increase Count</button>
      
      {showMore && <p>{name}</p>}
    </div>
  );
}

export default App;
