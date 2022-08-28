import { findByProps } from "@cumcord/modules/webpack";
import {log} from '@cumcord/utils/logger';
const { addReaction } = findByProps('addReaction');
const { getGuildEmoji } = findByProps("getGuildEmoji");
const { getGuilds } = findByProps("getGuilds");
const { isNitro } = findByProps("isPremium");

const removeCommand = cumcord.commands.addCommand({
    name: "react",
    description: "cums on a message with a reaction of your choice",
    args: [
        {
            name: "msgId",
            type: "string",
            required: true
        },
        {
            name: "eName",
            type: "string",
            required: true
        }
    ],
    
    handler: (ctx, send) => {

        let results = [];
        let servers = Object.values(getGuilds()).flatMap(g => g.id);
        for (let server of servers)
        {
            let emojis = getGuildEmoji(server);
            for (let emoji of emojis)
            {
                if(emoji.name == "troll")
                {
                    results.push(emoji);
                }
            }
        }
        for (let result in results)
        {
            addReaction(ctx.channel.id, ctx.args.msgId, results[result]);
            await new Promise(resolve => setTimeout(resolve, 500));
        }
        

        return;
    }
})



export default {
    onLoad() { log("[Reacter] Reacter loaded")},
    onUnload() {},
};