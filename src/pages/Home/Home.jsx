import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const HomePage = () => {
  return (
    <div className={styles.home}>
      <h1>Portal de estudiantes</h1>
      <p>Bienvenidos a la aplicación de inscripciones a cursos</p>
      <Link to="/courses">Ver catálogo de cursos</Link>
    </div>
  );
};

export default HomePage;