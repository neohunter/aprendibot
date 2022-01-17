const bedrock = require('bedrock-protocol')
const bot = bedrock.createClient({
  host: 'play.lbsg.net', // minecraft server ip
  port: 19132,         // optional, default 19132
  username: 'manolet@gmail.com', // minecraft username
  offline: false       // optional, default false. if true, do not login with Xbox Live. You will not be asked to sign-in if set to true.
})

bot.on('text', (packet) => { // Listen for chat messages and echo them back.
  if (packet.source_name != bot.options.username) {
    // bot.queue('text', {
    //   type: 'chat', needs_translation: false, source_name: bot.username, xuid: '', platform_chat_id: '',
    //   message: `${packet.source_name} said: ${packet.message} on ${new Date().toLocaleString()}`
    // })
  }
  console.log(`${packet.source_name} said: ${packet.message} on ${new Date().toLocaleString()}`)
})
// process.env.DEBUG = 'minecraft-protocol'
// const mineflayer = require('mineflayer')

// const bot = mineflayer.createBot({
//   host: 'play.lbsg.net', // minecraft server ip
//   username: 'manolet@gmail.com', // minecraft username
//   // password: '', // minecraft password, comment out if you want to log into online-mode=false servers
//   port: 19132,                // only set if you need a port that isn't 25565
//   // version: false,             // only set if you need a specific version or snapshot (ie: "1.8.9" or "1.16.5"), otherwise it's set automatically
//   auth: 'microsoft',              // only set if you need microsoft auth, then set this to 'microsoft'
//   verbose: true
// })

bot.on('chat', (username, message) => {
  if (username === bot.username) return
  // bot.chat(message)
  console.log(message)
})

// Log errors and kick reasons:
bot.on('kicked', console.log)
bot.on('error', console.log)

