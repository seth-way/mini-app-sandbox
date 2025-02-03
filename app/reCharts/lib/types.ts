export type IDVOAData = {
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

export type ITeamData = {
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

type ITeamInfo = {
  name: string;
  color: string;
  altColor: string;
};

export type ITeams = {
  [team in NFL_TEAM]: ITeamInfo;
};

export type IDVOAInfo = {
  team: NFL_TEAM;
  offDVOA: number;
  defDVOA: number;
  record: string;
  wins: number;
  week: number;
};

export type IWeeklyDVOA = {
  week: number;
  dvoas: IDVOAInfo[];
}
