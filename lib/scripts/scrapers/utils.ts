import fs from "fs";
import path from "path";

export function convertTeamToNFL(teamStr: string): NFL_TEAM {
  const teamMap: Record<string, NFL_TEAM> = {
    "Arizona Cardinals": "ARI",
    "Atlanta Falcons": "ATL",
    "Baltimore Ravens": "BAL",
    "Buffalo Bills": "BUF",
    "Carolina Panthers": "CAR",
    "Chicago Bears": "CHI",
    "Cincinnati Bengals": "CIN",
    "Cleveland Browns": "CLE",
    "Dallas Cowboys": "DAL",
    "Denver Broncos": "DEN",
    "Detroit Lions": "DET",
    "Green Bay Packers": "GB",
    "Houston Texans": "HOU",
    "Indianapolis Colts": "IND",
    "Jacksonville Jaguars": "JAX",
    "Kansas City Chiefs": "KC",
    "Los Angeles Chargers": "LAC",
    "Los Angeles Rams": "LAR",
    "Las Vegas Raiders": "LV",
    "Miami Dolphins": "MIA",
    "Minnesota Vikings": "MIN",
    "New England Patriots": "NE",
    "New Orleans Saints": "NO",
    "New York Giants": "NYG",
    "New York Jets": "NYJ",
    "Philadelphia Eagles": "PHI",
    "Pittsburgh Steelers": "PIT",
    "Seattle Seahawks": "SEA",
    "San Francisco 49ers": "SF",
    "Tampa Bay Buccaneers": "TB",
    "Tennessee Titans": "TEN",
    "Washington Commanders": "WAS",
  };

  const teamAbbr = teamMap[teamStr];
  return teamAbbr || "";
  if (teamAbbr) {
    return teamAbbr;
  }

  throw new Error(`Invalid team name: ${teamStr}`);
}

export function extractPosition(positionStr: string): IPosition {
  const positionMap: Record<string, IPosition> = {
    Quarterback: "QB",
    "Wide Receiver": "WR",
    "Running Back": "RB",
    "Tight End": "TE",
    "Offensive Tackle": "OT",
    Guard: "OG",
    Center: "C",
    Fullback: "FB",
    "Defensive End": "DE",
    "Defensive Tackle": "DT",
    Linebacker: "LB",
    Safety: "S",
    Cornerback: "CB",
    Kicker: "K",
    Punter: "P",
  };

  const normalizedPosition = positionStr.trim();
  const mappedPosition = positionMap[normalizedPosition];
  return mappedPosition || "";
  if (!mappedPosition) {
    throw new Error(`Invalid position found: "${positionStr}"`);
  }

  return mappedPosition;
}

export function checkCacheDir(dir: string) {
  const cacheDir = path.join(process.cwd(), ".cache", dir);
  if (!fs.existsSync(cacheDir)) {
    fs.mkdirSync(cacheDir, { recursive: true });
  }
}
