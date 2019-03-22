
const Validator = require('validator');
const isEmpty = require('./is-empty');

class ValidationAuth{
     ValidationLogin (data){
        let errors = {
        }
        data.nrp = !isEmpty(data.nrp) ? data.nrp : '';
        if (Validator.isEmpty(data.nrp.toString())) errors.nrp = 'Must be provided';
        data.kodePIN = !isEmpty(data.kodePIN) ? data.kodePIN : '';
        if (Validator.isEmpty(data.kodePIN.toString())) errors.kodePIN = 'Must be provided';

        return {
            errors,
            isValid: isEmpty(errors)
        }
    }
  




}
 


module.exports = new ValidationAuth();