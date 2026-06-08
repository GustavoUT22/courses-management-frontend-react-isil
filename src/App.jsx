import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import { CourseProvider } from "./context/CourseContext";
function App() {
  return (
    <CourseProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route pat h="/courses" element={<div>cursos page</div>} />
          <Route path="/courses/:id" element={<div>detalle de curso page</div>} />
          <Route pat h="/enrollments" element={<div>inscripciones page</div>} />
        </Routes>
      </BrowserRouter>
    </CourseProvider>
  );
}

export default App;
