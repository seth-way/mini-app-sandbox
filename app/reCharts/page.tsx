"use client";
import { useState, useEffect, useRef } from "react";
import WheelPicker, { PickerData } from "react-simple-wheel-picker";
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
import { getTeamData, getDVOAs } from "@/app/reCharts/lib/apiCalls";
import { useDotResize } from "@/app/reCharts/lib/hooks";
import { IWeeklyDVOA, ITeams, IDVOAInfo } from "./lib/types";

export default function ReCharts() {
  const ref = useRef(null);
  const [teamData, setTeamData] = useState<ITeams | null>(null);
  const [dvoaData, setDvoaData] = useState<IWeeklyDVOA[]>([]);
  const [dvoa, setDvoa] = useState<IDVOAInfo[] | null>(null);
  const [week, setWeek] = useState<number>(1);
  const [weeks, setWeeks] = useState<PickerData[]>([{ id: "1", value: 1 }]);
  const dotSize = useDotResize(ref, week);

  useEffect(() => {
    const fetchTeamData = async () => {
      const teamInfo = await getTeamData();
      setTeamData(teamInfo);
      const weeklyDVOA = await getDVOAs();
      setDvoaData(weeklyDVOA);
      if (weeklyDVOA[0]) setDvoa(weeklyDVOA[0].dvoas);
      setWeeks(
        weeklyDVOA.map((dvoa) => ({
          id: dvoa.week.toString(),
          value: dvoa.week,
        })),
      );
    };
    fetchTeamData();
  }, []);

  const handleWeekChange = (target: PickerData) => {
    const week = Number(target.value);
    setWeek(week);
    const weekDvoa = dvoaData.find((datum) => datum.week === week);
    if (weekDvoa) setDvoa(weekDvoa.dvoas);
  };

  return (
    <div className="flex aspect-[2/3] w-11/12 max-w-3xl flex-col items-center gap-8  text-white">
      <h2 className="text-2xl font-bold">2024 NFL DVOA</h2>
      <div className="border-thin flex w-full flex-col items-center gap-2 md:flex-row">
        <div className="border-thin aspect-square w-full">
          <ResponsiveContainer ref={ref}>
            <ScatterChart
              margin={{
                top: 20,
                right: 30,
                bottom: 20,
                left: 10,
              }}
            >
              {dvoa && (
                <>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    type="number"
                    dataKey="offDVOA"
                    name="Offensive DVOA"
                    interval={0}
                    domain={[-60, 60]}
                    label={{
                      key: "xAxisLabel",
                      value: "Offensive DVOA",
                      position: "bottom",
                      stroke: "white",
                    }}
                    allowDataOverflow={true}
                    strokeWidth={0}
                  />
                  <YAxis
                    type="number"
                    dataKey="defDVOA"
                    name="Defensive DVOA"
                    interval={0}
                    domain={[-60, 60]}
                    label={{
                      value: "Defensive DVOA",
                      style: { textAnchor: "middle" },
                      angle: -90,
                      position: "left",
                      offset: 0,
                      stroke: "white",
                    }}
                    allowDataOverflow={true}
                    strokeWidth={0}
                  />
                  <ZAxis
                    type="number"
                    dataKey="wins"
                    name="wins"
                    range={[dotSize.min, dotSize.max]}
                  />
                  <ReferenceLine
                    y={0}
                    stroke="white"
                    strokeWidth={1.5}
                    strokeOpacity={0.9}
                  />
                  <ReferenceLine
                    x={0}
                    stroke="white"
                    strokeWidth={1.5}
                    strokeOpacity={0.9}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Scatter name="dvoa" data={dvoa} fill="#8884d8">
                    {teamData &&
                      dvoa.map(({ team, week }) => (
                        <Cell
                          stroke={teamData[team].altColor}
                          strokeWidth={1}
                          key={`cell-${team}`}
                          fill={teamData[team].color}
                        />
                      ))}
                  </Scatter>
                </>
              )}
            </ScatterChart>
          </ResponsiveContainer>
        </div>
        <div className="flex w-full items-center gap-4 text-center [text-wrap:balance] md:max-w-32 md:flex-col">
          <h3>Select Week</h3>
          <div className="border-thin rounded-md border border-gray-600">
            <WheelPicker
              data={weeks}
              onChange={handleWeekChange}
              height={90}
              width={80}
              titleText="Enter value same as aria-label"
              itemHeight={30}
              selectedID={weeks[0].id}
              color="#333"
              activeColor="#ccc"
              backgroundColor="transparent"
              shadowColor="transparent"
            />
          </div>
          <p className="text-gray-300">
            Dots represent DVOA through positioning & W/L via size.
          </p>
        </div>
      </div>
    </div>
  );
}
