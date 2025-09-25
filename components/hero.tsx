import Image from "next/image";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <div>
      <section className="py-14 flex justify-center flex-wrap items-center">
        <div className="md:w-1/2 w-full text-center px-2">
          <Image
            className="mx-auto"
            src="/image/profile.png"
            alt="Hero"
            width={250}
            height={250}
          />
          {/* <div>
              <Marquee />
            </div> */}
        </div>
        <div className="md:w-1/2 w-full md:text-left text-center px-2">
          <h1 className="text-5xl font-semibold mb-4">Rabin Patel</h1>
          <span className="text-gray-900 font-normal text-2xl">
            Code, Creativity & a Bit Of Magic
          </span>
          <div className="my-8 font-light text-xl">
            <p>
              I’m a{" "}
              <span className="font-normal italic text-2xl">
                {" "}
                Full Stack developer{" "}
              </span>{" "}
              who loves blending clean code with creative flair. When I’m not
              perfecting,{" "}
              <span className="font-normal italic text-2xl">
                I’m exploring
              </span>{" "}
            </p>
            <p>
              curious about how smart tech can{" "}
              <span className="font-normal italic text-2xl">
                shape tomorrow’s experiences.
              </span>{" "}
              I enjoy{" "}
              <span className="font-normal italic text-2xl">
                turning ideas{" "}
              </span>{" "}
              into sleek , interactive solutions that feel as fun to use as they
              are functional.
            </p>
          </div>
          <div>
            <Button size="lg">Download Resume</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
