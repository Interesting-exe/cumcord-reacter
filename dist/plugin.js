(function(e,o){"use strict";e.findByProps("addReaction");const{getGuildEmoji:i}=e.findByProps("getGuildEmoji"),{getGuilds:t}=e.findByProps("getGuilds");cumcord.commands.addCommand({name:"react",description:"cums on a message with a reaction of your choice",args:[{name:"msgId",type:"string",required:!1},{name:"eName",type:"string",required:!1}],handler:(r,s)=>{}});var d={onLoad(){let r=Object.values(t()).map(s=>s.id);o.log("first server emojis: "+JSON.stringify(Object.values(i(r[0]))))},onUnload(){}};return d})(cumcord.modules.webpack,cumcord.utils.logger);
