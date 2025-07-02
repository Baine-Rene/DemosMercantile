import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
    question: string;
    answer: string;
}

interface Faq1Props {
    heading?: string;
    items?: FaqItem[];
}

const Faq = ({
    heading = "Frequently asked questions",
    items = [
        {
            question: "What is a FAQ?",
            answer:
                "A FAQ is a list of frequently asked questions and answers on a particular topic.",
        },
        {
            question: "What is the purpose of a FAQ?",
            answer:
                "The purpose of a FAQ is to provide answers to common questions and help users find the information they need quickly and easily.",
        },
        {
            question: "How do I create a FAQ?",
            answer:
                "To create a FAQ, you need to compile a list of common questions and answers on a particular topic and organize them in a clear and easy-to-navigate format.",
        },
        {
            question: "What are the benefits of a FAQ?",
            answer:
                "The benefits of a FAQ include providing quick and easy access to information, reducing the number of support requests, and improving the overall user experience.",
        },
    ],
}: Faq1Props) => {
    return (
        <section className="py-28 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left Column - Title */}
                    <div className="lg:pr-8">
                        <h1 className="text-3xl font-extrabold md:text-4xl">
                            {heading}
                        </h1>
                    </div>

                    <div>
                        <Accordion type="single" collapsible>
                            {items.map((item, index) => (
                                <AccordionItem key={index} value={`item-${index}`}>
                                    <AccordionTrigger className="font-semibold hover:no-underline">
                                        {item.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground">
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Faq };