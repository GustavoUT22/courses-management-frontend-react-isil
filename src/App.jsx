import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import { CourseProvider } from "./context/CourseContext";
import CoursesPage from "./pages/CoursesPage";
import CourseDetailPage from "./pages/CourseDetailPage";

function App() {
    return (
        <CourseProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route
                        path="/courses"
                        element={<CoursesPage></CoursesPage>}
                    />
                    <Route path="/courses/:id" element={<CourseDetailPage />} />
                    <Route
                        path="/enrollments"
                        element={<div>inscripciones page</div>}
                    />
                </Routes>
            </BrowserRouter>
        </CourseProvider>
    );
}

export default App;
