import Image from "@/components/shared/Image";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Video } from "../project";
import { GitHubCardProps } from "./GitHubProps";

export async function GitHubHeader({ repo }: GitHubCardProps) {
  function getWebsite(): import("react").ReactNode {
    return (
      repo.website && (
        <div className="mockup-browser border-base-300 border w-full">
          <div className="mockup-browser-toolbar">
            <div className="input">{repo.website}</div>
          </div>
          <div className="grid place-content-center border-t border-base-300 h-58 md:h-90">
            <div className="w-full overflow-hidden pointer-events-none">
              <iframe
                src={repo.website}
                width="1130"
                height="720"
                className="scale-32 md:scale-50 origin-top-left border-none pointer-events-none"
                title="Website Preview"
                tabIndex={-1}
              />
            </div>
          </div>
        </div>
      )
    );
  }

  function getImage(): import("react").ReactNode {
    return (
      repo.image && (
        <Image
          src={repo.image}
          alt={`${repo.owner}/${repo.repo}`}
          width={384}
          height={216}
          style={{ width: "100%", height: "auto" }}
        />
      )
    );
  }

  function getVideo(): import("react").ReactNode {
    return repo.video && <Video src={repo.video} />;
  }

  function getCode(): import("react").ReactNode {
    return (
      repo.code && (
        <div className="mockup-code w-full">
          <SyntaxHighlighter
            language="yml"
            style={dark}
            customStyle={{ background: "none" }}
          >
            {repo.code}
          </SyntaxHighlighter>
        </div>
      )
    );
  }

  return (
    <>
      <figure>{getWebsite()}</figure>
      <figure>{getImage()}</figure>
      <figure>{getVideo()}</figure>
      <figure>{getCode()}</figure>
    </>
  );
}
