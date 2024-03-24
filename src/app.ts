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
    origin: 'http://localhost:5173',
    // 'https://65f2d3f8ad34feb2a9b485bf--classy-paprenjak-c3bbfb.netlify.app',
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
