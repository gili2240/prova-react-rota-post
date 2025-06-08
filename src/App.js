import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostList from "./PostList";
import PostDetails from "./PostDetails";

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: 20 }}>
        <Routes>
          <Route path="/post" element={<PostList />} />
          <Route path="/dados/:id" element={<PostDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


