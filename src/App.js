import Main from "./pages/main/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Comments from "./pages/comments/Comments";
import Edit from "./pages/edit/Edit";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/comments/:id" element={<Comments/>}/>
          <Route path="/edit/:id" element={<Edit/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
