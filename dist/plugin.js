(function(e,i){"use strict";e.findByProps("addReaction");const{getGuildEmoji:d}=e.findByProps("getGuildEmoji"),{getGuilds:n}=e.findByProps("getGuilds");cumcord.commands.addCommand({name:"react",description:"cums on a message with a reaction of your choice",args:[{name:"msgId",type:"string",required:!1},{name:"eName",type:"string",required:!1}],handler:(o,t)=>{}});var a={onLoad(){let o=[],t=Object.values(n()).map(r=>r.id);for(let r of t){let l=d(r);for(let s of l)s.name=="troll"&&o.push(s)}i.log("all troll emojis: "+o)},onUnload(){}};return a})(cumcord.modules.webpack,cumcord.utils.logger);
