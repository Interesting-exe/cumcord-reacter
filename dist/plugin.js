(function(e,o){"use strict";e.findByProps("addReaction");const{getGuildEmoji:d}=e.findByProps("getGuildEmoji"),{getGuilds:i}=e.findByProps("getGuilds");cumcord.commands.addCommand({name:"react",description:"cums on a message with a reaction of your choice",args:[{name:"msgId",type:"string",required:!1},{name:"eName",type:"string",required:!1}],handler:(r,s)=>{}});var t={onLoad(){let r=Object.values(i()).map(s=>s.id);o.log("first server emojis: "+d(r[0])[0].id)},onUnload(){}};return t})(cumcord.modules.webpack,cumcord.utils.logger);
