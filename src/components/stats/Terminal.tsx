import { getVersionInfo, VersionType } from "@/app/api/version/VersionFinder";
import { CommandsProps } from "./TerminalOutput";
import { TerminalWindow } from "./TerminalWindow";

export async function Terminal() {
  const azureOutput = `{
      "customDomain": "john.fore.land",
      "defaultHostname": "calm-glacier-0030b2c03.6.azurestaticapps.net",
      "location": "West Europe",
      "repositoryUrl": "https://github.com/johnforeland/john.fore.land",
      "resourceGroup": "rg-john.fore.land"
    }`;

  const commands = [
    {
      cmd: "node -v",
      response: await getVersionInfo(VersionType.Node),
    },
    {
      cmd: "next -v",
      response: await getVersionInfo(VersionType.Next),
    },
    {
      cmd: "az staticwebapp -n john.fore.land",
      response: formatJson(azureOutput),
    },
    {
      cmd: "npm list tailwindcss --json | jq -r '.dependencies.tailwindcss.version'",
      response: await getVersionInfo(VersionType.Tailwind),
    },
  ] as CommandsProps[];

  return <TerminalWindow commands={commands} />;
}

function formatJson(azureOutput: string) {
  return (
    <pre>
      <span style={{ color: "cyan" }}>
        {"{"}
        <br />
      </span>
      {Object.entries(JSON.parse(azureOutput)).map(([key, value]) => (
        <div key={key} style={{ marginLeft: "20px" }}>
          <span style={{ color: "cyan" }}>{'"' + key + '"'}</span>:{" "}
          <span style={{ color: "orange" }}>
            {JSON.stringify(value, null, 2)}
          </span>
        </div>
      ))}
      <span style={{ color: "cyan" }}>
        {"}"}
        <br />
      </span>
    </pre>
  );
}
