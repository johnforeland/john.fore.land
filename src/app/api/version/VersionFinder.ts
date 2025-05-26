import { NextRequest } from "next/server";

export enum VersionType {
  Node = "node",
  Next = "next.js",
  Tailwind = "tailwind",
}

export function getType(request: NextRequest): VersionType {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("type");

  if (query === null) {
    throw new Error("Missing required 'type' query parameter");
  }

  if (!Object.values(VersionType).includes(query as VersionType)) {
    throw new Error(`Invalid 'type' parameter: ${query}`);
  }

  return query as VersionType;
}

export async function getVersionInfo(type: VersionType): Promise<string> {
  switch (type) {
    case VersionType.Node:
      return process.version;
    case VersionType.Next: {
      const pkg = await import("next/package.json");
      return pkg.version;
    }
    case VersionType.Tailwind: {
      const { execSync } = await import("child_process");
      const result = execSync("npm view tailwindcss version", {
        encoding: "utf-8",
      }).trim();
      return result;
    }
    default:
      throw new Error(`Unknown type: ${type}`);
  }
}
