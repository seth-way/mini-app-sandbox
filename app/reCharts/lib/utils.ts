import {
  ITeamData,
  IDVOAData,
  ITeams,
  IDVOAInfo,
  NFL_TEAM,
} from "@/app/reCharts/lib/types";

import { NFL_WEEKS } from "@/app/reCharts/lib/constants";

export function normalizeTeamData(teamData: ITeamData[]): ITeams {
  return teamData.reduce((teams, team) => {
    const abbr = team.team_abbr as NFL_TEAM;
    const teamInfo = {
      name: team.team_name,
      color: team.team_color,
      altColor: team.team_color2,
    };

    teams[abbr] = teamInfo;
    return teams;
  }, {} as ITeams);
}

export function normalizeDVOAData(dvoaData: IDVOAData[]): IDVOAInfo[] {
  return dvoaData.map(
    (dvoaInfo) =>
      ({
        team: dvoaInfo.TEAM,
        offDVOA: Number(dvoaInfo["Off DVOA"]),
        defDVOA: Number(dvoaInfo["Def DVOA"]),
        record: dvoaInfo["W-L"],
        wins: Number(dvoaInfo["W-L"].split("-")[0]),
      } as IDVOAInfo),
  );
}

export function getPastWeeks() {
  const now = new Date();
  const pastWeeks = NFL_WEEKS.filter((weekInfo) => weekInfo.date < now);
  return pastWeeks.map(({ week }) => week);
}
