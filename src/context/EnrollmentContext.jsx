import { useState, useContext, createContext } from "react";

const EnrollmentContext = createContext(null);

export const useEnrollment = () => useContext(EnrollmentContext);

export const EnrollmentProvider = ({ children }) => {
    const [enrollments, setEnrollments] = useState([]);

    const addEnrollment = (course) => {
        if (!enrollments.find((c) => c.id === course.id)) {
            setEnrollments([...enrollments, course]);
        }
    };

    const removeEnrollment = (courseId) => {
        setEnrollments(enrollments.filter((c) => c.id !== courseId));
    };

    return (
        <EnrollmentContext.Provider value={[enrollments, addEnrollment, removeEnrollment]}>
            {children}
        </EnrollmentContext.Provider>
    );
};
