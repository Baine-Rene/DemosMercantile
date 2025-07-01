import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Testimonial10Props {
    quote?: string;
    author?: {
        name: string;
        role: string;
        avatar: {
            src: string;
            alt: string;
        };
    };
}

const Testimonial = ({
    quote = " Working with Demos Mercantile UG Ltd has been a fantastic experience. She is highly professional, responsive, and consistently ensures the timely delivery of high-quality grains.",
    author = {
        name: "IRENE GWOKYALYA",
        role: "",
        avatar: {
            src: "/profile.png",
            alt: "Customer Name",
        },
    },
}: Testimonial10Props) => {
    return (
        <section className="py-28 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center text-center">
                    <p className="mb-16 max-w-4xl px-8 font-bold lg:text-2xl">
                        &ldquo;{quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-2 md:gap-4">
                        <Avatar className="size-12 md:size-16">
                            <AvatarImage src={author.avatar.src} alt={author.avatar.alt} />
                            <AvatarFallback>{author.name}</AvatarFallback>
                        </Avatar>
                        <div className="text-left">
                            <p className="text-sm font-medium md:text-base">{author.name}</p>
                            <p className="text-muted-foreground text-sm md:text-base">
                                {author.role}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Testimonial };