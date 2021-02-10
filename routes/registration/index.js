const paths = require('./path');
const mailService = require('../../services/mails');
const registrationValidator = require('../../utils/validators/registration');

const registrationController = (app) => {

    app.get(paths.registerPath, (req, res) => {
        res.send('Hellooo');
    });

    app.post(paths.registerPath, (req, res) => {
        if (req.header('content-type')) {
            const data = req.body;
            const validationData = registrationValidator.validator(data);
            if (Object.keys(validationData).length <= 0) {
                mailService.sendMail(data);
                res.send(JSON.stringify({ message: "Pomyślnie wysłano email", }))
            } else {
                res.status(400);
                res.send(JSON.stringify(validationData));
            }
        }
    })
}

module.exports = {
    main: registrationController
};