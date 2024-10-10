# Discord Bot - Server Stats and Cyberattack Tracker

This is a custom Discord bot built with TypeScript and Node.js. It includes features like tracking server statistics, user roles, bot uptime, and fetching the latest cyberattack count using an external API. The bot updates the server stats every 3 hours in a designated channel, formatted using rich embeds for a graphical interface.

## Features

- 🟢 **Online/Offline Users Count**: Displays the number of online and offline users.
- 🕒 **Bot Uptime**: Shows the bot's runtime since its last restart.
- 📜 **Roles Statistics**: Tracks and displays the total number of roles assigned to all members.
- 🛡️ **Cyberattack Counter**: Fetches and displays the number of cyberattacks using an external API.
- 🔄 **Automatic Updates**: Updates the server stats every 3 hours.

## Tech Stack

- **TypeScript** - Strongly typed JavaScript for scalable and maintainable code.
- **Node.js** - JavaScript runtime for fast and lightweight server-side applications.
- **Discord.js** - A powerful JavaScript library for interacting with the Discord API.
- **Axios** - For making HTTP requests to fetch cyberattack data from an external API.
- **dotenv** - To manage environment variables.

## Prerequisites

Before setting up the bot, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (v16 or higher)
- [npm](https://www.npmjs.com/get-npm)
- A [Discord Developer Application](https://discord.com/developers/applications) with a bot token.

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/discord-bot-server-stats.git
cd discord-bot-server-stats

Install the required npm packages:

npm install

Create a .env file in the root of the project and add the following:

DISCORD_TOKEN=your-discord-bot-token

npm i -g typescript

tsc && node /dist/index.js

```

### Key Sections:

1. **Features**: Summarizes the bot's key functionalities.
2. **Tech Stack**: Lists the technologies and libraries used.
3. **Prerequisites**: Ensures users have the right setup before starting.
4. **Getting Started**: Step-by-step instructions on how to set up the bot.
5. **Environment Setup**: Explains how to configure the bot with API tokens and other settings.
6. **Cyberattack API Setup**: Guides users in setting up the cyberattack API.
7. **Project Structure**: Explains the folder and file organization.
8. **Future Enhancements**: Suggestions for expanding the bot's features.

You can copy this structure to your project and modify the `README.md` file based on your project's specifics. Let me know if you need more details!
