// src/commands/roll.ts
import { Message } from 'discord.js';

export const rollDice = async (message: Message) => {
  const roll = Math.floor(Math.random() * 6) + 1;
  await message.reply(`You rolled a ${roll}!`);
};
