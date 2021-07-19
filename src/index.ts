import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import {testRouter} from "./routes/test.router";

dotenv.config();
if (!process.env.PORT) {
    console.error('It should have PORT ENV VAR in .env file');
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use('/api/ping', testRouter);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});