require('dotenv').config();
const nodemailer = require('nodemailer');
const log = console.log;


const sendMail = (data) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'test5002035@gmail.com', // TODO: your gmail account
            pass: process.env.PASSWORD // TODO: your gmail password
        }
    });

    const mailData = {
        from: 'test5002035@gmail.com', // TODO: email sender
        to: 'votex999@gmail.com', // TODO: email receiver
        subject: `Registration ${data.email}`,
        text: `
            Surname: ${data.surname}
            Email: ${data.email}
            Number: ${data.number}
            Description: ${data.description}
            Regulations: ${data.regulations}
        `
    };

    transporter.sendMail(mailData, (err, data) => {
        if (err) {
            return log('Error occurs');
        }
        return log('Email sent!!!');
    });
}

module.exports = {
    sendMail: sendMail,
}