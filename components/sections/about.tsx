"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface About {
    title?: string;
    description?: string;
    mainImage?: {
        src: string;
        alt: string;
    };
    secondaryImage?: {
        src: string;
        alt: string;
    };
    breakout?: {
        src: string;
        alt: string;
        title?: string;
        description?: string;
        buttonText?: string;
        buttonUrl?: string;
    };
    companiesTitle?: string;
    companies?: Array<{
        src: string;
        alt: string;
    }>;
    achievementsTitle?: string;
    achievementsDescription?: string;
    achievements?: Array<{
        label: string;
        value: string;
    }>;
}

const About = ({
    title = "Our Journey through the years",
    description = "Incorporated in Uganda on 27 th December 2023 under Registration No: 80034510830110, we have grown to become a trusted partner or food processors, wholesalers, and retailers across regional and international markets. With a strong commitment to sustainability, quality, and customer satisfaction.",
    mainImage = {
        src: "/Images/IMG - 4.png",
        alt: "Team collaboration",
    },
    secondaryImage = {
        src: "/Images/IMG - 2.png",
        alt: "Office environment",
    },
    breakout = {
        src: "/logo-about.svg",
        alt: "company logo",
        title: "We are committed to meeting your trade needs.",
        description:
            "Providing businesses with effective tools to improve workflows, boost efficiency, and encourage growth.",
        buttonText: "Learn More",
        buttonUrl: "/about",
    },


}: About = {}) => {
    return (
        <section className="py-32">
            <div className="container mx-auto px-4">
                <div className="mb-14 grid gap-5 text-center md:grid-cols-2 md:text-left">
                    <h1 className="text-5xl text-white font-extrabold">{title}</h1>
                    <p className="text-white">{description}</p>
                </div>
                <div className="grid gap-7 lg:grid-cols-3">
                    <div className="relative lg:col-span-2">
                        <Image
                            src={mainImage.src}
                            alt={mainImage.alt}
                            width={800}
                            height={620}
                            className="size-full max-h-[620px] rounded-xl object-cover"
                            priority
                        />
                    </div>
                    <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
                        <div className="flex flex-col justify-between gap-6 rounded-xl bg-white p-7 md:w-1/2 lg:w-auto">
                            <Image
                                src={breakout.src}
                                alt={breakout.alt}
                                width={48}
                                height={48}
                                className="mr-auto h-12 w-auto"
                            />
                            <div>
                                <p className="mb-2 text-lg font-semibold">{breakout.title}</p>
                                <p className="text-muted-foreground">{breakout.description}</p>
                            </div>
                            <Button variant="outline" className="button text-white bg-black font-bold mr-auto " asChild>
                                <Link href={breakout.buttonUrl || "#"}>
                                    {breakout.buttonText}
                                </Link>
                            </Button>
                        </div>
                        <div className="relative grow basis-0 md:w-1/2 lg:min-h-0 lg:w-auto">
                            <Image
                                src={secondaryImage.src}
                                alt={secondaryImage.alt}
                                width={400}
                                height={300}
                                className="h-full w-full rounded-xl object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { About };