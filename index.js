const fetch = require("@replit/node-fetch");
require("dotenv").config();
console.log(process.env.key);
class User{
    constructor(username,password){
        console.log(username,password)
    }
}
new User("haru-ymth","aasdf");
(async()=>{
    const users = await (await fetch("https://thbot2.haru-ymth.repl.co/"+process.env.key)).json();
    
})()