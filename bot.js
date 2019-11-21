const TelegramBot = require('node-telegram-bot-api');
const config = require('./config');
const ads = require('./ads.json');
let group = -100320302; // this is your group ID for the bot

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(config.telegramKey, {polling: true});

let adCounter = 0;
let totalAds = ads.ads.length;

let rules = "Your groups rules here";
let vendors = "Your group vendors here";
let about = "About your group";
let verify = "Message about how to get verified";
let food = "Food Vendors";
let warningMsg = "Warning message about rules";
let admins = "Group admins here";

bot.onText(/\/rules/i, (msg, match) => {
  bot.deleteMessage(meccaGroup, msg.message_id);
  bot.sendMessage(msg.chat.id, rules);
});

bot.onText(/\/admin/, (msg, match) => {
  bot.deleteMessage(meccaGroup, msg.message_id);
  bot.sendMessage(msg.chat.id, admins);
});

bot.onText(/\/vendors/, (msg, match) => {
  bot.deleteMessage(meccaGroup, msg.message_id);
  bot.sendMessage(msg.chat.id, vendors);
});

bot.onText(/\/verify/, (msg, match) => {
  bot.deleteMessage(meccaGroup, msg.message_id);
  bot.sendMessage(msg.chat.id, verify);
});

bot.onText(/\/about/, (msg, match) => {
  bot.deleteMessage(meccaGroup, msg.message_id);
  bot.sendMessage(msg.chat.id, about);
});

bot.onText(/\/food/, (msg, match) => {
  bot.deleteMessage(meccaGroup, msg.message_id);
  bot.sendMessage(msg.chat.id, food);
});

bot.on('message', (msg) => {
  console.dir(msg);
  const chatId = msg.chat.id;
});

function sendAd() {
  // Get a random add
  groups.forEach(function(groupId) {
    let r = Math.floor((Math.random() * totalAds));
    bot.sendMessage(groupId, ads.ads[r]);
  });

  // Example below is show each ad in order instead of random
  //if(adCounter == totalAds) {
  //  adCounter = 0;
  //} else {
  //  adCounter++;
  //}
}

function sendInfo() {
  groups.forEach(function(groupId) {
    bot.sendMessage(groupId, warningMsg);
  });
}

// One interval to send an ad and another to send general info
setInterval(sendAd, 1000 * 60 * 60 * 6);
setInterval(sendInfo, 1000 * 60 * 60 * 12.5);
