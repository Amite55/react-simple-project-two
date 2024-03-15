import { useEffect, useState } from "react";
import Course from "./Course";

const Courses = ({handleBtnClick}) => {
    const [courses, setCourses] = useState([])

    useEffect( ()=>{
        fetch('./courses.json')
        .then(response => response.json())
        .then(data => setCourses(data))
    },[])

    return (
        <div className="grid grid-cols-3 gap-4">
            {
                courses.map(course => <Course key={course.id} handleBtnClick={handleBtnClick} course={course}></Course>)
            }
        </div>
    );
};

export default Courses;