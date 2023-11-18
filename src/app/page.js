import Image from "next/image";
import Link from "next/link";
import React from "react";
import ButtonPrimary from "./(components)/common/buttons/ButtonPrimary";
import ButtonSecondary from "./(components)/common/buttons/ButtonSecondary";

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
        imgUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
        title: "Get the projects managed",
        description: `We offer extensive and detailed courses on project management enough to make you the best in your field. Let's get things going by visiting the list of courses in project management`,
        link: { text: "Look up courses", href: "/courses/project-management" },
        btn: { text: "Watch Demo", videoUrl: "" },
    },
];

export default function Home() {
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

                <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-10 container mt-16">
                    {articles.map(
                        ({ imgUrl, title, description, link, btn }) => (
                            <article className="flex pt-24 relative bg-no-repeat bg-cover bg-[url('https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D')] isolate rounded-lg overflow-hidden p-3 text-sm ">
                                <div className="mt-auto z-10 space-y-4 relative text-white bg-primary p-3 rounded-lg lg:max-w-[80%]">
                                    <h2 className="font-medium text-xl">
                                        {title}
                                    </h2>
                                    <p className="text-xs">{description}</p>

                                    <div className="flex gap-4">
                                        <ButtonSecondary
                                            type="link"
                                            href={link.href}
                                            className="text-white border-white text-sm">
                                            {link.text}
                                        </ButtonSecondary>
                                        <ButtonSecondary
                                            type="button"
                                            className="hidden lg:block text-white border-white text-sm">
                                            {btn.text}
                                        </ButtonSecondary>
                                    </div>
                                </div>
                            </article>
                        )
                    )}
                </div>
            </section>
        </>
    );
}
