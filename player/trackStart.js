module.exports = (client, message, track) => {
    message.channel.send(`${client.emotes.music} - Lecture en cours ${track.title} into ${message.member.voice.channel.name} ...`);
};