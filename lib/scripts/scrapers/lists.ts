"use server";
import { fetchPage } from "@/lib/scripts/scrapers/asyncUtils";

import {
  extractPosition,
  convertTeamToNFL,
} from "@/lib/scripts/scrapers/utils";

// const FIRST_YEAR = 2011;
const BASE_URL = "https://en.wikipedia.org/wiki/NFL_Top_100_Players_of_";
const FIRST_YEAR = 2023;
const LAST_YEAR = 2024;
const LIST_YEARS = Array.from(
  { length: LAST_YEAR - FIRST_YEAR + 1 },
  (_, index) => index + FIRST_YEAR,
);

export async function fetchTop100s(): Promise<void> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  try {
    for (const year of LIST_YEARS) {
      const cachedList = await fetch(`${baseUrl}/api/cache/list/${year}`).then((res) =>
        res.ok ? res.json() : null
      );

      if (cachedList) {
        console.log(`Cache hit for year ${year}. Skipping fetch.`);
        continue;
      }

      const dynamicURL = `${BASE_URL}${year}`;
      const page = await fetchPage(dynamicURL);
      if (!page) {
        console.error(`Failed to fetch page for year ${year}`);
        continue;
      }

      const top100Players = extractTop100(page);
      console.log(`Extracted ${top100Players.length} players for year ${year}`);

      const response = await fetch(`${baseUrl}/api/cache/list/${year}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(top100Players),
      });

      if (!response.ok) {
        console.error(`Failed to save top 100 players for year ${year} to cache.`);
        continue;
      }

      console.log(`Saved top 100 players for year ${year} to cache.`);
    }
  } catch (error) {
    console.error("An error occurred while fetching Top 100 data:", error);
  }
}

function extractTop100(page: Document): IPlayer[] {
  const table = page.querySelector(".wikitable.sortable");
  if (!table) {
    throw new Error(
      "Unable to find the 'wikitable sortable' table on the page.",
    );
  }

  const rows = table.querySelectorAll("tbody > tr");
  const players: IPlayer[] = [];

  rows.forEach((row) => {
    const cells = row.querySelectorAll("td");
    if (cells.length < 5) return;

    const rank = parseInt(cells[0]?.textContent?.trim() || "", 10);
    const name = cells[1]?.textContent?.trim() || "";
    const position = extractPosition(cells[2]?.textContent?.trim() || "");
    const teamCell = cells[3];

    let previousTeam: NFL_TEAM;
    let currentTeam: NFL_TEAM;

    if (teamCell && teamCell.getAttribute("colspan") === "2") {
      const teamName = teamCell.textContent?.trim() || "";
      previousTeam = convertTeamToNFL(teamName);
      currentTeam = previousTeam;
    } else {
      const teamName1 = cells[3]?.textContent?.trim() || "";
      const teamName2 = cells[4]?.textContent?.trim() || "";
      previousTeam = convertTeamToNFL(teamName1);
      currentTeam = convertTeamToNFL(teamName2);
    }

    if (rank && name && position && previousTeam && currentTeam) {
      players.push({
        rank,
        name,
        position,
        previousTeam,
        currentTeam,
      });
    }
  });

  return players;
}
