// src/index.ts
import { Client, GatewayIntentBits, TextChannel } from 'discord.js';
import * as dotenv from 'dotenv';
import { initializeServerStats } from './events/serverStats';
import axios from 'axios';
import cron from 'node-cron';

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildPresences,
  ],
});

// Define the structure of the quote response
interface QuoteResponse {
  content: string;
  author: string;
}

// Function to fetch a random motivational quote
async function fetchMotivationalQuote(): Promise<string> {
  try {
    const response = await fetch('https://api.quotable.io/random?tags=motivational');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = (await response.json()) as QuoteResponse;
    return `${data.content} — ${data.author}`;
  } catch (error) {
    console.error('Error fetching motivational quote:', error);
    return "Keep pushing forward!";
  }
}

// Function to send a motivational message in the lounge channel
async function sendMotivationalMessage() {
  const channel = client.channels.cache.find((ch): ch is TextChannel => 
    ch instanceof TextChannel && ch.name === 'lounge'
  );

  if (channel) {
    const quote = await fetchMotivationalQuote();
    channel.send(quote);
  } else {
    console.log('Lounge channel not found or is not a text channel');
  }
}

// Initialize server stats with graphical interface and cyber attack API integration
initializeServerStats(client);

// Existing event listeners
client.once('ready', async () => {
  console.log('Bot is online!');

  // Schedule the motivational message every day at 9 AM
  cron.schedule('0 9 * * *', async () => {
    await sendMotivationalMessage();
  });
});

// Login to Discord
client.login(process.env.DISCORD_TOKEN);
