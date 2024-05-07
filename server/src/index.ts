import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from 'body-parser';
import cors from 'cors';

dotenv.config();

const app: Express = express();
const PORT = process.env.SERVER_PORT;

// const whitelist = [`${process.env.BASE_URL}:${process.env.CLIENT_PORT}`];

// const corsOptions = {
//     origin: (origin: any, callback: any) => {
//         if(whitelist.indexOf(origin) !== -1) {
//             callback(null, true);
//         } else {
//             callback(new Error('Not allowed by CORS'));
//         }
//     }
// };

// app.use(cors(corsOptions));

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