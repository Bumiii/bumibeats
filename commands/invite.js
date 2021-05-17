const discord = require("discord.js")

module.exports = {
    name: 'invite',
    description: "invite to the support server",
    execute(client, message, args, Discord){
        const embed = new discord.MessageEmbed()
        .setColor('#039154')
        .setTitle('The link below is the link to the BumiBot Support Server')
        .setDescription("https://discord.gg/jQ9Q4SJXXn :smile:\n**This server has all of BumiBot's commands and some help with BumiBot if you need it**");
        message.channel.send(embed);
        console.log("Command executed");
    }
}