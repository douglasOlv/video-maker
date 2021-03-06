const robots = {
  input: require('./robots/input'),
  text: require('./robots/text'),
  image: require('./robots/image'),
  video: require('./robots/video'),
  youtube: require('./robots/youtube'),
};
const state = require('./robots/state');

async function start() {
  robots.input();
  await robots.text();
  await robots.image();
  await robots.video();
  await robots.youtube();

  const content = state.load();
  console.dir(content, { depth: null });
}

start();
