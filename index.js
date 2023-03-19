const fetch = require("@replit/node-fetch");
require("dotenv").config();
console.log(process.env.key);
(async()=>{
    const users = await (await fetch("https://thbot2.haru-ymth.repl.co/"+process.env.key)).json();
    for(let i=0;i<users.length;i++){
        (async()=>{
            
            console.log(users[i].username)
            let login = await fetch("https://scratch.mit.edu/accounts/login/",{
                    headers: {
                        "x-csrftoken": "a",
                        "x-requested-with": "XMLHttpRequest",
                        "Cookie": "scratchcsrftoken=a;",
                        "referer": "https://scratch.mit.edu",
                        "content-type": "application/json",
                        "user-agent": "",
                    },
                    method: "POST",
                    body:JSON.stringify({
                        username:users[i].username,
                        password:users[i].password,
                        useMessages:true
                    })
            });
            //console.log(login);
            const sid = login.headers.get("set-cookie").replace(/^scratchsessionsid="/,"").replace(/";[\s\S]+/,"");
            console.log(sid);
        })();
    }
})();
