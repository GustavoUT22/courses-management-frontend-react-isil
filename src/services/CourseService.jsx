import {courses} from "../data/courses.js"


export function getCourses(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(courses);
        }, 500)
    });
}

export function getCourseById(id){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(courses.find((c) => c.id === Number(id)) ?? null);
        }, 500);
    });
}