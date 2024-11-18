const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_20_11_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAzNCxcbiAgICAgICAgNTksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzLFxuICAgICAgICA3MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzYsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzksXG4gICAgICAgIDExMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwLFxuICAgICAgICA5OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTg3LFxuICAgICAgICAxODgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODcsXG4gICAgICAgIDEyLFxuICAgICAgICA0OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTA1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzLFxuICAgICAgICA1NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxLFxuICAgICAgICA5NixcbiAgICAgICAgNDAsXG4gICAgICAgIDgwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDcxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTczLFxuICAgICAgICAzNixcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDM1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTM0LFxuICAgICAgICA4MixcbiAgICAgICAgODUsXG4gICAgICAgIDAsXG4gICAgICAgIDIwNixcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICA2MixcbiAgICAgICAgMTYsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDk5LFxuICAgICAgICA2NixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDg5LFxuICAgICAgICAxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDI4LFxuICAgICAgICA0OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODksXG4gICAgICAgIDU4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMixcbiAgICAgICAgMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2NixcbiAgICAgICAgMTkxLFxuICAgICAgICA0MixcbiAgICAgICAgMjMxLFxuICAgICAgICA3MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDc0LFxuICAgICAgICA2NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTAwLFxuICAgICAgICA0MixcbiAgICAgICAgMjE5LFxuICAgICAgICAxODQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTc0LFxuICAgICAgICA5MSxcbiAgICAgICAgODMsXG4gICAgICAgIDM4LFxuICAgICAgICAzNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDY1LFxuICAgICAgICAyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDksXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTcyLFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVS9MV25VT1Jjb1JpdjVXUU50cHY2dGVsR0IyOXpuTWY3TnFmR0o4OGhMaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3NDA2NzQyOTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjVBMDEyNDlENjM0MTY3RTExMDU4N0UxMUNBNDlCRjFGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMTkyODgwOFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDc0MDY3NDI5MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNzM0MkM4RkZCOEY5NUNCQkRCODMxRTE1RjI5NTRGN0VcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMxOTI4ODA4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkt2VUFYYzVjU011V2F4YzNJNkRvcWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTdlOTY1MTAtMWM4OS00MjU4LWI0NGItMzBhMmIzN2Q4MTUyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1OSxcbiAgICAgIDkwLFxuICAgICAgMjU0LFxuICAgICAgMTU2LFxuICAgICAgMjE1LFxuICAgICAgMTkxLFxuICAgICAgMTY2LFxuICAgICAgMjcsXG4gICAgICAxMTYsXG4gICAgICA4MyxcbiAgICAgIDEwMCxcbiAgICAgIDE2NyxcbiAgICAgIDE2OCxcbiAgICAgIDE5NixcbiAgICAgIDIxMixcbiAgICAgIDEyNixcbiAgICAgIDIzMSxcbiAgICAgIDQ0LFxuICAgICAgNSxcbiAgICAgIDE3MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NCxcbiAgICAgIDE0MyxcbiAgICAgIDI3LFxuICAgICAgODcsXG4gICAgICAyMTUsXG4gICAgICAyNDcsXG4gICAgICA2OSxcbiAgICAgIDE4OCxcbiAgICAgIDE3NyxcbiAgICAgIDQ2LFxuICAgICAgMTI0LFxuICAgICAgMTAxLFxuICAgICAgNjcsXG4gICAgICAxMDcsXG4gICAgICA0NyxcbiAgICAgIDczLFxuICAgICAgNjQsXG4gICAgICAxNDQsXG4gICAgICAxODIsXG4gICAgICAxMTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiS0xEQzFHR0ZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc0MDY3NDI5MToxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcImZyaW5nXCIsXG4gICAgXCJsaWRcIjogXCIyNDE1MzE5NDg2MzQzMTY6MTZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUENZeHRnRkVPSEY3TGtHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJXZCtTRHY1YkprVENweXp4WGRldTkxdWpmZllMbDFtT2wrSkI4cElndWhRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjR3OHJvWVpvck45dzR4SWNSaC9PNXR5aHNFcm5JNEVGTGVPQndUdW1hRkQyY2NmL3hCa1FicnlNb2REb2RYV2NFV2NwVU5zL1FvQ0VnT2J3dWZJNUNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlljTGI2N1dQVTVnTFlzQjBoQ2pPbnVVOVc4ekw2L29tN0RNZzhXeW5Wa2w0RjdtOHdWTGQ4V0Y0WkRVMzQ3ejFMbVBadzFWaW5xRUYwNmVWb2pmY0R3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc0MDY3NDI5MToxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxOTI4ODA1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUHhHXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQeEcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI5T2FoUDFjYTFFZEQ2N3hWcjhnKzJnSFdrVXlIbXR4NExIQmZvcGVwNUxjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1Mjc4NzY3MjAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMTkyODgwNzE0MFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
