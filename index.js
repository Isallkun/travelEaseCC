// import express from "express";
// import dotenv from "dotenv";
// import cookieParser from "cookie-parser";
// import cors from "cors";
// import db from "./config/Database.js";
// import router from "./routes/route.js";
// dotenv.config();
// const app = express();
 
// app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
// app.use(cookieParser());
// app.use(express.json());
// app.use(router);
 
// app.listen(9000, ()=> console.log('Server running at port 9000'));
import express from "express";
import db from "./config/Database.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import router from "./routes/route.js";
dotenv.config();
const app = express();

try {
    await db.authenticate();
    console.log('Database Connected');
} catch (error) {
    console.error(error);
}

app.use(cookieParser());
app.use(express.json());
app.use(router);
app.listen(9000, ()=> console.log(`Server running on port 9000`));