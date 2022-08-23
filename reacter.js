import { findByProps } from "@cumcord/modules/webpack";
import {log} from '@cumcord/utils/logger';
const { addReaction } = findByProps('addReaction');
const { getGuildEmoji } = findByProps("getGuildEmoji").getGuilds();

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
        // emojis = Object.values(getGuildEmoji.getGuilds()).flatMap(g => g._emojis);
        // send(emojis)
        // for (let emoji of emojis)
        // {
        //     if(emoji.name == ctx.args.eName)
        //     {
        //         addReaction(ctx.channel, ctx.args.msgId, emoji)
        //     }
        // }
        return
    }
})



export default {
    onLoad() {
        emojis = getGuildEmoji;
        log(emojis);
    },
    onUnload() {},
};