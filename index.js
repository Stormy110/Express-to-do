require('dotenv').config();

const http = require('http');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const morgan = require('morgan');
const helmet = require('helmet');
const bcrypt = require('bcryptjs');
const es6Renderer = require('express-es6-template-engine');

const session = require('express-session');
const FileStore = require('session-file-store')(session);

const { requireLogin } = require('./auth');

