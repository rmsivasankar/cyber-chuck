// src/commands/joke.ts
import { Message } from 'discord.js';
import axios from 'axios';

export const fetchJoke = async (message: Message) => {
  try {
    const response = await axios.get('https://v2.jokeapi.dev/joke/Any?type=single');
    const joke = response.data.joke;
    await message.reply(joke);
  } catch (error) {
    console.error('Error fetching joke:', error);
    await message.reply("Couldn't fetch a joke at the moment. Try again later!");
  }
};
