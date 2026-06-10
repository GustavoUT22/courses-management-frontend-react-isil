import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import CoursesPage from "./pages/CoursesPage/CoursesPage";
import CourseDetailPage from "./pages/CourseDetailPage/CourseDetailPage";

export default function App() {
    return (
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
    );
}
