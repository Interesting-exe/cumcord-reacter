(function(e,o){"use strict";e.webpack.findByProps("addReaction");const{getEmojis:r}=e.webpack.findByProps("getGuildEmoji").getGuilds();cumcord.commands.addCommand({name:"react",description:"cums on a message with a reaction of your choice",args:[{name:"msgId",type:"string",required:!1},{name:"eName",type:"string",required:!1}],handler:(n,s)=>{}});var a={onLoad(){emojis=r(),o.log(emojis)},onUnload(){}};return a})(cumcord.modules,cumcord.utils.logger);
