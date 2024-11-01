// import { type NextRequest } from "next/server";
export const dynamic = "force-static";

import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ app: string; file: string }> },
) {
  const app = (await params).app;
  const file = (await params).file;
  const publicPath = path.join(process.cwd(), "public/static");
  const fullPath = path.join(publicPath, app, `${file}.csv`);
  try {
    const fileContent = fs.readFileSync(fullPath, "utf-8");
    const data = parse(fileContent, { columns: true });
    return Response.json({ data });
  } catch (err) {
    console.error("failed to read file", file);
    return Response.json({ data: {} });
  }
}
