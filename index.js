const readline = require('readline-sync');
const robots = {
  text: require('./robots/text'),
};

async function start() {
  const content = {
    maximumSentences: 7,
  };

  content.searchTerm = askAndReturnSearchTerm();
  content.prefix = askAndReturnPrefix();

  await robots.text(content);

  function askAndReturnSearchTerm() {
    return readline.question('Type a Wikipedia search term:  ');
  }
  function askAndReturnPrefix() {
    const prefix = ['who is', 'What is', 'The history of'];
    const selectedPrefixIndex = readline.keyInSelect(prefix);
    const selectedPrefixText = prefix[selectedPrefixIndex];
    return selectedPrefixText;
  }
  console.log(JSON.stringify(content, null, 2));
}

start();
