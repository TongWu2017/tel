module.exports = {
    name: "help",
    description: "See all of tel's commands",
    public: true,
    dm: true,
    guild: true,
    async execute(message, args) {
        const Discord = require("discord.js")
        const { client } = message
        if (args.includes('-')) {
            var help
            try {
                help = args[0].toLowerCase()
            } catch {
                help = ''
            }
            const helpEmbed = new Discord.MessageEmbed()
                .setDescription("All commands are not case sensitive.")
                .setAuthor(client.user.username + '#' + client.user.discriminator, client.user.displayAvatarURL({ dynamic: true, format: 'png', size: 1024 }))
            if (help === "econ" || help === "economy") {
                helpEmbed
                    .setTitle("Tel's econ commands")
                    .setColor('#c0f000')
                    .addField("Deposit/dep", "Deposit your borgers <:borger:616743518685102099>")
                    .addField("Withdraw/with", "Deposit your borgers <:borger:616743518685102099>")
                    .addField("Balance/bal", "See your borgers <:borger:616743518685102099>")
                    .addField("Top/rich", "People in this server with the most borgers <:borger:616743518685102099>")
                    .addField("Pray", "Pray for borgers <:borger:616743518685102099>")
                    .addField("Work", "Work for borgers <:borger:616743518685102099>")
                    .addField("Rob", "Rob people's borgers <:borger:616743518685102099>")
                    .addField("Shop", "See stuff you can buy with your borgers <:borger:616743518685102099>")
                    .addField("Inventory/inv", "Your inventory... of things bought with borgers <:borger:616743518685102099>")
                    .addField("Buy", "Buy something from the shop with your borgers <:borger:616743518685102099>")
                    .addField("Use", "Use something that was probably bought with borgers <:borger:616743518685102099>")
            } else if (help === "util" || help === "utility") {
                helpEmbed
                    .setTitle("Tel's utility commands")
                    .setColor('#3498db')
                    .addField("**Randomban", "Randomly ban someone")
                    .addField("**Randomkick", "Randomly kick someone")
                    .addField("**Massnick", "Rename everyone on this server who's top role is below mine")
                    .addField("**Massnickreset", "Reverse a massnick")
                    .addField("**Warm", "Warm someone...")
                    .addField("*Config", "Access tel's configuration settings")
                    .addField("*Addemoji", "Add an emoji, `tel addemoji <emoji url> <emoji name>` or `tel addemoji <emoji name>` with a file")
                    .addField("Help", "Display tel's help page")
                    .addField("Ping", "My ping...")
                    .addField("Report", "Report a bug")
                    .addField("Avatar/av", "Mention someone or use their id to see their avatar")
                    .addField("Botinvite/botlink", "Mention a bot to get its invite link!")
                    .addField("Emoji", "Shows the image file to a custom emoji")
                    .setFooter("** = admins only, * = mods only")
                    .setTimestamp()
            } else if (help === "fun") {
                helpEmbed
                    .setTitle("Tel's fun commands")
                    .setColor('#50a0a0')
                    .addField("Snipe", "See recently deleted messages")
                    .addField("Editsnipe", "See recently edited messages")
                    .addField("Afk", "Go afk")
                    .addField("Nimrod", "Are you an idiot, nimrod, nimroy, or a nimroyasaurus?")
                    .addField("Kms", "Die in stupid ways!")
                    .addField("Suicide", "Die in realistic ways but you might fail!")
                    .addField("Kill", "Kill someone!")
                    .addField("Unkill", "Unkill someone!")
                    .addField("Magic8ball/m8b/8ball", "Ask the Magic 8 Ball a question!")
                    .addField("Choose", "Choose between two things.")
                    .addField("Topic", "Random conversation starters")
                    .addField("Addtopic", "Add a random conversation starter")
                    .addField("Rate", "Rate someone with something!")
                    .addField("Say", "Make the bot say something. Why would you need to do that though?")
                    .addField("IQ", "See your iq!")
                    .addField("What", "What the hell is this?")
                    .addField("Spam", "Spams a message 10 times")
                    .addField("Superspam", "Spams a message 100 times")
                    .addField("Sigh", "Sigh and get more depressed... why the hell would you do that though")
                    .addField("Axp", "Amari weekly xp...")
                    .addField("Wank", "Hm")
                    .addField("Fuck", "Good old fashioned reproduction")
                    .addField("Kaberfy", "Kaberfy (trigger warning: self harm and suicide)")
                    .addField("Guess", "Guess a member from the server. -d to include discriminator hint, -b to include bots.")
                    .addField("Lyrics", "(Disabled)"/*Search lyrics, now fully functional*/)
            } else if (help === 'nmsi' && message.guild && message.guild.id == '603653921705033767') {
                helpEmbed
                    .setTitle("Tel's NMSI specific commands")
                    .setColor('#00ff9e')
                    .addField("**Lockdown", "Lockdown the entire server ")
                    .addField("**Unlock", "Reverse the lockdown (as seen above)")
                    .addField("**Spamf/spamfilter", "Toggle the spam filter (please don't change this)")
                    .addField("**Cap", "Toggle caps filter  (please don't change this either)")
                    .addField("*Verify", "Verify/unjail someone")
                    .addField("*Strike", "Strike someone, `tel strike <number> <id of user being striked> <reason>")
                    .addField("Tag", "Tag someone, see <#614260458530275348>")
                    .addField("Tagnew", "Volunteer as IT, see <#614260458530275348>")
                    .addField("Appeal", "See link to appeal server to make an appeal")
                    .setFooter("** = admins only, * = mods only")
            } else {
                helpEmbed
                    .setTitle("Tel's command categories")
                    .setDescription("Use `tel help <category>` to view commands of a category. Below are all the categories:")
                    .setColor('#bb4400')
                    .addField("Economy/econ", "View economy commands")
                    .addField("Utility/util", "View utility commands")
                    .addField("Fun", "View fun commands")
                if (message.guild && message.guild.id == '603653921705033767') {
                    helpEmbed.addField("Nmsi", "View NMSI specific commands")
                }
            }
            message.channel.send({ embeds: [helpEmbed.addField("\u200B", "[Join the tel support server!](https://discord.gg/ap7wG3v)")] });
        } else {
            const commands = client.commands.filter(command => command.public)
            const pages = []
            var i = 0
            commands.forEach(command => {
                if (i % 25 == 0) pages.push([])
                pages[Math.floor(i / 25)].push({ "name": command.name, "value": command.description, "inline": true })
                i += 1
            })
            if (args.length == 0 || pages[+args[0] - 1]) {
                const page = +args[0] || 1
                const embed = new Discord.MessageEmbed()
                    .setTitle("My commands")
                    .setDescription(`${commands.size} commands in total`)
                    .setFooter(`Viewing page ${page} out of ${pages.length} pages`)
                    .addFields(pages[page - 1])
                message.channel.send({ embeds: [embed] })
            } else {
                const commands_ = client.commands_.filter(command => command.public)
                const command = commands.get(args[0].toLowerCase()) || commands_.get(args[0].toLowerCase())
                if (!command) return message.reply("command not found")
                const embed = new Discord.MessageEmbed()
                    .setTitle(command.name)
                    .addField("Description", command.description)
                if (command.aliases && command.aliases.length > 0) embed.addField("Aliases", command.aliases.join(", "))
                message.channel.send({ embeds: [embed] })
            }
        }
    },
}