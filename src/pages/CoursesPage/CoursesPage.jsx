import { useEffect, useState } from "react";
import CourseCard from "../../components/CourseCard/CourseCard";
import styles from "./CoursesPage.module.css";
import { getCourses } from "../../services/CourseService.jsx";

export default function CoursesPage() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const loadCourses = async () => {
            const data = await getCourses();
            setCourses(data);
        };
        loadCourses();
    }, []);

    return (
        <>
            <div className={styles["page-container"]}>
                <h1>Catálogo de Cursos</h1>
                <p>Explora los cursos disponibles</p>
                <div className={styles["courses-container"]}>
                    {courses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            </div>
        </>
    );
}
