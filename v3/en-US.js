exports.info = {
	lang_name:        "English",
	lang_short:       "en_US"
};
exports.texts = {
			// cooldown
			COOLDOWN_WAIT: (time, command) => `please wait ${time} more second(s) before reusing the \`${command}\` command.`,

			// FML command
			FML_SOMETHING_WRONG: 'something went wrong, so you\'ll have to try again in a few moments. FML',

			// general command stuffs
			CMD_NEED_TEXT: 'Provide me some text...',

			// Moderation stuffs
			MOD_CANT_KICK: (user) => `**${user}** cant be kicked.`,
			MOD_KICKED: (user) => `**${user}** is successfully kicked.`,
			MOD_CANT_BAN: (user) => `**${user}** cant be banned.`,
			MOD_BANNED: (user) => `**${user}** is successfully banned.`,
			MOD_ALREADY_BANNED: (user) => `**${user}** is already banned.`,
			MOD_NOT_BANNED: (user) => `**${user}** isn't banned from this server.`,
			MOD_UNBANNED: (user) => `**${user}** has been unbanned from this server.`,
			MOD_NO_MEMBER: (user) => `**${user}** doesnt seem to exist around this server.`,
			MOD_SOFT_BANNED: (user) => `**${user}** has been successfully softbanned from this server.`,
			MOD_CANT_SOFTBAN: (user) => `**${user}** can't be soft banned from this server`,

			// Music stuffs
			VOICE_NO_CHANNEL_USER: 'You are not connected in a voice channel.',
			VOICE_NO_CHANNEL_BOT: 'I am not connected in a voice channel.',
			VOICE_NOT_SAME_CHANNEL: 'You must be in the same voice channel as me.',
			VOICE_SEARCH_TERM: 'You must provide a search term.',
			VOICE_NOT_FOUND: (string) => `No result found for **${string}**`,
			VOICE_CHOOSE_TRACK: 'Choose the track you want to play, react with `❌` to cancel the process.\n`NOTE`: __You have 15 seconds to make your decision.__\n',
			VOICE_DISCARD: 'Its completely fine if you dont want to listen to music...',
			VOICE_ADDED: (song, user) => `🎧 Added **${song}** as requested by ${user}`,
			VOICE_NOT_CHOOSEN: (user) => `${user}, No song is choosen within the specified time.`,
			VOICE_AUTOPLAY_ENABLE: 'Autoplay has been enabled.',
			VOICE_AUTOPLAY_DISABLE: 'Autoplay has been disabled.',
			VOICE_CONNECTED: (channel) => `Successfully joined the voice channel ${channel}`,
			VOICE_DISCONNECTED: (channel) => `Successfully left the voice channel ${channel}`,
			VOICE_ALREADY_PAUSED: 'The stream is already paused.',
			VOICE_PAUSED: '⏸ Paused',
			VOICE_FIRST_ADD: (prefix) => `Add some songs to the queue first with \`${prefix}add\``,
			VOICE_ALREADY_PLAYING: 'Already Playing',
			VOICE_QUEUE_OVER: '⏹ We\'ve run out of songs! Better queue up some more tunes.',
			VOICE_PLAYING: (song, user) => `🎧 Playing: **${song}** as requested by: ${user}`,
			VOICE_NOT_PLAYING: (status) => `I am not playing a song. Current status: \`${status}\``,
			VOICE_QUEUE_NO_SONG: 'There is no song in the queue.',
			VOICE_NOT_PAUSED: 'The stream is not paused.',
			VOICE_RESUMED: '▶ Resumed',
			VOICE_REPEAT_ENABLE: 'Music will now be repeated.',
			VOICE_REPEAT_DISABLE: 'Music wont be repeated now.',

			// no invite sharing
			NO_INVITE: 'Your message contained a server invite link, which this server prohibits.',

			// Ping command
			PING: '🏓 Ping',
			PING_EDIT: (roundtrip, ping) => `🏓 Pong! (Roundtrip took: ${roundtrip}ms. 💙: ${Math.round(ping)}ms.)`,

			// setting command
			SET_KEY: 'You must provide the key to change.',
			SET_VALUE: 'You must provide the new value.',
			SET_NUM: (key) => `The value for **${key}** must be a number.`,
			SET_POSITIVE_NUM: (key) => `The **${key}** must be a positive number.`,
			SET_UPDATE: (key, value) => `Value of **${key}** successfully updated to **${value}**`,
			SET_INVALID: (key) => `**${key}** is not a valid option for editing the guild setting.`,
			SET_RESET: (key, value) => `Value of **${key}** successfully resetted to **${value}**`,
			SET_WELCOME_ENABLED: 'Image welcome logs for user join/leave has been enabled in this channel.',

			// adCheck command
			AD_FOUND: (member) => `$kick ${member} Discord invite link in \`Playing:\` field.`,
			AD_NOT_FOUND: 'No invite links found.',

			// clear command
			CLEAR: (count) => `Successfully deleted \`${count}\` messages.`,

			// games command
			GAME_ONGOING: (game) => `Another ${game} game is already in progress in this channel.`,
			GAME_CANT_PLAY_ALONE: 'Oops you cant play with oneself.',
			GAME_NO_ANSWER: (answer) => `⁉ Oops No-one was able to answer it.\nThe correct answer is **${answer}**`,
			GAME_WINNER: (user, answer) => `🎉 We have got our winner **${user}**\nThe correct answer is __**${answer}**__`,
			GAME_TIME_UP: (answer) => `Times up. The answer is **${answer}**`,

			// Anime and Manga commands
			CMD_ANIME_REQUIRE_NAME: 'You must add an anime to search for.',
			CMD_FETCHING_KITSU: 'Fetching information from kitsu.',

			// general command responses
			NOT_A_QUESTION: 'That does not look like a question, (hint, end your question with a `?`.)',
			MUST_PROVIDE_SEARCH_TERM: 'You must provide the search term.',
			CMD_HOROSCOPE_PROVIDE_SUNSIGN: 'You are supposed to provide the sunsign.',
			CMD_HOROSCOPE_CHOOSE_PROPER: (sunsigns) => `Choose a proper sunsign among these:\n\`${sunsigns}\``,

			// rps command
			CMD_RPS_DRAW: 'It\'s a draw, lets do a rematch.',
			CMD_RPS_WIN: 'Ah I won it. Shame on you 😜',
			CMD_RPS_LOSS: 'How could I even lose to you 😕',

			// no nsfw
			NO_NSFW: '🔞 Cannot display NSFW content in a SFW channel.'
		};
