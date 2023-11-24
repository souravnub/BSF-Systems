import React from "react";
import CoursesReel from "../(components)/layout/courses/CoursesReel";
import CourseCard from "../(components)/CourseCard";

// courses : [ {category: [courses]}, {category: [courses]} ]
const coursesByCategory = [
    {
        category: "Brand New",
        courses: [
            {
                id: "project-management-1",
                name: "Project Management - 1",

                img: {
                    url: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D",
                },
                features: ["2 hours long", "fast phased", "certificate"],
                price: 100.1,
                category: "project management",
            },
            {
                id: "project-management-2",
                name: "Project Management - 2",
                img: {
                    url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2NpZW5jZXxlbnwwfHwwfHx8MA%3D%3D",
                },
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, libero harum? Aperiam vel saepe consequatur id cupiditate ducimus. Minus reiciendis tenetur aspernatur amet fugit magni officiis nulla quae delectus numquam.",
                features: ["2 hours long", "fast phased", "certificate"],
                preRequisites: [],
                price: 100.1,
                category: "project management",
            },
            {
                id: "project-management-3",
                name: "Project Management - 3",
                img: {
                    url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2NpZW5jZXxlbnwwfHwwfHx8MA%3D%3D",
                },
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, libero harum? Aperiam vel saepe consequatur id cupiditate ducimus. Minus reiciendis tenetur aspernatur amet fugit magni officiis nulla quae delectus numquam.",
                features: ["2 hours long", "fast phased", "certificate"],
                preRequisites: [],
                price: 100.1,
                category: "project management",
            },
        ],
    },
    {
        category: "project management",
        courses: [
            {
                id: "project-management-1",
                name: "Project Management - 1",

                img: {
                    url: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D",
                },
                features: ["2 hours long", "fast phased", "certificate"],
                price: 100.1,
                category: "project management",
            },
            {
                id: "project-management-2",
                name: "Project Management - 2",
                img: {
                    url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2NpZW5jZXxlbnwwfHwwfHx8MA%3D%3D",
                },
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, libero harum? Aperiam vel saepe consequatur id cupiditate ducimus. Minus reiciendis tenetur aspernatur amet fugit magni officiis nulla quae delectus numquam.",
                features: ["2 hours long", "fast phased", "certificate"],
                preRequisites: [],
                price: 100.1,
                category: "project management",
            },
            {
                id: "project-management-3",
                name: "Project Management - 3",
                img: {
                    url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2NpZW5jZXxlbnwwfHwwfHx8MA%3D%3D",
                },
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, libero harum? Aperiam vel saepe consequatur id cupiditate ducimus. Minus reiciendis tenetur aspernatur amet fugit magni officiis nulla quae delectus numquam.",
                features: ["2 hours long", "fast phased", "certificate"],
                preRequisites: [],
                price: 100.1,
                category: "project management",
            },
        ],
    },
];

export default function Courses() {
    return (
        <section className="space-y-10 my-5 ">
            {coursesByCategory.map(({ category, courses }) => {
                return (
                    <CoursesReel
                        key={category}
                        title={category}
                        courses={courses}
                    />
                );
            })}
        </section>
    );
}
