import express, { Request, Response } from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import registrationRoutes from "./registration/route"; 

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());


app.use("/api", registrationRoutes);


app.get("/", (req: Request, res: Response) => {
  res.send("🚀 SPU Member API is running!");
});


app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
