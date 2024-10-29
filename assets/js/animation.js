let startPage = bodymovin.loadAnimation({
  container: document.getElementById('startPage'),
  path: 'assets/json/startPage.json', // required
  renderer: 'svg', // required
  loop: true, // optional
  autoplay: true, // optional
  // name: "Feed Right", // optional

});
let doorLeft = bodymovin.loadAnimation({
  container: document.getElementById('doorLeft'),
  path: 'assets/json/doorLeft.json', // required
  renderer: 'svg', // required
  loop: false, // optional
  autoplay: false, // optional
  // name: "Feed Right", // optional
  initialSegment: [0, 1],

});
let starLeft = bodymovin.loadAnimation({
  container: document.getElementById('starLeft'),
  path: 'assets/json/starLeft.json', // required
  renderer: 'svg', // required
  loop: false, // optional
  autoplay: true, // optional
  // name: "Feed Right", // optional
  initialSegment: [0, 1],

});

