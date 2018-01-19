module.exports = msg => {
  // msg.reply('You searched for something!');
  const content = msg.content;
  const matches = content.match(/^!(?:\S*?)\s(.*?)$/);

  if (matches && matches.length >= 2) {
    const query = matches[1];

    msg.reply(`You searched for '${query}'!`);
  }

}