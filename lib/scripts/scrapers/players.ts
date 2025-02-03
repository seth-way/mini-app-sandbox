"use server";
import { fetchPage } from "@/lib/scripts/scrapers/asyncUtils";

import {
  extractPosition,
  convertTeamToNFL,
} from "@/lib/scripts/scrapers/utils";

// ex. Jalen Hurts <> "https://www.pro-football-reference.com/search/search.fcgi?hint=jalen+hurts&search=jalen+hurts&pid=&idx="
const BASE_URL =
  "https://www.pro-football-reference.com/search/search.fcgi?search=";

export async function fetchPlayer(
  fullName: string,
  position: string,
): Promise<void> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const playerKey = fullName.replaceAll(" ", "") + position;
  const cachedPlayer = await fetch(
    `${baseUrl}/api/cache/player/${playerKey}`,
  ).then((res) => (res.ok ? res.json() : null));
  // need to write api route (get/post) for caching player.
  // api route will check for player, if doesnt exist, will ping PFF, extract info and write to cache.
  try {
  } catch (error) {
    console.error("An error occurred while fetching Top 100 data:", error);
  }
}
