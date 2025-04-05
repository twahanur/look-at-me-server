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
      // 'https://65ffea1cd6876bb32c022add--sweet-cajeta-99b5a4.netlify.app',
    'https://look-at-me-server.vercel.app',
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
