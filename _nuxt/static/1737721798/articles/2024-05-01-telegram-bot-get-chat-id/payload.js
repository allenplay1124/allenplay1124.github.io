__NUXT_JSONP__("/articles/2024-05-01-telegram-bot-get-chat-id", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad){R.slug=A;R.title="程式設計";R.cover="\u002Fimages\u002Fcategories\u002Fprogram.png";R.sort=S;R.summary=T;R.toc=[];R.body={type:c,children:[{type:b,tag:e,props:{},children:[{type:a,value:T}]}]};R.dir=j;R.path="\u002Fcategories\u002Fprogram";R.extension=d;R.createdAt=s;R.updatedAt=s;U.slug=B;U.title="Telegram";U.toc=[];U.body={type:c,children:[]};U.dir=g;U.path="\u002Ftags\u002Ftelegram";U.extension=d;U.createdAt=t;U.updatedAt=t;V.slug=x;V.title=x;V.toc=[];V.body={type:c,children:[]};V.dir=g;V.path="\u002Ftags\u002Fphp";V.extension=d;V.createdAt=u;V.updatedAt=u;return {data:[{post:{slug:"2024-05-01-telegram-bot-get-chat-id",title:"如何取得 Telegram Bot 所有的 Chat ID",summary:"在開發 Telegram Bot 時,有時候我們需要獲取所有與 Bot 互動過的 Chat ID,無論是私人對話還是群組對話。取得這些 Chat ID 對於發送廣播消息或管理會話非常有用。本文將詳細介紹如何透過 Telegram Bot API 獲取所有的 Chat ID。",image:"\u002Fimages\u002Farticles\u002F2024-05-01-telegram-bot-get-chat-id\u002Fcover.png",status:true,pubDate:"2023-10-04T18:34:00.000Z",category:A,tags:[B,x],toc:[{id:C,depth:l,text:D},{id:E,depth:l,text:F},{id:G,depth:l,text:H},{id:I,depth:l,text:J},{id:K,depth:l,text:L}],body:{type:c,children:[{type:b,tag:m,props:{id:C},children:[{type:b,tag:h,props:{href:"#%E6%AD%A5%E9%A9%9F1-%E5%89%B5%E5%BB%BA-telegram-bot-%E4%B8%A6%E7%8D%B2%E5%8F%96-api-token",ariaHidden:n,tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:D}]},{type:a,value:f},{type:b,tag:e,props:{},children:[{type:a,value:"首先,我們需要透過 Telegram 的 @BotFather 創建一個新的 Bot,並獲取該 Bot 的 API Token。API Token 是一個類似於 \"123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11\" 的字串,用於向 Telegram 的 API 服務器進行身份驗證。"}]},{type:a,value:f},{type:b,tag:m,props:{id:E},children:[{type:b,tag:h,props:{href:"#%E6%AD%A5%E9%A9%9F2-%E4%BD%BF%E7%94%A8-getupdates-%E6%96%B9%E6%B3%95%E7%8D%B2%E5%8F%96%E6%9B%B4%E6%96%B0",ariaHidden:n,tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:F}]},{type:a,value:f},{type:b,tag:e,props:{},children:[{type:a,value:"接下來,我們可以在瀏覽器中訪問以下 URL,將 "},{type:b,tag:"token",props:{},children:[{type:a,value:" 替換為你的 API Token:"}]}]},{type:a,value:f},{type:b,tag:e,props:{},children:[{type:b,tag:y,props:{},children:[{type:a,value:"https:\u002F\u002Fapi.telegram.org\u002Fbot\u003Ctoken\u003E\u002FgetUpdates"}]}]},{type:a,value:f},{type:b,tag:e,props:{},children:[{type:a,value:"這將返回一個 JSON 格式的數據,包含了最近的更新。"}]},{type:a,value:f},{type:b,tag:m,props:{id:G},children:[{type:b,tag:h,props:{href:"#%E6%AD%A5%E9%A9%9F3-%E5%BE%9E%E6%9B%B4%E6%96%B0%E4%B8%AD%E6%8F%90%E5%8F%96-chat-id",ariaHidden:n,tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:H}]},{type:a,value:f},{type:b,tag:e,props:{},children:[{type:a,value:"在返回的 JSON 數據中,查找 \"result\" 數組。每個元素代表一個更新,其中包含 \"message\" 或 \"channel_post\" 對象。在這些對象中,可以找到 \"chat\" 對象,其 \"id\" 字段就是該會話的 Chat ID。\n對於私人會話,Chat ID 為正整數。對於群組,Chat ID 為負數,需要在前面加 \"-100\"。"}]},{type:a,value:f},{type:b,tag:m,props:{id:I},children:[{type:b,tag:h,props:{href:"#%E6%AD%A5%E9%A9%9F4-%E5%84%B2%E5%AD%98%E6%89%80%E6%9C%89-chat-id",ariaHidden:n,tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:J}]},{type:a,value:f},{type:b,tag:e,props:{},children:[{type:a,value:"遍歷所有更新的 \"chat\" 對象,獲取並儲存所有的 Chat ID。需要注意的是,"},{type:b,tag:y,props:{},children:[{type:a,value:"getUpdates"}]},{type:a,value:" 只能獲取最近的更新,如果要獲取所有的 Chat ID,可能需要多次調用該方法。"}]},{type:a,value:f},{type:b,tag:m,props:{id:K},children:[{type:b,tag:h,props:{href:"#%E5%9C%A8-php-%E8%AA%9E%E8%A8%80%E4%B8%AD%E5%A6%82%E4%BD%95%E5%BF%AB%E9%80%9F%E5%8F%96%E5%BE%97",ariaHidden:n,tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:L}]},{type:a,value:f},{type:b,tag:e,props:{},children:[{type:a,value:"可使用 "},{type:b,tag:h,props:{href:"https:\u002F\u002Fgithub.com\u002Fphp-telegram-bot\u002Fcore",rel:[M,N,O],target:P},children:[{type:a,value:"php-telegram-bot\u002Fcore"}]},{type:a,value:" 這個套件處理。"}]},{type:a,value:f},{type:b,tag:e,props:{},children:[{type:a,value:"透過 Webhook 方式，使用 "},{type:b,tag:y,props:{},children:[{type:a,value:"getupdates"}]},{type:a,value:" 函式來取得 chat id, 可參考 "},{type:b,tag:h,props:{href:"https:\u002F\u002Fgithub.com\u002Fphp-telegram-bot\u002Fcore?tab=readme-ov-file#getupdates-installation",rel:[M,N,O],target:P},children:[{type:a,value:"官方教學"}]}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002F2024-05-01-telegram-bot-get-chat-id",extension:d,createdAt:Q,updatedAt:Q,categoryData:R,tagsData:[U,V]},categories:[R,{slug:z,title:"軟體",cover:"\u002Fimages\u002Fcategories\u002Fsoftware.png",sort:S,summary:W,toc:[],body:{type:c,children:[{type:b,tag:e,props:{},children:[{type:a,value:W}]}]},dir:j,path:"\u002Fcategories\u002Fsoftware",extension:d,createdAt:s,updatedAt:i},{slug:"frontend",title:"前端",cover:"\u002Fimages\u002Fcategories\u002Ffront-end.png",sort:3,summary:X,toc:[],body:{type:c,children:[{type:b,tag:e,props:{},children:[{type:a,value:X}]}]},dir:j,path:"\u002Fcategories\u002Ffrontend",extension:d,createdAt:i,updatedAt:i},{slug:"database",title:"資料庫",cover:"\u002Fimages\u002Fcategories\u002Fdatabase.png",sort:4,summary:Y,toc:[],body:{type:c,children:[{type:b,tag:e,props:{},children:[{type:a,value:Y}]}]},dir:j,path:"\u002Fcategories\u002Fdatabase",extension:d,createdAt:i,updatedAt:i},{slug:Z,title:_,cover:"\u002Fimages\u002Fcategories\u002FAI-cover.png",sort:5,summary:$,toc:[],body:{type:c,children:[{type:b,tag:e,props:{},children:[{type:a,value:$}]}]},dir:j,path:"\u002Fcategories\u002Fai",extension:d,createdAt:i,updatedAt:i},{slug:aa,title:ab,cover:"\u002Fimages\u002Fcategories\u002Fsite.png",sort:99,summary:"關於本站的一些資訊",toc:[],body:{type:c,children:[]},dir:j,path:"\u002Fcategories\u002Fsite",extension:d,createdAt:s,updatedAt:s}],tags:[{slug:Z,title:_,toc:[],body:{type:c,children:[]},dir:g,path:"\u002Ftags\u002Fai",extension:d,createdAt:v,updatedAt:v},{slug:ac,title:ac,toc:[],body:{type:c,children:[]},dir:g,path:"\u002Ftags\u002Fcss",extension:d,createdAt:k,updatedAt:k},{slug:"docker",title:"Docker",toc:[],body:{type:c,children:[]},dir:g,path:"\u002Ftags\u002Fdocker",extension:d,createdAt:t,updatedAt:t},{slug:"go",title:"go語言",toc:[],body:{type:c,children:[]},dir:g,path:"\u002Ftags\u002Fgo",extension:d,createdAt:k,updatedAt:k},{slug:"javascript",title:"JavaScript",toc:[],body:{type:c,children:[]},dir:g,path:"\u002Ftags\u002Fjavascript",extension:d,createdAt:u,updatedAt:w},{slug:ad,title:ad,toc:[],body:{type:c,children:[]},dir:g,path:"\u002Ftags\u002Fhtml",extension:d,createdAt:v,updatedAt:v},{slug:"macos",title:"MacOS",toc:[],body:{type:c,children:[]},dir:g,path:"\u002Ftags\u002Fmacos",extension:d,createdAt:w,updatedAt:w},V,{slug:"postgresql",title:"Postgresql",toc:[],body:{type:c,children:[]},dir:g,path:"\u002Ftags\u002Fpostgresql",extension:d,createdAt:w,updatedAt:t},{slug:aa,title:ab,toc:[],body:{type:c,children:[]},dir:g,path:"\u002Ftags\u002Fsite",extension:d,createdAt:k,updatedAt:k},{slug:z,title:z,toc:[],body:{type:c,children:[]},dir:g,path:"\u002Ftags\u002Fsoftware",extension:d,createdAt:u,updatedAt:u},U],prev:{slug:"2024-06-07-ollama",title:"用 ollama 來玩免費開源語言模型",path:"\u002Farticles\u002F2024-06-07-ollama"},next:{slug:"2023-10-04-php-carbon",title:"【PHP】如何利用 nesbot\u002Fcarbon 處理日期和時間",path:"\u002Farticles\u002F2023-10-04-php-carbon"}}],fetch:{},mutations:void 0}}("text","element","root",".md","p","\n","\u002Ftags","a","2025-01-22T10:21:45.234Z","\u002Fcategories","2025-01-22T10:21:45.228Z",2,"h2","true",-1,"span","icon","icon-link","2025-01-22T10:21:45.233Z","2025-01-22T10:21:45.231Z","2025-01-22T10:21:45.229Z","2025-01-22T10:21:45.232Z","2025-01-22T10:21:45.230Z","php","code","software","program","telegram","步驟1-創建-telegram-bot-並獲取-api-token","步驟1: 創建 Telegram Bot 並獲取 API Token","步驟2-使用-getupdates-方法獲取更新","步驟2: 使用 getUpdates 方法獲取更新","步驟3-從更新中提取-chat-id","步驟3: 從更新中提取 Chat ID","步驟4-儲存所有-chat-id","步驟4: 儲存所有 Chat ID","在-php-語言中如何快速取得","在 PHP 語言中，如何快速取得","nofollow","noopener","noreferrer","_blank","2025-01-22T10:21:45.225Z",{},1,"分享各種程式設計的小技巧",{},{},"各種好用軟體分享","各種前端開發工具及開發技巧分享","各種資料庫系統，使用上的小技巧","ai","AI","各種AI技術及其應用","site","站務資訊","css","html")));