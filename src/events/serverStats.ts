// src/events/serverStats.ts
import { Guild, ChannelType, Client, EmbedBuilder } from 'discord.js';

let botStartTime: Date;

export const initializeServerStats = (client: Client) => {
  botStartTime = new Date();

    // Set an interval to update server stats every 3 hours
    setInterval(() => {
      updateServerStats(client);
    }, 3 * 60 * 60 * 1000); // 3 hours in milliseconds
};

const updateServerStats = async (client: Client) => {
  const guild = client.guilds.cache.first(); // Change if you want a specific guild
  if (!guild) return;

  const onlineMembers = guild.members.cache.filter(member => member.presence?.status === 'online');
  const offlineMembers = guild.members.cache.filter(member => member.presence?.status === 'offline');
  
  // Get the number of roles for each user and calculate the total number of roles given
  const totalRolesAssigned = guild.members.cache.reduce((acc, member) => acc + member.roles.cache.size, 0);

  const runtime = getBotRuntime();

  // Fetch cyber attack count from an external API

  // Find or create the stats channel
  let statsChannel = guild.channels.cache.find(channel => channel.name === 'server-stats' && channel.type === ChannelType.GuildText) as any;

  if (!statsChannel) {
    statsChannel = await guild.channels.create({
      name: 'server-stats',
      type: ChannelType.GuildText,
    });
  }

  // Create an embed for the graphical interface
  const statsEmbed = new EmbedBuilder()
    .setColor('#0099ff') // Set embed color
    .setTitle('📊 Server Stats')
    .addFields(
      { name: '👥 Online Users', value: `${onlineMembers.size}`, inline: true },
      { name: '😴 Offline Users', value: `${offlineMembers.size}`, inline: true },
      { name: '🕒 Bot Uptime', value: runtime, inline: true },
      { name: '📜 Total Roles Assigned', value: `${totalRolesAssigned}`, inline: true },
    )
    .setTimestamp(); // Adds the current time

  // Send the embed to the channel
  await statsChannel.send({ embeds: [statsEmbed] });
};

const getBotRuntime = () => {
  const now = new Date();
  const diff = now.getTime() - botStartTime.getTime();
  const seconds = Math.floor(diff / 1000);
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return `${hours}h ${minutes}m ${remainingSeconds}s`;
};

