import { useEffect, useState } from "react";
import api from "./api";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get("/posts?_limit=5").then((res) => setPosts(res.data));
  }, []);

  return (
    <div>
      <h1>Axios Demo</h1>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
