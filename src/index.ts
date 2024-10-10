// src/index.ts
import { Client, GatewayIntentBits } from 'discord.js';
import * as dotenv from 'dotenv';
import { initializeServerStats } from './events/serverStats';

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildPresences, // Add this intent to access presence statuses
  ],
});

// Initialize server stats with graphical interface and cyber attack API integration
initializeServerStats(client);

// Existing event listeners
client.once('ready', () => {
  console.log('Bot is online!');
});

// Login to Discord
client.login(process.env.DISCORD_TOKEN);
