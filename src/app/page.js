"use client";
import React from "react";
import ButtonPrimary from "./(components)/common/buttons/ButtonPrimary";
import ButtonSecondary from "./(components)/common/buttons/ButtonSecondary";
import DarkBgWithShapes from "./(components)/common/layout/DarkBgWithShapes";
import { FaPlay } from "react-icons/fa";

const professional_images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQevTrqw6UFQevNjl7_HXa9-MXCenj-cYjDlg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4no9bfBun4qNrltqo2BRKsaoVimBIwP1L2Q&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdExoa2gofCyhF8ZkJIdkujarXQO3-JqhNEQ&usqp=CAU",
];

// videoUrl will be the url to the video,, clicking "watch demo" button will open a dialog box with the video in it.
const articles = [
    {
        imgUrl: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
        title: "Kick start my process",
        description: `Get going to most effective & efficient courses available on the internet. We provide the best assistance with the help of great professors.`,
        link: { text: "Get Started", href: "/courses" },
        btn: { text: "Watch Demo", videoUrl: "" },
    },
    {
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
            videoUrl: "",
            imgUrl: "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt numquam unde voluptate repellat aperiam harum, officiis laborum?",
        },
        {
            videoUrl: "",
            imgUrl: "https://images.unsplash.com/photo-1620912189868-30778f884588?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNpbmclMjB0ZWNobm9sb2d5fGVufDB8fDB8fHww",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt numquam unde voluptate repellat aperiam harum, officiis laborum?",
        },
        {
            videoUrl: "",
            imgUrl: "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHVzaW5nJTIwdGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt numquam unde voluptate repellat aperiam harum, officiis laborum?",
        },
    ],
};

export default function Home() {
    const openVideoModal = (videoUrl) => {};

    return (
        <>
            <section className="py-36">
                <div className="container text-center">
                    <h1 className="text-4xl  font-medium md:text-5xl md:leading-[4rem]">
                        Empower Your Future and Explore Diverse Courses made by
                        <div class="inline-block mx-3 w-fit -space-x-4 rtl:space-x-reverse">
                            {professional_images.map((img) => (
                                <img
                                    aria-hidden="true"
                                    key={img}
                                    class="inline-block w-14 aspect-square object-cover object-top rounded-full"
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
                        ({ imgUrl, title, description, link, btn }) => (
                            <article
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

            <section>
                <DarkBgWithShapes
                    className="text-white py-16"
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
                        <div>
                            <span className="mb-3 block uppercase text-[.5rem] font-semibold">
                                who we help
                            </span>
                            <h2 className="text-4xl">
                                Unlock the Potential, to reach great hights
                            </h2>
                        </div>

                        <div className="mt-10 flex gap-10 flex-col items-center md:flex-row md:items-start">
                            {cards.cards.map(
                                ({ videoUrl, text, imgUrl }, idx) => (
                                    <div
                                        className={`flex-1 max-w-xs ${
                                            idx + 1 >
                                            cards.cardCountOnSmallScreen
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
            </section>
        </>
    );
}
