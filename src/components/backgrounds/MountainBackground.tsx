"use client";

import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

import styles from "./MountainBackground.module.scss";

import GridRight from "@/app/about/parts/GridRight";
import Intro from "@/app/about/parts/Intro";
import NamePhoto from "@/app/about/parts/NamePhoto";
import { about } from "@/app/resources";
import { Scroll } from "@/components/shared";

export function MountainBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.main}>
      <ParallaxBanner
        className={styles.banner}
        layers={[
          {
            image: "images/mountains/bg-1.jpg",
            translateY: [0, 50],
            shouldAlwaysCompleteAnimation: true,
            expanded: false,
          },
          {
            image: "images/mountains/bg-2.png",
            translateY: [5, 45],
            shouldAlwaysCompleteAnimation: true,
            expanded: false,
          },
          {
            image: "images/mountains/bg-3.png",
            translateY: [10, 30],
            shouldAlwaysCompleteAnimation: true,
            expanded: false,
          },
          {
            image: "images/mountains/bg-4.png",
            translateY: [15, 25],
            shouldAlwaysCompleteAnimation: true,
            expanded: false,
          },
          {
            image: "images/mountains/bg-5.png",
            translateY: [20, 20],
            shouldAlwaysCompleteAnimation: true,
            expanded: false,
          },
        ]}
      >
        {/* ------------------ mobile ------------------ */}
        <ParallaxBannerLayer className="inline md:hidden" translateY={[10, 15]}>
          <div className="grid grid-cols-1 gap-4 mx-10">
            <NamePhoto />
            <Intro />
          </div>
        </ParallaxBannerLayer>

        {/* ---------------- non-mobile ---------------- */}

        {/* intro title */}
        <ParallaxBannerLayer
          className="hidden md:inline"
          speed={10}
          shouldAlwaysCompleteAnimation={true}
          expanded={false}
        >
          <GridRight>
            <h2 className="text-4xl font-bold pb-10 text-gray-500">
              {about.intro.title}
            </h2>
          </GridRight>
        </ParallaxBannerLayer>

        {/* intro text */}
        <ParallaxBannerLayer
          className="hidden md:inline"
          translateY={[30, 35]}
          shouldAlwaysCompleteAnimation={true}
          expanded={true}
        >
          <GridRight className="flex flex-col items-center">
            <Intro />
            <Scroll to="work" />
          </GridRight>
        </ParallaxBannerLayer>
      </ParallaxBanner>

      {/* photo */}
      <div className="hidden md:inline">
        <div className="w-1/3 fixed top-1/6 ">
          <NamePhoto />
        </div>
      </div>

      {/* content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-10 md:mr-30">
        <div className="col-span-2 col-start-2">{children}</div>
      </div>
    </div>
  );
}
