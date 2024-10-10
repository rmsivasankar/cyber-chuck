// src/events/guildMemberAdd.ts
import { GuildMember } from 'discord.js';

export const handleGuildMemberAdd = (member: GuildMember) => {
  const channel = member.guild.systemChannel;
  if (channel) {
    channel.send(`Welcome to the server, ${member.displayName}!`);
  }
};
