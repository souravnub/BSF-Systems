import ButtonPrimary from "@/app/(components)/common/buttons/ButtonPrimary";
import Link from "next/link";
import React from "react";
import { TbTargetArrow } from "react-icons/tb";
import { GoDotFill } from "react-icons/go";

const course = {
    id: "learn-project-management-1",
    pageTitle: "Learn Project Management",
    subTitle: "Learn the way you want it to be",
    img: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFuYWdlbWVudHxlbnwwfHwwfHx8MA%3D%3D",
    name: "Project Management",
    preRequisites: [
        "College degree",
        "2 years work experience",
        "Diploma - computer science",
    ],
    description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem possimus modi ad corporis maxime asperiores dicta obcaecati nemo quasi! Tempora nam, magni inventore iusto illum aliquam dignissimos! Explicabo, atque ex!, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae velit amet beatae? Perferendis et dolorum enim doloribus, perspiciatis sint. Vitae quas, velit sit quod consequuntur ab sapiente nisi praesentium molestiae!",
    learnings: {
        tools: [
            "MS SQL Server 2016",
            "SISS Integration tool",
            "SSAS analytics",
            "SSRS reporting tool",
        ],
        other: [
            "Research and build Business Cases for Technology and related projects",
            "Drive software development through the Software development lifecycle (SDLC)",
            "Master organizational change and accurately measure quality in your role as a business analyst",
            "Utilize Visio to model Software and business processes with the Unified modeling language (UML).",
            "Gain BA proficiency through practical exercises and case studies",
        ],
    },
    schedule: {
        duration: "7 weeks",
        days: {
            monday: {
                from: "12pm",
                to: "10am",
            },
            sunday: {
                from: "3pm",
                to: "6pm",
            },
        },
        nextClassDate: "On-Demand Access",
    },
    jobOpportunities: [
        "Business Analyst",
        "Business Systems Analyst",
        "Technology Consultant",
    ],
    price: 1500,
    priceIncludesTax: false,
    isInDemand: true,
};
const linkPath = [
    { name: "home", href: "/" },
    { name: "courses", href: "/courses" },
];
const pageLinks = [
    "overview",
    "what you will learn",
    "pre requisites",
    "job opportunities",
    "schedule",
    "price",
];

const ElementList = ({ title, elements, className }) => {
    return (
        <ul aria-label={title} className={`mt-3 space-y-3 ${className}`}>
            <span className="font-medium capitalize">{title}</span>
            {elements.map((tool) => (
                <li>
                    <span className="overflow-hidden relative  block bg-light py-3 ps-5 before:content-[''] before:absolute before:inset-y-0 before:w-1 before:left-0 before:bg-primary-light  before:transition">
                        {tool}
                    </span>
                </li>
            ))}
        </ul>
    );
};

const Heading = ({ children }) => {
    return <h2 className="font-medium text-xl">{children}</h2>;
};

const Course = ({ params }) => {
    const {
        id,
        img,
        pageTitle,
        subTitle,
        name,
        description,
        learnings,
        preRequisites,
        schedule,
        jobOpportunities,
        price,
        priceIncludesTax,
        isInDemand,
    } = course;
    return (
        <section className="container">
            <div
                className="m-3 overflow-hidden rounded-3xl  relative isolate text-white  py-48 text-center bg-cover bg-no-repeat bg-center md:py-60"
                style={{ backgroundImage: `url('${img}')` }}>
                <div className="-z-10 absolute inset-0 bg-[rgba(0,0,0,0.4)]"></div>

                <h1 className="z-10 font-medium text-5xl">{pageTitle}</h1>
                <p className="mt-4 flex gap-2 items-center justify-center ">
                    <GoDotFill />
                    {subTitle}
                </p>
            </div>

            <div className="container">
                <div>
                    {linkPath.map(({ name, href }) => (
                        <>
                            <Link
                                href={href}
                                className="text-sm capitalize hover:underline">
                                {name}
                            </Link>{" "}
                            /{" "}
                        </>
                    ))}
                    <span className="text-sm capitalize">{name}</span>
                </div>

                <div className="relative mt-10 grid grid-cols-4 gap-x-10">
                    <aside className="bg-light rounded-xl py-8 flex flex-col gap-5 sticky top-20 h-min">
                        {pageLinks.map((link) => (
                            <Link
                                href={`#${link}`}
                                className="ps-5 py-0.5 relative capitalize before:content-[''] before:absolute before:inset-y-0 before:w-1 before:left-0 before:rounded-e-xl before:bg-primary-light before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-75">
                                {link}
                            </Link>
                        ))}
                    </aside>

                    <div className="col-span-3">
                        <article className="space-y-12">
                            <div id={pageLinks[0]}>
                                <div className="flex gap-5 ">
                                    <Heading>{name}</Heading>
                                    {isInDemand && (
                                        <div className="space-x-1 flex items-center">
                                            <TbTargetArrow className="text-xl text-orange-600" />
                                            <span className="mt-1 text-orange-600 text-sm">
                                                In demand
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <p className="mt-2">{description}</p>
                                <ButtonPrimary
                                    type="link"
                                    className="!py-1 !px-10 mt-5 rounded-lg"
                                    href={`/courseApply/${id}`}>
                                    Apply Now
                                </ButtonPrimary>
                            </div>
                        </article>

                        <article id={pageLinks[1]} className="mt-10">
                            <Heading> What you will learn</Heading>
                            <div className="ps-4">
                                <ElementList
                                    title="tools"
                                    elements={learnings.tools}
                                />
                                <ElementList
                                    title="others"
                                    elements={learnings.other}
                                    className="!mt-8"
                                />
                            </div>
                        </article>

                        <article className="mt-10" id={pageLinks[2]}>
                            {/* pre requisites */}
                            <Heading>Pre Requisites</Heading>
                            {(preRequisites === null ||
                                preRequisites.length === 0) && (
                                <span className="mt-2  inline-block">
                                    There are no pre-requisites for this course
                                </span>
                            )}
                            {preRequisites && preRequisites.length > 0 && (
                                <div className="mt-3 ps-3">
                                    {preRequisites.map((req) => (
                                        <div className="flex gap-2 items-center py-3 border-b-2  first:border-t-0 last:border-b-0">
                                            <GoDotFill className="text-primary-light text-xs"></GoDotFill>
                                            <span className="">{req}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </article>

                        <article id={pageLinks[3]} className="mt-10">
                            <Heading>Job opportunities</Heading>
                            <div className="flex flex-wrap gap-4 mt-4">
                                {jobOpportunities.map((opp) => (
                                    <span className="py-2 px-4 bg-light rounded-md ">
                                        {opp}
                                    </span>
                                ))}
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Course;
