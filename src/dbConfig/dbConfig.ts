// const mysql = require('mysql2');

// export async function connect() {
//   try {
//     const connection = mysql.createConnection({
//       host: process.env.DB_HOST,
//       user: process.env.DB_USER,
//       password: process.env.DB_PASSWORD,
//       database: process.env.DB_NAME
//     });

//     connection.connect(() => {
//     //   if (err) {
//     //     console.error('MySQL connection error:', err);
//     //     process.exit();
//     //   }
//       console.log('MySQL connected successfully');
//     });
//   } catch (error) {
//     console.log('Something went wrong!');
//     console.log(error);
//   }
// }