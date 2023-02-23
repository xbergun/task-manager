import bcrypt from 'bcryptjs';
const validateUserInput =(email,password) =>{
    return email && password;
}

const comparePasswords = (password, hashedPassword) => {
    return bcrypt.compareSync(password, hashedPassword);
};
export  {validateUserInput, comparePasswords};