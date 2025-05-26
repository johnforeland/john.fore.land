import { TerminalWindow } from "./TerminalWindow";

export function Terminal() {
  return (
    <TerminalWindow nodeVersion={process.version} nextVersion={process.title} />
  );
}
