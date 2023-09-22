const nodemailer = require("nodemailer");

const getContact = (req, res) => {
    res.render('contact', {
        title: "Contact Me",
        css: ["contact"]
    });
}

const postContact = (req, res) => {
    let transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: process.env.MAIL_SECURE,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    });

    transporter.sendMail({
        from: "*@olliewells.co.uk",
        to: "contact@olliewells.co.uk",
        subject: req.body.service + " Enquiry",
        text: `Full Name: 	${req.body.fullName} \n Phone Number 	${req.body.phoneNumber} \n Email Address 	${req.body.emailAddress} \n Referer 	${req.body.referer} \n Project Description 	${req.body.projectDescription} \n Budget 	${req.body.budget}`,
        html: "<!DOCTYPE html><html 4email><head><style>    #customers {      font-family: Arial, Helvetica, sans-serif;      border-collapse: collapse;      width: 100%;    }    #customers td,    #customers th {      border: 1px solid #ddd;      padding: 8px;    }    #customers tr:nth-child(even) {      background-color: #f2f2f2;    }    #customers tr:hover {      background-color: #ddd;      font-size: 18px;    }  </style></head><body>  <table id='customers'>    <tr>      <td>Full Name: </td>      <td>" + req.body.fullName + "</td>    </tr>    <tr>      <td>Phone Number</td>      <td>" + req.body.phoneNumber + "</td>    </tr>    <tr>      <td>Email Address</td>      <td>" + req.body.emailAddress + "</td>    </tr>    <tr>      <td>Referer</td>      <td>" + req.body.referer + "</td>    </tr>    <tr>      <td>Project Description</td>      <td>" + req.body.projectDescription + "</td>    </tr>    <tr>      <td>Budget</td>      <td>" + req.body.budget + "</td>    </tr>  </table></body></html>"
    }).then(result => {
        res.render('contactComplete', {
            title: "Success!",
            css: ["contactComplete"]
        });
    }).catch(err => console.log(err));
}

// export functions to be used in router
module.exports = {
    getContact,
    postContact
};