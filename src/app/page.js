"use client";
import React, { useState } from "react";
import ButtonPrimary from "./(components)/common/buttons/ButtonPrimary";
import ButtonSecondary from "./(components)/common/buttons/ButtonSecondary";
import DarkBgWithShapes from "./(components)/common/layout/DarkBgWithShapes";
import { FaPlay, FaStar } from "react-icons/fa";
import CourseCard from "./(components)/CourseCard";
import { BsArrowRight } from "react-icons/bs";
import Marquee from "react-fast-marquee";
import ProfessorCard from "./(components)/ProfessorCard";
import Link from "next/link";
import StarRatings from "react-star-ratings";
import theme from "@/utils/tailwindTheme";
import { RiChatSmile3Line, RiWechatLine } from "react-icons/ri";
import { IoCallOutline } from "react-icons/io5";

import { GrLocation } from "react-icons/gr";
import ProgressBar from "./(components)/common/ProgressBar";
import Card from "./(components)/common/layout/ContactSection/Card";
import Input from "./(components)/common/form/Input";
import { Form, Formik } from "formik";
import Checkbox from "./(components)/common/form/Checkbox";
import CoursesReel from "./(components)/layout/courses/CoursesReel";

const professional_images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQevTrqw6UFQevNjl7_HXa9-MXCenj-cYjDlg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4no9bfBun4qNrltqo2BRKsaoVimBIwP1L2Q&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdExoa2gofCyhF8ZkJIdkujarXQO3-JqhNEQ&usqp=CAU",
];

// videoUrl will be the url to the video,, clicking "watch demo" button will open a dialog box with the video in it.
const articles = [
    {
        id: 1,
        imgUrl: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
        title: "Kick start my process",
        description: `Get going to most effective & efficient courses available on the internet. We provide the best assistance with the help of great professors.`,
        link: { text: "Get Started", href: "/courses" },
        btn: { text: "Watch Demo", videoUrl: "" },
    },
    {
        id: 2,
        imgUrl: "https://images.unsplash.com/photo-1615914143778-1a1a6e50c5dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
        title: "Get the projects managed",
        description: `We offer extensive and detailed courses on project management enough to make you the best in your field. Let's get things going by visiting the list of courses in project management`,
        link: { text: "Look up courses", href: "/courses/project-management" },
        btn: { text: "Watch Demo", videoUrl: "" },
    },
];

const cards = {
    cardCountOnSmallScreen: 2,
    cards: [
        {
            id: 1,
            videoUrl: "",
            imgUrl: "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt numquam unde voluptate repellat aperiam harum, officiis laborum?",
        },
        {
            id: 2,
            videoUrl: "",
            imgUrl: "https://images.unsplash.com/photo-1620912189868-30778f884588?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNpbmclMjB0ZWNobm9sb2d5fGVufDB8fDB8fHww",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt numquam unde voluptate repellat aperiam harum, officiis laborum?",
        },
        {
            id: 3,
            videoUrl: "",
            imgUrl: "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHVzaW5nJTIwdGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt numquam unde voluptate repellat aperiam harum, officiis laborum?",
        },
    ],
};

const partners = [
    {
        name: "td bank",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7rPhdjPScD4oh4J18pbiG6hgQ13BegWf_9w&usqp=CAU",
    },
    {
        name: "canadian tyre",
        imgUrl: "https://s201.q4cdn.com/326551073/files/design/CT-Brandmark-Standard-Primary-RGW-POS-RGB.png",
    },
    {
        name: "rbc",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF4dUZD5Y31skLPHo3Db0zP7KC5aInr5-1Zg&usqp=CAU",
    },
];

const courses = [
    {
        courseId: 1,
        img: {
            url: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D",
        },
        href: "/",
        name: "Project mission - 2",
        price: "9.99",
        category: "Product management",
    },
    {
        courseId: 2,
        img: {
            url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2NpZW5jZXxlbnwwfHwwfHx8MA%3D%3D",
        },
        href: "/",
        name: "Science in 1 go",
        price: "9.99",
        category: "science",
    },
    {
        courseId: 3,
        img: {
            url: "https://images.unsplash.com/photo-1457364887197-9150188c107b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cm9ja2V0fGVufDB8fDB8fHww",
        },
        href: "/",
        name: "rocket science - 1",
        price: "9.99",
        category: "rocket science",
    },
];

const professors = [
    {
        id: 1,
        href: "/",
        imgUrl: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGZhY2UlMjBzaG90JTIwZ3JheXNjYWxlfGVufDB8fDB8fHww",
        name: "Sourav",
        position: "web developer & CEO",
        links: [{ name: "linkedIn", href: "/" }],
    },
    {
        id: 2,
        href: "/",
        imgUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fGZhY2UlMjBzaG90JTIwZ3JheXNjYWxlfGVufDB8fDB8fHww",
        name: "Rahul",
        position: "Product Owner",
        links: [
            { name: "linkedIn", href: "/" },
            { name: "instagram", href: "/" },
        ],
    },
    {
        id: 3,
        href: "/",
        imgUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fGZhY2UlMjBzaG90JTIwZ3JheXNjYWxlfGVufDB8fDB8fHww",
        name: "George",
        position: "UI/UX developer",
        links: [
            { name: "linkedIn", href: "/" },
            { name: "twitter", href: "/" },
        ],
    },
    {
        id: 4,
        href: "/",
        imgUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM3fHxmYWNlJTIwc2hvdCUyMGdyYXlzY2FsZXxlbnwwfHwwfHx8MA%3D%3D",
        name: "Emilie",
        position: "Structure Devops",
        links: [{ name: "twitter", href: "/" }],
    },
];

const testimonials = {
    count: 2,
    testimonials: [
        {
            id: 1,
            imgUrl: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGZhY2UlMjBzaG90JTIwZ3JheXNjYWxlfGVufDB8fDB8fHww",
            course: "Project Management",
            name: "Emily Selman",
            rating: 5,
            review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, beatae.",
        },
        {
            id: 2,
            imgUrl: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGZhY2UlMjBzaG90JTIwZ3JheXNjYWxlfGVufDB8fDB8fHww",
            course: "IT development",
            name: "Hector Gibbons",
            rating: 4,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla repellendus nostrum quae, eaque in iusto.",
        },
    ],
};

const coursesOffered = [
    "Project Management",
    "It developement",
    "Business Analysis",
    "Data Analysis",
];

export default function Home() {
    const openVideoModal = (videoUrl) => {};

    function calcRatingPercentage(ratingVal, testimonials) {
        let totalRatings = testimonials.length;
        let specifiedRatings = 0;

        testimonials.forEach(({ rating }) => {
            if (rating == ratingVal) {
                specifiedRatings++;
            }
        });

        return Math.ceil((specifiedRatings / totalRatings) * 100);
    }

    function getAvgRating(testimonials) {
        let totalRatings = 0;
        testimonials.forEach((testimonial) => {
            totalRatings += testimonial.rating;
        });
        return totalRatings / testimonials.length;
    }

    function handleSendMessage() {}

    return (
        <>
            <section className="pb-section pt-20">
                <div className="container text-center">
                    <h1 className="text-4xl  font-medium md:text-5xl md:leading-[4rem]">
                        Empower Your Future and Explore Diverse Courses made by
                        <div className="inline-block mx-3 w-fit -space-x-4 rtl:space-x-reverse">
                            {professional_images.map((img) => (
                                <img
                                    aria-hidden="true"
                                    key={img}
                                    className="inline-block w-14 aspect-square object-cover object-top rounded-full"
                                    src={img}
                                    alt=""
                                />
                            ))}
                        </div>
                        professionals
                    </h1>

                    <p className="mt-6 px-5 md:px-32 text-neutral-600 text-sm ">
                        Welcome to our dynamic courses platform, where the
                        journey to empowerment begins. Our carefully curated
                        selection of courses is designed to fuel your curiosity.
                    </p>

                    <div className="mt-8 flex text-sm gap-2 justify-center sm:text-base">
                        <ButtonPrimary type="link" href="/courses">
                            Get Started
                        </ButtonPrimary>
                        <ButtonSecondary type="button">
                            Watch Demo
                        </ButtonSecondary>
                    </div>
                </div>

                <div
                    className={`grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-10 container mt-16`}>
                    {articles.map(
                        ({ id, imgUrl, title, description, link, btn }) => (
                            <article
                                key={id}
                                style={{ backgroundImage: `url('${imgUrl}')` }}
                                className={`flex pt-24 relative bg-no-repeat bg-cover isolate rounded-lg overflow-hidden p-3 text-sm`}>
                                <div className="mt-auto z-10 space-y-4 relative text-white bg-primary p-3 rounded-lg lg:max-w-[80%]">
                                    <h2 className="font-medium text-xl">
                                        {title}
                                    </h2>
                                    <p className="text-xs">{description}</p>

                                    <div className="flex gap-4">
                                        {link && (
                                            <ButtonSecondary
                                                type="link"
                                                href={link.href}
                                                className="text-white border-white text-sm">
                                                {link.text}
                                            </ButtonSecondary>
                                        )}

                                        {btn && (
                                            <ButtonSecondary
                                                type="button"
                                                className="hidden lg:block text-white border-white text-sm">
                                                {btn.text}
                                            </ButtonSecondary>
                                        )}
                                    </div>
                                </div>
                            </article>
                        )
                    )}
                </div>
            </section>

            <DarkBgWithShapes
                shapes={[
                    {
                        position: { top: "20%", right: 0 },
                        size: "min(20%, 10rem)",
                    },
                    {
                        position: { bottom: "10%", left: 0 },
                        size: "min(15%, 7rem)",
                    },
                ]}>
                <div className="container">
                    <div className="text-center">
                        <span className="mb-3 block uppercase text-[.5rem] font-semibold">
                            who we help
                        </span>
                        <h2 className="text-4xl">
                            Unlock the Potential, to reach great hights
                        </h2>
                    </div>

                    <div className="mt-10 flex gap-10 flex-col items-center justify-center md:flex-row">
                        {cards.cards.map(
                            ({ id, videoUrl, text, imgUrl }, idx) => (
                                <div
                                    key={id}
                                    className={`flex-1 max-w-xs ${
                                        idx + 1 > cards.cardCountOnSmallScreen
                                            ? "hidden"
                                            : "block"
                                    } md:block`}>
                                    <button
                                        className="overflow-hidden rounded-xl relative group"
                                        onClick={() => {
                                            openVideoModal(videoUrl);
                                        }}>
                                        <img
                                            src={imgUrl}
                                            alt=""
                                            className="aspect-[1/1.2] object-cover"
                                        />
                                        <div
                                            className="p-2 bg-white text-black absolute rounded-full bottom-2 right-2 text-[.6rem] group-hover:scale-110 transition-transform group-focus:scale-110 "
                                            aria-hidden="true">
                                            <FaPlay />
                                        </div>
                                        <span className="sr-only">
                                            Click the button to play video
                                        </span>
                                    </button>
                                    <p className="text-xs mt-2">{text}</p>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </DarkBgWithShapes>

            <section className="container py-section text-center">
                <div>
                    <span className="mb-3 block uppercase text-[.5rem] font-semibold">
                        Why choose us
                    </span>
                    <h2 className="text-4xl">
                        From Enrollment to Exploration and Beyond, We're with
                        You.
                    </h2>
                </div>

                <ButtonPrimary className="mt-10" type="button">
                    Have a quick meeting
                </ButtonPrimary>
            </section>

            <DarkBgWithShapes
                shapes={[
                    { position: { top: "5%", right: "10%" } },
                    { position: { bottom: 0, left: 0 } },
                ]}>
                <span className="mb-14 block uppercase text-sm text-center font-semibold">
                    Our Alumni Works At
                </span>
                <div className="flex justify-center gap-10 flex-wrap md:gap-16">
                    {partners.map(({ imgUrl, name }) => (
                        <img
                            key={name}
                            className="w-28"
                            src={imgUrl}
                            alt={name}
                        />
                    ))}
                </div>
            </DarkBgWithShapes>

            <section className="py-section text-center container">
                <h2 className="text-2xl  font-medium">
                    Learn the Technical and Business skills that employers seek
                </h2>
                <div className="flex flex-wrap gap-10 justify-center mt-8 text-start">
                    {courses.map((course) => (
                        <CourseCard
                            key={course.courseId}
                            className="max-w-xs"
                            {...course}
                        />
                    ))}
                </div>

                <ButtonPrimary
                    className="group mt-10 flex w-fit items-center gap-2 mx-auto"
                    type="link"
                    href="/courses"
                    haveHoverEffects={false}>
                    Browse more courses
                    <BsArrowRight className="w-0 -translate-x-4 group-hover:w-6 group-hover:translate-x-0 group-focus:w-6 group-focus:translate-x-0 transition-all" />
                </ButtonPrimary>
            </section>

            <DarkBgWithShapes
                shapes={[
                    { position: { top: 0, right: "5%" } },
                    { position: { bottom: "0%", left: "2%" } },
                ]}>
                <div className="container space-y-16 z-10">
                    <div className="space-y-3 ">
                        <h2 className="text-4xl font-medium">
                            Our Brilliant Minds Behind Your Success
                        </h2>
                        <p>
                            Meet the dedicated professors shaping your learning
                            journey with expertise and passion.
                        </p>
                        <Link
                            href="/professors"
                            className="text-sky-500 mt-3 inline-block text-sm hover:underline underline-offset-4   ">
                            Meet our Team..
                        </Link>
                    </div>

                    <Marquee autoFill speed={20} pauseOnHover>
                        {professors.map((professor) => (
                            <ProfessorCard
                                key={professor.id}
                                {...professor}
                                className="mr-4"
                            />
                        ))}
                    </Marquee>
                </div>
            </DarkBgWithShapes>

            <section className="py-32 container lg:flex lg:gap-20">
                <div className="lg:w-1/3">
                    <h2 className="text-2xl font-semibold">Customer Reviews</h2>
                    <div className="mt-3">
                        <div className="flex gap-4 items-center">
                            <StarRatings
                                rating={getAvgRating(testimonials.testimonials)}
                                numberOfStars={5}
                                name="average rating"
                                starRatedColor={
                                    theme.backgroundColor.amber[300]
                                }
                                starEmptyColor={
                                    theme.backgroundColor.neutral[200]
                                }
                                starDimension="1.5rem"
                                starSpacing="0.1rem"
                            />
                            <p>
                                Based on {testimonials.testimonials.length}{" "}
                                reviews
                            </p>
                        </div>

                        <div className="mt-5 space-y-1">
                            {[5, 4, 3, 2, 1].map((number) => {
                                const ratingPer = calcRatingPercentage(
                                    number,
                                    testimonials.testimonials
                                );

                                return (
                                    <div
                                        className="flex gap-3 items-center"
                                        key={number}>
                                        <span className="min-w-[1ch]">
                                            {number}
                                        </span>
                                        <FaStar className="text-amber-300" />
                                        <ProgressBar
                                            maxVal={100}
                                            value={ratingPer}
                                        />
                                        <span className="min-w-[5ch]">
                                            {ratingPer} %
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mt-16 lg:mt-0 lg:flex-1">
                    {testimonials.testimonials.map(
                        ({ id, imgUrl, name, course, review, rating }) => {
                            return (
                                <div
                                    key={id}
                                    className="first:border-t-0 first:pt-0 border-b last:border-b-0 last:pb-0 py-10 ">
                                    <div className="flex gap-3 items-center">
                                        <img
                                            src={imgUrl}
                                            className="max-w-[3.5rem] object-cover object-top rounded-full aspect-square"
                                            alt="user Profile image"
                                        />
                                        <div>
                                            <div>
                                                <span className="font-semibold">
                                                    {name}
                                                </span>
                                                <span className="text-xs">
                                                    , {course}
                                                </span>
                                            </div>
                                            <StarRatings
                                                rating={rating}
                                                numberOfStars={5}
                                                starRatedColor={
                                                    theme.backgroundColor
                                                        .amber[300]
                                                }
                                                starEmptyColor={
                                                    theme.backgroundColor
                                                        .neutral[200]
                                                }
                                                starDimension="1.5rem"
                                                starSpacing="0.1rem"
                                            />
                                        </div>
                                    </div>

                                    <p className="mt-3 text-base text-neutral-700">
                                        {review}
                                    </p>
                                </div>
                            );
                        }
                    )}
                </div>
            </section>

            <DarkBgWithShapes>
                <div className="container">
                    <div className="text-center">
                        <span>Logo</span>
                        <h2 className="text-4xl font-medium my-3">
                            Contact our Friendly team
                        </h2>
                        <p>Let us know how we can help.</p>
                    </div>

                    <div className="flex flex-col gap-8 mt-16 items-center md:flex-row md:justify-center flex-wrap">
                        <Card
                            title="Message the team"
                            description="Speak to our friendly team."
                            icon={<RiChatSmile3Line />}
                            href={"/"}
                            linkText={"sales.untitleddui.com"}
                        />
                        <Card
                            title="Chat to support"
                            description="We're here to help."
                            icon={<RiWechatLine />}
                            href={"/"}
                            linkText={"support.untitleddui.com"}
                        />
                        <Card
                            title="Visit us"
                            description="Visit our office HQ."
                            icon={<GrLocation />}
                            href={"/"}
                            linkText={"View on Google Maps"}
                        />
                        <Card
                            title="Call us"
                            description="Mon-Fri from 8am to 5pm."
                            icon={<IoCallOutline />}
                            href={"/"}
                            linkText={"+1 (999) 9999-9999"}
                        />
                    </div>

                    <Formik
                        initialValues={{
                            firstName: "",
                            LastName: "",
                            email: "",
                            coursesInterestedIn: [],
                            message: "",
                        }}
                        onSubmit={handleSendMessage}>
                        {({ isSubmitting }) => (
                            <Form className="mt-10 space-y-3">
                                <h3 className="text-center text-xl font-medium mb-2">
                                    Still have doubt?
                                </h3>

                                <Input
                                    id="first name"
                                    label="First Name"
                                    name="firstName"
                                    required
                                />
                                <Input
                                    id="last name"
                                    label="Last Name"
                                    name="lastName"
                                    required
                                />
                                <Input
                                    id="email"
                                    label="Email"
                                    name="email"
                                    type="email"
                                    required
                                />

                                <div>
                                    <span className="inline-block mb-1">
                                        Courses Of Interest
                                    </span>

                                    <div className="space-y-2">
                                        {coursesOffered.map((course) => {
                                            return (
                                                <Checkbox
                                                    label={course}
                                                    id={course}
                                                    type="checkbox"
                                                    name="coursesInterestedIn"
                                                    value={course}
                                                    key={course}
                                                />
                                            );
                                        })}
                                    </div>
                                </div>

                                <Input
                                    as="textarea"
                                    label="Message"
                                    id="message"
                                    name="message"
                                    className="min-h-[10rem]"
                                />
                                <ButtonPrimary
                                    haveHoverEffects={false}
                                    // type="submit"
                                    type="button"
                                    className="!block mx-auto !mt-10 !px-24"
                                    disabled={isSubmitting}>
                                    Submit
                                </ButtonPrimary>
                            </Form>
                        )}
                    </Formik>
                </div>
            </DarkBgWithShapes>
        </>
    );
}
