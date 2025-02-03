import path from "path";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";
import { checkCacheDir } from "@/lib/scripts/scrapers/utils";

const CACHE_PATH = path.join(process.cwd(), ".cache/lists");

export async function GET(
  req: Request,
  { params }: { params: { year: string } },
) {
  checkCacheDir("lists");
  const { year } = params;

  try {
    const filePath = path.join(CACHE_PATH, `${year}.json`);
    const fileContents = await fs.readFile(filePath, "utf-8");
    const data = JSON.parse(fileContents);

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return NextResponse.json({ error: "File not found" }, { status: 404 });
    }

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

export async function POST(
  req: Request,
  { params }: { params: { year: string } },
) {
  checkCacheDir("lists");
  const { year } = params;

  try {
    const filePath = path.join(CACHE_PATH, `${year}.json`);

    await fs.mkdir(CACHE_PATH, { recursive: true });

    const body = await req.json();

    await fs.writeFile(filePath, JSON.stringify(body, null, 2), "utf-8");

    return NextResponse.json(
      { message: "File written successfully" },
      { status: 201 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
