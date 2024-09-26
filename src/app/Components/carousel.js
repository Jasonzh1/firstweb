import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const FRONTEND = ["React", "Next.js", "Tailwind CSS", "AWS", "Javascript"];
const OBJECT = ["Java", "C++", "C#", "Python"];
const TOOLS = ["JUnit 5", "Node.js", "Git", "Unity", "Figma"];

const FRONTENDLINKS = ["/Icons/react-16.svg", "/Icons/next.svg", "/Icons/tailwind.svg", "/Icons/aws.svg", "/Icons/js.svg"];
const FRONTENDALT = ["Icon of React Logo.", "Icon of Next.js Logo.", "Icon of Tailwind CSS Logo.", "Icon of AWS Logo.", "Icon of JavaScript Logo"];

const OBJECTLINKS = ["/Icons/java.svg", "/Icons/c++.svg", "/Icons/c.svg", "/Icons/python.svg"];
const OBJECTALT = ["Icon of Java Logo.", "Icon of C++ Logo.", "Icon of C# Logo.", "Icon of Python Logo."];

const TOOLSLINKS = ["/Icons/junit.svg", "/Icons/node.svg", "/Icons/git.svg", "/Icons/unity.svg", "/Icons/figma.svg"];
const TOOLSALT = ["Icon of JUnit Logo.", "Icon of Node.js Logo.", "Icon of GitHub Logo.", "Icon of Unity Logo.", "Icon of Figma Logo"];




export default function TechCarousel({ type }) {  
    if (type === 0) {
        return FrontEndCarousel();
    } else if (type === 1) {
        return ObjectCarousel();
    } else {
        return ToolCarousel();
    }

}


function FrontEndCarousel() {
    return (
        <Carousel opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnMouseEnter: true,
              stopOnInteraction: false,
            }),
          ]}
          className="w-full" 
          orientation="vertical">
            <CarouselContent className="h-[300px]">
                <CarouselItem className="basis-1/3 pt-1">
                    <div className="carousel-tile flex flex-row items-center mx-3 justify-between border-orange-400 border-4">
                        <h1 className="carousel-title">Front End</h1>
                        <Image
                            src={"/Icons/black.svg"}
                            alt="Icon of React logo."
                            width={45}
                            height={45}
                        />
                    </div>
                </CarouselItem>
                {FRONTEND.map((key, index) => (
                    <CarouselItem key={index} className="pt-1 basis-1/3">
                        <div className="carousel-tile flex flex-row items-center mx-3 justify-between">
                        <h1 className="font-Bebas_Neue text-2xl">{key}</h1>
                        <Image
                            src={FRONTENDLINKS[index]}
                            alt={FRONTENDALT[index]}
                            width={45}
                            height={45}
                        />
                    </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselNext className="bg-neutral-950/55"/>
        </Carousel>
    );
}

function ObjectCarousel() {
    return (
        <Carousel opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnMouseEnter: true,
              stopOnInteraction: false,
            }),
          ]}
          className="w-full" 
          orientation="vertical">
            <CarouselContent className="h-[300px]">
                <CarouselItem className="basis-1/3 pt-1">
                    <div className="carousel-tile flex flex-row items-center mx-3 justify-between border-orange-400 border-4">
                        <h1 className="carousel-title">Object-Oriented</h1>
                        <Image
                            src={"/Icons/black.svg"}
                            alt="Black image."
                            width={45}
                            height={45}
                        />
                    </div>
                </CarouselItem>
                {OBJECT.map((key, index) => (
                    <CarouselItem key={index} className="pt-1 basis-1/3">
                        <div className="carousel-tile flex flex-row items-center mx-3 justify-between">
                            <h1 className="font-Bebas_Neue text-2xl">{key}</h1>
                            <Image
                                src={OBJECTLINKS[index]}
                                alt={OBJECTALT[index]}
                                width={45}
                                height={45}
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselNext className="bg-neutral-950/55"/>
        </Carousel>
    );
}

function ToolCarousel() {
    return (
        <Carousel opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnMouseEnter: true,
              stopOnInteraction: false,
            }),
          ]}
          className="w-full" 
          orientation="vertical">
            <CarouselContent className="h-[300px]">
                <CarouselItem className="basis-1/3 pt-1">
                    <div className="carousel-tile flex flex-row items-center mx-3 justify-between border-orange-400 border-4">
                        <h1 className="carousel-title">Tools</h1>
                        <Image
                            src={"/Icons/black.svg"}
                            alt="Black image."
                            width={45}
                            height={45}
                        />
                    </div>
                </CarouselItem>
                {TOOLS.map((key, index) => (
                    <CarouselItem key={index} className="pt-1 basis-1/3">
                        <div className="carousel-tile flex flex-row items-center mx-3 justify-between">
                            <h1 className="font-Bebas_Neue text-2xl">{key}</h1>
                            <Image
                                src={TOOLSLINKS[index]}
                                alt={TOOLSALT[index]}
                                width={45}
                                height={45}
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselNext className="bg-neutral-950/55"/>
        </Carousel>
    );
}
