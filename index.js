const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const startoonModel = require('./models/startoon');  // Existing model
const patientModel = require('./models/patient'); // New patient model

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/startoon", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000,
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("Failed to connect to MongoDB", err);
});

// Login route
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    startoonModel.findOne({ email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("SUCCESS");
                } else {
                    res.json("INCORRECT PASSWORD");
                }
            } else {
                res.json("NO RECORD EXISTS");
            }
        });
});

// Registration route
app.post('/register', (req, res) => {
    startoonModel.create(req.body)
        .then(startoon => res.json(startoon))
        .catch(err => {
            console.error("Error saving to MongoDB:", err);
            res.status(400).json(err);
        });
});

// New route for storing patient details
app.post('/home', (req, res) => {
    patientModel.create(req.body)
        .then(patient => res.json(startoon))
        .catch(err => {
            console.error("Error saving patient details:", err);
            res.status(400).json(err);
        });
});

// Start the server
app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
