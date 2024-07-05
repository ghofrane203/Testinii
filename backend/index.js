const express = require('express')
const cors = require ('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const User = require('./models/User');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000;

//middleware
app.use(cors());
app.use(express.json());

//Routes
const availabilityRoutes = require('./routes/Routes');


const ACCESS_SECRET = process.env.ACCESS_SECRET;
app.use(bodyParser.json());

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@chat-app.qh9rrfu.mongodb.net/?appName=chat-app`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Successfully connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

connectToDatabase();

app.post('/register', async (req, res) => {
  const { username, email, password, age, phoneNumber } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const database = client.db('users');
    const collection = database.collection('users');

    console.log("Inserting user into the database:", { username, email, age, phoneNumber, password: hashedPassword });
    const result = await collection.insertOne({ username, email, age, phoneNumber, password: hashedPassword });

    console.log("Insertion result:", result);
    res.status(200).send('Inscription réussie !');
  } catch (error) {
    console.error('Erreur lors de l\'inscription :', error);
    res.status(500).send('Une erreur est survenue lors de l\'inscription.');
  }
});

app.get('/register', async (req, res) => {
  try {
    const database = client.db('users');
    const collection = database.collection('users');
    const result = await collection.find({}).toArray();
    res.status(200).json(result);
  } catch (error) {
    console.error('Erreur lors de la récupération des inscriptions :', error);
    res.status(500).send('Une erreur est survenue lors de la récupération des inscriptions.');
  }
});

app.get('/login', (req, res) => {
  res.send('Page de connexion');
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const userDatabase = client.db('users');
    const userCollection = userDatabase.collection('users');
    const user = await userCollection.findOne({ email });

    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.status(401).send('Email ou mot de passe incorrect');
    }

    const token = jwt.sign({ email: user.email, firstName: user.firstName, role: 'user' }, ACCESS_SECRET);
    res.status(200).json({ token, role: 'user' });
  } catch (error) {
    console.error('Erreur lors de la connexion :', error);
    res.status(500).send('Une erreur est survenue lors de la connexion.');
  }
});

app.get('/', (req, res) => {
  res.send('Hello ghafrounaaaa!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
