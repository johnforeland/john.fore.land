import { getVersionInfo, VersionType } from "@/app/api/version/VersionFinder";
import { TerminalWindow } from "./TerminalWindow";

export async function Terminal() {
  return (
    <TerminalWindow
      nodeVersion={await getVersionInfo(VersionType.Node)}
      nextVersion={await getVersionInfo(VersionType.Next)}
      tailwindVersion={await getVersionInfo(VersionType.Tailwind)}
    />
  );
}
