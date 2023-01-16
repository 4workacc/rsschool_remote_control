// const { mouse, Point } = require("@nut-tree/nut-js");

// (async () => {
//     const target = new Point(500, 350);
//     await mouse.setPosition(target);
// })();

import WebSocket from 'ws';

const ws = new WebSocket('ws://localhost', {
  perMessageDeflate: false
});
ws.on('open', function open() {
    ws.send('something');
  });