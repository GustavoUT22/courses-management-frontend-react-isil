import { Link } from "react-router-dom";
import styles from "./CourseCard.module.css";


export default function CourseCard({course}){




    return(
        <div className={styles["course-card"]}>
            <span>{course.category}</span> 
            <h2>{course.name}</h2>
            <p>{course.description}</p>
             
            <Link to={`/courses/${course.id}`} className={styles["ver-detalle"]}>Ver detalle</Link>
             
             
        </div>
    );
}