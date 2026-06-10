import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCourseById } from "../../services/CourseService.jsx";
import styles from "./CourseDetail.module.css";

const CourseDetailPage = () => {
    const { id } = useParams();
    const [course, setCourse] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        getCourseById(id).then(setCourse);
    }, [id]);
    if (!course) return <div>Cargando...</div>;

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
                    <strong>Profesor: </strong>
                    {course.teacher}
                </p>
                <p>
                    <strong>Categoría:</strong> {course.category}
                </p>
                <p>
                    <strong>Capacidad:</strong> {course.capacity}
                </p>
            </div>
        </div>
    );
};

export default CourseDetailPage;
