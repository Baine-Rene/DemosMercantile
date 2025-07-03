import { Button } from "@/components/ui/button"
import { About } from "@/components/sections/about"
import { Testimonial } from "@/components/sections/testimonials"
import { Faq } from "@/components/sections/faq"
import { Cta } from "@/components/sections/cta"
import Services from "@/components/sections/services"
import WhyUs from "@/components/sections/whyUs"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <main>
        {/* Hero section */}
        <section className="relative pt-12">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[90vh] sm:min-h-[100vh] md:min-h-[120vh] lg:min-h-[80vh]">

              <div className="space-y-8">
                <h1 className="text-white font-extrabold text-5xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl">
                  Sustainable grains for a better tomorrow
                </h1>
                <p className="text-md text-white leading-relaxed">
                  Demos Mercantile UG Ltd is a leading agricultural supply company specializing in the sourcing and distribution of high-quality grains.
                </p>
                <div>
                  <Button className="button bg-black font-bold text-white px-8 py-3 rounded-lg transition-colors">
                    Get in touch
                  </Button>
                </div>
              </div>

              <div>
                <Image
                  src="/Images/IMG - 1.png"
                  alt="man-standing-in-cornfield"
                  width={615}
                  height={562}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/*Services*/}
      <Services />

      {/*About*/}
      <About />

      {/*Testimonial*/}
      <Testimonial />

      {/*Why Us*/}
      <WhyUs />

      {/*FAQ*/}
      <Faq />
      <Cta heading={"Download our company profile"} description={"If you would like to learn more about Demos Mercantile download our company profile for in depth details."} />
    </>
  )
}

