declare global {
  type IPosition =
    | "QB"
    | "WR"
    | "RB"
    | "TE"
    | "OT"
    | "OG"
    | "C"
    | "FB"
    | "DE"
    | "DT"
    | "LB"
    | "S"
    | "CB"
    | "K"
    | "P";

  type NFL_TEAM =
    | "ARI"
    | "ATL"
    | "BAL"
    | "BUF"
    | "CAR"
    | "CHI"
    | "CIN"
    | "CLE"
    | "DAL"
    | "DEN"
    | "DET"
    | "GB"
    | "HOU"
    | "IND"
    | "JAX"
    | "KC"
    | "LAC"
    | "LAR"
    | "LV"
    | "MIA"
    | "MIN"
    | "NE"
    | "NO"
    | "NYG"
    | "NYJ"
    | "PHI"
    | "PIT"
    | "SEA"
    | "SF"
    | "TB"
    | "TEN"
    | "WAS";

  interface IPlayer {
    rank: number;
    name: string;
    position: IPosition;
    previousTeam: NFL_TEAM;
    currentTeam: NFL_TEAM;
  }

  var _mongoClientPromise: Promise<import("mongodb").MongoClient> | undefined;
}

export {};
