"use client";

import {
  Parallax,
  ParallaxBanner,
  ParallaxBannerLayer,
} from "react-scroll-parallax";
import styles from "./MountainBackground.module.scss";
import Photo from "@/app/about/parts/Photo";

export default function MountainBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.main}>
      <ParallaxBanner className={styles.banner}>
        <ParallaxBannerLayer
          image="images/mountains/bg-1.jpg"
          translateY={[0, 50]}
          shouldAlwaysCompleteAnimation={true}
          expanded={false}
        />
        <ParallaxBannerLayer
          translateY={[0, 20]}
          shouldAlwaysCompleteAnimation={true}
          expanded={false}
        >
          <Photo />
        </ParallaxBannerLayer>
        <ParallaxBannerLayer
          image="images/mountains/bg-2.png"
          translateY={[5, 45]}
          shouldAlwaysCompleteAnimation={true}
          expanded={false}
        />
        <ParallaxBannerLayer
          image="images/mountains/bg-3.png"
          translateY={[10, 30]}
          shouldAlwaysCompleteAnimation={true}
          expanded={false}
        />
        <ParallaxBannerLayer
          image="images/mountains/bg-4.png"
          translateY={[15, 25]}
          shouldAlwaysCompleteAnimation={true}
          expanded={false}
        />

        <ParallaxBannerLayer
          image="images/mountains/bg-5.png"
          translateY={[20, 20]}
          shouldAlwaysCompleteAnimation={true}
          expanded={false}
        />
        <ParallaxBannerLayer>{children}</ParallaxBannerLayer>
      </ParallaxBanner>
    </div>
  );
}
