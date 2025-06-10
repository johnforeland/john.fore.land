import React from "react";
import styles from "./Video.module.scss";

interface VideoProps {
  src: string;
  title?: string;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  className?: string;
  width?: string;
  border?: boolean;
}

export const Video: React.FC<VideoProps> = ({
  src,
  title = "Video",
  controls = true,
  autoPlay = true,
  loop = true,
  muted = true,
  className = "",
  width = "100%",
  border = true,
}) => {
  return (
    <div className={border ? styles.round : ""}>
      <video
        className={className}
        src={src}
        title={title}
        controls={controls}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline
        width={width}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
