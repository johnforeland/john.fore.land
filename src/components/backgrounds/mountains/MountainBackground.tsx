"use client";

import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

import styles from "./MountainBackground.module.scss";

import Intro from "@/app/about/parts/Intro";
import NamePhoto from "@/app/about/parts/NamePhoto";

export default function MountainBackground({
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
        <ParallaxBannerLayer className="inline md:hidden">
          <div className="grid grid-cols-1 gap-4 mx-10">
            <NamePhoto />
            <Intro />
          </div>
        </ParallaxBannerLayer>

        {/* ---------------- non-mobile ---------------- */}

        {/* intro text */}
        <ParallaxBannerLayer
          className="hidden md:inline"
          translateY={[10, 20]}
          shouldAlwaysCompleteAnimation={true}
          expanded={false}
        >
          <div className="grid grid-cols-3 gap-4 mx-10">
            <Intro className="col-span-2 col-start-2" />
          </div>
        </ParallaxBannerLayer>

        {/* photo */}
        {/* <ParallaxBannerLayer
          className="hidden md:inline"
          translateY={[30, 50]}
          shouldAlwaysCompleteAnimation={true}
          expanded={true}
        >
          <div className="grid grid-cols-3">
            <NamePhoto />
          </div>
        </ParallaxBannerLayer> */}
      </ParallaxBanner>

      {/* photo */}
      <div className="hidden md:inline">
        <div className="grid grid-cols-3 fixed top-1/6 left-0 right-0 z-10 ">
          <NamePhoto />
        </div>
      </div>

      {/* content */}
      <div className="grid grid-cols-3 mr-30">
        <div className="col-span-2 col-start-2">{children}</div>
      </div>
    </div>
  );
}
