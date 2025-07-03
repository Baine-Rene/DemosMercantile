import { HandHelping, Users, Zap } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import React from "react";
import Image from "next/image"

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Hero45Props {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  features?: Feature[];
}

const Abouthero = ({
  title = "Our Journey",
  description = "Incorporated in Uganda on December 27, 2023 (Reg. No. 80034510830110), we are a trusted partner to food processors, wholesalers, and retailers across regional and international markets, driven by sustainability, quality, and customer satisfaction.",
  imageSrc = "/Images/IMG - 6.png",
  imageAlt = "Image of a farmer",
  features = [
    {
      icon: <HandHelping className="h-auto w-5" />,
      title: "Flexible Support",
      description:
        "Benefit from around-the-clock assistance to keep your business running smoothly.",
    },
    {
      icon: <Users className="h-auto w-5" />,
      title: "Collaborative Tools",
      description:
        "Enhance teamwork with tools designed to simplify project management and communication.",
    },
    {
      icon: <Zap className="h-auto w-5" />,
      title: "Lightning Fast Speed",
      description:
        "Experience the fastest load times with our high performance servers.",
    },
  ],
}: Hero45Props) => {
  return (
    <section className=" py-24 relative pt-12">
      <div className="container mx-auto px-6 lg:px-12 overflow-hidden">
        <div className="mb-14 grid gap-5 md:grid-cols-2 md:text-left">
          <h1 className="text-4xl text-white font-extrabold lg:text-5xl">{title}</h1>
          <p className="text-white">{description}</p>
        </div>
        <div className="relative mx-auto max-w-5xl">
          <Image
            src={imageSrc}
            alt={imageAlt}
            className="aspect-video max-h-[500px] w-full rounded-xl object-cover"
            width={3120}
            height={2080}
          />
        </div>

        <div className="mx-auto mt-10 flex max-w-5xl flex-col md:flex-row gap-y-8">
          {features.map((feature, index) => (
            <React.Fragment key={feature.title}>
              {index > 0 && (
                <Separator
                  orientation="vertical"
                  className="mx-6 hidden h-auto w-[2px] bg-linear-to-b from-muted via-transparent to-muted md:block"
                />
              )}
              <div
                key={index}
                className="flex grow basis-0 flex-col rounded-md bg-background p-4"
              >
                <div className="mb-6 flex size-10 items-center justify-center rounded-full bg-background drop-shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="mb-2 font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Abouthero };