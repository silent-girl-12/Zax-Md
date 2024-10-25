const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "zaxmd001@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dodoma";
global.github = process.env.GITHUB || "https://github.com/Xiangzaoh/Zax-Md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaZlD9sHltY52Bg1Vy2k";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaZlD9sHltY52Bg1Vy2k";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://iili.io/JgAR7WJ.jpg";
global.devs = "255688930205";
global.sudo = process.env.SUDO || "255688930205";
global.owner = process.env.OWNER_NUMBER || "223237045919";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://zax-md-beae6ed77007.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "ZAX;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUlEbVpuVXpDalk1MU1INnVpanN1UmQ2dFczdjVBc0t3WEhhWWRlZERGVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTGtlYXpMWVJndlJkb1Y5cEtZSldjQmg1aGI5VDNPeFpmbE9meFZDT014Yz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlSkZoQkRRU0RUNWRsNndpSEN5eWVseS9qWUdqUjYxUTVSSm9DMC8vODBNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYSVMzeStzenlQSjE2d2ZRcHNseWdVR3JSM0Z0WWdlWTF0WURCYk8zM3d3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVFQ1B0VVdEWlJldTh0ZTIvMHdJNU9RdjJYcVROek1yQVd6Q3FDVzhkRkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNxOEJmeGxwNmdZNENNYWJUc0s5SzRYNHRwRjFMY0ZycW5lYjZIbTFvdzQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU09NbDZ2ODhwZ1ZCckoydkJGT2owSUFIVGtEMEVhL2Z4NTBTVzhZZ1EyVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaWJ6UlpPVWwrd1JEd3RLWmN2VWVueldkVGExK2ptdWMxeUEvb244MTkzZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZxV1FCbzlGUFFPMG1LOWVFVlJrY0tadjBsNXJOc21pc01kSk9Ud3dQY01WM0hEdWNGUjZVUTQ1OUdqaHhvbjNJZlJJY0dNdmllU0tYcUZuZzNlV0RBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTczLCJhZHZTZWNyZXRLZXkiOiJ1UGhLbHdpbU1GbGtHSHJKSnNUSDdDZHY4V2lNQk1pWHkyNmZITE5xUVRrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI2T0pncjNEZVNPR2ZmWFVZcVA1eHFBIiwicGhvbmVJZCI6IjczNGRhNDAzLTljOTEtNDIyYi05YWMyLTQ3OWRmZDVmN2U2ZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1S3FaZ01HR3d2YlhkVVQvN2R2SldacU42VVk9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imt0RldpK0hJTnJYZXI5N2MvY0tXWmtvQ0ZZUT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0p5YXpMQUZFS0xQNzdnR0dDa2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InF1WlpDN3drUnNyZGdyRCtrSTdObzhkWVVSUmpac2RseDFocGxmVGxuQnM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IktRanlZRzZzbTY0by9YZGtkWHYrS21YWHFyL3VWeFN6QTIxZGN6VTd5WmJFNCtJRkx3dlFSSWlvVmE2RDlWbEVXVGMzZGg2Z0RBRTQyWEowcU40eEFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ5MGRGL0FoVkhreFlxc2FyNk9WbGZaVmhlQWRodnBFM2IvbE5od3U4YjNtQ1FZVzB4YXdaREhnU1c2S1ZvYXN0Rldxbmlpc3NjWTAzdElwUFBWdXlBdz09In0sIm1lIjp7ImlkIjoiOTIzMjM3MDQ1OTE5OjQwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkFyc2xhbk1EIOKImiJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMyMzcwNDU5MTk6NDBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYXJtV1F1OEpFYkszWUt3L3BDT3phUEhXRkVVWTJiSFpjZFlhWlgwNVp3YiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyOTg4MjAzMH0=";

module.exports = {
  menu: process.env.MENU || "menu1",
  HANDLERS: process.env.PREFIX || ".,",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©zᴀxᴍᴅ",
  author: process.env.PACK_AUTHER || "Arslan-MD",
  packname: process.env.PACK_NAME || "Arslan-bot",
  botname: process.env.BOT_NAME || "ArslanMD",
  ownername: process.env.OWNER_NAME || "MrArslanMD",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "zᴀx").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
