import { NextResponse } from 'next/server'
import { mysqlPool } from "@/utils/db";
import { v4 as uuidv4 } from "uuid";

const promisePool = mysqlPool.promise();

export async function GET(request) {
  const [rows] = await promisePool.query(`SELECT * FROM manga_new;`);
  return NextResponse.json(rows);
}

export async function POST(request) {
  const { title, author, artist, detail, review, genre, cover_image } = await request.json();

  try {


    const promisePool = mysqlPool.promise();
    const [result] = await promisePool.query(
      `INSERT INTO manga_new ( title, author, artist, detail, review, genre, cover_image)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [ title, author, artist, detail, review, genre, cover_image]
    );

    return NextResponse.json(
      { message: "Created", insertId: result.insertId },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message || error }, { status: 500 });
  }
}

export async function PUT(request){
  try{
    const { id,title, author, artist, detail, review,genre, cover_image }  = await request.json();
    const [result] = await promisePool.query('UPDATE manga_new SET title=?, author=?, artist=?, detail=?, review=?,genre=?, cover_image=? WHERE id=?',[title, author, artist, detail, review,genre, cover_image, id]);
    if (result.affectedRows == 0){
      return NextResponse.json({error: "ID Not found"}, {status: 404});
  }

  return NextResponse.json({message: "Updated", id}, {status: 200});
  }catch (error){
    return NextResponse.json({error: error}, {status: 500})
}
}

