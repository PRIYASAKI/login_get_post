const http = require('http');
const url = require('url');
const querystring = require('querystring');

function sam(request, response) {  
    if (request.url.includes("/login")) {
        console.log('URL ' + request.url + ' received.');

        var path = url.parse(request.url).pathname;
        console.log('Request for ' + path + ' received.');

        var query = url.parse(request.url).query;
        console.log("QUERY IS:");
        console.log(query);

        const qs = querystring.parse(query);
        console.log("QS IS:");
        console.log(qs);

        const name = qs["username"];
        const email = qs["email"];
        const phone = qs["phone"];
        const dob = qs["dob"];

        // Sending HTML response with inline CSS styles
        response.write(`
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

        response.end();
    } else {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.write('Invalid Request');
        response.end();
    }
}

http.createServer(sam).listen(4000);
console.log('Server has Started…….');
