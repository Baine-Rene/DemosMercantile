import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Home() {
  return (
    <main>
      {/*Hero section*/}
      <section className="h-[90vh] sm:h-[100vh] md:h-[120vh] lg:h-[80vh]  flex items-center py-6 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            <div className="space-y-8">
              <h1 className="text-white text-5xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-7xl font-bold">Sustainable grains for a better tomorrow</h1>
              <p className="text-xl text-white leading-relaxed">Demos Mercantile UG Ltd is a leading agricultural supply company specializing in the sourcing and distribution of high-quality grains. </p>
              <div>
                <Button className="button bg-black text-xl text-white  px-8 py-3 rounded-lg transition-colors">
                  Get in touch
                </Button>
              </div>
            </div>

            <div>
              <Image src="/Images/IMG - 1.png" alt="man-standing-in-cornfield" width={615} height={562} className="w-full h-auto rounded-2xl shadow-2xl"></Image>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
