import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AllPosts from "./components/ViewPost";
import UpdatePost from "./components/UpdatePost";

function App() {
  return (
    <div className="app">
      <Toaster position="top-center" reverseOrder={true} />
      <BrowserRouter>
        <Routes>
          <Route path="/AllPosts" element={<AllPosts />} />
          <Route path="/UpdatePost/:id" element={<UpdatePost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
