import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/starred">starred</Link>
        </nav>
        <Routes>
          <Route path="/" element={<h1>Home page</h1>} />
          <Route path="/starred" element={<h1>starred</h1>} />
          <Route path="*" element={<h1>404 Page not found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
