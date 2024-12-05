import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/helpers/contactmail";
import { ResultSetHeader } from "mysql2";
import pool from "@/dbConfig/dbUsers";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { fullname, pan, mobile, email } = reqBody.formData;

    const insertQuery =
      "INSERT INTO preRegiBetaVersion (name, pan, mobile, email, created_at) VALUES (?, ?, ?, ?, NOW())";
    const [result] = await pool
      .promise()
      .execute(insertQuery, [fullname, pan, mobile, email]);

    return NextResponse.json({
      message: "data inserted successfully",
    });
  } catch (error) {
    return NextResponse.json({ mesage: `error ${error}` });
  }
}
