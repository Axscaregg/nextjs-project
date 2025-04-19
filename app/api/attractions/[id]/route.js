import { NextResponse } from "next/server";
import { mysqlPool } from "@/utils/db";

export async function GET(request, { params }) {
  const id = params.id; 

  const promisePool = mysqlPool.promise();
  const [rows] = await promisePool.query(
    'SELECT * FROM manga_new WHERE id = ?',
    [id]
  );

  return NextResponse.json(rows);
}
