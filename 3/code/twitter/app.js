//Import Twitter module
var Twitter = require("twitter");

// Authenticates with Twitter using the (unofficial) twitter
// package on npm. This is required for using the interesting parts
// of the API, e.g. streaming or posting tweets.
var client = new Twitter({
  consumer_key: "IyMKYYMlx3cM4iNdIKdoZXfbD",
  consumer_secret: "S5yPpVB7nEbWElQ7okWxhx6FMmtkoCNHOG2MY4wrN6KA22IgHY",
  access_token_key: "12365842-egFb40ZSranjGfqLI5i5Kt0cKJVQ1LgEwOHjNMsP8",
  access_token_secret: "JxUxi55LuYaEvXaWBPq391G0HId8xgQO3WwjwarrvXDQe"
});

// Creates a realtime streaming connection to the Twitter
// API, letting you "track" a particular keyword or hashtag
// and recieve a notification instantly as soon as a tweet is posted.
//
// Documentation, including additional parameters you can use, may
// be found here:
// https://dev.twitter.com/streaming/reference/post/statuses/filter
//
// Note that you can also stream tweets from particular users, or
// tweets posted from around a particular location

client.stream(
  "statuses/filter",
  {
    //track a word
    track: "Shit"
  },
  function(tweetStream) {
    // `tweetStream` will emit a "data" event whenever
    // a new tweet is posted. These will be in the same format
    // as seen in the first example.
    tweetStream.on("data", function(tweet) {
      //log tweet to the console
      console.log(tweet.text);
    });
  }
);
