interface IAppInfo {
  title: string;
  description: string;
  img: string;
  redirectPath: string;
}

export const APPS: IAppInfo[] = [
  {
    title: "ReCharts",
    description: "Data visualization with the re-charts library.",
    img: "recharts",
    redirectPath: "reCarts",
  },
  {
    title: "Chess",
    description:
      "Chess.js & react-chessboard proof of concenpt for Frien-emies app.",
    img: "chess",
    redirectPath: "chess",
  },
];
