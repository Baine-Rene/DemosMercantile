import { Button } from "@/components/ui/button";

interface Cta11Props {
  heading: string;
  description: string;
  buttons?: {
    primary?: {
      text: string;
      href: string;
    };
  };
}

const Cta = ({
  heading = "Download our company profile",
  description = "If you would like to learn more about Demos Mercantile download our company profile for in depth details.",
  buttons = {
    primary: {
      text: "Download",
      href: "/Corporate_Profile.pdf", 
    },
  },
}: Cta11Props) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center rounded-lg bg-accent p-8 text-center md:rounded-xl lg:p-16">
          <h3 className="mb-3 max-w-3xl text-2xl font-bold md:mb-4 md:text-4xl lg:mb-6">
            {heading}
          </h3>
          <p className="mb-8 max-w-3xl text-muted-foreground lg:text-lg">
            {description}
          </p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
            {buttons.primary && (
              <Button className="w-full sm:w-auto" asChild>
                <a href={buttons.primary.href} download={"Corporate_profile.pdf"} >{buttons.primary.text}</a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta };
