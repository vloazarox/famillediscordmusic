module.exports = {
    name: 'ping',
    aliases: [],
    category: 'Infos',
    utilisation: '{!p}ping',

    execute(client, message) {
        message.channel.send(`${client.emotes.success} - Ping : **${client.ws.ping}ms** !`);
    },
};