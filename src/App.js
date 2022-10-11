import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import Show from "./pages/Show";
import Starred from "./pages/Starred";
import { ThemeProvider } from "styled-components";

const theme = {
  mainColors: {
    blue: "#2400ff",
    gray: "#c6c6c6",
    dark: "#353535",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/starred" element={<Starred />} />
          <Route path="/show/:id" element={<Show />} />
          <Route path="*" element={<h1>404 Page not found</h1>} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
