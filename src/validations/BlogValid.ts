import Joi from 'joi';

const BlogScheme = Joi.object({
  title: Joi.string().required(),
  summary: Joi.string().required(),
  description: Joi.string().required(),
});

const validateBlog = (blog:string) => {
  return BlogScheme.validate(blog);
 };

//module.exports = validateBlog;

export default validateBlog;