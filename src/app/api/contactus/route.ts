import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/helpers/contactmail";
import { ResultSetHeader } from "mysql2";
import pool from "@/dbConfig/dbUsers";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, email, phone, message } = reqBody;

    // Insert user into the database
    const insertQuery =
      "INSERT INTO contactus (clientName, message, email, phone, created_at) VALUES (?, ?, ?, ?, NOW())";
    const [result] = await pool
      .promise()
      .execute(insertQuery, [username, message, email, phone]);

    const newUser = {
      id: (result as ResultSetHeader).insertId,
      message,
      username,
      email,
      phone,
    };

    // Send verification email
    await sendEmail({ email, userId: newUser.username });

    return NextResponse.json({
      message: "Form Submit successfully",
      success: true,
      savedUser: newUser,
    });
  } catch (error: any) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
