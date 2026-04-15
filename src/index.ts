import { bot } from './bot.js';

const startBot = async () => {
    try {
        console.log('Starting Saintekfess Bot...');
        await bot.start();
    } catch (error) {
        console.error('Error starting bot:', error);
        process.exit(1);
    }
};

startBot();
