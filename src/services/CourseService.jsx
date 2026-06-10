import {courses} from "../data/courses.js"


export function getCourses(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(courses);
        }, 500)
    });
}