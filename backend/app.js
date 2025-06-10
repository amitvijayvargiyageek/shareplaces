const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const placesRouter = require('./routes/places-routes');
const usersRouter = require('./routes/users-routes');
const HttpError = require('./models/http-error');

const app = express();

app.use(bodyParser.json());

app.use('/uploads/images', express.static(path.join('uploads', 'images')));
app.use(express.static(path.join('public')));

app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 
        'Origin, X-Request-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PATCH');
    next();
});

app.use("/api/places", placesRouter);
app.use("/api/users", usersRouter);

app.use((req, res, next) =>{
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.use((req, res, next)=>{
    const error = new HttpError('Could not find the route!', 404);
    throw error;
});

app.use((error, req, res, next)=>{
    if (req.file) {
    fs.unlink(req.file.path, err => {
      console.log(err);
    });
  }
    if(res.headerSent){
        return next(error);
    }
    res.status(error.code || 500);
    res.json({message: error.message || 'An unknown error occurred!'});
});


mongoose
.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@technogeekscluster.enbdjmm.mongodb.net/${process.env.DB_NAME}`)
.then(()=>{
    console.log('Application is running on port 5000');
    app.listen(5000);
}).catch((error)=>{
    console.error('Error while connecting with DB', error);
});