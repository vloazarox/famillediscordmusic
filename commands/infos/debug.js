module.exports = {
    name: 'debug',
    aliases: [],
    category: 'Infos',
    utilisation: '{!p}debug',

    execute(client, message) {
        message.channel.send(`${client.emotes.success} - ${client.user.username} connecté **${client.voice.connections.size}** channels !`);
    },
};