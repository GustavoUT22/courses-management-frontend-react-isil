import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <Link to="/">Inicio</Link>
            <Link to="/courses">Cursos</Link>
            <Link to="/enrollments">Mis Preinscripciones</Link>
        </nav>
    );
}