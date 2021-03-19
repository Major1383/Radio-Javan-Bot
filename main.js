const Discord = require('discord.js');
//const ffmpeg = require("ffmpeg-binaries");
//const opusscript = require("opusscript");
const Major = new Discord.Client({ ws: { properties: { $browser: "Discord iOS" }} });

Major.on('ready', async () => {
    Major.user.setActivity(`Radio `, { type: 'LISTENING' });
    console.log(`Logged in as ${Major.user.tag}!`);
    const chid = "ChannelID"
    const ch = Major.channels.cache.get(chid)
    const connection = await ch.join();
    const broadcast = Major.voice.createBroadcast();
    broadcast.play("http://stream.radiojavan.com/radiojavan");
    connection.play(broadcast);
});
Major.login("Your Token");