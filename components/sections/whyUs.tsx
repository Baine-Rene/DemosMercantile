import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from 'next/image';

interface WhyChooseUsProps {
    title?: string;
    description?: string;
    images?: Array<{
        src: string;
        alt: string;
    }>;
}

const defaultImages = [
    {
        src: "/Images/IMG - 1.png",
        alt: "Modern processing facility"
    },
    {
        src: "/Images/IMG - 5.png",
        alt: "Quality control processes"
    },
    {
        src: "/Images/IMG - 2.png",
        alt: "Professional team at work"
    },
    {
        src: "/Images/IMG - 3.png",
        alt: "Sustainable farming practices"
    }
];

const WhyUs = ({
    title = "Why Choose Us",
    description = "With our strong commitment to sustainability, quality, and customer satisfaction, we have established ourselves as a trusted partner for food processors, wholesalers, and retailers across Uganda and international markets. Our state-of-the-art facilities and experienced team ensure that every product meets the highest standards of excellence.",
    images = defaultImages
}: WhyChooseUsProps) => {
    return (
        <section className="py-16 WhyUs bg-background">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Carousel */}
                    <div className="relative w-full">
                        <Carousel className="w-full">
                            <CarouselContent>
                                {images.map((image, index) => (
                                    <CarouselItem key={index}>
                                        <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg bg-muted">
                                            <Image
                                                src={image.src}
                                                alt={image.alt}
                                                fill
                                                className="object-cover transition-transform duration-300 hover:scale-105"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="left-2 lg:left-4" />
                            <CarouselNext className="right-2 lg:right-4" />
                        </Carousel>
                    </div>

                    {/* Right Column - Text Content */}
                    <div className="space-y-6">
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
                            {title}
                        </h2>
                        <p className="text-base lg:text-lg text-white">
                            {description}
                        </p>

                        {/* Key Points */}
                        <div className="space-y-4 mt-8">
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-sm lg:text-base text-white">
                                    <span className="font-semibold">Quality Assured:</span> Rigorous quality control processes ensure every product meets international standards.
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-sm lg:text-base text-white">
                                    <span className="font-semibold">Sustainable Practices:</span> Committed to environmentally responsible farming and processing methods.
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-sm lg:text-base text-white">
                                    <span className="font-semibold">Trusted Partnership:</span> Serving food processors, wholesalers, and retailers since 2023.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;