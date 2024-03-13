import express from 'express';

import BlogRoutes from './routes';

const apiRouter = express.Router();

apiRouter.use('/Blogs', BlogRoutes);

//module.exports = apiRouter;

export default apiRouter;