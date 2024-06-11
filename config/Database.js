import { Sequelize } from "sequelize";
 
// const db = new Sequelize('authcapstonefixwsl', 'root', '', {
//     host: "localhost",
//     dialect: "mysql"
// });

const db = new Sequelize('travelease', 'root', 'fara2800', {
    host: "34.101.210.186",
    dialect: "mysql"
});
 
export default db;