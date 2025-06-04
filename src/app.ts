/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';

const app: Application = express();

//server site
app.use(  
  cors({
    origin:
      // 'http://localhost:5173',
    'https://look-at-me-client.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],

    credentials: true,
  }),
);
app.use(express.json());

// application routes
app.use('/api', router);

const test = async (req: Request, res: Response) => {
  const a = 10;
  res.send({ a });
};

app.get('/', test);

app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
