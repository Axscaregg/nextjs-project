import { NextResponse } from "next/server";
import { mysqlPool } from "@/utils/db";
const promisePool = mysqlPool.promise();


export async function DELETE(request) {
  try {
    const { id, title } = await request.json();
    const [result] = await promisePool.query("DELETE FROM manga_new WHERE title=?", [
      title,
    ]);
    if (result.affectedRows == 0) {
      return NextResponse.json({ error: "ID Not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Updated", id }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
