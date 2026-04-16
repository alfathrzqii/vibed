import dotenv from 'dotenv';

dotenv.config();

const { BOT_TOKEN, CHANNEL_ID } = process.env;

if (!BOT_TOKEN) {
    throw new Error('BOT_TOKEN is missing in environment variables.');
}

if (!CHANNEL_ID) {
    throw new Error('CHANNEL_ID is missing in environment variables.');
}

export const config = {
    botToken: BOT_TOKEN,
    channelId: CHANNEL_ID,
};
