import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";
import styles from "./CoursesPage.module.css";


export default function CoursesPage(){
    return (
        <>

            <div className={styles["page-container"]}>
                <h1>Catálogo de Cursos</h1>
            
                <p>Explora los cursos disponibles</p>

                

                <div className={styles["courses-container"]}>
                    {courses.map(course => (<CourseCard key={course.id} course={course}/>))}
                </div>
            </div>

             
            

        </>
         

    );
}