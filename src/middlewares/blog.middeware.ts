
import validateBlog from '../validations/BlogValid';
import  Express, { NextFunction }  from 'express';

const isValid =  (req: Express.Request, res: Express.Response, next:NextFunction) => {
  const { error } = validateBlog(req.body);

  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    next();
  } catch (error) {
    console.log('error', error);
  }
};

//module.exports = isValid;

export default isValid;