import { person } from "@/app/resources/content";
import "./SkyAvatar.css";

export default function SkyAvatar() {
  return (
    <div id="container">
      <img src="/images/avatar.png" alt={person.name} id="avatar" />
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
