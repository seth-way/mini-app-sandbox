"use client";
import { useState, useEffect, useMemo } from "react";
import { readCSV } from "../actions/read-cvs";
import { normalizeTeamData, IData } from "./lib/utils";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import CustomTooltip from "@/components/charts/CustomTooltip";

export default function ReCharts() {
  const [data, setData] = useState<IData[]>([]);
  useEffect(() => {
    const fetchTeamData = async () => {
      //const dvoaData = await readCSV("/reCharts/dvoa.csv");
      //const teamData = await readCSV("/reCharts/team-info.csv");
      const dvoaData = await (await fetch("/api/data/reCharts/dvoa")).json();
      const teamData = await (
        await fetch("/api/data/reCharts/team-info")
      ).json();
      const normalizedData = normalizeTeamData(dvoaData.data, teamData.data);
      setData(normalizedData);
    };
    fetchTeamData();
  }, []);

  return (
    <div className="flex aspect-[2/3] w-screen max-w-md flex-col items-center gap-4  text-white">
      <h2 className="text-2xl font-bold">NFL DVOA</h2>
      <p>2024, Week 9</p>
      <div className="border-thin aspect-square w-full">
        <ResponsiveContainer>
          <ScatterChart
            margin={{
              top: 20,
              right: 30,
              bottom: 20,
              left: 10,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              type="number"
              dataKey="offDVOA"
              name="Offensive DVOA"
              interval={0}
              domain={["auto", "auto"]}
              label={{
                key: "xAxisLabel",
                value: "Offensive DVOA",
                position: "bottom",
              }}
              allowDataOverflow={true}
              strokeWidth={0}
            />
            <YAxis
              type="number"
              dataKey="defDVOA"
              name="Defensive DVOA"
              interval={0}
              domain={["auto", "auto"]}
              label={{
                value: "Defensive DVOA",
                style: { textAnchor: "middle" },
                angle: -90,
                position: "left",
                offset: 0,
              }}
              allowDataOverflow={true}
              strokeWidth={0}
            />
            <ZAxis type="number" dataKey="wins" name="wins" range={[10, 600]} />
            <ReferenceLine
              y={0}
              stroke="gray"
              strokeWidth={1.5}
              strokeOpacity={0.9}
            />
            <ReferenceLine
              x={0}
              stroke="gray"
              strokeWidth={1.5}
              strokeOpacity={0.9}
            />
            <Tooltip content={<CustomTooltip />} />
            <Scatter name="dvoa" data={data} fill="#8884d8">
              {data.map((team, idx) => (
                <Cell
                  stroke={team.altColor}
                  strokeWidth={1}
                  key={`cell-${idx}`}
                  fill={team.color}
                />
              ))}
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 text-center [text-wrap:balance]">
        <p className="mt-2">
          Dots represent DVOA through positioning & W/L via size.
        </p>
      </div>
    </div>
  );
}
