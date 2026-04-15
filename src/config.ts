import dotenv from 'dotenv';

dotenv.config();

export const config = {
    botToken: process.env.BOT_TOKEN,
    channelId: process.env.CHANNEL_ID,
};

if (!config.botToken) {
    throw new Error('BOT_TOKEN is missing in environment variables.');
}

if (!config.channelId) {
    throw new Error('CHANNEL_ID is missing in environment variables.');
}
