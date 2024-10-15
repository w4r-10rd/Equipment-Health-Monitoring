const mqtt = require("mqtt");

const host = process.env.HOST;
const port = process.env.PORT;
const clientId = process.env.CLIENT_ID;
const topic = process.env.TOPIC;


const connectUrl = `mqtt://${host}:${port}`; // BROKER URI
const client = mqtt.connect(connectUrl, {
  clientId,
  // clean: true,
  // connectTimeout: 4000,
  // username: '',
  // password: '',
  // reconnectPeriod: 1000,
});


client.on("connect", (connack) => {
  // console.log('Connected', connack)
  client.subscribe([topic], () => {
    console.log(`Subscribe to topic '${topic}'`);
  });
  client.publish(topic);
});

client.on("message", (topic, payload) => {
  var data = payload.toString();
  console.log(data);
  if (data.length != 0) {
    data = JSON.parse(data);
    client.emit("newMessage", data);
  }
});

client.on("error", function (err) {
  console.log("Error: " + err);
  if (err.code == "ENOTFOUND") {
    console.log(
      "Network error, make sure you have an active internet connection"
    );
  }
});

client.on("offline", function () {
  console.log("Client is currently offline!");
});

module.exports = client;
