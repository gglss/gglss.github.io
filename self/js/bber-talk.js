function saveData(e,t){localStorage.setItem(e,JSON.stringify({time:Date.now(),data:t}))}function loadData(e,t){let a=JSON.parse(localStorage.getItem(e));if(a){let e=Date.now()-a.time;if(-1<e&&e<6e4*t)return a.data}return 0}let talkTimer=null;function indexTalk(){if(talkTimer&&(clearInterval(talkTimer),talkTimer=null),!document.getElementById("bber-talk"))return;function e(e){let t="";e.forEach(((e,a)=>{t+=`<li class="item item-${a+1}">${e}</li>`}));let a=document.querySelector("#bber-talk .talk-list");a.innerHTML=t,talkTimer=setInterval((()=>{a.appendChild(a.children[0])}),3e3)}let t=loadData("talk",10);t?e(t):fetch("https://memos.gglss.top:1443/api/v1/memo?creatorId=1&tag=gglss&limit=30").then((e=>e.json())).then((t=>{e(t=function(e){let t=[];return e.forEach((e=>{t.push(e.content.replace(/#(.*?)\s/g,"").replace(/\{(.*?)\}/g,"").replace(/\!\[(.*?)\]\((.*?)\)/g,'<i class="fa-solid fa-image"></i>').replace(/\[(.*?)\]\((.*?)\)/g,'<i class="fa-solid fa-link"></i>'))})),t}(t)),saveData("talk",t)}))}indexTalk();