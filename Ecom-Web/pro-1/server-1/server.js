const nodemailer = require('nodemailer');

let mailTransporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'nflsaurabhkumar@gmail.com',
		pass: "ngqgbjizoztfgybr"
	},
    tls:{
        "rejectUnauthorized":false
    },
   
});

let mailDetails = {
	from: 'nflsaurabhkumar@gmail.com',
	to: 'nflsaurabhkumar@gmail.com',
	subject: 'Test mail',
	text: 'Node.js testing mail for GeeksforGeeks'
};

mailTransporter.sendMail(mailDetails, function(err, data) {
	if(err) {
		console.log('Error Occurs',err);
	} else {
		console.log('Email sent successfully');
	}
});


// ngqgbjizoztfgybr
