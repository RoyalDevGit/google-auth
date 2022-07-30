import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { GoogleAuth } from 'google-auth-library';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

mongoose.connect(`${process.env.MONGO_URI}`);

const db = mongoose.connection;
db.once("open", () => console.log('Connected to MongoDB.'));
db.on("error", (err) => console.log(err));

app.listen(PORT, (err) => {
  if (!err) {
    console.log('server is running on port ', PORT);
  } 
})