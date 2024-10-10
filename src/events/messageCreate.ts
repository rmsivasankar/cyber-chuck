// src/events/messageCreate.ts
import { Message, TextChannel } from 'discord.js';
import { abusiveWords } from '../config';
import { rollDice } from '../commands/roll';
import { fetchJoke } from '../commands/joke';

export const handleMessageCreate = async (message: Message) => {
  if (message.author.bot) return;

  const lowerCaseMessage = message.content.toLowerCase();
  const hasAbusiveWords = abusiveWords.some((word) => lowerCaseMessage.includes(word));

  // Abusive word detection
  if (hasAbusiveWords) {
    try {
      await message.delete();

      // Check if the channel is a TextChannel before sending a message
      if (message.channel instanceof TextChannel) {
        await message.channel.send(`${message.author}, watch your language!`);
      } else {
        console.warn("Message channel is not a TextChannel. Can't send warning.");
      }

      const member = message.guild?.members.cache.get(message.author.id);
      if (member) {
        await member.kick(); // or member.ban();
      }
    } catch (error) {
      console.error('Error deleting or kicking user:', error);
    }
  }

  // Roll-a-dice game
  if (lowerCaseMessage === '!roll') {
    await rollDice(message);
  }

  // Fetch a joke
  if (lowerCaseMessage === '!joke') {
    await fetchJoke(message);
  }
};
