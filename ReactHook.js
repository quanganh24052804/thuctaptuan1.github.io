import { useState, useEffect, useRef, useMemo, useCallback } from "react";

function App() {
  const [count, setCount] = useState(0);
  const inputRef = useRef();

  // useEffect
  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  // useMemo
  const double = useMemo(() => count * 2, [count]);

  // useCallback
  const handleFocus = useCallback(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h1>React Hook Demo</h1>
      <p>
        Count: {count} | Double: {double}
      </p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <input ref={inputRef} placeholder="Type here..." />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default App;
