const messages = require('../messages/index');

const emptyValidator = (value) => {
    if (value === '') {
        return true;
    } else {
        return false;
    }
}

const emailValidator = (value) => {
    const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailRegExp.test(String(value).toLowerCase())) {
        console.log(messages, 'm');
        return messages.registration.email;
    } else {
        return false;
    }
}

const phoneNumberValidator = (value) => {
    const phoneNumberRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,6}$/im;
    const regExpWhiteSpaces = /\s/g;
    const phoneVal = value.replace(regExpWhiteSpaces, "")

    if (!phoneNumberRegExp.test(String(phoneVal).trim())) {
        return messages.registration.phone;
    } else {
        return false;
    }
}

const descriptionValidator = (value) => {
    if (value.length >= 256) {
        return messages.registration.description;
    } else {
        return false;
    }
}

const regulationsValidator = (value) => {
    if (!value) {
        return messages.registration.regulations;
    } else {
        return false;
    }
}

const submitRegistrationValidator = (data) => {
    const dataKeys = Object.keys(data);
    let status = {};
    dataKeys.forEach(key => {
        switch (key) {
            case 'email':
                if (emptyValidator(data[key])) {
                    status[key] = emptyValidator(data[key])
                    break;
                } else {
                    if (emailValidator(data[key])) {
                        status[key] = emailValidator(data[key])
                    }
                    break;
                }
            case 'description':
                if (emptyValidator(data[key])) {
                    status[key] = emptyValidator(data[key])
                    break;
                } else {
                    if (descriptionValidator(data[key])) {
                        status[key] = descriptionValidator(data[key])
                    }
                    break;
                }                
            case 'number':
                if (emptyValidator(data[key])) {
                    status[key] = emptyValidator(data[key])
                    break;
                } else {
                    if (phoneNumberValidator(data[key])) {
                        status[key] = phoneNumberValidator(data[key])
                    }
                    break;
                }  
            case 'surname': 
                if (emptyValidator(data[key])) {
                    status[key] = emptyValidator(data[key])
                }
                break;
            case 'regulations':
                if (regulationsValidator(data[key])) {
                    status[key] = regulationsValidator(data[key])
                } 
                break;
            default:
              status[key] = messages.registration.general;
        }
    })

    return status;
}


module.exports = {
    validator: submitRegistrationValidator
}