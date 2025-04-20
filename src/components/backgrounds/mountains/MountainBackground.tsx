"use client";

import {
  Parallax,
  ParallaxBanner,
  ParallaxBannerLayer,
} from "react-scroll-parallax";
import styles from "./MountainBackground.module.scss";
import Photo from "@/app/about/parts/Photo";
import Name from "@/app/about/parts/Name";

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
        <ParallaxBannerLayer
          className="invisible md:visible"
          translateY={[0, 20]}
          shouldAlwaysCompleteAnimation={true}
          expanded={false}
        >
          <ParallaxBannerLayer>
            <div className="grid grid-cols-1 md:grid-cols-3 place-items-center visible md:invisible">
              <div className="grid place-items-center">
                <Photo />
                <Name className="mr-20" />
              </div>
            </div>
            {children}
          </ParallaxBannerLayer>
          <div className="grid grid-cols-1 md:grid-cols-3 place-items-center">
            <div className="grid place-items-center">
              <Photo />
              <Name className="mr-20" />
            </div>
          </div>
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </div>
  );
}
