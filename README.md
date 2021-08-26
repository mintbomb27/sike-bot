# Sike
![discord](https://img.shields.io/badge/DiscordJS-v13-brightgreen.svg)  ![NodeJS](https://img.shields.io/badge/NodeJS-v16.7-red.svg)  
Just an implementation of discord-together npm package, with slash commands.

Invite the bot using: [Invite Link](https://discord.com/api/oauth2/authorize?client_id=880018212648026152&permissions=8&scope=bot%20applications.commands)

## 🦾 Commands

Slash Command | Use
--------------|----
`/youtube` | Generates a Youtube Together Link
`/chess` | Generates a Chess in the Park Link
`/fishing` | Generates a Fishington.io Link
`/betrayal` | Generates a Betrayal Link
`/poker` | Generates a Poker Night Link

## 🎮 Usage

1. Clone the repository using 

```git clone https://github.com/mintbomb27/sike-bot```

2. Run ```npm install``` to install the required packages

3. Create an application and a bot by going to https://discord.com/developers/applications. When making the invite, make sure `bot` and `application.commands` are checked. Copy the Bot Token from the portal.

4. Make a `.env` file in the bot's directory and add the line:
```BOT_TOKEN=YOUR_BOT_TOKEN```
Replace `YOUR_BOT_TOKEN` with the bot token from the portal.

5. Run ```node .``` to run the bot!

## 😌 Contribution

Any contribution is welcome! Please check the `CONTRIBUTION.md` for the guidelines