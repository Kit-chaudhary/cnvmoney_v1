"use server";
import pool  from "@/dbConfig/dbUsers";

export async function ContentShow() {
  try {
    const query = "SELECT * FROM websiteContent";
    const [rows] = await pool.promise().execute(query);

    if ((rows as any[]).length < 1) {
      return { data: [], status: 404 }; // Return an empty array for consistency
    }

    const formsData = rows;

    return { data: formsData, status: 200 }; // Return the data with a status code
  } catch (error: any) {
    console.error(`Error fetching data from the database: ${error.message}`);
    throw error; // Rethrow the error to propagate it
  }
}
