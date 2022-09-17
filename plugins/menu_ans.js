const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let owner = 6282252285143
let wa = '0'
let handler = async (m) => {
let jarot = `
*Hai kak @${m.sender.split('@')[0]} 👋*
	`.trim()
  let message = await prepareWAMessageMedia({ image: await (await require('node-fetch')(fotonya5)).buffer()}, { upload: conn.waUploadToServer }) 
    const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: jarot,
                imageMessage: message.imageMessage, 
           hydratedFooterText: '📮Note : HALO  SAYA 𝘠𝘢𝘯𝘯𝘉𝘰𝘵-𝘔𝘋, JIKA KAMU MENGGUNAKAN WA LAMA ATAU WA MOD, DAN BUTTON TIDAK KELIATAN, LANGSUNG AJA KETIK .allmenu',
           hydratedButtons: [{
             urlButton: {
               displayText: '𝘎𝘙𝘖𝘜𝘗 𝘉𝘖𝘛',
               url: 'https://chat.whatsapp.com/Bj6feBDxWtPDOkM0tYkqFG'
             }

           },
                {
               urlButton: {
               displayText: '𝘞𝘏𝘈𝘛𝘚𝘈𝘗𝘗 𝘋𝘌𝘝',
               url: 'https://wa.me/6282252281543'
             }

           },
               {
             quickReplyButton: {
               displayText: '𝘚𝘦𝘸𝘢 𝘉𝘰𝘵 🚀',
               id: '.sewabot',
             }
             
           },
               {
             quickReplyButton: {
               displayText: '𝘚𝘤𝘳𝘪𝘱𝘵 🎗️',
               id: '.sc',
             }
             
             },
               {
             quickReplyButton: {
               displayText: '𝘓𝘪𝘴𝘵 𝘊𝘰𝘮𝘮𝘢𝘯𝘥📖',
               id: '.allmenu',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.tags = ['main', 'info']
handler.customPrefix = /^(menu|help|.menu|.help)$/i
handler.help = ['.menu']
handler.command = new RegExp

module.exports = handler
