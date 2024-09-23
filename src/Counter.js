import { useState } from 'react';

function Counter({name, btnName}) {
  const [count, setCount] = useState(0);

  

    return (
        <div>
            <h4>{`${name}: ${count}`}</h4>
            <button onClick={() => setCount(count + 1)}>Count</button>
        </div>
    )
}

export default Counter;