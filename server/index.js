const express = require('express');
const app = express();
const PORT=5000 | process.env.PORT 
const greetings = require('./data.json');


app.get('/', (req, res) => {
    res.send("Welcome to the Hello World API.");
});
app.get('/hello', (req, res) => {
    const language = req.query.language
    if (greetings[language]) {
        const responseObject = {
            msgText: greetings[language]
        };
        res.json(responseObject.msgText);
        
    } else {
        const errorObject = {
            error_message: "The requested language is not supported"
        };
        res.status(400).json(errorObject);
    }
});

app.listen(5000, () => {

    console.log(`Server is running on port ${PORT}`);
});
