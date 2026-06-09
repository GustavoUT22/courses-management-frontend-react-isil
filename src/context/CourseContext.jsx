import { useState, useContext, createContext } from "react";

export const CourseContext = createContext(null);

export const useCourse = () => useContext(CourseContext);

export const CourseProvider = ({ children }) => {
  const [enrollments, setEnrollments] = useState([]);

  const addEnrollment = (course) => {
    if (!enrollments.find((c) => c.id === course.id)) {
      setEnrollments([...enrollments, course]);
    }
  };

  const removeEnrollment = (courseId) => {
    setEnrollments(
      enrollments.filter((c) => c.id !== courseId)
    );
  };

  const value = [
    enrollments,
    addEnrollment,
    removeEnrollment,
  ];

  return (
    <CourseContext.Provider value={value}>
      {children}
    </CourseContext.Provider>
  );
};