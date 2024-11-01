   // app/actions/read-csv.js
   "use server";

   import fs from "fs";
   import path from "path";
   import { parse } from "csv-parse/sync"; // Or any suitable CSV parsing library

   export async function readCSV(filePath: string) {
     const publicPath = path.join(process.cwd(), "public/static");
     const fullPath = path.join(publicPath, filePath);

     const fileContent = fs.readFileSync(fullPath, "utf-8");
     const records = parse(fileContent, { columns: true });
     return records;
   }
