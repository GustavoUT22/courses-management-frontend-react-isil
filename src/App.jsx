import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import { CourseProvider } from "./context/CourseContext";
import Layout from "./components/Layout";
import CoursesPage from "./pages/CoursesPage";
import CourseDetailPage from "./pages/CourseDetailPage";

export default function App() {
    return (
        <CourseProvider>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/courses" element={<CoursesPage />} />
                        <Route
                            path="/courses/:id"
                            element={<CourseDetailPage />}
                        />
                        <Route
                            path="/enrollments"
                            element={<div>inscripciones page</div>}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </CourseProvider>
    );
}
