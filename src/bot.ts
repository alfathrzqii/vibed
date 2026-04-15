import { Bot } from 'grammy';
import { config } from './config.js';

export const bot = new Bot(config.botToken as string);

// Handle the /start command.
bot.command('start', (ctx) => {
    return ctx.reply('Halo! Selamat datang di Saintekfess Bot. Gunakan command /confess <pesan kamu> untuk mengirim confess secara anonim.');
});

// Handle the /confess command.
bot.command('confess', async (ctx) => {
    const messageText = ctx.match;

    if (!messageText) {
        return ctx.reply('Format salah. Gunakan: /confess <pesan kamu>');
    }

    const confessText = `${messageText}\n\n#Saintekfess`;

    try {
        await ctx.api.sendMessage(config.channelId as string, confessText);
        await ctx.reply('Confess kamu berhasil dikirim secara anonim!');
    } catch (error) {
        console.error('Failed to send confess:', error);
        await ctx.reply('Maaf, terjadi kesalahan saat mengirim confess kamu. Silakan coba lagi nanti.');
    }
});

bot.catch((err) => {
    console.error(`Error while handling update ${err.ctx.update.update_id}:`);
    const e = err.error;
    console.error(e);
});
