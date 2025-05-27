import { person } from "@/resources/content";
import Image from "next/image";
import profile from "./../../../public/images/avatar.png";
import styles from "./SkyAvatar.module.scss";

export function SkyAvatar() {
  return (
    <div className={styles.container}>
      <Image
        src={profile}
        alt={person.name}
        placeholder="blur"
        className={styles.avatar}
      />

      <div className={styles.backgroundWrap}>
        {/* big clouds */}
        <div className={styles.cloud1}>
          <div className={styles.cloud} />
        </div>

        <div className={styles.cloud2}>
          <div className={styles.cloud} />
        </div>

        {/* small clouds */}
        <div className={styles.cloud3}>
          <div className={styles.cloud} />
        </div>

        <div className={styles.cloud4}>
          <div className={styles.cloud} />
        </div>
      </div>
    </div>
  );
}
