import { useState, useContext, createContext } from "react";

export const CourseContext = createContext();
export const useContext = useContext(CourseContext);

export const CourseProvider = ({children}) => {
  const [enrollments, setEnrollments] = useContext(CourseContext);

  const addEnrollment = (course) => {
    if (!enrollments.find(c => c.id == course.id)){
      setEnrollments([...enrollments, course])
    }
  }

  const removeEnrollment = (courseId) => {
    setEnrollments(enrollments.find(c => c.id !== courseId))
  }

  const value = [
    enrollments,
    addEnrollment,
    removeEnrollment
  ]

  return (
    <CourseContext.Provider value={value}>
      {children}
    </CourseContext.Provider>
  )
}