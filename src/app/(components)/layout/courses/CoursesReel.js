"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CourseCard from "../../CourseCard";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const sliderBreakpoints = {
    300: {
        slidesPerView: 1,
    },
    576: {
        slidesPerView: 2,
    },
    768: {
        slidesPerView: 3,
    },
    1000: {
        slidesPerView: 5,
    },
};

const CoursesReel = ({ title, courses, breakpoints, className }) => {
    return (
        <div className={`container ${className}`}>
            {title && (
                <h2 className="font-semibold text-2xl capitalize">{title}</h2>
            )}

            <Swiper
                modules={[Pagination]}
                spaceBetween={50}
                breakpoints={breakpoints ? breakpoints : sliderBreakpoints}
                pagination={{
                    clickable: true,
                }}
                className="mt-5">
                {courses.map(({ id, img, category, name, price }) => (
                    <SwiperSlide key={name}>
                        <CourseCard
                            img={img}
                            name={name}
                            price={price}
                            category={category}
                            href={`/courses/${id}`}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CoursesReel;
