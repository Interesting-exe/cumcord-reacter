(function(e,r){"use strict";e.findByProps("addReaction");const{getGuildEmoji:d}=e.findByProps("getGuildEmoji").getGuilds();cumcord.commands.addCommand({name:"react",description:"cums on a message with a reaction of your choice",args:[{name:"msgId",type:"string",required:!1},{name:"eName",type:"string",required:!1}],handler:(o,a)=>{}});var n={onLoad(){let o=d;r.log("emojis: "+o)},onUnload(){}};return n})(cumcord.modules.webpack,cumcord.utils.logger);
