const AsreaperDiscord = require('discord.js');
const AsreaperClient = new AsreaperDiscord.Client();
const ayarlar = require('../ayarlar.json');
let Prefix = ayarlar.prefix

exports.run = (client, message) => {
 const AsreaperEmbed = new AsreaperDiscord.MessageEmbed()
  .setColor(4444444)
 .setAuthor(`${client.user.username} Yardım Menüsü`)
 .setDescription(`
 | **${Prefix}bilgilerim** \n-> Hesap Bilgisini Gösterir.
 | **${Prefix}bakiye <etiket>** \n-> Bakiyeyi Gösterir.
 | **${Prefix}günlükpara** \n->  Günlük Para Ödülü Alırsın.
 | **${Prefix}hesap-oluştur <isim>** \n->  Hesap Oluşturursun.
 | **${Prefix}hesap-sil** \n->  Hesap Silersin. *(Admin)*
 | **${Prefix}kasa-aç <İD>** \n->  Kasa Açarsın.
 | **${Prefix}kasa-bilgi** \n->  Kasalar Hakkında Bilgi Alırsın.
 | **${Prefix}transfer <isim> <miktar> ** \n->  Belirtilen Kişiye Belirtilen Miktarda Para Gönderirsin.
 | **${Prefix}parabirimi** \n-> Para Birimini gösterir.
 | **${Prefix}ekle <etiket> <miktar>** \n-> Hesaba Para Yükler. *(Admin)*
`)
 .setFooter(` ST Ekonomi `)
 .setTimestamp()
 message.channel.send(AsreaperEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};