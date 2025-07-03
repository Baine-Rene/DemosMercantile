import { ArrowRight } from "lucide-react";
import Image from "next/image"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface Service {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
}

interface ServicesProps {
  heading?: string;
  description?: string;
  services?: Service[];
}

const Services = ({
  heading = "Services",
  description = "Demos mercantile offers a comprehensive range of services, including grain sourcing, storage and handling, quality control and assurance, logistics and transportation, customer support and consulting, making it a one-stop-shop for all grain-related needs. ",
  services = [
    {
      id: "service-1",
      title: "Procurement",
      summary:
        "We identify reliable suppliers who can provide grains that meet our quality standards. Once reliable suppliers are identified, we negotiate prices and terms that are favorable to our customers.",
      url: "https://shadcnblocks.com",
      image: "/Services/img-1.png",
    },
    {
      id: "service-2",
      title: "Test & Inspection",
      summary:
        "We conduct rigorous quality tests and inspections to ensure that grains meet the required standards. This service encompasses conducting physical and chemical tests to determine the grain's moisture content, protein levels, and other key characteristics.",
      url: "https://shadcnblocks.com",
      image: "/Services/Img-2.png",
    },
    {
      id: "service-3",
      title: "Storage & handling",
      summary:
        "We provide a comprehensive solution for the safekeeping and management of grains. Our secure and climate-controlled storage facilities, including silos, warehouses, and containers, are designed to maintain optimal temperature and humidity levels, ensuring the quality and integrity of the stored grains.",
      url: "https://shadcnblocks.com",
      image: "/Services/Img-4.png",
    },
    {
      id: "service-4",
      title: "Supply chain management",
      summary:
        "We oversee the entire supply chain, from sourcing high-quality grains to delivering them to customers. This service encompasses coordinating logistics and transportation, ensuring that grains are moved efficiently and safely from one location to another.",
      url: "https://shadcnblocks.com",
      image: "/Services/Img-5.png",
    },
    {
      id: "service-5",
      title: "Customs clearance & documentation",
      summary:
        "We prepare and submit all necessary customs documentation, such as commercial invoices, bills of lading, and certificates of origin, to ensure that all regulatory requirements are met.",
      url: "https://shadcnblocks.com",
      image: "/Services/Img-6.png",
    },
    {
      id: "service-6",
      title: "Financing",
      summary:
        "We provide customers with flexible financing options and solutions tailored to their specific needs, enabling them to manage their cash flow and make informed purchasing decisions.",
      url: "https://shadcnblocks.com",
      image: "/Services/Img-7.png",
    },
    {
      id: "service-7",
      title: "Consulting",
      summary:
        "We provide expert advice and guidance on grain marketing, logistics, and management. Our team of experienced consultants works closely with customers to understand their specific needs and goals, providing tailored advice and support to help them navigate the complexities of the grain industry. ",
      url: "https://shadcnblocks.com",
      image: "/Services/Img-8.png",
    },
  ],
}: ServicesProps) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto flex flex-col items-center gap-16 px-4 lg:px-16">
        <div className="text-center">
          <h2 className="mb-3 text-3xl text-black font-extrabold text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
            {heading}
          </h2>
          <p className="mb-8 text-black md:text-base lg:max-w-2xl lg:text-lg">
            {description}
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 w-full max-w-7xl">
          {services.map((service) => (
            <Card
              key={service.id}
              className="grid grid-rows-[auto_auto_1fr_auto] pt-0 max-w-sm mx-auto md:max-w-none"
            >
              <div className="aspect-16/9 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover object-center rounded-t-xl"
                  width={400}
                  height={300}
                />
              </div>
              <CardHeader>
                <h3 className="text-lg font-bold md:text-xl">
                  {service.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.summary}</p>
              </CardContent>
              <CardFooter>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button className="bg-black text-white hover:bg-gray-800">
                      Learn More
                      <ArrowRight className="ml-2 size-4" />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>{service.title}</AlertDialogTitle>
                      <AlertDialogDescription className="text-left">
                        {service.summary}
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogAction>
                        Close
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Services };