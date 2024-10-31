import Image from "next/image";

export default function CustomTooltip({
  active,
  payload,
  label,
}: {
  active: boolean;
  payload: any;
  label: string;
}) {
  if (active && payload && payload.length) {
    const team = payload[0].payload;
    return (
      <div className="col-span-1 flex h-36 w-36 flex-col items-center justify-center overflow-hidden rounded-3xl border border-gray-200 bg-gray-950 shadow-md">
        <div className="flex h-1/2 w-full items-center justify-center gap-2">
          <Image
            src={`/logos/${team.team}.png`}
            alt={`${team.name} logo`}
            height={75}
            width={75}
          />
          <h3>{team.record}</h3>
        </div>
        <ul>
          <li className="text-white">{`Off DVOA: ${team.offDVOA}`}</li>
          <li className="text-white">{`Def DVOA: ${team.defDVOA}`}</li>
        </ul>
      </div>
    );
  }

  return null;
}
