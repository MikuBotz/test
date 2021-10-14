let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • TRI [0895612153565]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Gopay, Dana [0895612153565]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
