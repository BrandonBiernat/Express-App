import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from 'body-parser';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

require('./routes/api')(app);

app.listen(PORT, () => {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds();
    console.log(`${hour}:${minute}:${second} [server]: Server is running at ${process.env.BASE_URL}:${PORT}`);
});

app.get('/', async (req: Request, res: Response) => {
    res.send('TypeScript + Express Server');
});