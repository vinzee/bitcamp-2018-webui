module.exports = {
  "session": {
    "new": true,
    "sessionId": "amzn1.echo-api.session.[unique-value-here]",
    "attributes": {},
    "user": {
      "userId": "amzn1.ask.account.[unique-value-here]"
    },
    "application": {
      "applicationId": 'amzn1.ask.skill.01c35512-6c67-4bb7-8914-8602ada00d60'
    }
  },
  "version": "1.0",
  "request": {
    "locale": "en-US",
    "timestamp": "2016-10-27T18:21:44Z",
    "type": "LaunchRequest",
    "requestId": "amzn1.echo-api.request.[unique-value-here]"
  },
  "context": {
    "AudioPlayer": {
      "playerActivity": "IDLE"
    },
    "System": {
      "device": {
        "supportedInterfaces": {
          "AudioPlayer": {}
        }
      },
      "application": {
        "applicationId": 'amzn1.ask.skill.01c35512-6c67-4bb7-8914-8602ada00d60'
      },
      "user": {
        "userId": "amzn1.ask.account.[unique-value-here]"
      }
    }
  }
}