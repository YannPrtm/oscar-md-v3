let fs = require('fs') 
let chalk = require('chalk')

global.owner = [
  ['6282252285143'],
  ['6282350496532'],
  ['6282252285143', 'Owner [𝑅𝑦𝑎𝑛𝑛]', true]
  // [number, dia creator/owner?, dia developer?]
] // Put your number here
global.fotonya1 = 'https://telegra.ph/file/ba714f910924968498e37.jpg' //ini kalo mau di ganti silahkan ganti aja
global.fotonya2 = 'https://telegra.ph/file/6e3308f9db25bf7ab2b58.jpg' //gw lupa nih foto apa aja:v
global.fotonya3 = 'https://telegra.ph/file/6e3308f9db25bf7ab2b58.jpg' //ini juga ganti
global.fotonya4 = 'https://telegra.ph/file/ba714f910924968498e37.jpg' //ini juga ganti
global.fotonya5 = 'https://telegra.ph/file/1ea8e058b844a001f9f42.jpg' //ini juga ganti
global.fotonya6 = 'https://telegra.ph/file/6197d51ca38635ac0fbeb.jpg' //ini ganti pakai foto sosialmedia mu
global.fotonya7 = 'https://telegra.ph/file/6197d51ca38635ac0fbeb.jpg]'
global.instagram = 'https://instagram.com/yannxdimm'
global.dana = '082350496532'
global.saweria = 'https://saweria.co/jbyannstore'
global.pulsa = '082252285143'
global.yt = 'https://youtube.com/channel/'
global.mods = [] // Want some help?
global.price1 = '1 𝘔𝘪𝘯𝘨𝘨𝘶 : 2𝘬\n1 𝘉𝘶𝘭𝘢𝘯 : 5𝘬\n2 𝘉𝘶𝘭𝘢𝘯 : 7𝘬\n3 𝘉𝘶𝘭𝘢𝘯 : 10𝘬'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.prems = [] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  bcil: 'https://75.119.137.248:21587',
  neoxr: 'https://api.neoxr.eu.org/',
  zeks: 'https://api.zeks.me',
  gimez: 'https://masgimenz.my.id/',
  melcanz: 'https://melcanz.com',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  restapi: 'https://x-restapi.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'apikeyaine',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.neoxr.eu.org/': 'jVEMyB2ITJ',
  'https://api.zeks.me': 'apikeyaine',
  'https://pencarikode.xyz': 'pais',
  'https://melcanz.com': 'ZZBk7EBb',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://x-restapi.herokuapp.com': 'BETA'
}

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

const spack = fs.readFileSync("lib/exif.json")
const stickerpack = JSON.parse(spack)
if (stickerpack.spackname == '') {
  var sticker_name = '@𝐎𝐒𝐂𝐀𝐑-𝐌𝐃'
  var sticker_author = '𝐎𝐬𝐜𝐚𝐫'
} else {
  var sticker_name = stickerpack.spackname
  var sticker_author = stickerpack.sauthor
}

const file_exif = "lib/exif.json"
fs.watchFile(file_exif, () => {
  fs.unwatchFile(file_exif)
  console.log(chalk.redBright("Update 'exif.json'"))
  delete require.cache[file_exif]
  require('./lib/exif.json')
})

// Sticker WM
global.packname = sticker_name
global.author = sticker_author
global.wm = '𝘠𝘢𝘯𝘯 𝘉𝘰𝘵𝘻 𝘔𝘋'

global.anu = 'https://telegra.ph/file/ba714f910924968498e37.jpg'

global.multiplier = 1000 // The higher, The harder levelup

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐎',
      cat: '🐈' ,
      dog: '🐕',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
