import { person } from "@/resources/content";
import Image from "next/image";
import "./SkyAvatar.css";

export function SkyAvatar() {
  return (
    <div id="container">
      <Image
        src="/images/avatar.png"
        alt={person.name}
        id="avatar"
        width={150}
        height={150}
      />

      <div id="background-wrap">
        {/* big clouds */}
        <div className="cloud1">
          <div className="cloud"></div>
        </div>

        <div className="cloud2">
          <div className="cloud"></div>
        </div>

        {/* small clouds */}
        <div className="cloud3">
          <div className="cloud"></div>
        </div>

        <div className="cloud4">
          <div className="cloud"></div>
        </div>
      </div>
    </div>
  );
}
