import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
} from "react-router-dom";

function Home() {
  return <h2>Trang chủ</h2>;
}

function About() {
  return <h2>Giới thiệu</h2>;
}

function User() {
  const { id } = useParams();
  return <h2>Người dùng ID: {id}</h2>;
}

function App() {
  const navigate = useNavigate();

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/user/123">User 123</Link>
      </nav>
      <button onClick={() => navigate("/")}>Quay về Home</button>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </div>
  );
}

function RouterApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default RouterApp;
