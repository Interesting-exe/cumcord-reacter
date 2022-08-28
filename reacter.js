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
            required: false
        },
        {
            name: "eName",
            type: "string",
            required: false
        }
    ],
    
    handler: (ctx, send) => {

        let results = [];
        let servers = getGuilds().map(g => g.id);
        // for (let server of servers)
        // {
        //     let emojis = getGuildEmoji(server);
        //     for (let emoji of emojis)
        //     {
        //         if(emoji.name == "troll")
        //             results.push(emoji);
        //     }
        // }
        // for (result in results)
        // {
        //     if( isNitro() || result.guildId == ctx.guild)
        //         if( !isNitro() && result.animated )
        //             addReaction(ctx.channel, ctx.args.msgId, result);
        // }

        log(servers)
        
        return;
    }
})



export default {
    onLoad() { log("[Reacter] Reacter loaded")},
    onUnload() {},
};