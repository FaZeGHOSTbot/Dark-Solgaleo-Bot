const Discord = require('discord.js')
const {Client, Attachment, MessageEmbed} = require('discord.js');
const bot = new Client();
const ms =require('ms');

const token = 'Njg3NTY1Mjc1OTE0MDQzNDIx.Xq0n1Q.9dXKbco6mfWumyT9GjCaIOZ_dzw';

const PREFIX = 's!';



bot.on('ready',() =>{

   //705779183544172574
    var testChannel = bot.channels.cache.find(channel => channel.id === '705779183544172574')
    console.log('HELL is unleashed!');

    setInterval(() =>{
     testChannel.send('<@687565275914043421>');
    }, 5*10000);
})

bot.on('guildMemberAdd', member=>{
    const channel = member.guild.channels.cache.find(channel => channel.name === "✨》welcome");
    if(!channel) return
   const greet = new Discord.MessageEmbed()
    .setTitle(':partying_face: Welcome to __***Dark Solgaléo!***__ :partying_face:', '                                                                                                                                    ')
    .setDescription(`\n :beers: **You are our ${member.guild.memberCount} member of the server!** \n \n \n :dizzy: **Always remember to read <#675044612892524544>.** \n \n :dizzy: **Don't forget to take roles from <#675046492272328751>.** \n \n \n :fire: ***ALWAYS SMILE! and ENJOY YOUR TIME IN THE SERVER!*** :fire:`)
    .setImage('http://cdn.lowgif.com/full/259753d81d46eb42-pokemon-necrozma-face-images-pokemon-images.gif')
    .setColor(0xEE41D6)
   channel.send(`${member} Welcome we been waiting for ya!`,greet)
}) 

bot.on('message', message=>{  
   
   

   if(message.content.includes('selling')) {
      if (message.author.id === bot.user.id) return;
      message.channel.send('If you want to sell something, head over to <#675066848416628736>');
   }

  switch(message.content.toLowerCase()){

     
     case 'spawn':
      if (message.author.id === bot.user.id) return;
        message.channel.send('No spawn for you!')
        break;
     case 'miyu':
      if (message.author.id === bot.user.id) return;
        message.channel.send('Qtest of All!!')
        break;
     case 'lucifer':  
      if (message.author.id === bot.user.id) return;
        message.channel.send(`**All Hail The Ruler of HELL!** <:7274_INTSL_Hellmo:705062526202937454>  `)
        break;
     case 'says me':
      if (message.author.id === bot.user.id) return;
        message.channel.send('You who?')
        break;
     case 'die':
      if (message.author.id === bot.user.id) return;
        message.channel.send("Don't be offensive to others :)")  
        break;
     case 'nub':
      if (message.author.id === bot.user.id) return;
        message.channel.send("lol, says who")
        break;   
     case 'nou':
      if (message.author.id === bot.user.id) return;
        message.channel.send("yes u")
        break;    
     case 'rip':
      if (message.author.id === bot.user.id) return;
        message.channel.send("Amen.")
        break;
     case 'vik':
      if (message.author.id === bot.user.id) return;
      message.channel.send("Why u so gay?")
      break;  
     case 'gay':
      if (message.author.id === bot.user.id) return;
        message.channel.send("it's 2020!")    
        break;  
  }


   
   
      
      let args = message.content.substring(PREFIX.length).split(" ");
      
      if(message.content.substring(0, PREFIX.length) == PREFIX) 
      { 
      
       var n= args[1]
       switch(args[0]){

         case 'help':
            const help = new Discord.MessageEmbed()
              .setTitle('Dark Solgaléo Bot Commands')
         break;

         case 'poll':
            const pol = new Discord.MessageEmbed()
              .setColor(0xFFC300)
              .setTitle("Poll Creation")
              .setDescription("s!poll <poll topic>")
            
            if(!args[1]){
               message.channel.send(pol)
               break;
            }  
            let msgArgs = args.slice(1).join(" ");
              const poll = new Discord.MessageEmbed()
                 .setTitle('📊Dark Solgaléo Server Poll')
                 .setDescription(`📌**${msgArgs}**`)
                 .setFooter('Vote Honestly ;)')
                 .setColor(0xFFC300);
            message.channel.send(poll).then(messageReaction =>{
               messageReaction.react('👍');
               messageReaction.react('👎');
               message.delete(5000);
            })    
         break;

         case 'roll':
            if (!args[1]){
               file = [Math.floor(Math.random() * 7)]
               const rol = new Discord.MessageEmbed()
                 .setColor(0x6DB69B)
                 .addField('Rolled Number from 0 to 6:' , `***${file}***`);
               message.channel.send(rol)  
            }else if(args[1]>=6){
               file = [Math.floor(Math.random() * n)]
               const roll = new Discord.MessageEmbed()
                  .setColor(0x6DB69B)
                  .addField(`Rolled Number from 0 to ${n}:`, `***${file}***`);
               message.channel.send(roll)   
            }else if(n<6){
               const rolll = new Discord.MessageEmbed()
               .setColor(0xE81D1D)
               .setTitle('Wrong syntax!')
               .setDescription('Minimum Rolling number is 6');
               message.channel.send(rolll)

            }   

         break;   

               
            

         case 'toss':
         case 'coinflip':
           const toss = ['HEADS' , 'TAILS']
           file = toss[Math.floor(Math.random() * toss.length)]
           const tosss = new Discord.MessageEmbed()
             .setColor(0xE7373C)
             .addField("The official DS coin drops, It's:" ,`***${file}***!`)
            message.channel.send(tosss)
         break;     

         case 'ping':
           const pong = new Discord.MessageEmbed()
           
             .addField('P0ng!',`Ping is ${bot.ws.ping}ms`)
             .setColor(0x736496) 
          message.channel.send(pong)
         break;

         case 'pat':
            let pat2 = message.mentions.users.first();
            let pat1 = message.author;
            const rand_pat = ['https://media1.tenor.com/images/dce2241cab947a1eeefe0b4c8be4d2e0/tenor.gif?itemid=15930799' , 'https://media1.tenor.com/images/153e9bdd80008e8c0f94110450fcbf98/tenor.gif?itemid=10534102' , 'https://media1.tenor.com/images/61187dd8c7985c443bf9cd39bc310c02/tenor.gif?itemid=12018805' , 'https://media1.tenor.com/images/28f4f29de42f03f66fb17c5621e7bedf/tenor.gif?itemid=8659513' , 'https://media1.tenor.com/images/8331ba63516b37eb6987dcd45c4c0f66/tenor.gif?itemid=11780508' , 'https://media1.tenor.com/images/a36f0a746c5939603a202911c6b1b2b1/tenor.gif?itemid=16901828' ];
            file = rand_pat[Math.floor(Math.random() * rand_pat.length)]
               if(message.content === PREFIX + "pat"){
                  const patttt = new Discord.MessageEmbed()
                  .setColor(0x44E0CD)
                  .setTitle('Wrong Syntax')
                  .addField('Correct Syntax',PREFIX + 'pat @user')
                  .addField('Example',PREFIX+'pat @Lunala')
                  message.channel.send(patttt)
               
               }else if(pat2 !== message.author){
                  const patt = new Discord.MessageEmbed()  
                   .setTitle(`${pat1.username} gives a nice pat to ${pat2.username}`  )
                   .setColor(0x44E0CD) 
                   .setImage(file) 
                   message.channel.send(patt);                   
               
               }else if (pat2 == message.author){
                  const pattt = new Discord.MessageEmbed()
                    .setTitle(`Dark Solgaleo gives ${pat2.username} a big pat`)
                    .setColor(0x44E0CD) 
                    .setImage(file)  
                    message.channel.send(pattt);
               }        
         break;

         case 'punch':
            let punch2 = message.mentions.user.first();
            let punch1 = message.mentions.user.first();
            const rand_punch = ['https://media1.tenor.com/images/c621075def6ca41785ef4aaea20cc3a2/tenor.gif?itemid=7679409' , 'https://media1.tenor.com/images/3b09dfc9c38209d87426b5fb5cee794e/tenor.gif?itemid=12395640' , 'https://media1.tenor.com/images/5511a8309a1719987a27aa7b1ee7da04/tenor.gif?itemid=12303482' , 'https://media1.tenor.com/images/517f63ce5ffc6426bddd17d7413ebaca/tenor.gif?itemid=5247335' , 'https://media1.tenor.com/images/ee3f2a6939a68df9563a7374f131fd96/tenor.gif?itemid=14210784' , 'https://media1.tenor.com/images/31686440e805309d34e94219e4bedac1/tenor.gif?itemid=4790446' , 'https://media1.tenor.com/images/0d0afe2df6c9ff3499a81bf0dab1d27c/tenor.gif?itemid=15580060']
            file = rand_punch[Math.floor(Math.random() * rand_punch.length)]
              if(message.content === PREFIX + "punch"){
               const punch = new Discord.MessageEmbed()
               .setColor(0x942727)
               .setTitle("Wrong syntax")
               .addField('Correct syntax' ,PREFIX + 'punch @user')
               .addField('Example' ,PREFIX + 'punch @Lunala')
               message.channel.embed(punch)

            }else if(punch2 !== message.author){
               const punchh = new Discord.MessageEmbed()  
                .setTitle(`${punch1.username} punches ${punch2.username} real hard!`  )
                .setColor(0x942727) 
                .setImage(file) 
                message.channel.send(punchh);                   
            
            }else if (punch2 == message.author){
               const punchhh = new Discord.MessageEmbed()
                 .setTitle(`Dark Solgaleo punches ${punch2.username}...rip!`)
                 .setColor(0x942727) 
                 .setImage(file)  
                 message.channel.send(punchhh);
            }        
      break; 
         case 'stare':
            let stare2 = message.mentions.users.first();
            let stare1 = message.author;
            const rand_stare = ['https://media1.tenor.com/images/6db16173c29293e2c0f63db13601a85d/tenor.gif?itemid=15313333' , 'https://media1.tenor.com/images/ec2187a26ef99212ede5a4408c7bfc9d/tenor.gif?itemid=14577429' , 'https://media1.tenor.com/images/58adf5859001fe3f1586e87b5d86cebd/tenor.gif?itemid=7025500' , 'https://media1.tenor.com/images/da9ed668e256bc3853be34cf287b93a7/tenor.gif?itemid=15726453' , 'https://media1.tenor.com/images/93b8b8cc7b96978b69d627840b5866e4/tenor.gif?itemid=9885022' , 'https://media1.tenor.com/images/9d1f45f7e2dd8f1bf9fabaa184b3065c/tenor.gif?itemid=5929722' , 'https://media1.tenor.com/images/afd4282d996325f5da7be3c2c963df41/tenor.gif?itemid=4686978']
            file = rand_stare[Math.floor(Math.random() * rand_stare.length)]
               if(message.content === PREFIX + "stare"){
                  const stareeeee = new Discord.MessageEmbed()
                  .setColor(0xD2ECB2)
                  .setTitle('Wrong Syntax')
                  .addField('Correct Syntax',PREFIX + 'stare @user')
                  .addField('Example',PREFIX+'stare @Lunala')
                  message.channel.send(stareeeee)
               
               }else if(stare2 !== message.author){
                  const staree = new Discord.MessageEmbed()  
                   .setTitle(`${stare1.username} stares at ${stare2.username}`  )
                   .setColor(0xD2ECB2) 
                   .setImage(file) 
                   message.channel.send(staree);                   
               
               }else if (stare2 == message.author){
                  const stareeee = new Discord.MessageEmbed()
                    .setTitle(`Dark Solgaleo stares at ${stare2.username}`)
                    .setColor(0xD2ECB2) 
                    .setImage(file)  
                    message.channel.send(stareeee);
               }        
         break;

         case 'highfive':
            let highfive2 = message.mentions.users.first();
            let highfive1 = message.author;
            const rand_highfive = ['https://media1.tenor.com/images/16267f3a34efb42598bd822effaccd11/tenor.gif?itemid=14137081' , 'https://media1.tenor.com/images/d9789c904472970f6654633ac2b03aa1/tenor.gif?itemid=4746486' , 'https://media1.tenor.com/images/b714d7680f8b49d69b07bc2f1e052e72/tenor.gif?itemid=13400356' , 'https://media1.tenor.com/images/9730876547cb3939388cf79b8a641da9/tenor.gif?itemid=8073516' , 'https://media1.tenor.com/images/c3263b8196afc25ddc1d53a4224347cd/tenor.gif?itemid=9443275' , 'https://media1.tenor.com/images/0c23b320822afd5b1ce3faf01c2b9b69/tenor.gif?itemid=14137078' , 'https://media1.tenor.com/images/0c23b320822afd5b1ce3faf01c2b9b69/tenor.gif?itemid=14137078' , 'https://media1.tenor.com/images/e54ea154faa78f972a815f2d6f158413/tenor.gif?itemid=16227553']
            file = rand_highfive[Math.floor(Math.random() * rand_highfive.length)]
               if(message.content === PREFIX + "highfive"){
                  const hf = new Discord.MessageEmbed()
                  .setColor(0xB6CDF3)
                  .setTitle('Wrong Syntax')
                  .addField('Correct Syntax',PREFIX + 'highfive @user')
                  .addField('Example',PREFIX+'highfive @Lunala')
                  message.channel.send(hf)
               
               }else if(highfive2 !== message.author){
                  const hf1 = new Discord.MessageEmbed()  
                   .setTitle(`${highfive1.username} Highfives ${highfive2.username}!`  )
                   .setColor(0xB6CDF3) 
                   .setImage(file) 
                   message.channel.send(hf1);                   
               
               }else if (highfive2 == message.author){
                  const hf2 = new Discord.MessageEmbed()
                    .setTitle(`Dark Solgaleo highfives ${highfive2.username}!`)
                    .setColor(0xB6CDF3) 
                    .setImage(file)  
                    message.channel.send(hf2);
               }        
         break;

         case 'smile':
            let smilef = message.mentions.users.first();
            let smileq = message.author;
            const rand_smile = ['https://media1.tenor.com/images/ba7c28c45c0123e95fbdf0854cbc7861/tenor.gif?itemid=12869746' , 'https://media1.tenor.com/images/29b71255760361c5f6c40f089847b1ab/tenor.gif?itemid=7338963' , 'https://media1.tenor.com/images/d40f71dfc053af4995d48de258931f44/tenor.gif?itemid=7909470' , 'https://media1.tenor.com/images/8a549e6d7066bbc0aeb63d7c69a42c27/tenor.gif?itemid=4838963' , 'https://media1.tenor.com/images/bb0cbe662c9c7fb3bd59e75a7214475d/tenor.gif?itemid=4838964' , 'https://media1.tenor.com/images/c49dc9422aac61eebbf8ae9d42bb26b7/tenor.gif?itemid=15792815']
            file = rand_smile[Math.floor(Math.random() * rand_smile.length)]
               if(message.content === PREFIX + "smile"){
                  const smile = new Discord.MessageEmbed()
                  .setColor(0xDFE741)
                  .setTitle(`${smileq.username} is happy and Smiles!`)
                  .setImage(file)
                  message.channel.send(smile)
               
               }else if(smilef !== message.author){
                  const smilee = new Discord.MessageEmbed()  
                   .setTitle(`${smileq.username} smiles at ${smilef.username}!`  )
                   .setColor(0xDFE741) 
                   .setImage(file) 
                   message.channel.send(smilee);                   
               
               }else if (smilef == message.author){
                  const smileee = new Discord.MessageEmbed()
                    .setTitle(`Dark Solgaleo smiles at ${smilef.username}!creepy!`)
                    .setColor(0xDFE741) 
                    .setImage(file)  
                    message.channel.send(smileee);
               }        
         break;

         case 'handhold':
            let hh2 = message.mentions.users.first();
            let hh1 = message.author;
            const rand_handhold = ['https://media1.tenor.com/images/890c34d3b8a85bf1972c0a73dbd56ea8/tenor.gif?itemid=7384775' , 'https://media1.tenor.com/images/a341e4d663412d93ec242ec5e555b382/tenor.gif?itemid=14833997' , 'https://media1.tenor.com/images/d3c5561f3850d35ec5535dac4de2aa59/tenor.gif?itemid=5372737' , 'https://media1.tenor.com/images/741d9a13871d4b423280e24a56aa760f/tenor.gif?itemid=15128874' , 'https://media1.tenor.com/images/81863150cf5d1689ba75db403236c55b/tenor.gif?itemid=16325513' , 'https://media1.tenor.com/images/9efc80eed18bc75caa776eb9bca8ef88/tenor.gif?itemid=15064969' , 'https://media1.tenor.com/images/9e375f33e538a944072598ecca5c2ec3/tenor.gif?itemid=14709525']
            file = rand_handhold[Math.floor(Math.random() * rand_handhold.length)]
            if(message.content === PREFIX + "handhold"){
               const hhh = new Discord.MessageEmbed()
               .setColor(0xB77DF1)
               .setTitle('Wrong Syntax')
               .addField('Correct Syntax',PREFIX + 'handhold @user')
               .addField('Example',PREFIX+'handhold @Lunala')
               message.channel.send(hhh)
            
            }else if(hh2 !== message.author){
               const hh = new Discord.MessageEmbed()  
                .setTitle(`${hh1.username} holds ${hh2.username}`  )
                .setColor(0xB77DF1) 
                .setImage(file) 
                message.channel.send(hh);                   
            
            }else if (hh2 == message.author){
               const h = new Discord.MessageEmbed()
                 .setTitle(`Dark Solgaleo hold ${hh2.username}`)
                 .setColor(0xB77DF1) 
                 .setImage(file)  
                 message.channel.send(h);
            }        
         break;
         
         case 'lucifer':
            const luci = new Discord.MessageEmbed()
              .setColor(0xCE320F)
              .setTitle('Everyone is Lucifer ,so are YOU.')
              .setImage('https://media.discordapp.net/attachments/548969564432498688/704676371766575124/tenor.gif')
              message.channel.send(luci)
         break;     

        
         case 'hug':
            let hug2 = message.mentions.users.first();
            let hug1 = message.author;   
            const rand_hug = ['https://media1.tenor.com/images/4e9c3a6736d667bea00300721cff45ec/tenor.gif?itemid=14539121','https://media1.tenor.com/images/1f7b0ceb53e128a6d9f4d39cef074d93/tenor.gif?itemid=11098325' , 'https://media1.tenor.com/images/94989f6312726739893d41231942bb1b/tenor.gif?itemid=14106856' , 'https://media1.tenor.com/images/aeb42019b0409b98aed663f35b613828/tenor.gif?itemid=14108949' , 'https://media1.tenor.com/images/daffa3b7992a08767168614178cce7d6/tenor.gif?itemid=15249774' , 'https://media1.tenor.com/images/4db088cfc73a5ee19968fda53be6b446/tenor.gif?itemid=14637016' , 'https://media1.tenor.com/images/81f693db5e5265c9ae21052d55ab7b3d/tenor.gif?itemid=13576354' , 'https://media1.tenor.com/images/edea458dd2cbc76b17b7973a0c23685c/tenor.gif?itemid=13041472' , 'https://media1.tenor.com/images/79c461726e53ee8f9a5a36521f69d737/tenor.gif?itemid=13221416' , 'https://media1.tenor.com/images/059e93bd8a1ed2eef5d36f93442242d4/tenor.gif?itemid=4968922']
            file = rand_hug[Math.floor(Math.random() * rand_hug.length)]
            if(message.content === PREFIX + "hug"){
               const hugggg = new Discord.MessageEmbed()
               .setColor(0xEF46AD)
               .setTitle('Wrong Syntax')
               .addField('Correct Syntax',PREFIX + 'hug @user')
               .addField('Example',PREFIX+'hug @Lunala')
               message.channel.send(hugggg)
            
            }else if(hug2 !== message.author){
               const hugg = new Discord.MessageEmbed()  
                .setTitle(`${hug1.username} gives a big hug to ${hug2.username}`  )
                .setColor(0xEF46AD) 
                .setImage(file) 
                message.channel.send(hugg);                   
            
            }else if (hug2 == message.author){
               const huggg = new Discord.MessageEmbed()
                 .setTitle(`Dark Solgaleo gives ${hug2.username} a big hug`)
                 .setColor(0xEF46AD) 
                 .setImage(file)  
                 message.channel.send(huggg);
            }        
         break;

         case 'cry':
            const rand_cry = ['https://media1.tenor.com/images/4f22255d60f3f19edf9296992b4e3483/tenor.gif?itemid=4772697' , 'https://media1.tenor.com/images/7443eb36be27659fc4d3effbaa766db5/tenor.gif?itemid=11358249' , 'https://media1.tenor.com/images/d1529619add194c4275053d852a0bb79/tenor.gif?itemid=14120358' , 'https://media1.tenor.com/images/0436bfc9861b4b57ffffda82d3adad6e/tenor.gif?itemid=15550145' , 'https://media1.tenor.com/images/26e7564bfb4408f9f7ff9518d4f87308/tenor.gif?itemid=8199739' , 'https://media1.tenor.com/images/1a7ca63640bd266a8b88bf14d2babc8d/tenor.gif?itemid=13425110' , 'https://media1.tenor.com/images/1a7ca63640bd266a8b88bf14d2babc8d/tenor.gif?itemid=13425110' , 'https://media1.tenor.com/images/ecf674c5e0ed2fdf0260ade4fad2146f/tenor.gif?itemid=5580602' , 'https://media1.tenor.com/images/23b1cfca45f7551bf08c357e3e15cf78/tenor.gif?itemid=9772379']
            file = rand_cry[Math.floor(Math.random() * rand_cry.length)]
            if(message.content === PREFIX + "cry"){
            const cryy = new Discord.MessageEmbed()
              .setColor(0x5CBBE5)
              .setTitle(`Oh No! ${message.author.username} is crying...`)
              .setImage(file)
             message.channel.send(cryy)
            }
         break;
         case 'kiss':
            let kiss2 = message.mentions.users.first();
            let kiss1 = message.author;
            const rand_kiss = ['https://media1.tenor.com/images/2f23c53755a5c3494a7f54bbcf04d1cc/tenor.gif?itemid=13970544' , 'https://media1.tenor.com/images/558f63303a303abfdddaa71dc7b3d6ae/tenor.gif?itemid=12879850' , 'https://media1.tenor.com/images/3d56f6ef81e5c01241ff17c364b72529/tenor.gif?itemid=13843260' , 'https://media1.tenor.com/images/ea9a07318bd8400fbfbd658e9f5ecd5d/tenor.gif?itemid=12612515' , 'https://media1.tenor.com/images/4b5d5afd747fe053ed79317628aac106/tenor.gif?itemid=5649376' , 'https://media1.tenor.com/images/39bb47e07d20c180b55ec2fc24e315f3/tenor.gif?itemid=9985265' , 'https://media1.tenor.com/images/a02c53fd3985c5a6d94c32c775ae168d/tenor.gif?itemid=6158862' , 'https://media1.tenor.com/images/2d7b586b4cc799abcfb1922f13724d70/tenor.gif?itemid=12894882'] 
            file = rand_kiss[Math.floor(Math.random() * rand_kiss.length)]
            if(message.content === PREFIX + "kiss"){
               const kisssss = new Discord.MessageEmbed()
               .setColor(0xF55E5E )
               .setTitle('Wrong Syntax')
               .addField('Correct Syntax',PREFIX + 'kiss @user')
               .addField('Example',PREFIX+'kiss @Lunala')
               message.channel.send(kisssss)
            
            }else if(kiss2 !== message.author){
               const kisss = new Discord.MessageEmbed()  
                .setTitle(`oop! ${kiss1.username} kisses ${kiss2.username}`  )
                .setColor(0xF55E5E ) 
                .setImage(file) 
                message.channel.send(kisss);                   
            
            }else if (kiss2 == message.author){
               const kissss = new Discord.MessageEmbed()
                 .setTitle(`Dark Solgaleo gives ${kiss2.username} a kiss`)
                 .setColor(0xF55E5E) 
                 .setImage(file)  
                 message.channel.send(kissss);
            }        
            break;
           
   
            case 'prefix':
               const prefix = new Discord.MessageEmbed()
               .addField('Bot Prefix is:', PREFIX)
               .setColor(0x2DFE2D)
               message.channel.send(prefix); 
               break;
   
            case 'spawn':
                   message.channel.send('No Spawn for you!');
                   break;
   
            case 'avatar':
            case 'av': 
               let user = message.mentions.users.first();
               if(!user) user = message.author;
               const embed = new Discord.MessageEmbed()
                  .setAuthor(user.username)
                  .setColor(0xFEFB2D)
                  .setImage(user.avatarURL());
               message.channel.send(embed) 
            break;
   
            case 'burn':
               if(!args[1]) return message.reply('Please specify the number of messages to be burned by HELLFIRE!')
               message.channel.bulkDelete(args[1]+1);
               break;
           
            case 'info':
                 const info = new Discord.MessageEmbed()
                 .setTitle('Bot Info')
                 .addField('Bot Neme:', 'Dark Solgaléo')
                 .addField('version','1.0.1',true)
                 .addField('Bot Server', 'Dark Solgaléo',true)
                 .addField('Bot Owner:','LucifeR:star2:',true)
                 .setColor(0xFEFB2D)
                 .setThumbnail(bot.user.displayAvatarURL())
                 message.channel.send(info);
            break;        
              
        }
      }


})   



bot.login(token);


