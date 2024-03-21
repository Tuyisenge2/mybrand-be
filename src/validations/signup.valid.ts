import Joi from 'joi';

const Signupvalid = Joi.object({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$'))
            .message('Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one number')
            .required(),
    dateOfBirth: Joi.string().required(),
    gender: Joi.string().valid('male', 'female', 'other').required(),
    Role:Joi.string()
});

const validateSignup = (user:any) => {
    return Signupvalid.validate(user);
};

export default validateSignup;
