const MONGO_PORT = 27017;
const MONGO_URL = 'localhost';
const dbName = 'crm';

const express = require('express');
const mongoose = require('mongoose');
const logger = require('winston');
const cors = require('cors');
const bodyParser = require('body-parser');
const loginController = require('./controllers/login.controller');
const proposalController = require('./controllers/proposal.controller');

mongoose.connect(
  `mongodb://${MONGO_URL}:${MONGO_PORT}/${dbName}`,
  { useNewUrlParser: true }
);

const PORT = 4000;
const app = express();

const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

router.post('/login', loginController);
router.post('/proposal', proposalController);

app.use('/', router);
app.listen({ port: PORT }, () => logger.info(`🚀 Server ready at http://localhost:4000`));
