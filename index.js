import express, { urlencoded }  from "express";
import dotenv from "dotenv";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import bodyParser from "body-parser";
import router from "./src/feature/tracker/route/tracker.route.js";
const configPath = path.resolve("src","config","uat.env")
dotenv.config({path:configPath})
const app = express();
app.use(express.json());
app.use(urlencoded({ extended: true }));
console.log(path.join("public"))
app.use("/tracker",express.static(path.join('public')));
// app.get('/', (req, res) => {
//     res.send('<link rel="stylesheet" type="text/css" href="/styles/Page.css">Hello World!');
//   });

app.set("view engine", "ejs");
app.set("views", path.resolve("src","feature","tracker", "views"));
// configure routes
app.use("/",(req, res) => {
    res.status(201).send("site is working")
})
app.use("/tracker",router);

export default app;
