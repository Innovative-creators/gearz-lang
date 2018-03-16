
exports.info = {
	    lang_name:        "Dutch",
	    lang_short:       "nl_NL"
};
exports.texts = {
      // cooldown
			COOLDOWN_WAIT: (time, command) => `Wacht ${time} seconden voordat je \`${command}\` nog een keer gebruikt.`,

			// FML command
			FML_SOMETHING_WRONG: 'er ging iets mis, probeer het opnieuw over enkele minuten. FML',

			// general command stuffs
			CMD_NEED_TEXT: 'Geef me tekst...',


			// Moderation stuffs
			MOD_CANT_KICK: (user) => `**${user}** kan niet gekicked worden.`,
			MOD_KICKED: (user) => `**${user}** is succesvol gekicked.`,
			MOD_CANT_BAN: (user) => `**${user}** kan niet verbannen worden.`,
			MOD_BANNED: (user) => `**${user}** is succesvol verbannen.`,
			MOD_ALREADY_BANNED: (user) => `**${user}** is al verbannen.`,
			MOD_NOT_BANNED: (user) => `**${user}** isn't banned from this server.`,
			MOD_UNBANNED: (user) => `**${user}** has been unbanned from this server.`,
			MOD_NO_MEMBER: (user) => `**${user}** doesnt seem to exist around this server.`,
			MOD_SOFT_BANNED: (user) => `**${user}** has been successfully softbanned from this server.`,
			MOD_CANT_SOFTBAN: (user) => `**${user}** can't be soft banned from this server`,

			// Music stuffs
			VOICE_NO_CHANNEL_USER: 'Je zit niet in een voicekanaal.',
			VOICE_NO_CHANNEL_BOT: 'Ik zit niet in een voicekanaal.',
			VOICE_NOT_SAME_CHANNEL: 'Je moet wel in hetzelfde kanaal zitten.',
			VOICE_SEARCH_TERM: 'Je moet wel een zoekterm invullen',
			VOICE_NOT_FOUND: (string) => `Geen resultaat gevonden voor **${string}**`,
			VOICE_CHOOSE_TRACK: 'Kies het nummer dat je wilt afspelen, reageer met `❌` om te cancelen.\n`ONTHOUD`: __Je hebt 15 seconden om te beslissen.__\n',
			VOICE_DISCARD: 'Het is helemaal goed als je niet naar muziek wilt luisteren...',
			VOICE_ADDED: (song, user) => `🎧 Toegevoegd **${song}** zoals gevraagd door ${user}`,
			VOICE_NOT_CHOOSEN: (user) => `${user}, Er werd geen nummer gekozen binnen de opgegeven tijd.`,
			VOICE_AUTOPLAY_ENABLE: 'Autoplay is ingeschakelt.',
			VOICE_AUTOPLAY_DISABLE: 'Autoplay is uitgeschakelt.',
			VOICE_CONNECTED: (channel) => `Met succes toegetreden tot het spraakkanaal ${channel}`,
			VOICE_DISCONNECTED: (channel) => `Met succes het spraakkanaal verlaten ${channel}`,
			VOICE_ALREADY_PAUSED: 'De stream is al gepauzeerd.',
			VOICE_PAUSED: '⏸ Pauze',
			VOICE_FIRST_ADD: (prefix) => `Voeg eerst nummers toe met \`${prefix}add\``,
			VOICE_ALREADY_PLAYING: 'Ik speel al muziek',
			VOICE_QUEUE_OVER: '⏹ We hebben geen liedjes meer! Voeg wat meer muziek toe in de wachtrij.',
			VOICE_PLAYING: (song, user) => `🎧 Speelt: **${song}** zoals aangevraagd door ${user}`,
			VOICE_NOT_PLAYING: (status) => `Ik speel geen muziek. Status: \`${status}\``,
			VOICE_QUEUE_NO_SONG: 'Er is geen nummer in de queue.',
			VOICE_NOT_PAUSED: 'De stream staat niet op pauze.',
			VOICE_RESUMED: '▶ Hervat',
			VOICE_REPEAT_ENABLE: 'Music will now be repeated.',
			VOICE_REPEAT_DISABLE: 'Music wont be repeated now.',

			// no invite sharing
			NO_INVITE: 'Uw bericht bevatte een discord invitelink, dat is door deze discord verboden.',

			// Ping command
			PING: '🏓 Ping',
			PING_EDIT: (roundtrip, ping) => `🏓 Pong! (Roundtrip took: ${roundtrip}ms. 💙: ${Math.round(ping)}ms.)`,

			// setting command
			SET_KEY: 'U moet de sleutel opgeven om te wijzigen.',
			SET_VALUE: 'U moet de nieuwe waarde opgeven.',
			SET_NUM: (key) => `De waarde van **${key}** moet een nummer zijn.`,
			SET_POSITIVE_NUM: (key) => `De **${key}** moet een positief nummer zijn.`,
			SET_UPDATE: (key, value) => `De waarde van **${key}** is succesvol geupdated naar **${value}**`,
			SET_INVALID: (key) => `**${key}** is geen bestaande optie voor het aanpassen van de server instellingen.`,
			SET_RESET: (key, value) => `Value of **${key}** successfully resetted to **${value}**`,
			SET_WELCOME_ENABLED: 'Image welcome logs for user join/leave has been enabled in this channel.',

			// adCheck command
			AD_FOUND: (member) => `$kick ${member} Discord invite link in \`Playing:\` field.`,
			AD_NOT_FOUND: 'Geen invite link gevonden.',

			// clear command
			CLEAR: (count) => `Ik heb succesvol \`${count}\` berichten verwijderd.`,

			// games command
			GAME_ONGOING: (game) => `Een ander ${game} is al aan de gang in dit kanaal.`,
			GAME_CANT_PLAY_ALONE: '⁉ Oops, je kan niet met jezelf spelen...',
			GAME_NO_ANSWER: (answer) => `⁉ Oops, niemand heeft geantwoord op de vraag.\nHet goede antwoord is **${answer}**`,
			GAME_WINNER: (user, answer) => `🎉 We hebben een winnaar **${user}**\nHet goede antwoord is  __**${answer}**__`,
			GAME_TIME_UP: (answer) => `De tijd is op. Het antwoord is **${answer}**`,
  
			// Anime and Manga commands
			CMD_ANIME_REQUIRE_NAME: 'Je moet een anime toevoegen om te zoeken naar...',
			CMD_FETCHING_KITSU: 'Informatie van kitsu ophalen...',

			// general command responses
			NOT_A_QUESTION: 'Dat lijkt geen vraag, (hint, eindig je vraag met een `?`).',
			MUST_PROVIDE_SEARCH_TERM: 'U moet de zoekterm opgeven.',
			CMD_HOROSCOPE_PROVIDE_SUNSIGN: 'Je hoort het zonneteken te geven.',
			CMD_HOROSCOPE_CHOOSE_PROPER: (sunsigns) => `Kies hier een goede zonneteken uit:\n\`${sunsigns}\``,

			// rps command
			CMD_RPS_DRAW: 'Het was gelijk, laten we nog een potje doen!',
			CMD_RPS_WIN: 'Ik heb gewonnen. Yes! 😜',
			CMD_RPS_LOSS: 'Hoe kon ik toch van je verliezen... 😕',

			// no nsfw
			NO_NSFW: '🔞 Kan NSFW-inhoud niet weergeven in een SFW-kanaal.'
};
