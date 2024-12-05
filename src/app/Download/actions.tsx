"use server";
import pool from "@/dbConfig/dbUsers";

export async function FormsShow() {
  try {
    let responseLog = {
      formData: [],
      nfoData: [],
    };
    const query = "SELECT * FROM download_form";
    const [rows]: any = await pool.promise().execute(query);
    if ((rows as any[]).length == 0) {
      return { ...responseLog, status: 200 };
    }

    responseLog.formData = rows;

    const nfoquery = "SELECT * FROM download_form WHERE formType = 'NFO Form'";
    const [nforows]: any = await pool.promise().execute(nfoquery);

    if ((nforows as any[]).length == 0) {
      return { ...responseLog, status: 200 };
    }
    responseLog.nfoData = nforows;
    return { ...responseLog, status: 200 };
  } catch (error: any) {
    console.error(`Error fetching data from the database: ${error.message}`);
    throw error;
  }
}
