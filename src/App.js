import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostList from "./PostList";
import PostDetails from "./PostDetails";
import Home from "./Home";
import { Container, CssBaseline } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<PostList />} />
          <Route path="/dados/:id" element={<PostDetails />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;


