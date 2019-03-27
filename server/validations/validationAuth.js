
const Validator = require('validator');
const isEmpty = require('./is-empty');

class ValidationAuth{
     ValidationLogin (data){
        let errors = {
        }
        data.username = !isEmpty(data.username) ? data.username : '';
        if (Validator.isEmpty(data.username.toString())) errors.username = 'Must be provided';
        data.password = !isEmpty(data.password) ? data.password : '';
        if (Validator.isEmpty(data.password.toString())) errors.password = 'Must be provided';

        return {
            errors,
            isValid: isEmpty(errors)
        }
    }
  




}
 


module.exports = new ValidationAuth();