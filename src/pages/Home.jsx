import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1>Portal de estudiantes</h1>
      <p>Bienvenidos a la aplicación de inscripciones a cursos</p>
      <Link to="/courses">Ver catálogo de cursos</Link>
    </>
  );
};

export default HomePage;