let fs = require('fs')
let tum = fs.readFileSync('./src/Ah5.jpeg')
let tum2 = fs.readFileSync('./src/emror.jpeg')
global.owner = ['62895603352610'] // Put your number here
global.mods = ['62895603352610'] // Want some help?
global.prems = ['62895603352610','6285893120588','6285656615441'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com', 
  Dehan: 'https://dhnjing.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': '879aaf8cc437fcb4',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://dhnjing.xyz': 'LitRHap'
}

// Sticker WM
global.packname = 'I hope you\'re fine'
global.author = 'LitRHap'
//Thumbnail
global.thumb = tum
global.thumb2 = tum2
global.multiplier = 69 // The higher, The harder levelup

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
