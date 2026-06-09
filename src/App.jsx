import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import { CourseProvider } from "./context/CourseContext";
import Layout from "./components/Layout";
import CoursesPage from "./pages/CoursesPage";
export default function App() {
  return (
    <CourseProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/enrollments" element={<div>inscripciones page</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CourseProvider>
  );
}