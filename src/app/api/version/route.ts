import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const query = getType(request);
    const output = await getVersionInfo(query);
    return success(JSON.stringify({ result: output }));
  } catch (err) {
    return error(
      err.message || "Internal Server Error",
      err instanceof Error ? 400 : 500
    );
  }
}

function getType(request: NextRequest): string {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("type");

  if (query === null) {
    throw new Error("Missing required 'type' query parameter");
  }

  return query;
}

async function getVersionInfo(type: string): Promise<string> {
  switch (type) {
    case "node":
      return process.version;
    case "next.js": {
      const pkg = await import("next/package.json");
      return pkg.version;
    }
    case "tailwind": {
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

function success(data: string) {
  return new Response(data, {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

function error(message: string, status: number = 400) {
  return new Response(JSON.stringify({ error: message }), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
