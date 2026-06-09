import { Link } from "react-router-dom";

export default function Navbar() {
    return(
        <nav>
            <Link to="/">Inicio</Link>
            <Link to="/courses">Cursos</Link>
            <Link to="/enrollments">Mis Preinscripciones</Link>
            
        </nav>
    );
}