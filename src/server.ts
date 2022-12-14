import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import routes from './routes/routes';
import { AppDataSource } from './database/data-source';
import Errors from './middlewares/Erros';


AppDataSource.initialize().then(() => {
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use(routes);
    app.use(Errors);
    const port = process.env.PORT || 4000;

    app.listen(port, () => {
        console.log(`server is running in port ${port}.`);
    })
})