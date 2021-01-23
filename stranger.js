const {Client} = require("discord.js"), client = new Client();
const request = require("request");

client.ayar = {
  token: "ODAyNTIyMTM5ODUyNDA2ODE1.YAwc_A.IO46VATqU70Fd2yim8sKD4WquTY",
  ses: "801880250992427008",
  
  url: "odinson",
  sunucu: "780410926674870273"
};

client.on("ready", function () {
  console.log(`Bot aktif!`)
  let kanal = client.channels.cache.get(client.ayar.ses);
  
    client.user.setPresence({status: "dnd"});
  
  if (kanal) kanal.join().catch();
});

client.on("guildUpdate", (old, nev) => {
  if ((old.vanityURLCode != nev.vanityURLCode) && nev.vanityURLCode != client.ayar.url) {
    request({  
     method: 'PATCH',
     url: `https://discord.com/api/v6/guilds/${nev.id}/vanity-url`,
     body: {
      code: client.ayar.url
     },
     json: true,
     headers: {
    "Authorization": `Bot ${client.ayar.token}`
    }
   }, (err, aprax, body) => {
    if (err) return console.error(err);
   });
  };
});

client.login(client.ayar.token);