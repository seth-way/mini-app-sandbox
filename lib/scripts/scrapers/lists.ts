"use server";

import { fetchPage } from "@/lib/scripts/scrapers/utils";

// const FIRST_YEAR = 2011;
const BASE_URL = "https://en.wikipedia.org/wiki/NFL_Top_100_Players_of_";
const FIRST_YEAR = 2023;
const LAST_YEAR = 2024;
const LIST_YEARS = Array.from(
  { length: LAST_YEAR - FIRST_YEAR + 1 },
  (_, index) => index + FIRST_YEAR,
);

export async function fetchTop100s(): Promise<void> {
  const promises = LIST_YEARS.map((year) => {
    const dynamicURL = `${BASE_URL}${year}`;
    return fetchPage(dynamicURL); // fetch page should take a type & 
  });

  const results = await Promise.all(promises);

  results.forEach((result, index) => {
    if (result) {
      console.log(`Fetched and parsed page for year ${LIST_YEARS[index]}`);
    } else {
      console.error(
        `Failed to fetch or parse page for year ${LIST_YEARS[index]}`,
      );
    }
  });
}
