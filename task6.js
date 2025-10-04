import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useReducer,
  useRef,
} from "react";

// Reducer example
function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default function HookDemo() {
  const [todos, setTodos] = useState([]);
  const [query, setQuery] = useState("");
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  const inputRef = useRef();

  // Fetch API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  // useCallback để tránh re-render khi truyền xuống component con
  const addTodo = useCallback(() => {
    if (inputRef.current.value.trim() === "") return;
    setTodos([...todos, { id: Date.now(), title: inputRef.current.value }]);
    inputRef.current.value = "";
  }, [todos]);

  // useMemo tính toán giá trị
  const completedCount = useMemo(
    () => todos.filter((t) => t.completed).length,
    [todos]
  );

  return (
    <div>
      <h2>Counter: {state.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>

      <h2>Todos ({completedCount} completed)</h2>
      <input ref={inputRef} placeholder="Add todo" />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos
          .filter((t) => t.title.includes(query))
          .map((t) => (
            <li key={t.id}>{t.title}</li>
          ))}
      </ul>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search todo..."
      />
    </div>
  );
}
