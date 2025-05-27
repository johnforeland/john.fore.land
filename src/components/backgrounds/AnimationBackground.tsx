import { BackgroundGradientAnimation } from "./background-gradient-animation";

import "./AnimationBackground.css";

export function AnimationBackground() {
  return (
    <div className="fixed inset-0 -z-10 w-full h-full">
      <BackgroundGradientAnimation
        gradientBackgroundStart="rgb(0,0,0,0)"
        gradientBackgroundEnd="rgb(0,0,0,0)"
        size="20%"
        interactive={false}
        blendingValue="hard-light"
      />
    </div>
  );
}
