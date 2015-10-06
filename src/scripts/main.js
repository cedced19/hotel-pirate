// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
  greeny = require('bespoke-theme-greeny'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  hash = require('bespoke-hash'),
  progress = require('bespoke-progress'),
  state = require('bespoke-state'),
  nebula = require('bespoke-theme-nebula'),
  forms = require('bespoke-forms'),
  backdrop = require('bespoke-backdrop');

// Bespoke.js
bespoke.from('article', [
  nebula(),
  greeny.scale(),
  keys(),
  touch(),
  bullets('li, .bullet'),
  hash(),
  progress(),
  state(),
  forms(),
  backdrop()
]).on('activate', function (event) {
    if (event.index == 1 || event.index == 17) {
      document.getElementById('music').play();
    } else {
      document.getElementById('music').pause();
      document.getElementById('music').currentTime = 0;
    }
});
