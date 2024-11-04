import {
  normalizeTeamData,
  normalizeDVOAData,
  getPastWeeks,
} from "@/app/reCharts/lib/utils";
import { IDVOAInfo, IWeeklyDVOA } from "./types";

const getDVOA = async (week: number) => {
  try {
    const res = await fetch(`/api/data/reCharts/dvoa_week_${week}`);
    const data =  (await res.json()).data;
    return normalizeDVOAData(data);
  } catch (err) {
    console.error(err);
    return [];
  }
}

export const getDVOAs = async () => {
  const weeks = getPastWeeks();
  const data = await Promise.all(weeks.map(week => getDVOA(week))) as IDVOAInfo[][];
  const filtered = data.filter(week => week.length)
  return filtered.map(dvoas => ({ week: dvoas[0].week, dvoas } as IWeeklyDVOA));
}

export const getTeamData = async () => {
  try {
    const res = await fetch("/api/data/reCharts/team-info");
    const data =  (await res.json()).data;
    return normalizeTeamData(data);
  } catch (err) {
    console.error(err);
    return null;
  }
}
