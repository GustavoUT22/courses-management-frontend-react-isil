import { useState, useContext, createContext, useEffect } from "react";

export const CourseContext = createContext(null);
export const useCourse = () => useContext(CourseContext);

export const CourseProvider = ({ children }) => {
  const [enrollments, setEnrollments] = useState(() => {
    const saved = localStorage.getItem("myEnrollments");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("myEnrollments", JSON.stringify(enrollments));
  }, [enrollments]);

  const addEnrollment = (course) => {
    setEnrollments((prev) => {
      if (!prev.find((c) => c.id === course.id)) {
        return [...prev, course];
      }
      return prev;
    });
  };

  const removeEnrollment = (courseId) => {
    setEnrollments((prev) => prev.filter((c) => c.id !== courseId));
  };

  return (
    <CourseContext.Provider value={[enrollments, addEnrollment, removeEnrollment]}>
      {children}
    </CourseContext.Provider>
  );
};