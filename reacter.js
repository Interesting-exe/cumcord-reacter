import { findByProps } from "@cumcord/modules/webpack";
import {log} from '@cumcord/utils/logger';
const { addReaction } = findByProps('addReaction');
const { getGuildEmoji } = findByProps("getGuildEmoji");
const { getGuilds } = findByProps("getGuilds");
const { getMessage } = findByProps("getMessages");


const removeCommand = cumcord.commands.addCommand({
    name: "react",
    description: "cums on a message with a reaction of your choice",
    args: [
        {
            name: "msg",
            description: "the message id",
            type: "string",
            required: true
        },
        {
            name: "emoji",
            description: "the emoji to react with",
            type: "string",
            required: true
        }
    ],
    
    handler: (ctx, send) => {



        const msg = ctx.args.msg && getMessage(ctx.channel.id, ctx.args.msg)
        if(!msg)
        {
            send("Message not found")
            return
        }

        let results = [];
        let servers = Object.values(getGuilds()).flatMap(g => g.id);
        for (let server of servers)
        {
            let emojis = getGuildEmoji(server);
            for (let emoji of emojis)
            {
                if(emoji.name == ctx.args.emoji)
                {
                    results.push(emoji);
                }
            }
        }
        for (let result in results)
        {
            setTimeout(() => { 
            let message = ctx.args.msg && getMessage(ctx.channel.id, ctx.args.msg)
            if(message.reactions)
            {
                log(message)
                if(message.reactions.length >= 20)
                    return
            }
            addReaction(ctx.channel.id, ctx.args.msg, results[result]);
            }, 500 * result);
        }
        

        return;
    }
})


export default {
    onLoad() { log("[Reacter] Reacter loaded")},
    onUnload() {},
};