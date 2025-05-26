import { execSync } from "child_process";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const query = getType(request);
    const command = getCommand(query);

    const output = execSync(command, {
      encoding: "utf-8",
    });

    return success(output);
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

function getCommand(type: string): string {
  switch (type) {
    case "node":
      return "node -v";
    case "next.js":
      return "npx next -v";
    case "tailwind":
      return "npm view tailwindcss --json | jq -r '.version'";
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
