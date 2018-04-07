var Pusher = require('pusher');

var pusher = new Pusher({
  appId: '505107',
  key: '87236f1bc800c2d7a718',
  secret: '6d850011096f9a0eea96',
  host: 'api.pusherapp.com',
  encrypted: true
});

pusher.trigger('my-channel', 'my-event', {
  "message": "Welcome to BitCamp"
});