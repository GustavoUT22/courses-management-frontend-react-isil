import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <h1>Portal del estudiante</h1>
            <Navbar />
        </header>
    );
}