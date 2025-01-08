"use server";

import { JSDOM } from "jsdom";

type HtmlResponse = {
  html: string; // The key containing the HTML string
  [key: string]: any; // Optional: Allows additional keys if the JSON contains more data
};

function createDOM(response: string): Document | null {
  try {
    const dom = new JSDOM(response);
    return dom.window.document;
  } catch (error) {
    console.error("Error creating DOM:", error);
    return null;
  }
}

export async function fetchPage(url: string): Promise<Document | null> {
  try {
    const res = await fetch(url);

    if (!res.ok) throw new Error(`Error fetching - '${url}'.`);
    const html = await res.text();

    return createDOM(html);
  } catch (error) {
    console.error(error);
    return null;
  }
}
