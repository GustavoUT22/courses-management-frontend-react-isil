import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { courses } from "../data/courses";

const CourseDetailPage = () => {
    const { id } = useParams();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        const found = courses.find((curso) => curso.id === Number(id));
        setCourse(found);
    }, [id]);
    if (!course) return <div>Cargadando ...</div>;

    return (
        <div>
            <h1>{course.name}</h1>
            <p>{course.description}</p>
            <p>Profesor: {course.teacher}</p>
            <p>Categoría: {course.category}</p>
            <p>Capacidad: {course.capacity}</p>
        </div>
    );
};

export default CourseDetailPage;
