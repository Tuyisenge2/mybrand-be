import express from 'express';

import BlogRoutes from './routes';

import comRouter from './comment.routes';

import QuerriesRouter from './querries.routes';
import likeRout from './like.routet';

import userRout from './user.route';

const apiRouter = express.Router();

apiRouter.use('/blogs', BlogRoutes);

apiRouter.use('/blogs', comRouter);

apiRouter.use('/blogs', QuerriesRouter);

apiRouter.use('/blogs',likeRout)

apiRouter.use('/users',userRout)

export default apiRouter;
