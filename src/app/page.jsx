"use client";

import { Button, Navbar, SectionLayout } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <SectionLayout id="hero" variant="px-6">
        <div className="w-full flex flex-col gap-y-4 items-center">
          <div className="rounded-full overflow-hidden w-[180px] h-[180px] md:h-[245px] md:w-[245px]">
            <Image
              src="/images/rawAva.jpg"
              alt="Gambar"
              width={245}
              height={245}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-3 flex flex-col">
            <h1 className="text-4xl md:text-5xl md:text-center font-medium font-raleway">
              <span className="text-green text-5xl leading-normal">
                Hi I{"'"}am Angga
              </span>{" "}
              <br />a Frontend Website Developer
            </h1>
            <p className="text-white-primary text-xs md:text-base md:text-center mt-4 md:mt-6">
              I help companies transform <br className="hidden md:block" />{" "}
              figma design to reactjs with clean code
            </p>
            <div className="flex flex-col md:flex-row gap-y-4 mt-12 gap-x-4 md:justify-center">
              <Button variant="border-2 border-green focus:outline outline-2 outline-green focus:bg-black-primary focus:text-white-primary bg-green text-black-primary">
                Get in touch
              </Button>
              <Button variant="border-2 focus:outline outline-2 outline-white-secondary focus:bg-white-secondary focus:text-black-primary bg-black-primary text-white-secondary">
                View all works
              </Button>
            </div>
          </div>
        </div>
      </SectionLayout>
    </main>
  );
}
