import express from 'express'
import { Router, Request, Response } from 'express';
import { Bill } from './vindi/interface';
import { VindiService } from './vindi/service';

const app = express();
const route = Router()
app.use(express.json())

const parsedJSON: Bill[] = require('./import.json');
const vindi = new VindiService();
parsedJSON.map(item => {
  vindi.Post(item);
})

app.listen(3333, () => 'server running on port 3333')
