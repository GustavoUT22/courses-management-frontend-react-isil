import { Link } from "react-router-dom";
import { useEnrollment } from "../../context/EnrollmentContext";
import styles from "./EnrollmentsPage.module.css";

export default function EnrollmentsPage() {
  const [enrollments, , removeEnrollment] = useEnrollment();

  return (
    <div className={styles.container}>
      <h1>Mis Preinscripciones</h1>

      {enrollments.length === 0 ? (
        <div className={styles.empty}>
          <p>No tienes cursos preinscritos todavía.</p>

          <Link to="/courses" className={styles.link}>
            Ir al catálogo
          </Link>
        </div>
      ) : (
        <div className={styles.list}>
          {enrollments.map((course) => (
            <div key={course.id} className={styles.card}>
              <h2>{course.name}</h2>

              <p>
                <strong>Docente:</strong> {course.teacher}
              </p>

              <p>
                <strong>Categoría:</strong> {course.category}
              </p>

              <p>{course.description}</p>

              <button
                className={styles.button}
                onClick={() => removeEnrollment(course.id)}
              >
                Cancelar inscripción
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}