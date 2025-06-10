import Image from "@/components/shared/Image";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Video } from "../project";
import { GitHubCardProps } from "./GitHubProps";

export async function GitHubHeader({ repo }: GitHubCardProps) {
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
      <figure>{getImage()}</figure>
      <figure>{getVideo()}</figure>
      <figure>{getCode()}</figure>
    </>
  );
}
