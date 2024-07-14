var http = require('http');
var querystring=require('querystring');
var qs,name,email;
 http.createServer(function(req, res) {  
		var data1= '';
		
	req.on('data', function(chunk) {   
					console.log(chunk);
					data1 += chunk;  
					console.log("Data in String format: "+data1);
					});
	req.on('end', function() {
				console.log("Data: "+data1);
				
				qs=querystring.parse(data1);
				console.log(qs);

				name=qs['username'];
				email=qs['email'];
		        var phone=qs["phone"];
                var dob=qs["dob"];
	            res.write(`
            <html>
            <head>
                <title>Registration Success</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f5f5f5;
                        text-align: center;
                        padding: 50px;
                    }
                    .message {
                        background-color: #addfff;
                        padding: 20px;
                        border-radius: 5px;
                        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                        display: inline-block;
                    }
                </style>
            </head>
            <body>
                <div class="message">
                    <h2>Hello ${name},</h2>
                    <p>Your email id ${email} has been registered successfully.</p>
                    <p>Phone: ${phone}</p>
                    <p>Date of Birth: ${dob}</p>
                </div>
            </body>
            </html>
        `);
				res.end(); 
				});

	}).listen(5000);

console.log("Server started");