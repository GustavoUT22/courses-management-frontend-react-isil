import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import { CourseProvider } from "./context/CourseContext";
import Layout from "./components/Layout";
import CoursesPage from "./pages/CoursesPage";
import CourseDetailPage from "./pages/CourseDetailPage";
import EnrollmentsPage from "./pages/EnrollmentsPage";

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
                            element={<EnrollmentsPage />}
                            />
                    </Route>
                </Routes>
            </BrowserRouter>
        </CourseProvider>
    );
}
