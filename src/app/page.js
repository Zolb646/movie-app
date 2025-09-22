"use client";
import { useState } from "react";
import { Navbar } from "./_components/navbar";
import { Scroller } from "./_components/swiper";
import { Header } from "./_components/header";

export default function Home() {
  return (
    <div className="w-[1440px] h-full flex flex-col justify-self-center overflow-hidden bg-white z-[-1] gap-9">
      <Navbar />
      <div className="w-[1440px] h-[600px] overflow-auto">
        <div className="flex w-fit shrink-0 overflow-auto ">
          <Scroller
            movieTag={"Wicked"}
            movieImage={"/image.jpg"}
            movieText={
              "Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads."
            }
          />
          <Scroller
            movieTag={"Gladiator 2"}
            movieImage={"/image2.png"}
            movieText={
              "After his home is conquered by the tyrannical emperors who now lead Rome, Lucius is forced to enter the Colosseum and must look to his past to find strength to return the glory of Rome to its people."
            }
          />
          <Scroller
            movieTag={"Moana 2"}
            movieImage={"/image1.jpg"}
            movieText={
              "After receiving an unexpected call from her wayfinding ancestors, Moana must journey to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she's ever faced."
            }
          />
        </div>
      </div>
      <div className="border w-full aspect-[1440/980] flex px-20">
        <Header />
      </div>
    </div>
  );
}
