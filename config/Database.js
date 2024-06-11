import { Sequelize } from "sequelize";

// Koneksi ke database lokal
const db = new Sequelize("travelease", "root", "", {
  host: "127.0.0.1", // Gunakan IP address secara eksplisit
  dialect: "mysql",
  port: 3306,
  logging: console.log,
  dialectOptions: {
    // optional if you have xampp or port borken
    socketPath: "/opt/lampp/var/mysql/mysql.sock",
  },
});

// const db = new Sequelize('travelease', 'root', 'fara2800', {
//     host: "34.101.210.186",
//     dialect: "mysql"
// });

export default db;

// Tes koneksi
const testConnection = async () => {
  try {
    await db.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

testConnection();
