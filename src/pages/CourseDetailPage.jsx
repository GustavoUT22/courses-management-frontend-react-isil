import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { courses } from "../data/courses";
import { useCourse } from "../context/CourseContext";
import styles from "./CourseDetail.module.css";

const CourseDetailPage = () => {
    const { id } = useParams();
    const [course, setCourse] = useState(null);
    const navigate = useNavigate();
    const [enrollments, addEnrollment] = useCourse();

    useEffect(() => {
        const found = courses.find(
            (c) => c.id === Number(id)
        );
        setCourse(found);
    }, [id]);

    if (!course) return <div>Cargando...</div>;

    const isEnrolled = enrollments.some(
        (c) => c.id === course.id
    );

    return (
        <div className={styles["course-container"]}>
            <div className={styles["course-detail"]}>
                <button
                    className={styles["btn-back"]}
                    onClick={() => navigate("/courses")}
                >
                    Volver al catálogo
                </button>

                <h2>{course.name}</h2>
                <p>{course.description}</p>

                <p>
                    <strong>Profesor:</strong>{" "}
                    {course.teacher}
                </p>

                <p>
                    <strong>Categoría:</strong>{" "}
                    {course.category}
                </p>

                <p>
                    <strong>Capacidad:</strong>{" "}
                    {course.capacity}
                </p>

                <button
    onClick={() => addEnrollment(course)}
    disabled={isEnrolled}
>
    {isEnrolled ? "Ya inscrito" : "Preinscribirse"}
</button>
            </div>
        </div>
    );
};

export default CourseDetailPage;