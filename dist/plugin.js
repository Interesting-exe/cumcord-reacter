(function(r,a){"use strict";const{addReaction:t}=r.findByProps("addReaction"),{getGuildEmoji:d}=r.findByProps("getGuildEmoji"),{getGuilds:i}=r.findByProps("getGuilds");r.findByProps("isPremium"),cumcord.commands.addCommand({name:"react",description:"cums on a message with a reaction of your choice",args:[{name:"msgId",type:"string",required:!1},{name:"eName",type:"string",required:!1}],handler:(o,u)=>{let n=[],m=Object.values(i()).flatMap(e=>e.id);for(let e of m){let c=d(e);for(let s of c)s.name=="troll"&&n.push(s)}for(let e in n)t(o.channel,o.args.msgId,{name:e.name,id:e.id,animated:e.animated});a.log(o.channel)}});var l={onLoad(){a.log("[Reacter] Reacter loaded")},onUnload(){}};return l})(cumcord.modules.webpack,cumcord.utils.logger);
