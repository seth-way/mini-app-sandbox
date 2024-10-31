import { NFL_TEAM } from "@/lib/constants";

type IDVOAData = {
  TEAM: NFL_TEAM;
  "TOT DVOA": string;
  Rank: string;
  "NON-ADJ VOA": string;
  "W-L": string;
  "LAST WEEK": string;
  "Off DVOA": string;
  "Def DVOA": string;
  "ST DVOA": string;
  "Off VOA": string;
  "Def VOA": string;
  "ST VOA": string;
  "EST. WINS": string;
  "WEI. DVOA": string;
  SCHED: string;
  FUTURE: string;
  VAR: string;
  Week: string;
  Yea: string;
};

type ITeamData = {
  team_abbr: NFL_TEAM;
  team_name: string;
  team_id: string;
  team_nick: string;
  team_conf: string;
  team_division: string;
  team_color: string;
  team_color2: string;
  team_color3: string;
  team_color4: string;
  team_logo_wikipedia: string;
  team_logo_espn: string;
  team_wordmark: string;
  team_conference_logo: string;
  team_league_logo: string;
  team_logo_squared: string;
};

export type IData = {
  team: NFL_TEAM;
  name: "string";
  color: "string";
  altColor: "string";
  offDVOA: number;
  defDVOA: number;
  record: "string";
  wins: number;
};

export function normalizeTeamData(
  dvoaData: [IDVOAData],
  teamData: [ITeamData],
): IData[] {
  const data = dvoaData.map((dvoaBase) => {
    const infoBase = teamData.find(
      (base) => base.team_abbr === dvoaBase.TEAM,
    ) as ITeamData;
    return {
      team: dvoaBase.TEAM,
      offDVOA: Number(dvoaBase["Off DVOA"]),
      defDVOA: Number(dvoaBase["Def DVOA"]),
      record: dvoaBase["W-L"],
      name: infoBase.team_name,
      color: infoBase.team_color,
      altColor: infoBase.team_color2,
      wins: Number(dvoaBase["W-L"].split("-")[0]),
    } as IData;
  });
  data.forEach((team) => console.log(team.wins));
  return data;
}
