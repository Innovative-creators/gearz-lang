this.info = {
            lang_name: "Hindi",
            lang_short: "hi-IN"
};

this.texts = {
			// cooldown
			COOLDOWN_WAIT: (time, command) => `आपको ${time} रुकना होगा, \`${command}\` का उपयोग करने से पहले।`,

			// FML command
			FML_SOMETHING_WRONG: 'कुछ गलत हो गया, इसलिए आपको कुछ पल में फिर से प्रयास करना होगा।',

			// general command stuffs
			CMD_NEED_TEXT: 'Provide me some text...',


			// Moderation stuffs
			MOD_CANT_KICK: (user) => `**${user}**। आप उसे सर्वर से नहीं हटा सकते।`,
			MOD_KICKED: (user) => `**${user}** वह सफलतापूर्वक सर्वर से निकाल दिया गया है।`,
			MOD_CANT_BAN: (user) => `**${user}** को प्रतिबंधित नहीं किया जा सकता।`,
			MOD_BANNED: (user) => `**${user}** को सफलतापूर्वक प्रतिबंधित किया गया है।`,
			MOD_ALREADY_BANNED: (user) => `**${user}** पहले से ही प्रतिबंधित है।`,
			MOD_NOT_BANNED: (user) => `**${user}** को इस सर्वर से प्रतिबंधित नहीं किया गया है।`,
			MOD_UNBANNED: (user) => `**${user}** का प्रतिबंध इस सर्वर से हटा दिया गया है।`,
			MOD_NO_MEMBER: (user) => `**${user}**, इस सर्वर के आसपास मौजूद नहीं है।`,
			MOD_SOFT_BANNED: (user) => `**${user}** को इस सर्वर से सफलतापूर्वक सॉफ्टबैंड किया गया है।`,
			MOD_CANT_SOFTBAN: (user) => `**${user}** को इस सर्वर से सॉफ्टबान नहीं किया जा सकता है।`,

			// Music stuffs
			VOICE_NO_CHANNEL_USER: 'आप वॉइस चैनल से जुड़े नहीं हैं।',
			VOICE_NO_CHANNEL_BOT: 'मैं एक आवाज चैनल से नहीं जुड़ा हूं।',
			VOICE_NOT_SAME_CHANNEL: 'आप मेरे जैसा एक ही आवाज चैनल में होना चाहिए।',
			VOICE_SEARCH_TERM: 'आपको एक खोज शब्द प्रदान करना होगा।',
			VOICE_NOT_FOUND: (string) => `**${string}** के लिए कोई परिणाम नहीं मिला।`,
			VOICE_CHOOSE_TRACK: 'जिस ट्रैक को आप सुनना चाहते हैं उसे चुनें। रद्द करने के लिए `❌` से प्रतिक्रिया दे। .\n`NOTE`: __आपका निर्णय लेने के लिए आपके पास 15 सेकंड हैं।__\n',
			VOICE_DISCARD: 'यदि आप संगीत सुनना नही चाहते हैं तो यह पूरी तरह से ठीक है।',
			VOICE_ADDED: (song, user) => `🎧 **${song}** कतार में जोड़ा गया है, ${user} के कहने पर।`,
			VOICE_NOT_CHOOSEN: (user) => `${user}, निर्दिष्ट समय के भीतर कोई गीत नहीं चुना गया  है।`,
			VOICE_AUTOPLAY_ENABLE: 'ऑटोप्ले सक्षम किया गया है।',
			VOICE_AUTOPLAY_DISABLE: 'ऑटोप्ले को अक्षम कर दिया गया है।',
			VOICE_CONNECTED: (channel) => `${channel} के ध्वनि चैनल में सफलतापूर्वक शामिल हो गया।`,
			VOICE_DISCONNECTED: (channel) => `${channel} के ध्वनि चैनल को सफलतापूर्वक छोड़ा गया।`,
			VOICE_ALREADY_PAUSED: 'स्ट्रीम पहले से ही रोका गया है।',
			VOICE_PAUSED: '⏸ गीत अब रोका गया है।',
			VOICE_FIRST_ADD: (prefix) => `कतार के साथ कुछ गाने जोड़ें \`${prefix}add\` के साथ।`,
			VOICE_ALREADY_PLAYING: 'में पहले से गीत गा रहा हूँ। ',
			VOICE_QUEUE_OVER: '⏹ कतार में कोई गीत नहीं हैं! कतार में कुछ और गीत जोड़ें।',
			VOICE_PLAYING: (song, user) => `🎧 **${song}** यह गीत चलाया जा रहा है, ${user} के कहने पर।`,
			VOICE_NOT_PLAYING: (status) => `मैं गीत नहीं बजा रहा हु, वर्तमान स्थिति: \`${status}\``,
			VOICE_QUEUE_NO_SONG: 'कतार में कोई गीत नहीं है।',
			VOICE_NOT_PAUSED: 'स्ट्रीम को रोका नहीं गया है।',
			VOICE_RESUMED: '▶ गीत अब शुरू हो गया है।',
			VOICE_REPEAT_ENABLE: 'Music will now be repeated.',
			VOICE_REPEAT_DISABLE: 'Music wont be repeated now.',

			// no invite sharing
			NO_INVITE: 'आपके संदेश में एक सर्वर आमंत्रण लिंक था, जो इस सर्वर पर निषिद्ध है।',

			// Ping command
			PING: '🏓 पिंग',
			PING_EDIT: (roundtrip, ping) => `🏓 पोंग! (परिक्रमायुक्त यात्रा ने : ${roundtrip}µs. 💙: ${Math.round(ping)}µs. लिए।)`,

			// setting command
			SET_KEY: 'आपको उस कुंजी को देना चाहिए जिसे आप अपडेट करना चाहते हैं।',
			SET_VALUE: 'आपको नया मूल्य प्रदान करना होगा।',
			SET_NUM: (key) => `**${key}** के लिए मूल्य एक संख्या होनी चाहिए।`,
			SET_POSITIVE_NUM: (key) => `**${key}** की मुल्य एक सकरात्मक सँख्या होनी चाहिए। `,
			SET_UPDATE: (key, value) => `**${key}** का मूल्य अब बादल कर **${value}** हो गया है।`,
			SET_INVALID: (key) => `**${key}** ये, गिल्ड सेटिंग को संपादित करने के लिए एक वैध विकल्प नहीं है।`,
			SET_RESET: (key, value) => `Value of **${key}** successfully resetted to **${value}**`,
			SET_WELCOME_ENABLED: 'Image welcome logs for user join/leave has been enabled in this channel.',

			// adCheck command
			AD_FOUND: (member) => `$kick ${member},\`Playing:\` क्षेत्र के अंदर डिस्कॉर्ड के आमंत्रण लिंक थी।`,
			AD_NOT_FOUND: 'कोई आमंत्रण लिंक नहीं मिले।',

			// clear command
			CLEAR: (count) => `सफलतापूर्वक हटाया  गए \`${count}\` संदेश।`,

			// games command
			GAME_ONGOING: 'इस चैनल में एक और सामान्य ज्ञान खेल पहले से ही शुरू हो चुका है।',
			GAME_CANT_PLAY_ALONE: 'आप खुद के साथ खेल नहीं सकते।',
			GAME_NO_ANSWER: (answer) => `⁉ उफ़ कोई भी इसका जवाब देने में सक्षम नहीं था\nसही उत्तर है **${answer}**।`,
			GAME_WINNER: (user, answer) => `🎉 हमें हमारे विजेता मिल गया है **${user}**\nसही उत्तर है __**${answer}**__।`,
			GAME_TIME_UP: (answer) => `समय पूर्ण हुआ। उत्तर है **${answer}**।`,

			// Anime and Manga commands
			CMD_ANIME_REQUIRE_NAME: 'आपको खोज करने के लिए एनीमे प्रदान करना होगा।',
			CMD_FETCHING_KITSU: 'कित्सु से जानकारी प्राप्त कर रहा हु।',

			// general command responses
			NOT_A_QUESTION: 'यह एक प्रश्न की तरह नहीं दिखता है। (संकेत : प्रशन को ? से समाप्त करे)।',
			MUST_PROVIDE_SEARCH_TERM: 'आपको खोज शब्द प्रदान करना होगा।',
			CMD_HOROSCOPE_PROVIDE_SUNSIGN: 'आप सूर्य चिह्न प्रदान करना चाहिए।',
			CMD_HOROSCOPE_CHOOSE_PROPER: (sunsigns) => `इन के बीच से  एक उचित सूर्य चिह्न चुनें:\n\`${sunsigns}\``,

			// rps command
			CMD_RPS_DRAW: 'यह एक ड्रा है, फिर से मैच खेलें।',
			CMD_RPS_WIN: 'मैं इसे जीता। तुम्हे शर्म आनी चाहिए 😜',
			CMD_RPS_LOSS: 'मैं इस खेल में आपसे कैसे हार सकता हूं 😕',

			// no nsfw
			NO_NSFW: '🔞 एक SFW चैनल में NSFW सामग्री प्रदर्शित नहीं की जा सकती।'
};
