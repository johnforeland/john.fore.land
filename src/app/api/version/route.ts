import { NextRequest } from "next/server";
import { getType, getVersionInfo } from "./VersionFinder";

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
