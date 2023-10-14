const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  if (!client.ekoayarlar.admin.includes(message.author.id)) return message.reply(`Bunu yapabilmek için gerekli yetkiye sahip değilsin!`)
  const silinecekkllnc = message.mentions.members.first();
  let para = args[1];
  
  if (!silinecekkllnc) return message.channel.send(`Bir kullanıcı belirtmelisin!`)
  
  const bakiye = await db.fetch(`bakiyeasreaper-${silinecekkllnc.id}`);
  const hesapdurumu = await db.fetch(`hesapdurumasreaper-${silinecekkllnc.id}`);
  const hesapismi = await db.fetch(`hesapismiasreaper-${silinecekkllnc.id}`);
  
  if (!hesapdurumu) return message.channel.send(`Kayıtlı olan bir kullanıcı belirtmelisin!`)
  
  // Sayıları biçimlendiren fonksiyon
  function formatNumber(number) {
    return number.toLocaleString('tr-TR');
  }
  
  // Para miktarını biçimlendirme
  para = parseFloat(para.replace(',', '').replace('.', ''));
  if (isNaN(para)) return message.channel.send(`Geçerli bir para miktarı belirtmelisin!`);
  
  await db.add(`bakiyeasreaper-${silinecekkllnc.id}`, para);
  
  // Biçimlendirilmiş para miktarını al
  const formattedPara = formatNumber(para);
  
  message.channel.send(`Başarıyla ${silinecekkllnc} adlı kullanıcının hesabına ${formattedPara} eklendi.`);
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ekle'],
  permLevel: 0
}

exports.help = {
  name: 'moneyadd',
  description: 'Anqriel',
  usage: 'Anqriel'
}
