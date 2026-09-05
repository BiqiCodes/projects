const games = [
    {
        id: "ag",
        name: "Aether Gazer",
        dev: "Yongshi",
        genre: "Action RPG",
        release: "April 22, 2022",
        image: "images/ag.jpg",
        descript: "Aether Gazer is a sci-fi action RPG set in a virtual world where humanity's survival depends on elite warriors known as Modifiers. Players lead a team of powerful characters through fast-paced real-time combat, taking on dangerous enemies while uncovering the secrets behind a world on the brink of collapse. Featuring fluid hack-and-slash gameplay, stunning anime-inspired visuals, unique character abilities, strategic team building, and regular content updates, Aether Gazer delivers an exciting and immersive experience for fans of action RPGs."
    },
    {
        id: "arknight",
        name: "Arknights",
        dev: "Hypergryph",
        genre: "Tower Defense",
        release: "May 1, 2019",
        image: "images/arknight.jpg",
        descript: "Arknights is a tower defense strategy RPG set in the dystopian world of Terra, where players take on the role of the Doctor, leading the Rhodes Island organization to combat deadly threats and protect those affected by the Oripathy disease. Players recruit and deploy unique Operators, each with distinct classes and abilities, to overcome increasingly challenging missions. Featuring deep strategic gameplay, captivating storylines, beautifully illustrated characters, atmospheric music, and regular content updates, Arknights offers a rewarding experience for both strategy enthusiasts and RPG fans."
    },
    {
        id: "ba",
        name: "Blue Archive",
        dev: "MX Studio",
        genre: "Tactical RPG",
        release: "November 8, 2021",
        image: "images/ba.jpg",
        descript: "Blue Archive is a role-playing game that combines strategic real-time battles with a compelling story set in the academy city of Kivotos. Players take on the role of a teacher, known as Sensei, guiding unique students through missions, solving mysteries, and overcoming various challenges. Featuring charming anime-style visuals, a diverse cast of characters, tactical squad-based combat, and frequent content updates, Blue Archive delivers an engaging experience that appeals to both RPG and collectible character game fans."
    },
    {
        id: "bbs",
        name: "Bleach: Brave Souls",
        dev: "KLabGames",
        genre: "Action RPG",
        release: "Ju;y 23, 2015",
        image: "images/bbs.jpg",
        descript: "Bleach: Brave Souls is a 3D action RPG based on the popular Bleach anime and manga series, featuring fast-paced real-time combat and an original storyline alongside iconic moments from the original story. Players can collect and upgrade a wide variety of beloved characters, unleash powerful special moves, and battle enemies across multiple game modes. Featuring anime-inspired visuals, hack-and-slash gameplay, cooperative multiplayer, challenging quests, and regular content updates, Bleach: Brave Souls delivers an action-packed experience for both longtime Bleach fans and newcomers."
    },
    {
        id: "bsr",
        name: "Bleach: Soul Resonance",
        dev: "Nuverse",
        genre: "Action RPG",
        release: "November 21, 2025",
        image: "images/bsr.jpg",
        descript: "leach: Soul Resonance is a 3D action RPG based on the popular Bleach anime and manga series, allowing players to relive iconic moments while experiencing fast-paced hack-and-slash combat. Players can control beloved Soul Reapers, unleash powerful abilities, and battle formidable Hollows and other enemies across faithfully recreated locations. Featuring anime-accurate visuals, dynamic real-time combat, cinematic story missions, iconic characters, and immersive gameplay, Bleach: Soul Resonance offers an exciting adventure for both longtime Bleach fans and newcomers alike"
    },
    {
        id: "codm",
        name: "Call of Duty Mobile",
        dev: "TiMi Studio Group",
        genre: "FPS",
        release: "October 1, 2019",
        image: "images/codm.jpg",
        descript: "Call of Duty: Mobile is a first-person shooter that delivers fast-paced action with a wide variety of multiplayer and battle royale modes. Players can customize their loadouts, unlock powerful weapons, and compete across iconic maps inspired by the Call of Duty series. Featuring smooth controls, high-quality graphics, seasonal updates, ranked matches, and diverse game modes, Call of Duty: Mobile offers an intense and competitive experience for both casual and dedicated FPS players."
    },
    {
        id: "es",
        name: "Epic Seven",
        dev: "Super Creative",
        genre: "Turn-Based RPG",
        release: "November 8, 2018",
        image: "images/es.jpg",
        descript: "Epic Seven is a turn-based RPG that combines strategic combat with a captivating fantasy storyline set in the world of Orbis. Players assemble a team of unique Heroes, each with distinct skills and abilities, to battle powerful enemies, complete challenging quests, and uncover the secrets of a world on the brink of destruction. Featuring beautifully animated 2D visuals, deep tactical gameplay, engaging PvE and PvP content, and regular content updates, Epic Seven offers a rewarding experience for both strategy enthusiasts and RPG fans."
    },
    {
        id: "genshin",
        name: "Genshin Impact",
        dev: "miHoYo",
        genre: "Action RPG",
        release: "September 28, 2020",
        image: "images/genshin.jpg",
        descript: "Genshin Impact is an open-world action RPG that takes players on an unforgettable journey through the fantasy world of Teyvat. As the Traveler, players explore diverse regions, uncover hidden secrets, complete quests, and battle powerful enemies using a dynamic elemental combat system. Featuring a vast open world, engaging story, unique characters, cooperative multiplayer, and regular content updates, Genshin Impact delivers an immersive adventure that continues to attract millions of players worldwide."
    },
    {
        id: "guardianTales",
        name: "Guardian Tales",
        dev: "Kong Studio",
        genre: "Action RPG",
        release: "February 24, 2020",
        image: "images/gt.jpg",
        descript: "Guardian Tales is a pixel-art action RPG that combines fast-paced combat, challenging puzzles, and an engaging storyline filled with humor and memorable characters. Players take on the role of the Guardian Knight, exploring diverse worlds, collecting unique heroes, and battling powerful enemies to protect the kingdom of Kanterbury. With strategic team-building, exciting PvE and PvP modes, regular events, and charming retro-inspired visuals, Guardian Tales offers a fun and immersive adventure for both casual and dedicated players."
    },
    {
        id: "hi3",
        name: "Honkai Impact 3rd",
        dev: "miHoYo",
        genre: "Action RPG",
        release: "October 14, 2016",
        image: "images/hi3.jpg",
        descript: "Honkai Impact 3rd is a fast-paced action RPG that follows a group of Valkyries fighting to protect humanity from the devastating Honkai. Players engage in stylish real-time combat, unlock powerful battlesuits, and experience an emotional story filled with memorable characters and epic battles. Featuring dynamic hack-and-slash gameplay, stunning anime-style visuals, cinematic storytelling, diverse game modes, and regular content updates, Honkai Impact 3rd delivers an unforgettable experience for fans of action RPGs."
    },
    {
        id: "hsr",
        name: "Honkai: Star Rail",
        dev: "miHoYo",
        genre: "Turn-Based RPG",
        release: "April 26, 2023",
        image: "images/hsr.jpg",
        descript: "Honkai: Star Rail is a turn-based RPG that takes players on an epic journey across the galaxy aboard the Astral Express. As the Trailblazer, players explore diverse worlds, uncover fascinating stories, and battle powerful enemies using a strategic combat system. Featuring stunning anime-style visuals, memorable characters, engaging storytelling, tactical turn-based gameplay, and regular content updates, Honkai: Star Rail offers an immersive adventure for both RPG enthusiasts and newcomers alike."
    },
    {
        id: "mc",
        name: "Minecraft",
        dev: "Mojang Studio",
        genre: "Sandbox",
        release: "November 18, 2011",
        image: "images/minecraft.jpg",
        descript: "Minecraft is a sandbox game that gives players the freedom to explore, build, and survive in a procedurally generated world. Players can gather resources, craft tools, construct unique structures, and face various creatures such as zombies, skeletons, and creepers. Featuring multiple game modes including Survival, Creative, Adventure, and Hardcore, along with multiplayer support and thousands of community-created mods, Minecraft offers an almost limitless gameplay experience that continues to captivate millions of players around the world."
    },
    {
        id: "pubg",
        name: "PUBG",
        dev: "LightSpeed Studios",
        genre: "Battle Royale",
        release: "March 23, 2017",
        image: "images/pubg.jpg",
        descript: "PUBG is a battle royale game where up to 100 players compete to be the last one standing on a vast battlefield. Players must scavenge for weapons, equipment, and supplies while staying inside the shrinking safe zone to survive. Featuring realistic gunplay, tactical gameplay, diverse maps, solo and squad modes, and intense firefights, PUBG: Battlegrounds delivers an exciting and immersive survival experience for players who enjoy strategic and competitive action."
    },
    {
        id: "pgr",
        name: "Punishing: Gray Raven",
        dev: "Kuro Games",
        genre: "Action RPG",
        release: "July 16, 2021",
        image: "images/pgr.jpg",
        descript: "Punishing: Gray Raven is a fast-paced action RPG set in a post-apocalyptic world where humanity fights against the mysterious Corrupted virus. Players take on the role of the Commandant, leading a squad of elite Constructs in intense real-time battles while uncovering the game's deep story and rich lore. Featuring stylish hack-and-slash combat, unique character abilities, stunning visuals, challenging boss fights, and regular content updates, Punishing: Gray Raven offers an exhilarating experience for fans of action-packed RPGs."
    },
    {
        id: "sla",
        name: "Solo Leveling: ARISE",
        dev: "Netmarble Neo",
        genre: "Action RPG",
        release: "May 8, 2024",
        image: "images/sla.jpg",
        descript: "Solo Leveling: ARISE is an action RPG based on the popular Solo Leveling web novel and anime, following the journey of Sung Jinwoo as he grows from the weakest hunter into humanity's greatest warrior. Players engage in fast-paced real-time combat, recruit powerful hunters, and summon an army of shadows to defeat formidable monsters and challenging bosses. Featuring stunning visuals, dynamic hack-and-slash gameplay, faithful story adaptation, character progression, and regular content updates, Solo Leveling: ARISE delivers an immersive experience for fans of action RPGs and the Solo Leveling series."
    },
    {
        id: "theSpike",
        name: "The Spike Cross",
        dev: "SUNCYAN Inc",
        genre: "Sport",
        release: "March 26, 2018",
        image: "images/thespike.jpg",
        descript: "The Spike Cross is a volleyball sports game that delivers fast-paced gameplay with responsive controls and exciting matches. Players can train their team, master powerful spikes, blocks, and serves, while competing against increasingly skilled opponents. Featuring anime-inspired visuals, engaging game modes, character progression, and dynamic volleyball mechanics, The Spike Cross offers an enjoyable experience for both casual players and volleyball enthusiasts."
    },
    {
        id: "wuwa",
        name: "Wuthering Waves",
        dev: "Kuro Games",
        genre: "Action RPG",
        release: "May 23, 2024",
        image: "images/wuwa.jpg",
        descript: "Wuthering Waves is an open-world action RPG set in a post-apocalyptic world filled with mystery, exploration, and powerful enemies. Players take on the role of Rover, uncovering lost memories while exploring vast landscapes, battling with fast-paced combat, and recruiting unique Resonators with distinct abilities. Featuring fluid movement, dynamic combat, stunning visuals, an immersive storyline, and regular content updates, Wuthering Waves offers an unforgettable adventure for fans of action and open-world RPGs."
    },
    {
        id: "zzz",
        name: "Zenless Zone Zero",
        dev: "miHoYo",
        genre: "Hack and Slash",
        release: "July 4, 2024",
        image: "images/zzz.jpg",
        descript: "Zenless Zone Zero is an urban fantasy action RPG set in the futuristic city of New Eridu, where humanity struggles to survive against mysterious dimensions known as Hollows. Players take on the role of a Proxy, guiding unique Agents through fast-paced combat missions while uncovering the city's secrets. Featuring stylish anime-inspired visuals, fluid real-time combat, diverse playable characters, an engaging storyline, and regular content updates, Zenless Zone Zero delivers an exciting and immersive experience for action RPG fans.23"
    }
];