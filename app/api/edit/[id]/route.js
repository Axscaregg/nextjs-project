import { NextResponse } from "next/server";
import { mysqlPool } from "@/utils/db";
const promisePool = mysqlPool.promise();

export async function GET(request) {
  try {
    const url = new URL(request.url).pathname?.split("/")[3];
    const id = decodeURIComponent(url);


    const [result] = await promisePool.query("SELECT * FROM manga_new WHERE title = ? ", [id]);


    if (result.length === 0) {
      return NextResponse.json({ error: "ID not found" }, { status: 404 });
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const url = new URL(request.url).pathname?.split("/")[3];
    const id = decodeURIComponent(url);
    const { title, author, artist, detail, review, genre, cover_image  } = await request.json(); // Add any fields you want to update

    const [result] = await promisePool.query(
      "UPDATE manga_new SET title=?, author=?, artist=?, detail=?, review=?, genre=?, cover_image=? WHERE title = ?",
      [title, author, artist, detail, review, genre, cover_image, id]
    );

    if (result.affectedRows === 0) {
      return NextResponse.json({ error: "ID not found or no changes made" }, { status: 404 });
    }

    return NextResponse.json({ message: "Successfully updated", id }, { status: 200 });
  } catch (error) {
    console.error("PUT error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


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
